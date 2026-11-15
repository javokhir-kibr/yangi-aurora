"""
FastAPI REST Application and Orchestration Gateway for Project Aurora.
"""
import os
import io
import time
import base64
from pathlib import Path
from typing import Optional, List
from pydantic import BaseModel
from fastapi import FastAPI, File, UploadFile, Form, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from PIL import Image

from aurora.config import (
    STATIC_DIR,
    SAMPLES_DIR,
    IMAGES_DIR,
    GEMINI_API_KEY,
    MODEL_NAME,
    PORT,
    SUPPORTED_REGIONS,
    SUPPORTED_CROPS
)
from aurora.schemas import (
    DiagnosticApiResponse,
    PreprocessingMetrics,
    AuroraCropDiagnosis,
    AgronomistChatRequest,
    ChatMessage
)
from aurora.preprocessor import process_uploaded_image, enhance_field_image
from aurora.engine import diagnose_field_image, DEMO_DIAGNOSTIC_CASES, consult_ai_agronomist
from aurora.agronomy_data import DISEASE_CATALOG, PHYTOSANITARY_MAP_DATA

app = FastAPI(
    title="Project Aurora: Crop Pathology Engine",
    description="Autonomous rapid crop disease diagnostic platform for Uzbekistan (Cotton & Grapes).",
    version="1.0.0"
)

# Enable CORS for mobile apps, PWAs, and local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def add_no_cache_headers(request, call_next):
    response = await call_next(request)
    if request.url.path.endswith((".js", ".css", ".html")) or request.url.path == "/":
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
    return response


@app.get("/api/network-info")
def get_network_info():
    """Returns local network (Wi-Fi) IP and URLs for mobile and LAN device access."""
    import socket
    local_ip = "127.0.0.1"
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
    except Exception:
        pass
    port = PORT
    return {
        "local_ip": local_ip,
        "port": port,
        "wifi_url": f"http://{local_ip}:{port}",
        "localhost_url": f"http://localhost:{port}"
    }


class ApiKeyRequest(BaseModel):
    api_key: str


@app.get("/api/config/api-key")
def get_api_key_status():
    """Checks whether Gemini API key is configured and active."""
    from aurora import config
    key = (os.getenv("GEMINI_API_KEY", "") or config.GEMINI_API_KEY or "").strip()
    configured = bool(key)
    masked = f"{key[:6]}...{key[-4:]}" if configured and len(key) > 10 else ("Faol" if configured else "")
    return {
        "configured": configured,
        "masked_key": masked,
        "model": config.MODEL_NAME
    }


@app.post("/api/config/api-key")
def set_api_key(req: ApiKeyRequest):
    """Saves Gemini API key to .env and activates it immediately in current session."""
    key = req.api_key.strip().strip("'\"")
    if not key:
        raise HTTPException(status_code=400, detail="API kalit bo'sh bo'lishi mumkin emas.")

    from aurora.config import BASE_DIR
    env_file = BASE_DIR / ".env"
    lines = []
    found = False
    if env_file.exists():
        with open(env_file, "r", encoding="utf-8") as f:
            for line in f:
                if line.strip().startswith("GEMINI_API_KEY="):
                    lines.append(f"GEMINI_API_KEY={key}\n")
                    found = True
                else:
                    lines.append(line)
    if not found:
        lines.append(f"GEMINI_API_KEY={key}\n")

    with open(env_file, "w", encoding="utf-8") as f:
        f.writelines(lines)

    os.environ["GEMINI_API_KEY"] = key
    import aurora.config
    aurora.config.GEMINI_API_KEY = key
    import aurora.engine
    aurora.engine.GEMINI_API_KEY = key

    return {
        "success": True,
        "message": "Gemini API kaliti saqlandi va faollashtirildi.",
        "configured": True,
        "masked_key": f"{key[:6]}...{key[-4:]}" if len(key) > 10 else "Faol"
    }


@app.get("/api/health")
async def health_check():
    """System health check and active configuration status."""
    from aurora import config
    current_key = (os.getenv("GEMINI_API_KEY", "") or config.GEMINI_API_KEY or "").strip()
    has_api_key = bool(current_key)
    return {
        "status": "healthy",
        "platform": "Project Aurora",
        "engine": config.MODEL_NAME,
        "gemini_api_key_configured": has_api_key,
        "mode": "live_ready" if has_api_key else "demo_ready",
        "supported_crops": SUPPORTED_CROPS,
        "supported_regions": SUPPORTED_REGIONS
    }


@app.get("/api/sample-cases")
async def list_sample_cases():
    """Returns available Uzbek agricultural test cases."""
    cases = [
        {
            "id": "cotton_bacterial_blight",
            "title_en": "Cotton Angular Leaf Spot (Bacterial Blight)",
            "title_uz": "G'oza gommozi (Burchakli bakterial dog'lanish)",
            "crop": "COTTON",
            "image_url": "/images/cotton_bacterial_blight.jpg",
            "expected_threat": "HIGH"
        },
        {
            "id": "cotton_verticillium_wilt",
            "title_en": "Cotton Verticillium Wilt (Tiger-stripe)",
            "title_uz": "G'oza vertitsillyoz vilti (So'lish)",
            "crop": "COTTON",
            "image_url": "/images/cotton_verticillium_wilt.jpg",
            "expected_threat": "CRITICAL"
        },
        {
            "id": "grape_powdery_mildew",
            "title_en": "Grapevine Powdery Mildew (Oidium)",
            "title_uz": "Uzum un shudringi",
            "crop": "GRAPE",
            "image_url": "/images/grape_powdery_mildew.jpg",
            "expected_threat": "CRITICAL"
        },
        {
            "id": "grape_downy_mildew",
            "title_en": "Grapevine Downy Mildew (Mildew)",
            "title_uz": "Uzum soxta un shudringi (Mildyu)",
            "crop": "GRAPE",
            "image_url": "/images/grape_downy_mildew.jpg",
            "expected_threat": "HIGH"
        },
        {
            "id": "cotton_spider_mite",
            "title_en": "Cotton Two-spotted Spider Mite",
            "title_uz": "G'oza o'rgimchakkanasi",
            "crop": "COTTON",
            "image_url": "/images/cotton_spider_mite.jpg",
            "expected_threat": "HIGH"
        },
        {
            "id": "grape_saline_scorch",
            "title_en": "Grape Soil Salinity & Heat Scorch",
            "title_uz": "Uzum barglarining sho'rlanishi va oftob urishi",
            "crop": "GRAPE",
            "image_url": "/images/grape_saline_scorch.jpg",
            "expected_threat": "MEDIUM"
        }
    ]
    return {"cases": cases}


@app.get("/api/sample-image/{sample_id}")
async def get_sample_image(sample_id: str):
    """Serves sample image files from images directory or fallback samples."""
    file_path = IMAGES_DIR / f"{sample_id}.jpg"
    if not file_path.exists():
        file_path = SAMPLES_DIR / f"{sample_id}.jpg"
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Sample image not found")
    return FileResponse(file_path, media_type="image/jpeg")


@app.get("/api/disease-catalog")
def get_disease_catalog():
    """Returns comprehensive foliar disease encyclopedia for Uzbekistan crops."""
    return {"catalog": DISEASE_CATALOG}


@app.get("/api/phytosanitary-map")
def get_phytosanitary_map(refresh: bool = False):
    """Returns live disease risk levels and synchronized real-time meteorological data for all 14 regions."""
    from aurora.weather import fetch_all_regions_weather
    
    live_weather = fetch_all_regions_weather(force_refresh=refresh)
    
    enriched_regions = []
    for item in PHYTOSANITARY_MAP_DATA:
        reg_copy = dict(item)
        rid = reg_copy.get("region_id", "")
        w = live_weather.get(rid)
        if w:
            reg_copy["temperature"] = w["temperature"]
            reg_copy["temperature_num"] = w["temperature_num"]
            reg_copy["humidity"] = w["humidity"]
            reg_copy["humidity_num"] = w["humidity_num"]
            reg_copy["wind_speed"] = w["wind_speed"]
            reg_copy["wind_num"] = w["wind_num"]
            reg_copy["condition_uz"] = w["condition_uz"]
            reg_copy["condition_en"] = w["condition_en"]
            reg_copy["weather_icon"] = w["icon"]
            reg_copy["spraying_advisory"] = w["spraying_advisory"]
            reg_copy["is_live_weather"] = w.get("is_live", True)
            reg_copy["fetched_at"] = w.get("fetched_at", "")
        enriched_regions.append(reg_copy)

    return {"regions": enriched_regions}


@app.get("/api/weather/live")
def get_live_weather(refresh: bool = False):
    """Returns real-time meteorological metrics for all 14 administrative zones."""
    from aurora.weather import fetch_all_regions_weather
    weather_data = fetch_all_regions_weather(force_refresh=refresh)
    return {"success": True, "weather": weather_data}


@app.get("/api/weather/{region_id}")
def get_single_region_weather(region_id: str):
    """Returns real-time weather and agro-spraying feasibility for a specific region."""
    from aurora.weather import get_region_weather
    weather_data = get_region_weather(region_id)
    return {"success": True, "weather": weather_data}


@app.get("/api/locate")
def locate_user_region(
    request: Request,
    lat: Optional[float] = None,
    lon: Optional[float] = None,
    region_id: Optional[str] = None
):
    """
    Automatically detects user's location via GPS coordinates, requested region, or IP
    and returns the closest agricultural territory in Uzbekistan.
    """
    from aurora.weather import auto_detect_location
    client_ip = request.headers.get("x-forwarded-for") or (request.client.host if request.client else None)
    if client_ip and "," in client_ip:
        client_ip = client_ip.split(",")[0].strip()
    return auto_detect_location(client_ip=client_ip, lat=lat, lon=lon, region_id=region_id)


@app.post("/api/agronomist-chat")
def chat_with_agronomist(req: AgronomistChatRequest):
    """
    Direct farmer consultation with Aurora AI Agronomist in natural Uzbek.
    Returns tailored cultural & chemical remediation steps.
    """
    if not req.question or not req.question.strip():
        raise HTTPException(status_code=400, detail="Savol matni bo'sh bo'lmasligi kerak.")

    history_list = None
    if req.history:
        history_list = [{"role": msg.role, "content": msg.content} for msg in req.history]

    advice = consult_ai_agronomist(
        question=req.question.strip(),
        crop_context=req.crop or "AUTO",
        disease_context=req.disease,
        region_context=req.region,
        lang=req.lang or "uz",
        history=history_list
    )
    return {"status": "success", "answer": advice}


@app.post("/api/preprocess-preview")
def preprocess_preview(
    file: UploadFile = File(...)
):
    """
    Returns side-by-side base64 images of the raw upload versus the CLAHE
    enhanced version, along with blur variance and solar glare ratios.
    """
    contents = file.file.read()
    raw_img = Image.open(io.BytesIO(contents)).convert("RGB")
    enhanced_img = enhance_field_image(raw_img)

    _, _, metrics = process_uploaded_image(contents, enable_clahe=True)

    # Encode raw preview
    buf_raw = io.BytesIO()
    raw_img.thumbnail((600, 600))
    raw_img.save(buf_raw, format="JPEG", quality=80)
    raw_b64 = base64.b64encode(buf_raw.getvalue()).decode("utf-8")

    # Encode enhanced preview
    buf_enh = io.BytesIO()
    enhanced_img.thumbnail((600, 600))
    enhanced_img.save(buf_enh, format="JPEG", quality=80)
    enh_b64 = base64.b64encode(buf_enh.getvalue()).decode("utf-8")

    return {
        "metrics": metrics,
        "raw_preview": f"data:image/jpeg;base64,{raw_b64}",
        "enhanced_preview": f"data:image/jpeg;base64,{enh_b64}"
    }


@app.post("/api/diagnose", response_model=DiagnosticApiResponse)
def run_diagnosis(
    file: UploadFile = File(...),
    crop_hint: str = Form("AUTO"),
    region: str = Form("Fergana Valley"),
    enable_clahe: bool = Form(True),
    force_demo: bool = Form(False)
):
    """
    Main diagnostic endpoint:
    Processes raw field image, applies CLAHE / blur checks, invokes Gemini API
    with strict JSON output schema, and returns actionable diagnosis.
    """
    start_time = time.perf_counter()

    try:
        raw_bytes = file.file.read()
        if not raw_bytes:
            raise HTTPException(status_code=400, detail="Uploaded file is empty.")

        # 1. Edge & Field Preprocessing
        processed_bytes, _, metrics = process_uploaded_image(
            raw_bytes,
            enable_clahe=enable_clahe
        )

        # 2. Vision & Diagnostic Engine (Gemini 3.8 Flash / Demomode)
        diagnosis, mode = diagnose_field_image(
            image_bytes=processed_bytes,
            crop_hint=crop_hint,
            region=region,
            force_demo=force_demo
        )

        latency = round((time.perf_counter() - start_time) * 1000.0, 1)

        return DiagnosticApiResponse(
            success=True,
            diagnosis=diagnosis,
            metrics=metrics,
            latency_ms=latency,
            mode=mode,
            crop_hint=crop_hint,
            region=region
        )

    except HTTPException:
        raise
    except Exception as exc:
        latency = round((time.perf_counter() - start_time) * 1000.0, 1)
        raise HTTPException(status_code=500, detail=f"Diagnostic error: {str(exc)}")


# Mount images directory (logo & foliar pathology specimens)
if IMAGES_DIR.exists():
    app.mount("/images", StaticFiles(directory=IMAGES_DIR), name="images")

# Mount static web app
if STATIC_DIR.exists():
    app.mount("/", StaticFiles(directory=STATIC_DIR, html=True), name="static")
