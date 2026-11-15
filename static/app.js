/**
 * AURORA CLIENT ENGINE — 5-PAGE AGRITECH SUITE ($10M DESIGN)
 * Tabs:
 * 1. AI Diagnostika (Foliar Scanner & HUD)
 * 2. AI Dala Agronomi (Live Consultation Chat)
 * 3. Kasalliklar Ensiklopediyasi (Catalog & Calendars)
 * 4. Fitomonitoring Xaritasi (14 Regions & Climate Alerts)
 * 5. Tahlillar Tarixi & Dalolatnoma (Audit History & PDF Print)
 */

// I18N DICTIONARY
const I18N = {
  uz: {
    subtitle: "Xona gullari, hovli bog'i va dehqonchilik uchun universal sun'iy intellekt",
    navSections: "BO'LIMLAR",
    tabScanner: "Diagnostika",
    tabScannerSub: "Barg tahlili",
    tabAgronomist: "Dala & Bog'bon",
    tabAgronomistSub: "Agro-maslahat chat",
    tabCatalog: "Kasalliklar Katalogi",
    tabCatalogSub: "Ekin kasalliklari bazasi",
    tabMonitoring: "Fitoxarita",
    tabMonitoringSub: "14 viloyat monitoringi",
    tabHistory: "Tarix & Hisobot",
    tabHistorySub: "Tahlillar arxivi",
    themeBtn: "Mavzu",
    wifiSub: "Telefon, planshet yoki noutbukda ochish:",
    cropLabel: "O'simlik yoki daraxt turi:",
    cropAutoMain: "100% Avtomatik aniqlash",
    cropAutoHint: "Xona gullari, mevali daraxtlar, tok, paxta, sabzavotlar so'roqsiz avtomatik aniqlanadi",
    cropAuto: "🌱 Barcha o'simlik va daraxtlar (Avtomatik)",
    cropFruitTree: "🍎 Mevali daraxtlar (Olma, shaftoli, o'rik, gilos, anor)",
    cropGrape: "🍇 Uzum va tokzorlar",
    cropCotton: "🌿 Paxta va g'oza",
    cropVegetable: "🍅 Sabzavot va poliz ekinlari",
    cropTrees: "🌲 Manzarali va o'rmon daraxtlari",
    regionLabel: "Agro-hudud va iqlim:",
    regionAuto: "📍 Avtomatik aniqlash (GPS)",
    samplesHeading: "Namunaviy kasalliklarni tezkor tekshirish:",
    samplesHint: "Bitta bosishda tezkor tahlil",
    dropzonePrompt: "Barg yoki gul fotosuratini oling yoki yuklang",
    dropzoneSub: "Xona guli, mevali daraxt, tomorqa yoki ixtiyoriy o'simlik bargini yuklang (avtomatik aniqlanadi)",
    btnCapture: "Rasm yuklash yoki suratga olish",
    claheLabel: "Quyosh nuri va qattiq soyaning ta'sirini to'g'rilash (Yorug'lik filtri)",
    btnCompare: "Filtr taqqoslash",
    btnDiagnose: "Bargni tahlil qilish",
    threatLevel: "BIOLOGIK XAVF DARAJASI:",
    confidence: "ISHONCH KO'RSATKICHI:",
    advisoryTitle: "O'simlik bo'yicha mutaxassis xulosasi:",
    voiceReadBtn: "Tinglash",
    abioticHeading: "Sho'rlanish, quruq havo va issiq urishidan farqlash:",
    biomarkersHeading: "Aniqlangan kasallik belgilari:",
    interventionsHeading: "Zudlik Bilan Amalga Oshiriladigan 3 Ta Qulay Chora:",
    interventionsSub: "Uy uchun 1 litr suvga (tomchi/choy qoshiq) va tomorqa/dala uchun 10 litr suvga arzon, qulay choralar",
    differentialLabel: "O'xshash bo'lishi mumkin bo'lgan holat:",
    askBannerTitle: "Ushbu kasallik bo'yicha qo'shimcha savolingiz bormi?",
    askBannerSub: "O'simliklar mutaxassisi bilan bevosita onlayn suhbatlashing",
    askBannerBtn: "Mutaxassisga savol berish",
    footerNote: "Xona o'simliklari, tomorqa va oziq-ovqat xavfsizligini ta'minlash uchun ishlab chiqilgan",
    modalTitle: "Yorug'lik va soya filtrini taqqoslash",
    rawLabel: "Asl fotosurat (Dala yorug'ligi va qattiq soya):",
    claheLabelModal: "Filtrlangan tasvir (Yorug'lik me'yorida):",
    claheActiveNotice: "Filtr faol: Dala fotosurati quyosh nuri va soyaning ta'siridan avtomatik tozalanadi.",
    modalProceed: "Tahlilni boshlash →",
    modalClose: "✕ Oynani yopish",
    blurSharp: "Aniqlik: A'lo ✓",
    blurBlurry: "Diqqat: Xira tasvir",
    glareNormal: "Yorug'lik: Optimal ✓",
    glareExcess: "Quyosh nuri: To'g'rilandi ✓",
    analyzing: "Barg tahlil qilinmoqda...",
    chatTitle: "Aurora Bosh Agronomi & Bog'bon AI",
    chatSubtitle: "Xona gullari, hovli bog'i va dala ekinlari bo'yicha 24/7 onlayn konsultatsiya",
    chatPlaceholder: "O'simliklar bo'yicha savol bering (masalan: 1L suvga qancha dori qo'shiladi?)...",
    clearChatBtn: "Tarixni tozalash",
    chatWelcome: "<strong>Assalomu alaykum! Aurora o'simliklar bo'yicha sun'iy intellekt xizmatingizda!</strong><p>Men xona gullari (monstera, fikus, spatifillum, orxideya...), hovli va tomorqa bog'lari (olma, shaftoli, tok, pomidor...) hamda dala ekinlari bo'yicha 24/7 yordamchingizman. Uy sharoitidagi oddiy choralar (1L purkagichga tomchi yoki choy qoshiq me'yori), sug'orish va o'g'itlash bo'yicha istalgan savolingizni bering!</p>",
    catalogTitle: "O'zbekiston Ekin Kasalliklari Ensiklopediyasi",
    catalogSubtitle: "Bog'lar, xona o'simliklari, tokzor va dala ekinlari uchun agronomik qo'llanma",
    filterAll: "Barchasi",
    filterCotton: "Paxta",
    filterGrape: "Uzum",
    monitoringTitle: "O'zbekiston Fitomonitoring Xaritasi (14 Hudud)",
    monitoringSubtitle: "Real vaqt rejimida viloyatlar bo'yicha kasallik tarqalish xavfi va ob-havo ogohlantirishlari",
    monitoringBadge: "● JONLI METEOMONITORING",
    refreshWeatherBtn: "Jonli yangilash",
    refreshingWeather: "Yangilanmoqda...",
    weatherUpdated: "Yangilandi ✓",
    historyTitle: "Tahlillar Tarixi & Dalolatnoma",
    historySubtitle: "Sessiyada o'tkazilgan tahlillar va chop etiladigan fitosanitar xulosa",
    btnPrintReport: "Dalolatnomani chop etish",
    emptyHistory: "Hozircha hech qanday tahlil o'tkazilmadi. Diagnostika bo'limida barg suratini tahlil qiling."
  },
  en: {
    subtitle: "Autonomous plant pathology intelligence for Uzbek farmers",
    navSections: "SECTIONS",
    tabScanner: "Diagnostics",
    tabScannerSub: "Leaf Pathology",
    tabAgronomist: "Field Agronomist",
    tabAgronomistSub: "Live Agro Chat",
    tabCatalog: "Disease Catalog",
    tabCatalogSub: "Disease Encyclopedia",
    tabMonitoring: "Phytomap",
    tabMonitoringSub: "14-Region Monitoring",
    tabHistory: "Audit & Report",
    tabHistorySub: "Audit & Archives",
    themeBtn: "Theme",
    wifiSub: "Open on phone, tablet, or laptop:",
    cropLabel: "Plant or Tree Specimen:",
    cropAutoMain: "100% AI Auto-Detection (Universal)",
    cropAutoHint: "Fruit trees, vines, cotton, and vegetables auto-detected with zero questions",
    cropAuto: "🌱 All Plants & Trees (Universal Auto)",
    cropFruitTree: "🍎 Fruit Trees (Apple, Peach, Apricot, Cherry, Walnut)",
    cropGrape: "🍇 Vineyards & Grapes",
    cropCotton: "🌿 Cotton",
    cropVegetable: "🍅 Vegetables & Melons",
    cropTrees: "🌲 Forest & Ornamental Trees",
    regionLabel: "Agricultural Territory:",
    regionAuto: "📍 Auto Geolocation (GPS)",
    samplesHeading: "Instant Benchmark Samples:",
    samplesHint: "One-click instant analysis",
    dropzonePrompt: "Capture or upload leaf specimen",
    dropzoneSub: "Upload leaf or foliage of any plant or tree (Auto-detected)",
    btnCapture: "Upload Photo or Take Picture",
    claheLabel: "Normalize intense sunlight and deep shadows (Lighting Filter)",
    btnCompare: "Compare Filter",
    btnDiagnose: "Analyze Leaf Specimen",
    threatLevel: "BIOLOGICAL THREAT LEVEL:",
    confidence: "DIAGNOSTIC CONFIDENCE:",
    advisoryTitle: "Agronomist Field Advisory:",
    voiceReadBtn: "Listen",
    abioticHeading: "Pathogen vs Salinity & Heat Stress Reasoning:",
    biomarkersHeading: "Identified Pathological Symptoms:",
    interventionsHeading: "3 Immediate Low-Cost Field Interventions:",
    interventionsSub: "Affordable remedies readily available at local agricultural suppliers",
    differentialLabel: "Differential Diagnosis (Lookalike Condition):",
    askBannerTitle: "Do you have further questions on this diagnosis?",
    askBannerSub: "Consult directly with our autonomous field agronomist",
    askBannerBtn: "Ask Agronomist",
    footerNote: "Engineered for Central Asian food security and smallholder agronomy",
    modalTitle: "Solar Glare & Shadow Filter Comparison",
    rawLabel: "Original Photo (Sunlight & Shadows):",
    claheLabelModal: "Enhanced Photo (Normalized Lighting):",
    claheActiveNotice: "Filter active: Midday solar glare and shadows are automatically normalized.",
    modalProceed: "Start Analysis →",
    modalClose: "✕ Close Window",
    blurSharp: "Sharpness: Optimal ✓",
    blurBlurry: "Warning: Blurry Image",
    glareNormal: "Lighting: Optimal ✓",
    glareExcess: "Solar Glare: Normalized ✓",
    analyzing: "Scanning & Analyzing Specimen...",
    chatTitle: "Aurora Chief Agronomist",
    chatSubtitle: "24/7 autonomous consultation tailored to Central Asian soils & climates",
    chatPlaceholder: "Ask the agronomist (e.g., how to dose sulfur for 10L sprayer?)...",
    clearChatBtn: "Clear History",
    chatWelcome: "<strong>Welcome, esteemed grower!</strong><p>I am Aurora Chief Agronomist. I am ready to advise you 24/7 on all fruit trees (apple, peach, grape...), vegetables, cotton, dosages, pruning, and irrigation management. Ask any agricultural question!</p>",
    catalogTitle: "Uzbekistan Crop Disease Encyclopedia",
    catalogSubtitle: "Agronomic Field Reference for Cotton, Vineyards & Orchards",
    filterAll: "All",
    filterCotton: "Cotton",
    filterGrape: "Grape",
    monitoringTitle: "Uzbekistan Phytomonitoring Map (14 Territories)",
    monitoringSubtitle: "Real-time territorial epidemic risk levels and microclimate alerts",
    monitoringBadge: "● LIVE MONITORING",
    refreshWeatherBtn: "Live Refresh",
    refreshingWeather: "Refreshing...",
    weatherUpdated: "Updated ✓",
    historyTitle: "Farmer Audit History & Field Certificate",
    historySubtitle: "Diagnostic session logs and printable phytosanitary certificate",
    btnPrintReport: "Print Certificate",
    emptyHistory: "No diagnostic scans recorded yet. Scan a leaf specimen in Diagnostics."
  }
};

let currentLang = "uz";
let currentTheme = "dark";
let currentFile = null;
let currentPreviewData = null;
let isCurrentSample = false;
let lastDiagnosis = null;
let lastDiagnosisPayload = null;
let scanHistory = [];
let chatHistory = [];
let diseaseCatalogData = [];
let phytosanitaryRegionsData = [];
let activeCatalogFilter = "ALL";

// DOM Elements
const fileInput = document.getElementById("fileInput");
const dropZone = document.getElementById("dropZone");
const dropContent = document.getElementById("dropContent");
const previewWrapper = document.getElementById("previewWrapper");
const previewImage = document.getElementById("previewImage");
const resetBtn = document.getElementById("resetBtn");
const selectFileBtn = document.getElementById("selectFileBtn");
const diagnoseBtn = document.getElementById("diagnoseBtn");
const diagnoseBtnText = document.getElementById("diagnoseBtnText");
const diagnoseSpinner = document.getElementById("diagnoseSpinner");
const resultsCard = document.getElementById("resultsCard");
const cropSelect = document.getElementById("cropSelect");
const regionSelect = document.getElementById("regionSelect");
const geoStatusBadge = document.getElementById("geoStatusBadge");
const geoStatusText = document.getElementById("geoStatusText");
const autoGeoOption = document.getElementById("autoGeoOption");
let currentDetectedRegion = "Toshkent viloyati";
const claheToggle = document.getElementById("claheToggle");
const blurIndicator = document.getElementById("blurIndicator");
const glareIndicator = document.getElementById("glareIndicator");
const compareBtn = document.getElementById("compareBtn");
const compareModal = document.getElementById("compareModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCloseBtnBottom = document.getElementById("modalCloseBtnBottom");
const modalProceedBtn = document.getElementById("modalProceedBtn");
const rawPreviewModal = document.getElementById("rawPreviewModal");
const clahePreviewModal = document.getElementById("clahePreviewModal");
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const samplesGrid = document.getElementById("samplesGrid");

// Multi-page navigation elements
const navTabs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");

// Chat elements
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const quickPromptBtns = document.querySelectorAll(".quick-prompt-btn");
const askAgronomistShortcut = document.getElementById("askAgronomistShortcut");
const voiceReadBtn = document.getElementById("voiceReadBtn");
const clearChatBtn = document.getElementById("clearChatBtn");

// Catalog & Monitoring elements
const catalogGrid = document.getElementById("catalogGrid");
const filterBtns = document.querySelectorAll(".filter-btn");
const monitoringGrid = document.getElementById("monitoringGrid");
const historyList = document.getElementById("historyList");
const emptyHistoryMsg = document.getElementById("emptyHistoryMsg");
const printReportBtn = document.getElementById("printReportBtn");

// Tab 1 Live Weather Bar elements
const regionalLiveBar = document.getElementById("regionalLiveBar");
const liveBarIcon = document.getElementById("liveBarIcon");
const liveBarRegion = document.getElementById("liveBarRegion");
const liveBarCondition = document.getElementById("liveBarCondition");
const liveBarTemp = document.getElementById("liveBarTemp");
const liveBarHumidity = document.getElementById("liveBarHumidity");
const liveBarWind = document.getElementById("liveBarWind");
const liveBarSprayBadge = document.getElementById("liveBarSprayBadge");

// Tab 4 Vector Map & Quick HUD elements
const uzbekistanVectorMap = document.getElementById("uzbekistanVectorMap");
const mapQuickHud = document.getElementById("mapQuickHud");
const hudRegionTitle = document.getElementById("hudRegionTitle");
const hudWeatherIcon = document.getElementById("hudWeatherIcon");
const hudTempPill = document.getElementById("hudTempPill");
const hudHumidityPill = document.getElementById("hudHumidityPill");
const hudWindPill = document.getElementById("hudWindPill");
const hudRiskPill = document.getElementById("hudRiskPill");
const hudSprayBadge = document.getElementById("hudSprayBadge");
const hudSubAdvice = document.getElementById("hudSubAdvice");
const mapLegend = document.getElementById("mapLegend");
const refreshWeatherBtn = document.getElementById("refreshWeatherBtn");
const refreshWeatherBtnText = document.getElementById("refreshWeatherBtnText");
const layerBtns = document.querySelectorAll(".layer-btn");

// Initialize on DOM Ready
function initAurora() {
  initTheme();
  initChatHistory();
  loadHealthStatus();
  loadNetworkInfo();
  checkApiKeyStatus();
  loadSampleCases();
  loadCatalog();
  loadPhytosanitaryMap();
  initAutoGeolocation();
  bindEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAurora);
} else {
  initAurora();
}

// Theme Management
function initTheme() {
  const saved = localStorage.getItem("aurora-theme") || "dark";
  setTheme(saved);
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("aurora-theme", theme);
  if (themeIcon) {
    if (theme === "dark") {
      themeIcon.innerHTML = `<svg class="ctrl-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    } else {
      themeIcon.innerHTML = `<svg class="ctrl-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }
}

function toggleTheme() {
  const next = currentTheme === "dark" ? "light" : "dark";
  setTheme(next);
}

function bindEvents() {
  // Navigation Tabs Switching
  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Theme switcher
  themeToggle.addEventListener("click", toggleTheme);

  // File upload
  selectFileBtn.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", handleFileSelect);

  // Clicking anywhere inside dropzone opens file dialog
  dropZone.addEventListener("click", (e) => {
    if (e.target.closest("#resetBtn") || !previewWrapper.classList.contains("hidden")) return;
    fileInput.click();
  });

  // Drag & drop
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });
  dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0], true, false);
    }
  });

  // Reset
  resetBtn.addEventListener("click", resetUpload);

  // Diagnose trigger
  diagnoseBtn.addEventListener("click", runDiagnosis);

  // Filter comparison modal logic
  compareBtn.addEventListener("click", () => {
    if (currentPreviewData && currentPreviewData.raw_preview) {
      rawPreviewModal.src = currentPreviewData.raw_preview;
      clahePreviewModal.src = currentPreviewData.enhanced_preview;
      compareModal.classList.remove("hidden");
      compareModal.style.display = "flex";
    } else if (currentFile) {
      rawPreviewModal.src = URL.createObjectURL(currentFile);
      clahePreviewModal.src = URL.createObjectURL(currentFile);
      compareModal.classList.remove("hidden");
      compareModal.style.display = "flex";
    }
  });

  function closeCompareModal() {
    compareModal.classList.add("hidden");
    compareModal.style.display = "none";
  }

  modalCloseBtn.addEventListener("click", closeCompareModal);
  if (modalCloseBtnBottom) {
    modalCloseBtnBottom.addEventListener("click", closeCompareModal);
  }

  if (modalProceedBtn) {
    modalProceedBtn.addEventListener("click", () => {
      closeCompareModal();
      runDiagnosis();
    });
  }

  // Close modal on outside backdrop click
  compareModal.addEventListener("click", (e) => {
    if (e.target === compareModal) {
      closeCompareModal();
    }
  });

  // Close modal on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCompareModal();
    }
  });

  // Live CLAHE toggle: switches preview on the fly
  claheToggle.addEventListener("change", () => {
    if (currentPreviewData && previewImage) {
      if (claheToggle.checked && currentPreviewData.enhanced_preview) {
        previewImage.src = currentPreviewData.enhanced_preview;
      } else if (currentFile) {
        previewImage.src = URL.createObjectURL(currentFile);
      }
    }
  });

  // Region change updates HUD GPS coordinates
  regionSelect.addEventListener("change", handleRegionChange);
  handleRegionChange();

  // Language toggle
  langToggle.addEventListener("click", toggleLanguage);

  // Agronomist Chat
  chatForm.addEventListener("submit", handleChatSubmit);
  if (clearChatBtn) {
    clearChatBtn.addEventListener("click", handleClearChat);
  }
  quickPromptBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const q = currentLang === "en"
        ? (btn.getAttribute("data-q-en") || btn.getAttribute("data-q"))
        : (btn.getAttribute("data-q-uz") || btn.getAttribute("data-q"));
      chatInput.value = q;
      handleChatSubmit(new Event("submit"));
    });
  });

  // Ask Agronomist Shortcut
  if (askAgronomistShortcut) {
    askAgronomistShortcut.addEventListener("click", () => {
      switchTab("tab-agronomist");
      if (lastDiagnosis) {
        if (currentLang === "en") {
          const dName = lastDiagnosis.primary_diagnosis.common_name_en;
          chatInput.value = `My crop was diagnosed with ${dName}. What is the most effective low-cost local remedy?`;
        } else {
          const dName = lastDiagnosis.primary_diagnosis.common_name_uz;
          chatInput.value = `Mening ekinimda ${dName} aniqlandi. Bunga qarshi eng arzon va tez samara beradigan chorani ayting?`;
        }
        chatInput.focus();
      }
    });
  }

  // Voice Read
  if (voiceReadBtn) {
    voiceReadBtn.addEventListener("click", speakAdvisory);
  }

  // Catalog Filters
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      activeCatalogFilter = f;
      renderCatalog(f);
    });
  });

  // Print Report
  if (printReportBtn) {
    printReportBtn.addEventListener("click", () => window.print());
  }

  // Live Weather Refresh Button
  if (refreshWeatherBtn) {
    refreshWeatherBtn.addEventListener("click", handleWeatherRefresh);
  }

  // Layer Switcher Buttons
  layerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      layerBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeMapLayer = btn.getAttribute("data-map-layer") || "risk";
      renderVectorMap(phytosanitaryRegionsData);
    });
  });

  // Geolocation Refresh Click
  if (geoStatusBadge) {
    geoStatusBadge.addEventListener("click", () => {
      initAutoGeolocation();
    });
  }

  // Wi-Fi Copying Button
  const copyWifiBtn = document.getElementById("copyWifiBtn");
  if (copyWifiBtn) {
    copyWifiBtn.addEventListener("click", handleCopyWifi);
  }

  // API Key Modal Handlers
  const openApiKeyModalBtn = document.getElementById("openApiKeyModalBtn");
  if (openApiKeyModalBtn) {
    openApiKeyModalBtn.addEventListener("click", openApiKeyModal);
  }

  const apiKeyModalCloseBtn = document.getElementById("apiKeyModalCloseBtn");
  if (apiKeyModalCloseBtn) {
    apiKeyModalCloseBtn.addEventListener("click", closeApiKeyModal);
  }

  const apiKeyModalCancelBtn = document.getElementById("apiKeyModalCancelBtn");
  if (apiKeyModalCancelBtn) {
    apiKeyModalCancelBtn.addEventListener("click", closeApiKeyModal);
  }

  const saveApiKeyBtn = document.getElementById("saveApiKeyBtn");
  if (saveApiKeyBtn) {
    saveApiKeyBtn.addEventListener("click", handleSaveApiKey);
  }

  const toggleApiKeyVisBtn = document.getElementById("toggleApiKeyVisBtn");
  if (toggleApiKeyVisBtn) {
    toggleApiKeyVisBtn.addEventListener("click", () => {
      const input = document.getElementById("apiKeyInput");
      if (input) {
        input.type = input.type === "password" ? "text" : "password";
      }
    });
  }

  const apiKeyModal = document.getElementById("apiKeyModal");
  if (apiKeyModal) {
    apiKeyModal.addEventListener("click", (e) => {
      if (e.target === apiKeyModal) closeApiKeyModal();
    });
  }

  // Region Picker Modal Handlers
  const autoGeoCard = document.getElementById("autoGeoCard");
  if (autoGeoCard) {
    autoGeoCard.addEventListener("click", (e) => {
      openRegionPickerModal();
    });
  }

  const regionPickerCloseBtn = document.getElementById("regionPickerCloseBtn");
  if (regionPickerCloseBtn) {
    regionPickerCloseBtn.addEventListener("click", closeRegionPickerModal);
  }

  const btnGpsRefreshFull = document.getElementById("btnGpsRefreshFull");
  if (btnGpsRefreshFull) {
    btnGpsRefreshFull.addEventListener("click", () => {
      closeRegionPickerModal();
      initAutoGeolocation();
    });
  }

  const regionPickerModal = document.getElementById("regionPickerModal");
  if (regionPickerModal) {
    regionPickerModal.addEventListener("click", (e) => {
      if (e.target === regionPickerModal) closeRegionPickerModal();
    });
  }
}

// Wi-Fi URL Copy Helper
function handleCopyWifi() {
  const display = document.getElementById("wifiUrlDisplay");
  const copyText = document.getElementById("copyWifiText");
  const url = display ? display.textContent.trim() : "http://192.168.1.23:8000";
  navigator.clipboard.writeText(url).then(() => {
    if (copyText) copyText.textContent = "✓ Nusxalandi!";
    setTimeout(() => {
      if (copyText) copyText.textContent = "📋 Nusxa olish";
    }, 2000);
  }).catch(() => {
    if (copyText) copyText.textContent = "✓ " + url;
  });
}

// Network Info Loading
async function loadNetworkInfo() {
  try {
    const res = await fetch("/api/network-info");
    if (!res.ok) return;
    const data = await res.json();
    const display = document.getElementById("wifiUrlDisplay");
    if (display && data.wifi_url) {
      display.textContent = data.wifi_url;
    }
  } catch (err) {
    console.warn("Could not load network info:", err);
  }
}

// API Key Management Functions
async function checkApiKeyStatus() {
  try {
    const res = await fetch("/api/config/api-key");
    if (!res.ok) return;
    const data = await res.json();
    const apiKeyBtnText = document.getElementById("apiKeyBtnText");
    const dot = document.getElementById("apiKeyFeedbackDot");
    const statusText = document.getElementById("apiKeyFeedbackText");
    if (data.configured) {
      if (apiKeyBtnText) apiKeyBtnText.textContent = "AI API: ● Faol";
      if (dot) dot.classList.add("active");
      if (statusText) statusText.textContent = `Google Gemini AI faol (${data.masked_key || "Faol"})`;
    } else {
      if (apiKeyBtnText) apiKeyBtnText.textContent = "AI API: Kalit kiritish";
      if (dot) dot.classList.remove("active");
      if (statusText) statusText.textContent = "API kaliti kiritilmagan (Namunaviy rejim faol)";
    }
  } catch (err) {
    console.warn("Could not check API key status:", err);
  }
}

function openApiKeyModal() {
  const modal = document.getElementById("apiKeyModal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
  }
}

function closeApiKeyModal() {
  const modal = document.getElementById("apiKeyModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
  }
}

async function handleSaveApiKey() {
  const input = document.getElementById("apiKeyInput");
  const saveBtn = document.getElementById("saveApiKeyBtn");
  const statusText = document.getElementById("apiKeyFeedbackText");
  const dot = document.getElementById("apiKeyFeedbackDot");
  if (!input || !input.value.trim()) {
    if (statusText) statusText.textContent = "Iltimos, API kalitini kiriting (AIzaSy...)";
    return;
  }
  const rawKey = input.value.trim();
  if (saveBtn) saveBtn.textContent = "Saqlanmoqda...";
  try {
    const res = await fetch("/api/config/api-key", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: rawKey })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Xatolik yuz berdi");
    }
    const data = await res.json();
    if (dot) dot.classList.add("active");
    if (statusText) statusText.textContent = "✓ Gemini AI API muvaffaqiyatli saqlandi va faollashtirildi!";
    const apiKeyBtnText = document.getElementById("apiKeyBtnText");
    if (apiKeyBtnText) apiKeyBtnText.textContent = "AI API: ● Faol";
    setTimeout(() => {
      closeApiKeyModal();
      if (saveBtn) saveBtn.textContent = "Saqlash va faollashtirish →";
    }, 1200);
  } catch (err) {
    if (statusText) statusText.textContent = `Xatolik: ${err.message}`;
    if (saveBtn) saveBtn.textContent = "Qayta urinish →";
  }
}

// Tab Switching
function switchTab(tabId) {
  navTabs.forEach((t) => {
    if (t.getAttribute("data-tab") === tabId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  tabPanes.forEach((pane) => {
    if (pane.id === tabId) {
      pane.classList.remove("hidden");
      pane.classList.add("active");
    } else {
      pane.classList.add("hidden");
      pane.classList.remove("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleRegionChange() {
  updateRegionalLiveBar();
  if (phytosanitaryRegionsData && phytosanitaryRegionsData.length > 0) {
    const selectedRegion = (regionSelect && regionSelect.value && regionSelect.value !== "AUTO_GEO")
      ? regionSelect.value
      : currentDetectedRegion;
    const reg = phytosanitaryRegionsData.find(r =>
      r.region_name === selectedRegion ||
      selectedRegion.includes(r.region_name) ||
      (r.region_name_en && selectedRegion.includes(r.region_name_en))
    );
    if (reg) {
      updateMapQuickHud(reg);
      highlightMapRegion(reg.region_id);
    }
  }
}

// Health status check
async function loadHealthStatus() {
  try {
    await fetch("/api/health");
  } catch (err) {
    console.warn("Health check error:", err);
  }
}

// Load sample cases
async function loadSampleCases() {
  try {
    const res = await fetch("/api/sample-cases");
    const data = await res.json();
    samplesGrid.innerHTML = "";

    data.cases.forEach((item) => {
      const el = document.createElement("div");
      el.className = "sample-item";
      el.innerHTML = `
        <img class="sample-thumb" src="${item.image_url}" alt="${item.title_en}" />
        <div class="sample-info">
          <h4>${currentLang === "uz" ? item.title_uz : item.title_en}</h4>
          <span class="sample-tag tag-${item.expected_threat.toLowerCase()}">${formatThreatLevel(item.expected_threat)}</span>
        </div>
      `;
      el.addEventListener("click", () => loadSampleIntoWorkspace(item));
      samplesGrid.appendChild(el);
    });
  } catch (err) {
    console.error("Failed to load sample cases:", err);
  }
}

// Handle clicking a sample case
async function loadSampleIntoWorkspace(sample) {
  try {
    if (cropSelect) cropSelect.value = sample.crop || "AUTO";
    const autoCropMain = document.getElementById("autoCropMain");
    const autoCropHint = document.getElementById("autoCropHint");
    if (autoCropMain) {
      const sampleTitle = currentLang === "uz" ? sample.title_uz : sample.title_en;
      autoCropMain.textContent = `⚡ ${sampleTitle}`;
    }
    if (autoCropHint) {
      autoCropHint.textContent = currentLang === "uz"
        ? "Namunaviy tekshiruv yuklandi (Avtomatik tahlil)"
        : "Benchmark sample loaded (Automatic analysis)";
    }
    const res = await fetch(sample.image_url);
    const blob = await res.blob();
    const file = new File([blob], `${sample.id}.jpg`, { type: "image/jpeg" });
    handleFile(file, true, true);
  } catch (err) {
    console.error("Error loading sample:", err);
  }
}

function handleFileSelect(e) {
  if (e.target.files && e.target.files[0]) {
    handleFile(e.target.files[0], true, false);
  }
}

function handleFile(file, autoRun = false, isSample = false) {
  currentFile = file;
  isCurrentSample = isSample;

  const objectUrl = URL.createObjectURL(file);
  previewImage.src = objectUrl;
  dropContent.classList.add("hidden");
  previewWrapper.classList.remove("hidden");
  diagnoseBtn.disabled = false;

  fetchPreflightQuality(file, autoRun);
}

async function fetchPreflightQuality(file, autoRun = false) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/preprocess-preview", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    currentPreviewData = data;
    compareBtn.style.display = "inline-flex";

    // If CLAHE is toggled ON, show enhanced image directly on workspace preview
    if (claheToggle.checked && data.enhanced_preview) {
      previewImage.src = data.enhanced_preview;
    }

    const metrics = data.metrics;
    if (metrics.is_blurry) {
      blurIndicator.textContent = I18N[currentLang].blurBlurry;
      blurIndicator.className = "badge-tag badge-err";
    } else {
      blurIndicator.textContent = `${I18N[currentLang].blurSharp} (${metrics.blur_score})`;
      blurIndicator.className = "badge-tag badge-ok";
    }

    if (metrics.has_excessive_glare) {
      glareIndicator.textContent = `${I18N[currentLang].glareExcess} (${(metrics.glare_ratio * 100).toFixed(1)}%)`;
      glareIndicator.className = "badge-tag badge-warn";
    } else {
      glareIndicator.textContent = I18N[currentLang].glareNormal;
      glareIndicator.className = "badge-tag badge-ok";
    }

    if (autoRun) {
      runDiagnosis();
    }
  } catch (err) {
    console.warn("Preflight check failed:", err);
    if (autoRun) {
      runDiagnosis();
    }
  }
}

function resetUpload() {
  currentFile = null;
  currentPreviewData = null;
  isCurrentSample = false;
  fileInput.value = "";
  previewImage.src = "";
  previewWrapper.classList.add("hidden");
  previewWrapper.classList.remove("scanning");
  dropContent.classList.remove("hidden");
  resultsCard.classList.add("hidden");
  diagnoseBtn.disabled = true;
  compareBtn.style.display = "none";
  compareModal.classList.add("hidden");
  compareModal.style.display = "none";
  if (cropSelect) cropSelect.value = "AUTO";
  const autoCropIcon = document.getElementById("autoCropIcon");
  const autoCropMain = document.getElementById("autoCropMain");
  const autoCropHint = document.getElementById("autoCropHint");
  if (autoCropIcon) autoCropIcon.textContent = "🌱";
  if (autoCropMain) autoCropMain.textContent = I18N[currentLang].cropAutoMain;
  if (autoCropHint) autoCropHint.textContent = I18N[currentLang].cropAutoHint;
}

async function runDiagnosis() {
  if (!currentFile) return;

  // Always dismiss comparison modal if open
  compareModal.classList.add("hidden");
  compareModal.style.display = "none";

  diagnoseBtn.disabled = true;
  diagnoseSpinner.classList.remove("hidden");
  diagnoseBtnText.textContent = I18N[currentLang].analyzing;
  previewWrapper.classList.add("scanning");

  try {
    const formData = new FormData();
    formData.append("file", currentFile);
    formData.append("crop_hint", cropSelect.value);
    const effectiveRegion = (regionSelect && regionSelect.value && regionSelect.value !== "AUTO_GEO")
      ? regionSelect.value
      : currentDetectedRegion;
    formData.append("region", effectiveRegion);
    formData.append("enable_clahe", claheToggle.checked);
    formData.append("force_demo", false);

    const res = await fetch("/api/diagnose", {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Diagnosis failed");
    }

    const payload = await res.json();
    lastDiagnosis = payload.diagnosis;
    lastDiagnosisPayload = payload;
    renderDiagnosis(payload);
    addToHistory(payload);
  } catch (err) {
    alert("Diagnoz xatosi: " + err.message);
  } finally {
    diagnoseBtn.disabled = false;
    diagnoseSpinner.classList.add("hidden");
    diagnoseBtnText.textContent = I18N[currentLang].btnDiagnose;
    previewWrapper.classList.remove("scanning");
  }
}

// Translation and language-purity dictionaries for foliar diagnosis (Guarantees ZERO English bleed)
const CLIENT_BIOMARKER_UZ = {
  "white/ash-gray powdery patches on upper leaf surface": "Barg yuzasida kulrang-oq unsimon zamburug' g'ubori",
  "upward curling of leaf margins with brittle texture": "Barg chetlarining tepaga buralishi va mo'rtlashishi",
  "chlorotic yellow mottling directly beneath fungal mycelium colonies": "G'ubor ostidagi to'qimalarning sarg'ayishi va qorayishi",
  "angular water-soaked polyhedral lesions bounded by veinlets": "Barg tomirlari bilan chegaralangan burchakli dog'lar",
  "dark reddish-brown necrotic centers with greasy translucent margins": "Qizg'ish-jigarrang quriyotgan to'qimalar va suvli hoshiyalar",
  "incipient vein-clearing and localized black petiole streak": "Barg bandida qoraygan bakterial chiziqlar",
  "interveinal mottling progressing to necrotic 'tiger-stripe' pattern": "Barg tomirlari oralig'ida yo'lbars terisi nusxali sarg'ayish",
  "marginal desiccation and premature defoliation": "Barg chetlarining qovjirashi va to'kilishi",
  "vascular discoloration in petiole cross-section": "Poya ichki naylarining qorayib qurishi",
  "continuous brown necrotic band along outer leaf perimeter": "Barg chetlarining bir tekis qovjirab qurishi",
  "clear demarcated yellow chlorotic border separating dead margin from green center": "Tomirlar oralig'idagi xloroz (sarg'ayish)",
  "no fungal efflorescence or vein-bounded spots": "Mog'or yoki zamburug' g'uborining yo'qligi",
  "translucent oil-spot lesions on upper leaf blade": "Barg ustida sarg'ish-moyli yarqiroq dog'lar",
  "dense white felt-like fungal sporulation on leaf underside": "Bargning orqa tomonida oq mayin mog'or qatlami",
  "necrotic leaf tissue collapse during late stage infection": "Zararlangan to'qimalarning qo'ng'ir tusga kirib qurishi",
  "dense yellow-white stippling dots across leaf lamina": "Barg ustida mayda oqish-sariq nuqtachalar",
  "reddish-bronze pigmentation on upper surface in hot weather": "Kuchli zararlanganda barglarning qizarib qurishi",
  "silken micro-webbing and tiny moving mites on leaf underside": "Bargning orqa tomonida nozik ipak to'r qatlami",
  "olive-green to velvety dark brown circular spots on leaf blade": "Barg ustida baxmalsimon zaytun-yashil dog'lar",
  "chlorotic halos surrounding older necrotic lesions": "Dog'lar atrofidagi sarg'ish xloroz halqasi",
  "early leaf curling, blistering, and premature defoliation": "Barg to'qimalarining burishishi va erta to'kilishi",
  "severe leaf lamina curling, thickening, and puckering": "Barglarning qalinlashib to'lqinsimon burishishi",
  "reddish-purple to yellowish discoloration of distorted tissue": "Qizg'ish-binafsha va sarg'ish tusga kirishi",
  "velvety white fungal spore bloom on upper distorted surface": "Barg ustida oq baxmalsimon mog'or g'ubori",
  "irregular water-soaked greasy brown lesions on leaves and stems": "Barglarda suvli to'q qo'ng'ir va qora dog'lar",
  "pale yellowish halo bordering the necrotic area": "Dog'lar atrofidagi sarg'ish hoshiya",
  "white velvety sporulation on underside in high humidity": "Ertalabki namlikda barg orqasidagi oq mog'or",
  "dark brown to black necrotic spots on fruit calyx and rind": "Meva po'sti va kosachasida to'q jigarrang botib kirgan dog'lar",
  "tiny raised black pycnidia erupting through necrotic tissue": "Dog'lar markazidagi mayda qora sporalar",
  "yellowing and premature drop of affected leaves": "Barglarning sarg'ayishi va muddatidan oldin to'kilishi",
  "yellowing and browning on leaf margins and tips": "Barg chetlari va uchlarining sarg'ayib qurishi",
  "dark concentric necrotic blotches on lamina": "Barg yuzasida qoramtir nobud bo'lgan dog'lar",
  "absence of agricultural field insect pests": "Tuvak tuprog'ining zaxlashi yoki qotib qolishi"
};

const CLIENT_ACTION_UZ = {
  "apply 0.8% colloidal sulfur": "Ertalab salqinda 0.8% li Kolloid oltingugurt (10L suvga 80g) yoki oltingugurt kukuni bilan yaxshilab ishlov bering. 30°C gacha bo'lgan quruq iqlimda juda samarali.",
  "prune dense shoots and excess foliage": "Tok tupini yashil xomtok qiling, ortiqcha barg va novdalarni siyraklashtirib quyosh nuri va havo aylanishini ta'minlang.",
  "for persistent infection, apply penconazole": "Kasallik kuchaysa, Topaz (10L suvga 2ml) yoki Tiovit Jet preparatlarini navbatlab seping.",
  "irrigate solely through ground furrows": "Faqat egatlab sug'oring; quyosh tikkaga kelganda barglarga suv sachratmang, aks holda bakteriya qo'shni qatorlarga tez tarqaladi.",
  "spray 0.4% copper oxychloride": "Ertalab soat 08:30 gacha 0.4% li Mis xloroksidi (10L suvga 40g) yoki 1% li Bordo suyuqligi bilan purkang.",
  "prune severely necrotic bottom stems": "Pastki qorayib qurigan barg va shoxlarni kesib, daladan tashqariga chiqarib yoqing.",
  "reduce heavy cold canal watering": "Sovuq daryo suvi bilan ko'llatib sug'orishni to'xtating, egat oralarini kultivatsiya qilib tuproqni qizdiring.",
  "spray potassium sulfate": "Bargdan 1.5% li kaliy sulfat eritmasi purkab o'simlikning immunitetini mustahkamlang.",
  "apply trichoderma lignorum": "Egat suvi bilan birga gektariga 2-3 litr Trixodermin biologik preparatini oqizing.",
  "ensure drainage ditches": "Kechki payt chuqur sug'orib ildiz atrofidagi zararli tuzlarni pastki qatlamlarga yuving va zovurlarni tozalang.",
  "apply well-rotted animal manure": "Bargdan kaliy sulfat va guminli o'g'itlar bilan oziqlantiring.",
  "avoid high-chloride fertilizers": "Tok tagiga chirigan go'ng yoki somon to'shab namlikni saqlang (mulchalash).",
  "spray 1% freshly prepared bordeaux mixture": "Yomg'irdan so'ng zudlik bilan 1% li Bordo suyuqligi yoki Ridomil Gold bilan bargning orqa tomonini namlab purkang.",
  "prune ground-touching lower leaves": "Tok tagidagi namlikni kamaytiring, pastki yerga tegib turgan barglarni uzib tashlang.",
  "collect and burn fallen diseased leaves": "Zararlangan va to'kilgan barcha barglarni yig'ishtirib yoqib yuboring.",
  "apply ground sulfur dust": "Ertalab salqinda oltingugurt kukuni changiting yoki maxsus akaritsid (Omayt, Nissoran, Vertimek) purkang.",
  "clear bindweed and weeds": "Dala atrofi va ariq bo'yidagi qovjiragan begona o'tlarni o'rib yoqib tashlang.",
  "in early localized hotspots, spray potassium": "Kichik maydonlarda 10L suvga 100g xo'jalik sovuni eritmasini seping yoki dalaga oltinko'z entomofagini qo'yib yuboring.",
  "spray 1% bordeaux mixture": "1% li Bordo suyuqligi yoki Skor (10L suvga 2ml) bilan shoshilinch ishlov bering.",
  "prune overcrowded inner branches": "Daraxt shoxlarini butab, toj qismini shamollating.",
  "rake up all fallen leaves beneath the apple": "To'kilgan barcha kasal barglarni to'plab yoqing.",
  "collect deformed leaves before they turn brown": "Buralgan barcha kasal barglarni qo'lda terib olib yoqib tashlang.",
  "spray copper oxychloride (0.4%": "Mis xloroksidi (0.4%, 10L ga 40g) yoki Xorus (10L ga 3g) seping.",
  "apply urea (0.3%)": "Daraxtni karbamid va gumatlar bilan bargdan oziqlantiring.",
  "apply 0.4% copper oxychloride (40g/10l) or ridomil": "0.4% li Mis xloroksidi (10L ga 40g) yoki Ridomil Gold (10L ga 25g) bilan butun palakni yuvib purkang.",
  "remove all ground-touching lower leaves": "Yerga tegib turgan pastki barcha sarg'aygan va qoraygan barglarni uzib tashlang.",
  "never sprinkle water overhead": "Ustidan suv sepmang, faqat egatdan yoki tomchilatib sug'oring; kechki payt barglar mutlaqo quruq bo'lsin.",
  "spray freshly prepared 1% bordeaux": "1% li Bordo suyuqligi yoki Skor (10L suvga 2ml) bilan anorzorga purkang.",
  "pick all mummy fruits": "Chirigan barcha mevalarni terib yoqib tashlang.",
  "weed around tree basins": "Tup tagidagi bachki shoxlarni kesib tashlang va markazini yoriting.",
  "clean foliage with soft damp cloth": "1 litr iliq suvga 3-4 tomchi Fitosporin yoki 0.5 choy qoshiq xo'jalik sovuni qo'shib barglariga seping va arting.",
  "move the pot 1.5m away": "Gultuvakni qishki isitish batareyasidan kamida 1.5 metr uzoqroq, yorug' deraza yoniga oling.",
  "empty standing drainage water": "Sug'organdan 20 daqiqa o'tgach, tuvak tagligidagi to'plangan ortiqcha suvni to'kib tashlang."
};

function isClientTextEnglish(str) {
  if (!str) return false;
  const s = " " + str.toLowerCase() + " ";
  return [" the ", " with ", " and ", " of ", " to ", " in ", " is ", " ruled out ", " patches ", " leaf ", " leaves ", " apply ", " spray ", " fungal ", " lesions ", " white-to-gray "].some(w => s.includes(w));
}

function clientTranslateBiomarker(marker) {
  if (!marker) return "";
  const low = marker.toLowerCase().trim();
  for (const [k, v] of Object.entries(CLIENT_BIOMARKER_UZ)) {
    if (low.includes(k) || k.includes(low)) return v;
  }
  return "Bargda aniqlangan patologik kasallik belgisi";
}

function clientTranslateAction(action) {
  if (!action) return "";
  const low = action.toLowerCase().trim();
  for (const [k, v] of Object.entries(CLIENT_ACTION_UZ)) {
    if (low.includes(k)) return v;
  }
  return "Agrotexnik parvarish qoidalariga rioya qiling, shamollatishni yaxshilang va oziqlantiring.";
}

function clientTranslateAbiotic(text) {
  if (!text) return "Barg to'qimalarida patogen zamburug' va bakteriya rivojlanishi alomatlari aniqlandi. Tashqi oftob urishi yoki sho'rlanish inkor qilindi.";
  const low = text.toLowerCase();
  if (low.includes("white-to-gray") || low.includes("oidium") || low.includes("powdery")) {
    return "Bargning ustki qismida kulrang-oq unsimon zamburug' g'ubori qoplami mavjud. Sho'rlanish yoki oftob urishi inkor qilindi, chunki unsimon g'ubor faqat tirik patogen zamburug'ga xosdir.";
  }
  if (low.includes("angular") || low.includes("xanthomonas") || low.includes("bacterial")) {
    return "Barg tomirlari bilan chegaralangan burchakli suvli to'q-jigarrang dog'lar gommoz bakteriyasiga xos. Sho'rlanish yoki oftob urishi inkor qilindi, chunki qora dog'lar barg chetlarida emas, tomirlar oralig'ida to'plangan.";
  }
  if (low.includes("tiger") || low.includes("verticillium") || low.includes("vascular")) {
    return "Barg tomirlari oralig'ida sariq-jigarrang yo'lbars nusxasi dog'lari va poya tomirlarining qorayishi vilt zamburug'ini tasdiqlaydi. Oddiy chanqashdan farqi — poya to'qimalari ichdan nobud bo'lmoqda.";
  }
  if (low.includes("salinity") || low.includes("scorch") || low.includes("perimeter")) {
    return "Barglarning chetki hoshiyasi bo'ylab bir tekis qurish (chekka kuyishi) va tomirlar oralig'ida sarg'ayish kuzatilmoqda. Patogen zamburug' g'ubori yoki bakterial shilimshiq yo'q. Bu tuproq sho'rlanishi va garmsel shamoli oqibatidir.";
  }
  if (low.includes("oil") || low.includes("downy") || low.includes("plasmopara")) {
    return "Bargning ustki qismida moyli sarg'ish dog'lar va pastki orqa tomonida oq mayin mog'or g'ubori mavjud. Nam havoda tez rivojlanadi, sho'rlanishdan farqi aniq chegaralangan moy dog'lardir.";
  }
  if (low.includes("stippling") || low.includes("mite") || low.includes("webbing")) {
    return "Barglarning orqa tomonida mayda qizg'ish o'rgimchakkana koloniyalari va nozik to'rlar mavjud. Chang va garmsel shamoli ta'sirida tez ko'payadi.";
  }
  if (low.includes("apple") || low.includes("venturia") || low.includes("scab")) {
    return "Olma barglarida zaytun-yashil va qora-qo'ng'ir baxmalsimon dog'lar parsha zamburug'i rivojlanganini ko'rsatadi. Sho'rlanish emas, yuqumli zamburug'li infeksiyadir.";
  }
  if (low.includes("peach") || low.includes("taphrina") || low.includes("curl")) {
    return "Barg plastinkasining qalinlashishi, qizarishi va to'lqinsimon burishib shishishi tafrinoz zamburug'iga xos. Shira zarari emas, to'qima qalinlashuvi aniq ko'rinib turibdi.";
  }
  if (low.includes("tomato") || low.includes("phytophthora")) {
    return "Pomidor barglarida tez kengayuvchi to'q qo'ng'ir suvli dog'lar va orqasida oq mog'or fitoftoroz alomatidir. Issiq urishidan farqi — suvli qora dog'lar poyagacha o'tadi.";
  }
  if (low.includes("pomegranate") || low.includes("fruit rot")) {
    return "Anor barglari va meva kosachasida to'q qo'ng'ir chirish va qoramtir mog'or anor zamburug'li chirishini ko'rsatadi.";
  }
  if (low.includes("houseplant") || low.includes("ficus") || low.includes("monstera")) {
    return "Xona guli barglaridagi sariq va qoramtir dog'lar havoning o'ta quruqligi (isitgich batareyasi ta'siri), tuvak tubida suv to'planib qolishi hamda yorug'lik yetishmasligidan yuzaga kelgan.";
  }
  return "Barg to'qimalarida patogen zamburug' va bakteriya rivojlanishi alomatlari aniqlandi. Tashqi oftob urishi yoki sho'rlanish inkor qilindi.";
}

function renderDiagnosis(data) {
  const diag = data.diagnosis;
  resultsCard.classList.remove("hidden");

  // Smooth scroll into results HUD
  resultsCard.scrollIntoView({ behavior: "smooth", block: "start" });

  // Threat Level Badge
  const threatPill = document.getElementById("threatPill");
  threatPill.textContent = formatThreatLevel(diag.threat_level);
  threatPill.className = `threat-pill threat-${diag.threat_level}`;

  // Confidence Meter
  const confPct = Math.round(diag.confidence_score * 100);
  document.getElementById("confValue").textContent = `${confPct}%`;
  document.getElementById("confBarFill").style.width = `${confPct}%`;

  // Host & Pathogen Chips
  document.getElementById("pathogenType").textContent = formatPathogenType(diag.primary_diagnosis.pathogen_type);
  document.getElementById("hostCropChip").textContent = formatHostCrop(diag.specimen_identified);

  // Update Auto-Crop Status Card with Detected Species
  const autoCropMain = document.getElementById("autoCropMain");
  const autoCropHint = document.getElementById("autoCropHint");
  const autoCropIcon = document.getElementById("autoCropIcon");
  if (autoCropMain && diag.specimen_identified) {
    const specLower = diag.specimen_identified.toLowerCase();
    let cropEmoji = "🌱";
    if (specLower.includes("olma") || specLower.includes("apple")) cropEmoji = "🍎";
    else if (specLower.includes("shaftoli") || specLower.includes("peach")) cropEmoji = "🍑";
    else if (specLower.includes("uzum") || specLower.includes("grape") || specLower.includes("tok")) cropEmoji = "🍇";
    else if (specLower.includes("paxta") || specLower.includes("cotton") || specLower.includes("g'oza")) cropEmoji = "🌿";
    else if (specLower.includes("pomidor") || specLower.includes("tomato")) cropEmoji = "🍅";
    else if (specLower.includes("anor") || specLower.includes("pomegranate")) cropEmoji = "🪴";
    else if (specLower.includes("bodring") || specLower.includes("cucumber")) cropEmoji = "🥒";
    else if (specLower.includes("o'rik") || specLower.includes("apricot")) cropEmoji = "🍑";
    else if (specLower.includes("archa") || specLower.includes("terak") || specLower.includes("tree")) cropEmoji = "🌲";
    else if (specLower.includes("fikus") || specLower.includes("ficus") || specLower.includes("xona") || specLower.includes("monstera") || specLower.includes("spatifillum") || specLower.includes("orxideya") || specLower.includes("gul")) cropEmoji = "🪴";

    if (autoCropIcon) autoCropIcon.textContent = cropEmoji;
    autoCropMain.textContent = currentLang === "uz"
      ? `Aniqlangan o'simlik: ${formatHostCrop(diag.specimen_identified)}`
      : `Identified Host: ${diag.specimen_identified.replace(/_/g, " ")}`;
    if (autoCropHint) {
      autoCropHint.textContent = currentLang === "uz"
        ? "Sun'iy intellekt tomonidan avtomatik aniqlandi"
        : "Automatically detected by artificial intelligence";
    }

    const autoRegionTitle = document.getElementById("autoRegionTitle");
    if (autoRegionTitle) {
      autoRegionTitle.textContent = currentLang === "uz" ? `📍 Aniqlangan hudud: ${currentDetectedRegion}` : `📍 Detected Zone: ${currentDetectedRegion}`;
    }
  }
  
  const diseaseNameEnEl = document.getElementById("diseaseNameEn");
  if (currentLang === "en") {
    document.getElementById("diseaseNameUz").textContent = diag.primary_diagnosis.common_name_en;
    document.getElementById("diseaseScientific").textContent = diag.primary_diagnosis.scientific_name;
    if (diseaseNameEnEl) {
      diseaseNameEnEl.style.display = "block";
      diseaseNameEnEl.textContent = diag.primary_diagnosis.common_name_uz;
    }
    document.getElementById("advisoryUzText").textContent = diag.farmer_advisory_english || diag.farmer_advisory_uzbek;
    document.getElementById("modeBadge").textContent = data.mode === "live" ? "SYSTEM: LIVE AI" : "SYSTEM: READY";
    document.getElementById("qualityStatusBadge").textContent = "STATUS: OPTIMAL";
  } else {
    const rawUzTitle = diag.primary_diagnosis.common_name_uz || "";
    const cleanUzTitle = rawUzTitle.replace(/\s*\(Oidium kasalligi\)/gi, "")
                                   .replace(/\s*\(Oidium\)/gi, "")
                                   .replace(/\s*\(oidium\)/gi, "")
                                   .replace(/\s*\(Vertitsillyoz so'lish\)/gi, " (So'lish)")
                                   .trim();
    document.getElementById("diseaseNameUz").textContent = cleanUzTitle;
    document.getElementById("diseaseScientific").textContent = diag.primary_diagnosis.scientific_name;
    if (diseaseNameEnEl) {
      diseaseNameEnEl.style.display = "none";
      diseaseNameEnEl.textContent = "";
    }
    document.getElementById("advisoryUzText").textContent = (diag.farmer_advisory_uzbek || "")
      .replace(/\(oidium\)/gi, "zamburug'i")
      .replace(/\(mildew\)/gi, "(mildyu)");
    document.getElementById("modeBadge").textContent = data.mode === "live" ? "TIZIM: SUN'IY INTELLEKT" : "TIZIM: TAYYOR";
    document.getElementById("qualityStatusBadge").textContent = "HOLAT: MAQBUL";
  }

  // Abiotic vs Biotic Reasoning
  const abioticEl = document.getElementById("abioticAssessment");
  if (abioticEl) {
    if (currentLang === "uz") {
      let txt = diag.abiotic_assessment_uz;
      if (!txt || isClientTextEnglish(txt)) {
        txt = clientTranslateAbiotic(diag.abiotic_vs_biotic_assessment || "");
      }
      abioticEl.textContent = txt;
    } else {
      abioticEl.textContent = diag.abiotic_vs_biotic_assessment || diag.abiotic_assessment_uz;
    }
  }

  // Visual Biomarkers
  const biomarkersList = document.getElementById("biomarkersList");
  biomarkersList.innerHTML = "";
  let displayMarkers = [];
  if (currentLang === "uz") {
    const rawUz = diag.visual_biomarkers_uz || [];
    const rawEn = diag.visual_biomarkers || [];
    for (let i = 0; i < Math.max(rawUz.length, rawEn.length); i++) {
      let m = rawUz[i] || "";
      if (!m || isClientTextEnglish(m)) {
        m = clientTranslateBiomarker(rawEn[i] || m);
      }
      if (m) displayMarkers.push(m);
    }
    if (displayMarkers.length === 0 && rawEn.length > 0) {
      displayMarkers = rawEn.map(clientTranslateBiomarker);
    }
  } else {
    displayMarkers = (diag.visual_biomarkers && diag.visual_biomarkers.length)
      ? diag.visual_biomarkers
      : (diag.visual_biomarkers_uz || []);
  }

  displayMarkers.forEach((marker) => {
    const span = document.createElement("span");
    span.className = "biomarker-tag";
    span.textContent = marker;
    biomarkersList.appendChild(span);
  });

  // 3 Immediate Interventions
  const interventionsList = document.getElementById("interventionsList");
  interventionsList.innerHTML = "";
  diag.immediate_low_cost_interventions.forEach((step) => {
    const card = document.createElement("div");
    card.className = "step-card";
    const title = currentLang === "uz" ? step.title_uz : step.title_en;
    let desc = "";
    if (currentLang === "uz") {
      desc = step.action_description_uz;
      if (!desc || isClientTextEnglish(desc)) {
        desc = clientTranslateAction(step.action_description || "");
      }
    } else {
      desc = step.action_description || step.action_description_uz;
    }
    card.innerHTML = `
      <div class="step-num">${step.step_number}</div>
      <div class="step-content">
        <h5>${title}</h5>
        <p>${desc}</p>
        <span class="cost-tag cost-${step.cost_category}">${formatCostCategory(step.cost_category)}</span>
      </div>
    `;
    interventionsList.appendChild(card);
  });

  // Differential Diagnosis
  const diffEl = document.getElementById("differentialText");
  if (diffEl) {
    if (currentLang === "uz") {
      let dtxt = diag.differential_diagnosis_uz;
      if (!dtxt || isClientTextEnglish(dtxt)) {
        const engDiff = (diag.differential_diagnosis || "").toLowerCase();
        if (engDiff.includes("downy") || engDiff.includes("plasmopara")) {
          dtxt = "Soxta un shudring (Mildyu) — bunda g'ubor barg ustida emas, pastki orqa tomonida hosil bo'ladi.";
        } else if (engDiff.includes("powdery") || engDiff.includes("erysiphe")) {
          dtxt = "Haqiqiy un shudring — uning g'ubori bargning pastida emas, aynan ustki yuzasida bo'ladi.";
        } else if (engDiff.includes("alternaria")) {
          dtxt = "Alternarioz zamburug'i — bunda burchakli emas, balki konsentrik doirasimon quruq dog'lar hosil bo'ladi.";
        } else if (engDiff.includes("fusarium")) {
          dtxt = "Fuzarioz so'lish — bunda sarg'ayish bargning pastki qismidan tezroq yuqoriga tarqaladi.";
        } else if (engDiff.includes("aphid") || engDiff.includes("shira")) {
          dtxt = "Shaftoli shirasi zarari — bunda barg qalinlashmaydi, pastida shira koloniyalari bo'ladi.";
        } else if (engDiff.includes("mite") || engDiff.includes("trips")) {
          dtxt = "Trips yoki oqqanot zarari — ularda nozik ipak to'r hosil bo'lmaydi.";
        } else {
          dtxt = "Boshqa o'xshash zamburug'li yoki virusli kasalliklar.";
        }
      }
      diffEl.textContent = dtxt;
    } else {
      diffEl.textContent = diag.differential_diagnosis || diag.differential_diagnosis_uz;
    }
  }

  // Latency
  const latencyBadge = document.getElementById("latencyBadge");
  if (latencyBadge) {
    latencyBadge.innerHTML = `
      <svg class="metric-icon-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
      <span id="latencyVal">${data.latency_ms} ms</span>
    `;
  }
}

function formatThreatLevel(threat) {
  if (!threat) return "";
  const t = threat.toUpperCase();
  if (currentLang === "uz") {
    if (t === "CRITICAL") return "O'TA XAVFLI";
    if (t === "HIGH") return "YUQORI";
    if (t === "MEDIUM") return "O'RTA";
    if (t === "LOW") return "PAST";
  }
  return t;
}

function formatPathogenType(type) {
  if (!type) return "";
  const p = type.toUpperCase();
  if (currentLang === "uz") {
    if (p === "BACTERIAL") return "BAKTERIAL";
    if (p === "FUNGAL") return "ZAMBURUGLI";
    if (p === "PEST" || p === "PEST_DAMAGE") return "ZARARKUNANDA";
    if (p === "VIRAL") return "VIRUSLI";
    if (p === "ABIOTIC" || p === "ABIOTIC_STRESS") return "TABIIY STRESS";
    if (p === "HEALTHY") return "SOG'LOM";
  }
  return p;
}

function formatHostCrop(crop) {
  if (!crop) return "";
  if (currentLang === "uz") {
    const c = crop.toLowerCase();
    if (c.includes("cotton") || c.includes("g'oza")) return "G'OZA BARGI";
    if (c.includes("grape") || c.includes("uzum") || c.includes("vitis")) return "UZUM BARGI";
    if (c.includes("apple") || c.includes("olma")) return "OLMA BARGI";
    if (c.includes("peach") || c.includes("shaftoli")) return "SHAFTOLI BARGI";
    if (c.includes("tomato") || c.includes("pomidor")) return "POMIDOR PALAGI";
    if (c.includes("pomegranate") || c.includes("anor")) return "ANOR BARGI/MEVASI";
    if (c.includes("cucumber") || c.includes("bodring")) return "BODRING BARGI";
    if (c.includes("apricot") || c.includes("o'rik")) return "O'RIK BARGI";
    if (c.includes("ficus") || c.includes("fikus") || c.includes("xona") || c.includes("monstera") || c.includes("spatifillum") || c.includes("orxideya") || c.includes("gul")) return "XONA GULI / O'SIMLIGI";
    if (c.includes("plant") || c.includes("specimen") || c.includes("universal")) return "O'SIMLIK BARGI";
    return crop.replace(/_/g, " ").toUpperCase();
  }
  return crop.replace(/_/g, " ").toUpperCase();
}

function formatCostCategory(cat) {
  const map = {
    ZERO_COST: currentLang === "uz" ? "BEPUL (0 SO'M)" : "ZERO COST",
    LOW_COST_LOCAL_REMEDY: currentLang === "uz" ? "ARZON MAHALLIY VOSITA" : "AFFORDABLE LOCAL REMEDY",
    STANDARD_FUNGICIDE_BACTERICIDE: currentLang === "uz" ? "STANDART PREPARAT" : "STANDARD TREATMENT"
  };
  return map[cat] || cat;
}

// Speak Advisory via Web Speech Synthesis
function speakAdvisory() {
  if (!('speechSynthesis' in window)) {
    alert("Brauzeringiz ovozli eshittirishni qo'llab-quvvatlamaydi.");
    return;
  }
  const text = document.getElementById("advisoryUzText").textContent;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "uz-UZ";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// AI AGRONOMIST CHAT WITH PERSISTENT CONVERSATION HISTORY
// ==========================================================================
function initChatHistory() {
  try {
    const saved = sessionStorage.getItem("aurora_chat_history");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        chatHistory = parsed;
        // Clear default welcome before replaying saved conversation
        chatMessages.innerHTML = "";
        parsed.forEach((msg) => {
          appendChatBubble(msg.role, msg.content);
        });
      }
    }
  } catch (err) {
    console.warn("Could not restore chat history:", err);
  }
}

function saveChatHistory() {
  try {
    sessionStorage.setItem("aurora_chat_history", JSON.stringify(chatHistory.slice(-30)));
  } catch (err) {
    console.warn("Could not save chat history:", err);
  }
}

function handleClearChat() {
  chatHistory = [];
  try {
    sessionStorage.removeItem("aurora_chat_history");
  } catch (err) {}

  chatMessages.innerHTML = `
    <div class="chat-msg msg-assistant">
      <img class="msg-avatar-img" src="/images/agronomist_avatar.jpg" alt="Aurora Dala Agronomi" />
      <div class="msg-bubble" id="chatWelcomeBubble">
        ${i18n[currentLang].chatWelcome}
      </div>
    </div>
  `;
}

async function handleChatSubmit(e) {
  e.preventDefault();
  const q = chatInput.value.trim();
  if (!q) return;

  // Add user bubble
  appendChatBubble("user", q);
  chatInput.value = "";

  // Append user turn to history
  chatHistory.push({ role: "user", content: q });
  saveChatHistory();

  // Add typing bubble
  const typingText = currentLang === "en" ? "Agronomist is analyzing..." : "Agronom tahlil qilmoqda...";
  const typingBubble = appendChatBubble(
    "assistant",
    `<span class="typing-bubble"><span class="typing-dots"><span></span><span></span><span></span></span><span>${typingText}</span></span>`
  );

  try {
    const cropHint = cropSelect.value;
    const diseaseHint = lastDiagnosis
      ? (currentLang === "en" ? lastDiagnosis.primary_diagnosis.common_name_en : lastDiagnosis.primary_diagnosis.common_name_uz)
      : null;

    // Send history context (up to last 10 messages)
    const historyPayload = chatHistory.slice(-10);
    const effectiveRegion = (regionSelect && regionSelect.value && regionSelect.value !== "AUTO_GEO")
      ? regionSelect.value
      : currentDetectedRegion;

    const res = await fetch("/api/agronomist-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: q,
        crop: cropHint,
        disease: diseaseHint,
        region: effectiveRegion,
        lang: currentLang,
        history: historyPayload
      })
    });

    const data = await res.json();
    typingBubble.innerHTML = formatMarkdownText(data.answer);

    // Append assistant turn to history
    chatHistory.push({ role: "assistant", content: data.answer });
    saveChatHistory();
  } catch (err) {
    typingBubble.textContent = currentLang === "en"
      ? "An error occurred. Please try again."
      : "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.";
  }
}

function appendChatBubble(role, content) {
  const msgEl = document.createElement("div");
  msgEl.className = `chat-msg msg-${role}`;
  if (role === "assistant") {
    const avatar = document.createElement("img");
    avatar.className = "msg-avatar-img";
    avatar.src = "/images/agronomist_avatar.jpg";
    avatar.alt = "Aurora Dala Agronomi";
    msgEl.appendChild(avatar);
  }
  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.innerHTML = formatMarkdownText(content);
  msgEl.appendChild(bubble);
  chatMessages.appendChild(msgEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return bubble;
}

function formatMarkdownText(text) {
  if (!text) return "";
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\n/g, "<p></p>")
    .replace(/\n/g, "<br/>");
}

// ==========================================================================
// DISEASE ENCYCLOPEDIA CATALOG
// ==========================================================================
async function loadCatalog() {
  try {
    const res = await fetch("/api/disease-catalog");
    const data = await res.json();
    diseaseCatalogData = data.catalog;
    renderCatalog(activeCatalogFilter);
  } catch (err) {
    console.error("Error loading catalog:", err);
  }
}

function renderCatalog(filter) {
  if (!catalogGrid) return;
  activeCatalogFilter = filter || activeCatalogFilter || "ALL";
  catalogGrid.innerHTML = "";

  const items = diseaseCatalogData.filter((item) => {
    if (activeCatalogFilter === "ALL") return true;
    return (
      item.crop.includes(activeCatalogFilter) ||
      (item.crop_en && item.crop_en.toLowerCase().includes(activeCatalogFilter.toLowerCase()))
    );
  });

  const isEn = currentLang === "en";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "catalog-card";
    const name = isEn ? (item.name_en || item.name_uz) : item.name_uz;
    const cropText = isEn ? (item.crop_en || item.crop) : item.crop;
    const signs = isEn ? (item.visual_signs_en || item.visual_signs_uz) : item.visual_signs_uz;
    const season = isEn ? (item.calendar_season_en || item.calendar_season_uz) : item.calendar_season_uz;
    const dosage = isEn ? (item.recommended_dosage_en || item.recommended_dosage_uz) : item.recommended_dosage_uz;
    const signsLabel = isEn ? "Symptoms:" : "Belgilari:";
    const seasonSvg = `<svg class="inline-cat-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
    const seasonLabel = isEn ? `${seasonSvg} Season:` : `${seasonSvg} Mavsum:`;
    const dosageLabel = isEn ? "Recommended treatment:" : "Tavsiya me'yori:";

    const imgHtml = item.image_url
      ? `<div class="catalog-thumb-wrap"><img class="catalog-thumb" src="${item.image_url}" alt="${name}" loading="lazy" /></div>`
      : "";

    card.innerHTML = `
      ${imgHtml}
      <div class="catalog-card-header">
        <span class="crop-badge">${cropText}</span>
        <span class="threat-pill threat-${item.threat_level}" style="font-size: 10px; padding: 2px 8px;">${formatThreatLevel(item.threat_level)}</span>
      </div>
      <h4>${name}</h4>
      <p class="scientific-name-sm mono">${item.scientific_name}</p>
      <div class="catalog-info-row">
        <p><strong>${signsLabel}</strong> ${signs}</p>
        <span class="calendar-strip">${seasonLabel} ${season}</span>
        <div class="dosage-callout">
          <strong>${dosageLabel}</strong> ${dosage}
        </div>
      </div>
    `;
    catalogGrid.appendChild(card);
  });
}

// ==========================================================================
// PHYTOSANITARY MAP & CLIMATE RISKS
// ==========================================================================
async function loadPhytosanitaryMap() {
  try {
    const res = await fetch("/api/phytosanitary-map");
    const data = await res.json();
    phytosanitaryRegionsData = data.regions;
    renderPhytosanitaryMap(phytosanitaryRegionsData);
    renderVectorMap(phytosanitaryRegionsData);
    updateRegionalLiveBar();
  } catch (err) {
    console.error("Error loading map data:", err);
  }
}

function renderPhytosanitaryMap(regions) {
  if (!monitoringGrid) return;
  const data = regions || phytosanitaryRegionsData;
  if (!data || data.length === 0) return;
  monitoringGrid.innerHTML = "";

  const isEn = currentLang === "en";

  data.forEach((reg) => {
    const card = document.createElement("div");
    card.className = "region-risk-card";
    const regionName = isEn ? (reg.region_name_en || reg.region_name) : reg.region_name;
    const threat = isEn ? (reg.active_threat_en || reg.active_threat) : reg.active_threat;
    const advice = isEn ? (reg.advice_en || reg.advice_uz) : reg.advice_uz;
    const humidityLabel = isEn ? "Humidity:" : "Namlik:";

    card.innerHTML = `
      <div class="region-top">
        <span class="region-name-txt">${regionName}</span>
        <span class="risk-pill risk-${reg.risk_level}">${reg.risk_level}</span>
      </div>
      <div class="region-weather mono">
        <span>
          <svg class="inline-weather-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
          </svg>
          ${reg.temperature}
        </span>
        <span>
          <svg class="inline-weather-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
          </svg>
          ${humidityLabel} ${reg.humidity}
        </span>
      </div>
      <p class="region-threat-alert">
        <svg class="inline-alert-svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        ${threat}
      </p>
      <p class="region-advice">${advice}</p>
    `;
    card.addEventListener("click", () => {
      // Pick region in dropdown and switch to scanner
      regionSelect.value = reg.region_name;
      handleRegionChange();
      switchTab("tab-scanner");
    });
    monitoringGrid.appendChild(card);
  });
}

// ==========================================================================
// UZBEKISTAN INTERACTIVE METEOROLOGICAL & RISK MAP (VECTOR CORE)
// ==========================================================================
const UZB_MAP_GEOMETRY = [
  {
    id: "karakalpakstan",
    name_uz: "Qoraqalpog'iston",
    name_en: "Karakalpakstan",
    path: "M 30,130 L 70,60 L 220,50 L 320,80 L 340,150 L 310,210 L 260,250 L 210,240 L 160,260 L 90,240 L 40,190 Z",
    cx: 170,
    cy: 140
  },
  {
    id: "khorezm",
    name_uz: "Xorazm",
    name_en: "Khorezm",
    path: "M 260,250 L 310,210 L 345,230 L 350,285 L 320,320 L 275,305 L 260,270 Z",
    cx: 305,
    cy: 268
  },
  {
    id: "navoiy",
    name_uz: "Navoiy",
    name_en: "Navoi",
    path: "M 320,80 L 450,55 L 530,90 L 580,180 L 520,240 L 490,230 L 440,260 L 390,260 L 345,230 L 340,150 Z",
    cx: 440,
    cy: 165
  },
  {
    id: "bukhara",
    name_uz: "Buxoro",
    name_en: "Bukhara",
    path: "M 345,230 L 390,260 L 440,260 L 470,290 L 460,340 L 410,380 L 360,370 L 340,320 L 350,285 Z",
    cx: 405,
    cy: 315
  },
  {
    id: "samarkand",
    name_uz: "Samarqand",
    name_en: "Samarkand",
    path: "M 470,290 L 520,240 L 575,250 L 590,300 L 565,355 L 505,355 L 470,325 Z",
    cx: 530,
    cy: 300
  },
  {
    id: "kashkadarya",
    name_uz: "Qashqadaryo",
    name_en: "Kashkadarya",
    path: "M 460,340 L 505,355 L 565,355 L 590,380 L 580,440 L 505,435 L 450,400 L 410,380 Z",
    cx: 515,
    cy: 395
  },
  {
    id: "surkhandarya",
    name_uz: "Surxondaryo",
    name_en: "Surkhandarya",
    path: "M 590,380 L 635,360 L 670,410 L 660,470 L 610,475 L 580,440 Z",
    cx: 625,
    cy: 425
  },
  {
    id: "jizzakh",
    name_uz: "Jizzax",
    name_en: "Jizzakh",
    path: "M 575,250 L 625,210 L 670,235 L 665,290 L 615,310 L 590,300 Z",
    cx: 625,
    cy: 260
  },
  {
    id: "sirdaryo",
    name_uz: "Sirdaryo",
    name_en: "Syrdarya",
    path: "M 670,235 L 705,215 L 720,250 L 700,290 L 665,290 Z",
    cx: 690,
    cy: 255
  },
  {
    id: "tashkent_region",
    name_uz: "Toshkent v.",
    name_en: "Tashkent R.",
    path: "M 685,150 L 760,110 L 805,150 L 800,215 L 740,225 L 705,215 L 670,235 L 665,190 Z",
    cx: 745,
    cy: 155
  },
  {
    id: "tashkent_city",
    name_uz: "Toshkent sh.",
    name_en: "Tashkent City",
    path: "M 725,180 L 750,180 L 755,198 L 738,206 L 720,195 Z",
    cx: 737,
    cy: 192
  },
  {
    id: "namangan",
    name_uz: "Namangan",
    name_en: "Namangan",
    path: "M 800,215 L 805,150 L 860,165 L 890,200 L 850,225 L 815,225 Z",
    cx: 845,
    cy: 190
  },
  {
    id: "fergana",
    name_uz: "Farg'ona",
    name_en: "Fergana",
    path: "M 785,255 L 825,235 L 870,240 L 895,275 L 845,290 L 795,280 Z",
    cx: 840,
    cy: 262
  },
  {
    id: "andijan",
    name_uz: "Andijon",
    name_en: "Andijan",
    path: "M 870,240 L 890,200 L 935,225 L 940,260 L 895,275 Z",
    cx: 905,
    cy: 240
  }
];

let activeMapLayer = "risk";

function getLayerColorAndValue(reg, layer) {
  if (!reg) return { fill: "#18181b", stroke: "#27272a", label: "--" };
  if (layer === "risk") {
    const r = (reg.risk_level || "MEDIUM").toUpperCase();
    if (r === "LOW") return { fill: "#18181b", stroke: "#27272a", label: "PAST" };
    if (r === "MEDIUM") return { fill: "#27272a", stroke: "#3f3f46", label: "O'RTA" };
    if (r === "HIGH") return { fill: "#3f3f46", stroke: "#71717a", label: "YUQORI" };
    return { fill: "#52525b", stroke: "#ffffff", label: "KRITIK" };
  } else if (layer === "temp") {
    const t = reg.temperature_num !== undefined ? reg.temperature_num : parseFloat(reg.temperature) || 24;
    let fill = "#18181b";
    if (t >= 35) fill = "#52525b";
    else if (t >= 25) fill = "#3f3f46";
    else if (t >= 15) fill = "#27272a";
    return { fill, stroke: "#3f3f46", label: `${Math.round(t)}°C` };
  } else if (layer === "humidity") {
    const h = reg.humidity_num !== undefined ? reg.humidity_num : parseInt(reg.humidity) || 45;
    let fill = "#18181b";
    if (h >= 70) fill = "#52525b";
    else if (h >= 50) fill = "#3f3f46";
    else if (h >= 30) fill = "#27272a";
    return { fill, stroke: "#3f3f46", label: `${h}%` };
  } else if (layer === "wind") {
    const w = reg.wind_num !== undefined ? reg.wind_num : parseFloat(reg.wind_speed) || 6;
    let fill = "#18181b";
    if (w >= 18) fill = "#52525b";
    else if (w >= 12) fill = "#3f3f46";
    else if (w >= 6) fill = "#27272a";
    return { fill, stroke: "#3f3f46", label: `${Math.round(w)} km/s` };
  }
  return { fill: "#27272a", stroke: "#3f3f46", label: "" };
}

function renderMapLegend(layer) {
  if (!mapLegend) return;
  const isEn = currentLang === "en";
  if (layer === "risk") {
    mapLegend.innerHTML = `
      <span class="legend-item"><span class="legend-color-box" style="background:#18181b;"></span> ${isEn ? "Low" : "Past"}</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#27272a;"></span> ${isEn ? "Medium" : "O'rta"}</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#3f3f46;"></span> ${isEn ? "High" : "Yuqori"}</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#52525b; border-color:#fff;"></span> ${isEn ? "Critical" : "Kritik"}</span>
    `;
  } else if (layer === "temp") {
    mapLegend.innerHTML = `
      <span class="legend-item"><span class="legend-color-box" style="background:#18181b;"></span> &lt; 15°C</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#27272a;"></span> 15-25°C</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#3f3f46;"></span> 25-35°C</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#52525b;"></span> &gt; 35°C</span>
    `;
  } else if (layer === "humidity") {
    mapLegend.innerHTML = `
      <span class="legend-item"><span class="legend-color-box" style="background:#18181b;"></span> &lt; 30%</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#27272a;"></span> 30-50%</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#3f3f46;"></span> 50-70%</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#52525b;"></span> &gt; 70%</span>
    `;
  } else if (layer === "wind") {
    mapLegend.innerHTML = `
      <span class="legend-item"><span class="legend-color-box" style="background:#18181b;"></span> &lt; 6 km/s</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#27272a;"></span> 6-12 km/s</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#3f3f46;"></span> 12-18 km/s</span>
      <span class="legend-item"><span class="legend-color-box" style="background:#52525b;"></span> &gt; 18 km/s</span>
    `;
  }
}

function renderVectorMap(regionsData) {
  if (!uzbekistanVectorMap) return;
  const isEn = currentLang === "en";
  renderMapLegend(activeMapLayer);

  const regMap = {};
  (regionsData || phytosanitaryRegionsData || []).forEach((r) => {
    if (r.region_id) regMap[r.region_id] = r;
  });

  let svgContent = "";

  UZB_MAP_GEOMETRY.forEach((geo) => {
    const reg = regMap[geo.id] || {};
    const { fill, stroke, label } = getLayerColorAndValue(reg, activeMapLayer);
    const displayName = isEn ? geo.name_en : geo.name_uz;
    const fontSize = geo.id === "tashkent_city" ? "9" : "11";
    const subFontSize = geo.id === "tashkent_city" ? "8" : "9.5";
    const subY = geo.cy + (geo.id === "tashkent_city" ? 9 : 13);
    const mainY = geo.cy - (geo.id === "tashkent_city" ? 2 : 2);

    svgContent += `
      <g class="region-group" data-region-id="${geo.id}">
        <path
          id="map-region-${geo.id}"
          class="uzb-map-region"
          d="${geo.path}"
          fill="${fill}"
          stroke="${stroke}"
          data-region-id="${geo.id}"
        />
        <text class="region-svg-label" x="${geo.cx}" y="${mainY}" font-size="${fontSize}">${displayName}</text>
        <text class="region-svg-sub" x="${geo.cx}" y="${subY}" font-size="${subFontSize}">${label}</text>
      </g>
    `;
  });

  uzbekistanVectorMap.innerHTML = svgContent;

  // Bind interactive hover and click
  uzbekistanVectorMap.querySelectorAll(".region-group").forEach((group) => {
    const rid = group.getAttribute("data-region-id");
    const reg = regMap[rid];

    group.addEventListener("mouseenter", () => {
      highlightMapRegion(rid);
      if (reg) updateMapQuickHud(reg);
    });

    group.addEventListener("click", () => {
      if (reg) {
        regionSelect.value = reg.region_name;
        handleRegionChange();
        scrollToRegionCard(rid);
      }
    });
  });
}

function highlightMapRegion(regionId) {
  if (!uzbekistanVectorMap) return;
  uzbekistanVectorMap.querySelectorAll(".uzb-map-region").forEach((path) => {
    if (path.getAttribute("data-region-id") === regionId) {
      path.classList.add("active-region");
    } else {
      path.classList.remove("active-region");
    }
  });
}

function updateMapQuickHud(reg) {
  if (!mapQuickHud || !reg) return;
  const isEn = currentLang === "en";
  if (hudRegionTitle) hudRegionTitle.textContent = isEn ? (reg.region_name_en || reg.region_name) : reg.region_name;
  if (hudWeatherIcon) hudWeatherIcon.textContent = reg.weather_icon || "🌤️";
  if (hudTempPill) hudTempPill.textContent = reg.temperature || "--°C";
  if (hudHumidityPill) hudHumidityPill.textContent = reg.humidity || "--%";
  if (hudWindPill) hudWindPill.textContent = reg.wind_speed || "-- km/s";
  if (hudRiskPill) {
    hudRiskPill.textContent = formatThreatLevel(reg.risk_level || "MEDIUM");
  }
  if (hudSprayBadge) {
    const sprayAdv = reg.spraying_advisory;
    const badgeText = sprayAdv
      ? (isEn ? sprayAdv.badge_en : sprayAdv.badge_uz)
      : (isEn ? "Spraying: Optimal window" : "Dori purkash: Qulay fursat ✓");
    hudSprayBadge.textContent = badgeText;
    const status = (sprayAdv?.status || "OPTIMAL").toLowerCase();
    hudSprayBadge.className = `spray-badge badge-${status}`;
  }
  if (hudSubAdvice) {
    hudSubAdvice.textContent = isEn ? (reg.advice_en || reg.advice_uz) : reg.advice_uz;
  }
}

function scrollToRegionCard(regionId) {
  document.querySelectorAll(".region-risk-card").forEach((c) => c.classList.remove("card-highlighted"));
  const cards = Array.from(document.querySelectorAll(".region-risk-card"));
  const targetCard = cards.find((c) => {
    const txt = c.textContent.toLowerCase();
    return txt.includes(regionId.toLowerCase());
  });
  if (targetCard) {
    targetCard.classList.add("card-highlighted");
    targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function updateRegionalLiveBar() {
  if (!regionalLiveBar) return;
  const isEn = currentLang === "en";
  let selectedRegionName = regionSelect ? regionSelect.value : "";
  if (!selectedRegionName || selectedRegionName === "AUTO_GEO") {
    selectedRegionName = currentDetectedRegion || "Toshkent viloyati";
  }

  let reg = (phytosanitaryRegionsData || []).find((r) =>
    r.region_name === selectedRegionName ||
    selectedRegionName.includes(r.region_name) ||
    (r.region_name_en && selectedRegionName.includes(r.region_name_en))
  );

  if (!reg && phytosanitaryRegionsData && phytosanitaryRegionsData.length > 0) {
    reg = phytosanitaryRegionsData[0];
  }

  if (reg) {
    if (liveBarRegion) liveBarRegion.textContent = isEn ? (reg.region_name_en || reg.region_name) : reg.region_name;
    if (liveBarIcon) liveBarIcon.textContent = reg.weather_icon || "🌤️";
    if (liveBarCondition) liveBarCondition.textContent = isEn ? (reg.condition_en || "Fair") : (reg.condition_uz || "Musaffo ochiq havo");
    if (liveBarTemp) liveBarTemp.textContent = reg.temperature || "--°C";
    if (liveBarHumidity) liveBarHumidity.textContent = reg.humidity || "--%";
    if (liveBarWind) liveBarWind.textContent = reg.wind_speed || "-- km/s";
    if (liveBarSprayBadge) {
      const spray = reg.spraying_advisory;
      const badgeText = spray
        ? (isEn ? spray.badge_en : spray.badge_uz)
        : (isEn ? "Spraying: Optimal window" : "Dori purkash: Qulay fursat ✓");
      liveBarSprayBadge.textContent = badgeText;
      const status = (spray?.status || "OPTIMAL").toLowerCase();
      liveBarSprayBadge.className = `spray-badge badge-${status}`;
    }
  }
}

async function handleWeatherRefresh() {
  if (!refreshWeatherBtn) return;
  try {
    refreshWeatherBtn.classList.add("spinning");
    refreshWeatherBtn.disabled = true;
    if (refreshWeatherBtnText) {
      refreshWeatherBtnText.textContent = currentLang === "en" ? "Refreshing..." : "Yangilanmoqda...";
    }
    const res = await fetch("/api/phytosanitary-map?refresh=true");
    const data = await res.json();
    phytosanitaryRegionsData = data.regions;
    renderPhytosanitaryMap(phytosanitaryRegionsData);
    renderVectorMap(phytosanitaryRegionsData);
    updateRegionalLiveBar();
    if (refreshWeatherBtnText) {
      refreshWeatherBtnText.textContent = currentLang === "en" ? "Updated ✓" : "Yangilandi ✓";
    }
  } catch (err) {
    console.error("Refresh weather failed:", err);
  } finally {
    setTimeout(() => {
      refreshWeatherBtn.classList.remove("spinning");
      refreshWeatherBtn.disabled = false;
      if (refreshWeatherBtnText) {
        refreshWeatherBtnText.textContent = currentLang === "en" ? "Live Refresh" : "Jonli yangilash";
      }
    }, 1500);
  }
}

// ==========================================================================
// AUTONOMOUS GEOLOCATION & REGIONAL MATCHING (WITH PERSISTENT REGION MEMORY)
// ==========================================================================
const UZBEKISTAN_ALL_REGIONS = [
  { id: "namangan", name_uz: "Namangan viloyati", name_en: "Namangan Region" },
  { id: "andijan", name_uz: "Andijon viloyati", name_en: "Andijan Region" },
  { id: "fergana", name_uz: "Farg'ona viloyati", name_en: "Fergana Region" },
  { id: "tashkent_region", name_uz: "Toshkent viloyati", name_en: "Tashkent Region" },
  { id: "tashkent_city", name_uz: "Toshkent shahri", name_en: "Tashkent City" },
  { id: "samarkand", name_uz: "Samarqand viloyati", name_en: "Samarkand Region" },
  { id: "bukhara", name_uz: "Buxoro viloyati", name_en: "Bukhara Region" },
  { id: "navoiy", name_uz: "Navoiy viloyati", name_en: "Navoi Region" },
  { id: "jizzakh", name_uz: "Jizzax viloyati", name_en: "Jizzakh Region" },
  { id: "sirdaryo", name_uz: "Sirdaryo viloyati", name_en: "Syrdarya Region" },
  { id: "kashkadarya", name_uz: "Qashqadaryo viloyati", name_en: "Kashkadarya Region" },
  { id: "surkhandarya", name_uz: "Surxondaryo viloyati", name_en: "Surkhandarya Region" },
  { id: "khorezm", name_uz: "Xorazm viloyati", name_en: "Khorezm Region" },
  { id: "karakalpakstan", name_uz: "Qoraqalpog'iston Respublikasi", name_en: "Republic of Karakalpakstan" }
];

async function initAutoGeolocation() {
  renderRegionPicker();

  // 1. Immediately apply previously saved region from localStorage if present
  const savedJson = localStorage.getItem("aurora_saved_region");
  if (savedJson) {
    try {
      const reg = JSON.parse(savedJson);
      applyRegionData(reg, "saved");
    } catch (e) {}
  } else {
    if (geoStatusText) {
      geoStatusText.textContent = currentLang === "en" ? "📍 GPS: Locating..." : "📍 GPS: Aniqlanmoqda...";
    }
  }

  // 2. Query browser GPS with 12-second timeout and high accuracy
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        localStorage.setItem("aurora_saved_lat", lat);
        localStorage.setItem("aurora_saved_lon", lon);
        await applyLocationCoordinates(lat, lon, "gps");
      },
      async (err) => {
        console.warn("Browser GPS unavailable or timed out:", err.message);
        // CRITICAL: If we already have a saved region in localStorage, KEEP IT!
        // Do NOT overwrite user's region with Tashkent from IP fallback!
        const existing = localStorage.getItem("aurora_saved_region");
        if (existing) {
          try {
            applyRegionData(JSON.parse(existing), "saved");
            return;
          } catch (e) {}
        }
        await applyLocationCoordinates(null, null, "ip");
      },
      { timeout: 12000, maximumAge: 600000, enableHighAccuracy: true }
    );
  } else {
    const existing = localStorage.getItem("aurora_saved_region");
    if (existing) {
      try {
        applyRegionData(JSON.parse(existing), "saved");
        return;
      } catch (e) {}
    }
    await applyLocationCoordinates(null, null, "ip");
  }
}

async function applyLocationCoordinates(lat, lon, source) {
  try {
    let url = "/api/locate";
    if (lat !== null && lon !== null) {
      url += `?lat=${lat}&lon=${lon}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    if (data.success && data.region) {
      const reg = data.region;

      // If source is 'ip' and returned Tashkent, but user has previously saved a different region, keep the saved one!
      const existing = localStorage.getItem("aurora_saved_region");
      if (source === "ip" && reg.region_id.includes("tashkent") && existing) {
        try {
          const prevReg = JSON.parse(existing);
          if (!prevReg.region_id.includes("tashkent")) {
            applyRegionData(prevReg, "saved");
            return;
          }
        } catch (e) {}
      }

      localStorage.setItem("aurora_saved_region", JSON.stringify(reg));
      applyRegionData(reg, source);
    }
  } catch (err) {
    console.error("Auto-location failed:", err);
    const existing = localStorage.getItem("aurora_saved_region");
    if (existing) {
      try {
        applyRegionData(JSON.parse(existing), "saved");
      } catch (e) {}
    }
  }
}

function applyRegionData(reg, source) {
  currentDetectedRegion = reg.region_name_uz;
  const isEn = currentLang === "en";
  const name = isEn ? (reg.region_name_en || reg.region_name_uz) : reg.region_name_uz;

  let prefix = "📍 GPS: ";
  if (source === "saved") prefix = "📍 ";
  else if (source === "manual") prefix = "📍 ";
  else if (source === "ip") prefix = "📍 ";

  if (geoStatusText) {
    geoStatusText.textContent = `${prefix}${name}`;
  }
  const autoRegionTitle = document.getElementById("autoRegionTitle");
  if (autoRegionTitle) {
    autoRegionTitle.textContent = name;
  }
  const autoRegionDesc = document.getElementById("autoRegionDesc");
  if (autoRegionDesc) {
    autoRegionDesc.textContent = isEn
      ? "Territory active. Click to switch region if needed."
      : "Hudud faol. Bosing: viloyatni o'zgartirish yoki yangilash.";
  }
  if (regionSelect) {
    regionSelect.value = reg.region_name_uz;
  }
  if (autoGeoOption) {
    autoGeoOption.textContent = isEn ? `📍 ${name} (Auto)` : `📍 ${name} (Avto)`;
    autoGeoOption.value = reg.region_name_uz;
  }

  updateRegionalLiveBar();
  updateMapQuickHud(reg);
  highlightMapRegion(reg.region_id);
}

// Region Picker Modal Management
function openRegionPickerModal() {
  const modal = document.getElementById("regionPickerModal");
  if (modal) {
    renderRegionPicker();
    modal.classList.remove("hidden");
    modal.style.display = "flex";
  }
}

function closeRegionPickerModal() {
  const modal = document.getElementById("regionPickerModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
  }
}

function renderRegionPicker() {
  const container = document.getElementById("regionsGridPicker");
  if (!container) return;
  container.innerHTML = "";

  const isEn = currentLang === "en";
  UZBEKISTAN_ALL_REGIONS.forEach((r) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const isSelected = currentDetectedRegion === r.name_uz;
    btn.className = `region-pick-btn ${isSelected ? "active" : ""}`;
    const displayName = isEn ? r.name_en : r.name_uz;
    btn.innerHTML = `
      <span class="region-pick-name">${displayName}</span>
      ${isSelected ? '<span class="region-check-mark">✓</span>' : ''}
    `;
    btn.addEventListener("click", () => selectRegionManually(r.id));
    container.appendChild(btn);
  });
}

async function selectRegionManually(regionId) {
  try {
    const res = await fetch(`/api/locate?region_id=${encodeURIComponent(regionId)}`);
    const data = await res.json();
    if (data.success && data.region) {
      const reg = data.region;
      localStorage.setItem("aurora_saved_region", JSON.stringify(reg));
      applyRegionData(reg, "manual");
      closeRegionPickerModal();
    }
  } catch (err) {
    console.error("Failed to select region:", err);
  }
}

// ==========================================================================
// SCAN HISTORY & REPORT AUDIT
// ==========================================================================
function addToHistory(payload) {
  const diag = payload.diagnosis;
  const item = {
    id: Date.now(),
    crop: payload.crop_hint || diag.specimen_identified,
    disease_uz: diag.primary_diagnosis.common_name_uz,
    disease_en: diag.primary_diagnosis.common_name_en,
    threat: diag.threat_level,
    confidence: Math.round(diag.confidence_score * 100),
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  };

  scanHistory.unshift(item);
  renderHistory();
}

function renderHistory() {
  if (!historyList) return;
  if (scanHistory.length === 0) {
    if (emptyHistoryMsg) emptyHistoryMsg.style.display = "block";
    return;
  }
  if (emptyHistoryMsg) emptyHistoryMsg.style.display = "none";

  historyList.innerHTML = "";
  const isEn = currentLang === "en";
  const confText = isEn ? "Certainty" : "Ishonch";

  scanHistory.forEach((item) => {
    const card = document.createElement("div");
    card.className = "history-item-card";
    const title = isEn ? (item.disease_en || item.disease_uz) : item.disease_uz;
    card.innerHTML = `
      <div class="hist-left">
        <div>
          <h4 class="hist-title">${title}</h4>
          <p class="hist-meta mono">${item.crop} • ${item.date} ${item.time}</p>
        </div>
      </div>
      <div style="text-align: right;">
        <span class="threat-pill threat-${item.threat}" style="font-size: 10px; padding: 3px 8px;">${formatThreatLevel(item.threat)}</span>
        <p class="hist-meta mono" style="margin-top: 4px;">${item.confidence}% ${confText}</p>
      </div>
    `;
    historyList.appendChild(card);
  });
}

// ==========================================================================
// REGIONS TRANSLATION & LANGUAGE TOGGLE
// ==========================================================================
const REGION_I18N = {
  "andijan": { uz: "Andijon viloyati", en: "Andijan Region" },
  "bukhara": { uz: "Buxoro viloyati", en: "Bukhara Region" },
  "fergana": { uz: "Farg'ona viloyati", en: "Fergana Region" },
  "jizzakh": { uz: "Jizzax viloyati", en: "Jizzakh Region" },
  "khorezm": { uz: "Xorazm viloyati", en: "Khorezm Region" },
  "namangan": { uz: "Namangan viloyati", en: "Namangan Region" },
  "navoiy": { uz: "Navoiy viloyati", en: "Navoi Region" },
  "kashkadarya": { uz: "Qashqadaryo viloyati", en: "Kashkadarya Region" },
  "karakalpakstan": { uz: "Qoraqalpog'iston Respublikasi", en: "Republic of Karakalpakstan" },
  "samarkand": { uz: "Samarqand viloyati", en: "Samarkand Region" },
  "sirdaryo": { uz: "Sirdaryo viloyati", en: "Syrdarya Region" },
  "surkhandarya": { uz: "Surxondaryo viloyati", en: "Surkhandarya Region" },
  "tashkent_region": { uz: "Toshkent viloyati", en: "Tashkent Region" },
  "tashkent_city": { uz: "Toshkent shahri", en: "Tashkent City" }
};

function toggleLanguage() {
  currentLang = currentLang === "uz" ? "en" : "uz";
  const flagBadge = langToggle.querySelector(".flag-badge");
  if (flagBadge) {
    flagBadge.textContent = currentLang.toUpperCase();
  }
  const langName = langToggle.querySelector(".lang-name");
  if (langName) {
    langName.textContent = currentLang === "uz" ? "O'zbekcha" : "English";
  }

  // Update all [data-i18n] text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[currentLang] && I18N[currentLang][key]) {
      const textSpan = el.querySelector("span[id$='Text']") || el.querySelector(".btn-label");
      if (textSpan) {
        textSpan.textContent = I18N[currentLang][key];
      } else if (el.querySelector(".label-icon")) {
        const iconSpan = el.querySelector(".label-icon").outerHTML;
        el.innerHTML = `${iconSpan} ${I18N[currentLang][key]}`;
      } else if (el.querySelector("svg")) {
        const svgHtml = el.querySelector("svg").outerHTML;
        el.innerHTML = `${svgHtml} <span>${I18N[currentLang][key]}</span>`;
      } else {
        el.textContent = I18N[currentLang][key];
      }
    }
  });

  // Localize crop select dropdown options
  Array.from(cropSelect.options).forEach((opt) => {
    if (opt.value === "AUTO") opt.textContent = I18N[currentLang].cropAuto;
    else if (opt.value === "FRUIT_TREE") opt.textContent = I18N[currentLang].cropFruitTree;
    else if (opt.value === "COTTON") opt.textContent = I18N[currentLang].cropCotton;
    else if (opt.value === "GRAPE") opt.textContent = I18N[currentLang].cropGrape;
    else if (opt.value === "VEGETABLE") opt.textContent = I18N[currentLang].cropVegetable;
    else if (opt.value === "TREES") opt.textContent = I18N[currentLang].cropTrees;
  });

  // Localize region select options
  Array.from(regionSelect.options).forEach((opt) => {
    if (opt.value === "AUTO_GEO" || opt.id === "autoGeoOption") {
      opt.textContent = currentLang === "en" ? `📍 ${currentDetectedRegion} (Auto)` : `📍 ${currentDetectedRegion} (Avto)`;
      return;
    }
    const val = opt.value.toLowerCase();
    for (const [key, names] of Object.entries(REGION_I18N)) {
      if (val.includes(key) || val.includes(names.uz.toLowerCase().substring(0, 5))) {
        opt.textContent = names[currentLang];
        break;
      }
    }
  });

  // Localize quick prompt buttons
  document.querySelectorAll(".quick-prompt-btn").forEach((btn) => {
    const q = currentLang === "en" ? btn.getAttribute("data-q-en") : btn.getAttribute("data-q-uz");
    const lbl = currentLang === "en" ? btn.getAttribute("data-lbl-en") : btn.getAttribute("data-lbl-uz");
    if (q) btn.setAttribute("data-q", q);
    const lblSpan = btn.querySelector(".quick-lbl");
    if (lblSpan && lbl) {
      lblSpan.textContent = lbl;
    } else if (lbl) {
      btn.textContent = lbl;
    }
  });

  // Localize chat input placeholder & welcome greeting
  if (chatInput) chatInput.placeholder = I18N[currentLang].chatPlaceholder;
  const welcomeBubble = document.getElementById("chatWelcomeBubble");
  if (welcomeBubble) welcomeBubble.innerHTML = I18N[currentLang].chatWelcome;

  // Re-render dynamic elements
  loadSampleCases();
  renderCatalog(activeCatalogFilter);
  renderPhytosanitaryMap(phytosanitaryRegionsData);
  renderVectorMap(phytosanitaryRegionsData);
  updateRegionalLiveBar();
  renderHistory();
  if (lastDiagnosisPayload) {
    renderDiagnosis(lastDiagnosisPayload);
  }
}
