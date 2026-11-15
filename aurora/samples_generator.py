"""
Generates high-fidelity sample leaf images representing typical Uzbek crop pathology.
"""
import os
import math
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SAMPLES_DIR = Path(__file__).resolve().parent / "samples"
SAMPLES_DIR.mkdir(parents=True, exist_ok=True)


def generate_cotton_bacterial_blight() -> Image.Image:
    """Creates a synthetic cotton leaf with angular, water-soaked brown lesions."""
    w, h = 800, 800
    # Background: dry sandy/loam soil
    soil = np.random.randint(140, 180, (h, w, 3), dtype=np.uint8)
    soil[:, :, 0] += 25  # warm brown tint
    soil[:, :, 2] -= 15
    img = Image.fromarray(soil).filter(ImageFilter.GaussianBlur(3))
    draw = ImageDraw.Draw(img)

    # 3-lobed cotton leaf outline
    leaf_pts = [
        (400, 720), (380, 600), (280, 560), (180, 480), (150, 360),
        (230, 320), (280, 260), (350, 220), (400, 100), (450, 220),
        (520, 260), (570, 320), (650, 360), (620, 480), (520, 560),
        (420, 600), (400, 720)
    ]
    draw.polygon(leaf_pts, fill=(54, 115, 45), outline=(35, 80, 28))

    # Leaf veins
    vein_color = (80, 155, 60)
    draw.line([(400, 680), (400, 110)], fill=vein_color, width=4)
    draw.line([(400, 500), (230, 320)], fill=vein_color, width=3)
    draw.line([(400, 500), (570, 320)], fill=vein_color, width=3)
    draw.line([(400, 350), (280, 260)], fill=vein_color, width=2)
    draw.line([(400, 350), (520, 260)], fill=vein_color, width=2)

    # Angular Bacterial Blight lesions (angular dark brown spots bounded by veins)
    lesions = [
        [(360, 320), (390, 310), (385, 340), (355, 350)],
        [(420, 280), (450, 270), (445, 305), (415, 310)],
        [(410, 380), (440, 370), (435, 410), (405, 415)],
        [(320, 390), (350, 380), (345, 420), (315, 425)],
        [(460, 340), (490, 335), (480, 370), (455, 375)],
        [(290, 340), (320, 330), (315, 365), (285, 370)],
        [(380, 220), (410, 210), (405, 250), (375, 255)]
    ]
    for poly in lesions:
        # Greasy halo
        halo = [(x + np.random.randint(-4, 4), y + np.random.randint(-4, 4)) for x, y in poly]
        draw.polygon(halo, fill=(150, 140, 30))
        draw.polygon(poly, fill=(75, 30, 18), outline=(45, 18, 10))

    return img


def generate_grape_powdery_mildew() -> Image.Image:
    """Creates a synthetic grape leaf with white-gray powdery patches (Oidium)."""
    w, h = 800, 800
    # Vineyard background (greenish shadow)
    bg = np.full((h, w, 3), (90, 110, 75), dtype=np.uint8)
    img = Image.fromarray(bg)
    draw = ImageDraw.Draw(img)

    # Palmate 5-lobed grape leaf
    pts = [
        (400, 700), (370, 620), (250, 600), (180, 500), (160, 380),
        (230, 340), (220, 220), (320, 220), (350, 140), (400, 110),
        (450, 140), (480, 220), (580, 220), (570, 340), (640, 380),
        (620, 500), (550, 600), (430, 620), (400, 700)
    ]
    draw.polygon(pts, fill=(62, 130, 50), outline=(40, 95, 30))

    # Palmate main veins radiating from petiole
    vein_color = (95, 165, 75)
    for target in [(400, 110), (220, 220), (580, 220), (160, 380), (640, 380)]:
        draw.line([(400, 670), target], fill=vein_color, width=4)

    # White powdery mildew patches (soft blurred white/ash-gray circles)
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    o_draw = ImageDraw.Draw(overlay)
    patches = [
        (380, 260, 60), (460, 310, 75), (320, 340, 50), (400, 420, 90),
        (490, 430, 55), (270, 420, 65), (370, 510, 70)
    ]
    for px, py, r in patches:
        # Yellow chlorotic ring beneath mycelium
        o_draw.ellipse([px - r - 15, py - r - 15, px + r + 15, py + r + 15], fill=(210, 200, 70, 110))
        # Powdery white center
        o_draw.ellipse([px - r, py - r, px + r, py + r], fill=(235, 240, 245, 210))

    overlay = overlay.filter(ImageFilter.GaussianBlur(12))
    img.paste(overlay, (0, 0), overlay)
    return img


def generate_cotton_verticillium_wilt() -> Image.Image:
    """Creates a synthetic cotton leaf exhibiting tiger-stripe interveinal chlorosis."""
    w, h = 800, 800
    bg = np.full((h, w, 3), (165, 150, 125), dtype=np.uint8)
    img = Image.fromarray(bg)
    draw = ImageDraw.Draw(img)

    leaf_pts = [
        (400, 720), (380, 600), (280, 560), (180, 480), (150, 360),
        (230, 320), (280, 260), (350, 220), (400, 100), (450, 220),
        (520, 260), (570, 320), (650, 360), (620, 480), (520, 560),
        (420, 600), (400, 720)
    ]
    draw.polygon(leaf_pts, fill=(70, 125, 50), outline=(45, 90, 30))

    # Tiger stripe interveinal necrosis bands
    stripes = [
        [(340, 240), (380, 260), (370, 300), (310, 270)],
        [(460, 240), (420, 260), (430, 300), (490, 270)],
        [(250, 350), (330, 360), (320, 410), (230, 390)],
        [(550, 350), (470, 360), (480, 410), (570, 390)],
        [(300, 450), (380, 460), (360, 510), (280, 490)],
        [(500, 450), (420, 460), (440, 510), (520, 490)]
    ]
    for s in stripes:
        # Yellow chlorosis border
        draw.polygon(s, fill=(205, 175, 40))
        # Necrotic brown center
        center = [(int(x * 0.95 + 400 * 0.05), int(y * 0.95 + 400 * 0.05)) for x, y in s]
        draw.polygon(center, fill=(105, 50, 20))

    # Veins stay greenish
    vein_color = (60, 140, 45)
    draw.line([(400, 680), (400, 110)], fill=vein_color, width=4)
    draw.line([(400, 500), (230, 320)], fill=vein_color, width=3)
    draw.line([(400, 500), (570, 320)], fill=vein_color, width=3)

    return img


def generate_grape_saline_scorch() -> Image.Image:
    """Creates a synthetic grape leaf showing marginal perimeter scorch from salinity/heat."""
    w, h = 800, 800
    bg = np.full((h, w, 3), (170, 160, 135), dtype=np.uint8)
    img = Image.fromarray(bg)
    draw = ImageDraw.Draw(img)

    # Base grape leaf points
    pts = [
        (400, 700), (370, 620), (250, 600), (180, 500), (160, 380),
        (230, 340), (220, 220), (320, 220), (350, 140), (400, 110),
        (450, 140), (480, 220), (580, 220), (570, 340), (640, 380),
        (620, 500), (550, 600), (430, 620), (400, 700)
    ]
    # Outer scorched perimeter
    draw.polygon(pts, fill=(90, 45, 20), outline=(60, 30, 12))

    # Yellow transition zone
    inner_pts_yellow = [
        (int(x * 0.92 + 400 * 0.08), int(y * 0.92 + 400 * 0.08)) for x, y in pts
    ]
    draw.polygon(inner_pts_yellow, fill=(200, 185, 45))

    # Healthy green center
    inner_pts_green = [
        (int(x * 0.84 + 400 * 0.16), int(y * 0.84 + 400 * 0.16)) for x, y in pts
    ]
    draw.polygon(inner_pts_green, fill=(65, 135, 52))

    # Main veins
    vein_color = (95, 170, 75)
    for target in [(400, 150), (250, 250), (550, 250), (200, 390), (600, 390)]:
        draw.line([(400, 650), target], fill=vein_color, width=3)

    return img


def build_sample_assets():
    """Generates and writes all sample images to disk."""
    samples = [
        ("cotton_bacterial_blight.jpg", generate_cotton_bacterial_blight()),
        ("grape_powdery_mildew.jpg", generate_grape_powdery_mildew()),
        ("cotton_verticillium_wilt.jpg", generate_cotton_verticillium_wilt()),
        ("grape_saline_scorch.jpg", generate_grape_saline_scorch()),
    ]
    for filename, image in samples:
        path = SAMPLES_DIR / filename
        image.save(path, format="JPEG", quality=90)
        print(f"Generated sample: {path}")


if __name__ == "__main__":
    build_sample_assets()
