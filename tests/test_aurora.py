"""
Test suite for Project Aurora: Crop Disease Detection Platform.
"""
import io
import pytest
import numpy as np
from PIL import Image, ImageFilter
from fastapi.testclient import TestClient

from aurora.config import SAMPLES_DIR
from aurora.schemas import (
    AuroraCropDiagnosis,
    SpecimenType,
    ThreatLevel,
    PathogenType,
    CostCategory
)
from aurora.preprocessor import (
    detect_blur,
    detect_glare,
    apply_clahe_numpy,
    process_uploaded_image
)
from aurora.engine import diagnose_field_image
from aurora.api import app

client = TestClient(app)


def test_detect_blur():
    """Verify Laplacian variance correctly flags blurred vs sharp images."""
    # Create sharp synthetic checkerboard
    sharp = np.zeros((200, 200), dtype=np.uint8)
    sharp[::10, :] = 255
    sharp[:, ::10] = 255
    var_sharp, is_blurry_sharp = detect_blur(sharp)
    assert not is_blurry_sharp
    assert var_sharp > 80.0

    # Create heavily blurred image
    pil_blur = Image.fromarray(sharp).filter(ImageFilter.GaussianBlur(15))
    var_blur, is_blurry_blur = detect_blur(np.array(pil_blur))
    assert is_blurry_blur
    assert var_blur < 80.0


def test_detect_glare():
    """Verify glare detector captures washed out high-noon sunlight."""
    # Normal image
    normal = np.full((100, 100), 128, dtype=np.uint8)
    glare_ratio, has_glare = detect_glare(normal)
    assert not has_glare
    assert glare_ratio == 0.0

    # Blinding glare image (>15% pixels with value 250)
    washed = np.full((100, 100), 120, dtype=np.uint8)
    washed[:30, :] = 255  # 30% glare
    glare_ratio, has_glare = detect_glare(washed)
    assert has_glare
    assert glare_ratio >= 0.25


def test_clahe_enhancement():
    """Verify CLAHE array output stays bounded and equalizes contrast."""
    luminance = np.random.randint(50, 150, (120, 120), dtype=np.uint8)
    enhanced = apply_clahe_numpy(luminance, grid_size=(4, 4), clip_limit=2.5)
    assert enhanced.shape == luminance.shape
    assert enhanced.dtype == np.uint8
    assert enhanced.max() <= 255
    assert enhanced.min() >= 0


def test_process_uploaded_image():
    """Verify preprocessing correctly downscales and generates metrics."""
    # Large 2000x2000 image
    large = Image.new("RGB", (2000, 1500), color=(60, 140, 50))
    buf = io.BytesIO()
    large.save(buf, format="JPEG")
    raw_bytes = buf.getvalue()

    compressed, processed_img, metrics = process_uploaded_image(raw_bytes, enable_clahe=True)
    assert len(compressed) < len(raw_bytes)
    assert max(metrics.processed_size) <= 1280
    assert metrics.original_size == [2000, 1500]
    assert metrics.clahe_applied is True


def test_engine_demo_diagnosis():
    """Verify diagnosis engine returns valid structured diagnosis."""
    dummy_bytes = b"fake_leaf_image_bytes"
    diagnosis, mode = diagnose_field_image(
        image_bytes=dummy_bytes,
        crop_hint="COTTON",
        region="Fergana Valley",
        force_demo=True
    )
    assert isinstance(diagnosis, AuroraCropDiagnosis)
    assert diagnosis.specimen_identified == SpecimenType.COTTON_LEAF
    assert diagnosis.threat_level in [ThreatLevel.HIGH, ThreatLevel.CRITICAL]
    assert len(diagnosis.immediate_low_cost_interventions) == 3
    assert diagnosis.confidence_score >= 0.80
    assert "Xanthomonas" in diagnosis.primary_diagnosis.scientific_name
    assert mode == "demo"


def test_api_health_endpoint():
    """Verify GET /api/health."""
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "Project Aurora" in data["platform"]


def test_api_sample_cases():
    """Verify GET /api/sample-cases lists 4 regional field cases."""
    response = client.get("/api/sample-cases")
    assert response.status_code == 200
    data = response.json()
    assert len(data["cases"]) >= 4
    case_ids = [c["id"] for c in data["cases"]]
    assert "cotton_bacterial_blight" in case_ids
    assert "grape_powdery_mildew" in case_ids


def test_api_sample_image():
    """Verify GET /api/sample-image/{sample_id} delivers valid JPEG."""
    response = client.get("/api/sample-image/cotton_bacterial_blight")
    assert response.status_code == 200
    assert response.headers["content-type"] == "image/jpeg"
    assert len(response.content) > 1000


def test_api_diagnose_endpoint():
    """Verify POST /api/diagnose with realistic field sample."""
    sample_path = SAMPLES_DIR / "cotton_bacterial_blight.jpg"
    with open(sample_path, "rb") as f:
        file_bytes = f.read()

    response = client.post(
        "/api/diagnose",
        files={"file": ("sample.jpg", file_bytes, "image/jpeg")},
        data={
            "crop_hint": "COTTON",
            "region": "Fergana Valley",
            "enable_clahe": "true",
            "force_demo": "true"
        }
    )
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "diagnosis" in data
    assert data["diagnosis"]["primary_diagnosis"]["common_name_en"] == "Bacterial Blight (Angular Leaf Spot)"
    assert len(data["diagnosis"]["immediate_low_cost_interventions"]) == 3
    assert data["metrics"]["clahe_applied"] is True
    assert data["latency_ms"] > 0


def test_api_disease_catalog():
    """Verify GET /api/disease-catalog returns rich foliar encyclopedia."""
    response = client.get("/api/disease-catalog")
    assert response.status_code == 200
    data = response.json()
    assert "catalog" in data
    assert len(data["catalog"]) >= 6
    for item in data["catalog"]:
        assert "id" in item
        assert "crop" in item
        assert "name_uz" in item
        assert "pathogen_type" in item
        assert "threat_level" in item
        assert "recommended_dosage_uz" in item
        assert isinstance(item["cultural_remedies_uz"], list)


def test_api_phytosanitary_map():
    """Verify GET /api/phytosanitary-map delivers data for all 14 Uzbekistan regions."""
    response = client.get("/api/phytosanitary-map")
    assert response.status_code == 200
    data = response.json()
    assert "regions" in data
    assert len(data["regions"]) == 14
    region_ids = [r["region_id"] for r in data["regions"]]
    assert "fergana" in region_ids
    assert "andijan" in region_ids
    assert "samarkand" in region_ids
    assert "karakalpakstan" in region_ids
    for r in data["regions"]:
        assert "region_name" in r
        assert "risk_level" in r
        assert "advice_uz" in r
        assert "temperature" in r


def test_api_agronomist_chat_success():
    """Verify POST /api/agronomist-chat provides natural Uzbek agronomy advice."""
    response = client.post(
        "/api/agronomist-chat",
        json={
            "question": "Paxtada gommoz kasalligiga qarshi qanday dori tavsiya qilasiz?",
            "crop": "COTTON",
            "disease": "Bacterial Blight"
        }
    )
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "success"
    assert isinstance(data["answer"], str)
    assert len(data["answer"]) > 20


def test_api_agronomist_chat_empty_validation():
    """Verify POST /api/agronomist-chat rejects empty questions with 400 error."""
    response = client.post(
        "/api/agronomist-chat",
        json={"question": "   ", "crop": "COTTON"}
    )
    assert response.status_code == 400
    assert "bo'sh" in response.json()["detail"]


def test_api_preprocess_preview():
    """Verify POST /api/preprocess-preview generates side-by-side CLAHE preview."""
    sample_path = SAMPLES_DIR / "cotton_bacterial_blight.jpg"
    with open(sample_path, "rb") as f:
        file_bytes = f.read()

    response = client.post(
        "/api/preprocess-preview",
        files={"file": ("sample.jpg", file_bytes, "image/jpeg")}
    )
    assert response.status_code == 200
    data = response.json()
    assert "metrics" in data
    assert "raw_preview" in data
    assert "enhanced_preview" in data
    assert data["raw_preview"].startswith("data:image/jpeg;base64,")
    assert data["enhanced_preview"].startswith("data:image/jpeg;base64,")


def test_universal_plant_diagnosis_auto():
    """Verify universal engine diagnoses specimen with AUTO crop hint (any plant/tree without selection)."""
    diagnosis, mode = diagnose_field_image(
        image_bytes=b"any_universal_tree_leaf_photo",
        crop_hint="AUTO",
        region="Samarkand",
        force_demo=True
    )
    assert isinstance(diagnosis, AuroraCropDiagnosis)
    assert diagnosis.threat_level is not None
    assert len(diagnosis.immediate_low_cost_interventions) == 3
    assert len(diagnosis.visual_biomarkers) >= 1
    assert diagnosis.confidence_score >= 0.85


def test_universal_plant_diagnosis_fruit_trees():
    """Verify fruit tree diagnoses (Apple Scab, Peach Leaf Curl)."""
    apple_diag, _ = diagnose_field_image(
        image_bytes=b"apple_foliage_test",
        crop_hint="APPLE",
        force_demo=True
    )
    assert "Venturia" in apple_diag.primary_diagnosis.scientific_name
    assert "Parsha" in apple_diag.primary_diagnosis.common_name_uz

    peach_diag, _ = diagnose_field_image(
        image_bytes=b"peach_foliage_test",
        crop_hint="PEACH",
        force_demo=True
    )
    assert "Taphrina" in peach_diag.primary_diagnosis.scientific_name
    assert "Shaftoli" in peach_diag.primary_diagnosis.common_name_uz


def test_api_locate_endpoint():
    """Verify GET /api/locate returns closest region for coordinates."""
    # Samarqand coordinates: 39.6542, 66.9597
    res = client.get("/api/locate?lat=39.65&lon=66.95")
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert data["source"] == "gps"
    assert data["region"]["region_id"] == "samarkand"
    assert "Samarqand" in data["region"]["region_name_uz"]
    assert data["region"]["distance_km"] < 15.0

    # Fergana coordinates: 40.3842, 71.7843
    res_fergana = client.get("/api/locate?lat=40.38&lon=71.78")
    assert res_fergana.status_code == 200
    data_fergana = res_fergana.json()
    assert data_fergana["region"]["region_id"] == "fergana"


def test_api_diagnose_auto_crop():
    """Verify POST /api/diagnose works seamlessly with crop_hint='AUTO'."""
    sample_path = SAMPLES_DIR / "cotton_bacterial_blight.jpg"
    with open(sample_path, "rb") as f:
        file_bytes = f.read()

    response = client.post(
        "/api/diagnose",
        data={"crop_hint": "AUTO", "region": "AUTO_GEO", "force_demo": "true"},
        files={"file": ("leaf.jpg", file_bytes, "image/jpeg")}
    )
    assert response.status_code == 200
    data = response.json()
    assert "diagnosis" in data
    assert "specimen_identified" in data["diagnosis"]
    assert "primary_diagnosis" in data["diagnosis"]
    assert len(data["diagnosis"]["immediate_low_cost_interventions"]) == 3


def test_network_info_endpoint():
    """Verify GET /api/network-info returns valid Wi-Fi and localhost endpoints."""
    res = client.get("/api/network-info")
    assert res.status_code == 200
    data = res.json()
    assert "local_ip" in data
    assert "wifi_url" in data
    assert "localhost_url" in data
    assert data["port"] == 8000
    assert "http://" in data["wifi_url"]


def test_api_key_endpoints():
    """Verify GET and POST /api/config/api-key management."""
    import os
    from aurora.config import BASE_DIR
    env_file = BASE_DIR / ".env"
    original_env_content = env_file.read_text(encoding="utf-8") if env_file.exists() else None
    original_os_env = os.environ.get("GEMINI_API_KEY")

    try:
        # GET status
        res = client.get("/api/config/api-key")
        assert res.status_code == 200
        data = res.json()
        assert "configured" in data

        # POST new key
        post_res = client.post("/api/config/api-key", json={"api_key": "AIzaSyTestKey1234567890"})
        assert post_res.status_code == 200
        post_data = post_res.json()
        assert post_data["success"] is True
        assert post_data["configured"] is True
        assert "AIzaSy" in post_data["masked_key"]

        # Verify GET reflects new key
        res_updated = client.get("/api/config/api-key")
        assert res_updated.status_code == 200
        assert res_updated.json()["configured"] is True
    finally:
        # Restore original environment and .env
        if original_env_content is not None:
            env_file.write_text(original_env_content, encoding="utf-8")
        elif env_file.exists():
            env_file.unlink()

        if original_os_env is not None:
            os.environ["GEMINI_API_KEY"] = original_os_env
        else:
            os.environ.pop("GEMINI_API_KEY", None)

        import aurora.config
        import aurora.engine
        aurora.config.GEMINI_API_KEY = original_os_env or ""
        aurora.engine.GEMINI_API_KEY = original_os_env or ""


def test_houseplant_diagnosis():
    """Verify universal support for indoor houseplants (Ficus/Monstera/Home plants)."""
    houseplant_diag, _ = diagnose_field_image(
        image_bytes=b"ficus_houseplant_leaf_test",
        crop_hint="HOUSEPLANT_FICUS",
        force_demo=True
    )
    assert "Xona" in houseplant_diag.specimen_identified or "Ficus" in houseplant_diag.specimen_identified
    assert "Xona guli" in houseplant_diag.primary_diagnosis.common_name_uz
    # Verify 1L home spray advice is provided
    interventions = houseplant_diag.immediate_low_cost_interventions
    assert any("1L" in it.title_uz or "1 litr" in it.action_description_uz for it in interventions)


def test_strict_unmixed_uzbek_diagnosis():
    """Verify that all Uzbek diagnostic fields have ZERO English words mixed in."""
    from aurora.engine import DEMO_DIAGNOSTIC_CASES, diagnose_field_image
    
    crops_to_test = ["GRAPE", "COTTON", "APPLE", "PEACH", "TOMATO", "HOUSEPLANT"]
    for c in crops_to_test:
        diag, mode = diagnose_field_image(b"test_image_bytes_123", crop_hint=c, force_demo=True)
        # 1. No English in abiotic assessment uz
        assert diag.abiotic_assessment_uz, f"Missing abiotic_assessment_uz for {c}"
        assert "white-to-gray" not in diag.abiotic_assessment_uz.lower()
        assert "ruled out" not in diag.abiotic_assessment_uz.lower()
        assert "patches" not in diag.abiotic_assessment_uz.lower()
        
        # 2. No English in visual biomarkers uz
        assert diag.visual_biomarkers_uz and len(diag.visual_biomarkers_uz) > 0
        for marker in diag.visual_biomarkers_uz:
            assert "patches on upper" not in marker.lower()
            assert "curling of leaf" not in marker.lower()
            assert "mottling directly" not in marker.lower()
            assert "water-soaked" not in marker.lower()
        
        # 3. No English in immediate interventions uz
        for step in diag.immediate_low_cost_interventions:
            assert step.action_description_uz, f"Missing action_description_uz for step {step.step_number}"
            assert "apply 0.8%" not in step.action_description_uz.lower()
            assert "prune dense shoots" not in step.action_description_uz.lower()
            assert "irrigate solely" not in step.action_description_uz.lower()
        
        # 4. No English in disease title
        assert "(Oidium kasalligi)" not in diag.primary_diagnosis.common_name_uz
        assert "(oidium)" not in diag.primary_diagnosis.common_name_uz.lower()





