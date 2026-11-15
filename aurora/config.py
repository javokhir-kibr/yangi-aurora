"""
Configuration module for Project Aurora.
"""
import os
from pathlib import Path

# Base directories
BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = BASE_DIR / "static"
SAMPLES_DIR = BASE_DIR / "aurora" / "samples"
IMAGES_DIR = BASE_DIR / "images"

# Load .env if present
ENV_FILE = BASE_DIR / ".env"
if ENV_FILE.exists():
    with open(ENV_FILE, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                k_clean = k.strip()
                v_clean = v.strip().strip("'\"")
                if v_clean:
                    os.environ[k_clean] = v_clean

# Gemini API configuration
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
MODEL_NAME = os.getenv("AURORA_GEMINI_MODEL", "gemini-3.1-flash-lite")
TEMPERATURE = float(os.getenv("AURORA_TEMPERATURE", "0.10"))

# Server & Deployment configuration
PORT = int(os.getenv("PORT", "8000"))
HOST = os.getenv("HOST", "0.0.0.0")

# Field image processing thresholds
MAX_IMAGE_DIMENSION = int(os.getenv("MAX_IMAGE_DIMENSION", "1280"))
WEBP_QUALITY = int(os.getenv("WEBP_QUALITY", "85"))
BLUR_THRESHOLD = float(os.getenv("BLUR_THRESHOLD", "80.0"))  # Laplacian variance
GLARE_PIXEL_THRESHOLD = int(os.getenv("GLARE_PIXEL_THRESHOLD", "245"))
GLARE_AREA_RATIO_THRESHOLD = float(os.getenv("GLARE_AREA_RATIO_THRESHOLD", "0.15"))

# Uzbekistan All 14 Administrative & Agricultural Regions
SUPPORTED_REGIONS = [
    {"id": "andijan", "name_uz": "Andijon viloyati", "name_en": "Andijan Region", "coords": "40.7821° N, 72.3442° E"},
    {"id": "fergana", "name_uz": "Farg'ona viloyati", "name_en": "Fergana Region", "coords": "40.3842° N, 71.7843° E"},
    {"id": "namangan", "name_uz": "Namangan viloyati", "name_en": "Namangan Region", "coords": "40.9983° N, 71.6726° E"},
    {"id": "tashkent_region", "name_uz": "Toshkent viloyati", "name_en": "Tashkent Region", "coords": "41.2213° N, 69.8597° E"},
    {"id": "tashkent_city", "name_uz": "Toshkent shahri (Agro-voha)", "name_en": "Tashkent City (Suburban)", "coords": "41.3111° N, 69.2797° E"},
    {"id": "samarkand", "name_uz": "Samarqand viloyati", "name_en": "Samarkand Region", "coords": "39.6542° N, 66.9597° E"},
    {"id": "bukhara", "name_uz": "Buxoro viloyati", "name_en": "Bukhara Region", "coords": "39.7681° N, 64.4556° E"},
    {"id": "navoiy", "name_uz": "Navoiy viloyati", "name_en": "Navoi Region", "coords": "40.0844° N, 65.3792° E"},
    {"id": "jizzakh", "name_uz": "Jizzax viloyati", "name_en": "Jizzakh Region", "coords": "40.1158° N, 67.8422° E"},
    {"id": "sirdaryo", "name_uz": "Sirdaryo viloyati", "name_en": "Syrdarya Region", "coords": "40.5011° N, 68.7842° E"},
    {"id": "kashkadarya", "name_uz": "Qashqadaryo viloyati", "name_en": "Kashkadarya Region", "coords": "38.8606° N, 65.7891° E"},
    {"id": "surkhandarya", "name_uz": "Surxondaryo viloyati", "name_en": "Surkhandarya Region", "coords": "37.9409° N, 67.5709° E"},
    {"id": "khorezm", "name_uz": "Xorazm viloyati", "name_en": "Khorezm Region", "coords": "41.5562° N, 60.6313° E"},
    {"id": "karakalpakstan", "name_uz": "Qoraqalpog'iston Respublikasi", "name_en": "Republic of Karakalpakstan", "coords": "43.7683° N, 59.0214° E"}
]

SUPPORTED_CROPS = [
    {"code": "AUTO", "name_en": "Universal (All Plants & Trees — Auto Detect)", "name_uz": "Barcha o'simlik va daraxtlar (Avtomatik aniqlash)"},
    {"code": "FRUIT_TREE", "name_en": "Fruit Trees (Apple, Peach, Apricot, Cherry, Walnut)", "name_uz": "Mevali daraxtlar (Olma, shaftoli, o'rik, gilos, anor)"},
    {"code": "GRAPE", "name_en": "Vineyards & Grapes (Vitis)", "name_uz": "Uzum / Tokzor (Vitis vinifera)"},
    {"code": "COTTON", "name_en": "Cotton (Gossypium)", "name_uz": "Paxta / G'oza (Gossypium)"},
    {"code": "VEGETABLE", "name_en": "Vegetables & Melons (Tomato, Cucumber, Potato)", "name_uz": "Sabzavot va poliz (Pomidor, bodring, kartoshka)"},
    {"code": "TREES", "name_en": "Forest & Ornamental Trees (Pine, Poplar, Mulberry)", "name_uz": "Manzarali va o'rmon daraxtlari (Archa, terak, tut)"}
]
