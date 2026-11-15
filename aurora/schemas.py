"""
Pydantic data models and schemas for Project Aurora.
"""
from enum import Enum
from typing import List, Optional
from pydantic import BaseModel, Field


class SpecimenType(str, Enum):
    COTTON_LEAF = "COTTON_LEAF"
    GRAPE_LEAF = "GRAPE_LEAF"
    APPLE_LEAF = "APPLE_LEAF"
    PEACH_LEAF = "PEACH_LEAF"
    TOMATO_LEAF = "TOMATO_LEAF"
    FRUIT_TREE = "FRUIT_TREE"
    UNIVERSAL_PLANT = "UNIVERSAL_PLANT"
    OTHER_PLANT = "OTHER_PLANT"
    NON_VEGETATION = "NON_VEGETATION"


class ImageIntegrity(str, Enum):
    CLEAR_DIAGNOSTIC_QUALITY = "CLEAR_DIAGNOSTIC_QUALITY"
    EXCESSIVE_GLARE = "EXCESSIVE_GLARE"
    PARTIALLY_BLURRED = "PARTIALLY_BLURRED"
    SOIL_DOMINATED_BACKGROUND = "SOIL_DOMINATED_BACKGROUND"
    INSUFFICIENT_DETAIL = "INSUFFICIENT_DETAIL"


class PathogenType(str, Enum):
    BACTERIAL = "BACTERIAL"
    FUNGAL = "FUNGAL"
    VIRAL = "VIRAL"
    PEST_DAMAGE = "PEST_DAMAGE"
    ABIOTIC_STRESS = "ABIOTIC_STRESS"
    HEALTHY = "HEALTHY"


class ThreatLevel(str, Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class CostCategory(str, Enum):
    ZERO_COST = "ZERO_COST"
    LOW_COST_LOCAL_REMEDY = "LOW_COST_LOCAL_REMEDY"
    STANDARD_FUNGICIDE_BACTERICIDE = "STANDARD_FUNGICIDE_BACTERICIDE"


class PrimaryDiagnosis(BaseModel):
    scientific_name: str = Field(description="Scientific Latin classification of pathogen or physiological disorder")
    common_name_en: str = Field(description="Standard English agricultural common name")
    common_name_uz: str = Field(description="Uzbek language common name widely recognized by local dehqons")
    pathogen_type: PathogenType = Field(description="Broad category of disease or stress")


class LowCostIntervention(BaseModel):
    step_number: int = Field(ge=1, le=3, description="Ordinal priority sequence (1 to 3)")
    title_uz: str = Field(description="Actionable title in pure Uzbek Latin script without English words")
    title_en: str = Field(description="Actionable title in English")
    action_description: str = Field(description="Clear, low-cost practical instruction in English")
    action_description_uz: Optional[str] = Field(default="", description="Clear, low-cost practical instruction in pure Uzbek Latin with ZERO English words")
    cost_category: CostCategory = Field(description="Economic burden tier of this intervention")


class AuroraCropDiagnosis(BaseModel):
    specimen_identified: str = Field(default="PLANT_SPECIMEN", description="Identified plant host, tree species, or botanical classification")
    image_integrity_status: ImageIntegrity = Field(description="Quality assessment of field photography")
    primary_diagnosis: PrimaryDiagnosis = Field(description="Detailed disease or health status classification")
    threat_level: ThreatLevel = Field(description="Urgency tier based on pathogen virulence and infection extent")
    confidence_score: float = Field(ge=0.0, le=1.0, description="Confidence certainty score between 0.0 and 1.0")
    abiotic_vs_biotic_assessment: str = Field(description="Reasoning separating environmental/salinity/heat factors from fungal/bacterial vectors in English")
    abiotic_assessment_uz: Optional[str] = Field(default="", description="Reasoning in fluent pure Uzbek Latin with ZERO English words")
    visual_biomarkers: List[str] = Field(description="Specific physical symptoms observed on the leaf surface in English")
    visual_biomarkers_uz: Optional[List[str]] = Field(default_factory=list, description="Specific physical symptoms in pure Uzbek Latin with ZERO English words")
    immediate_low_cost_interventions: List[LowCostIntervention] = Field(
        min_length=3, max_length=3,
        description="Exactly 3 localized, immediate, low-cost intervention steps"
    )
    farmer_advisory_uzbek: str = Field(description="Compassionate, plain-language 2-sentence summary in pure Uzbek Latin with ZERO English words")
    farmer_advisory_english: Optional[str] = Field(default=None, description="Compassionate, plain-language 2-sentence summary in English")
    differential_diagnosis: str = Field(description="Secondary possible diagnosis or lookalike condition in English")
    differential_diagnosis_uz: Optional[str] = Field(default="", description="Secondary possible diagnosis in pure Uzbek Latin with ZERO English words")


class PreprocessingMetrics(BaseModel):
    blur_score: float = Field(description="Laplacian variance sharpness score")
    is_blurry: bool = Field(description="True if blur score is below threshold")
    glare_ratio: float = Field(description="Percentage of pixels in over-exposed/glare condition")
    has_excessive_glare: bool = Field(description="True if glare ratio exceeds threshold")
    original_size: List[int] = Field(description="Original width, height")
    processed_size: List[int] = Field(description="Processed width, height")
    clahe_applied: bool = Field(default=True, description="Whether CLAHE histogram equalization was applied")


class DiagnosticApiResponse(BaseModel):
    success: bool = True
    diagnosis: AuroraCropDiagnosis
    metrics: PreprocessingMetrics
    latency_ms: float
    mode: str = Field(description="'live' if generated via Gemini API, or 'demo' if synthetic fallback")
    crop_hint: Optional[str] = None
    region: Optional[str] = None


class ChatMessage(BaseModel):
    role: str = Field(description="'user' or 'assistant'")
    content: str = Field(description="Message text content")


class AgronomistChatRequest(BaseModel):
    question: str
    crop: Optional[str] = "AUTO"
    disease: Optional[str] = None
    region: Optional[str] = None
    lang: Optional[str] = "uz"
    history: Optional[List[ChatMessage]] = None
