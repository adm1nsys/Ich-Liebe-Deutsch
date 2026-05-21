// ==========================================
// 1. СТИЛИ (CSS)
// ==========================================
const styleElement = document.createElement('style');
styleElement.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

    :root {
        --bg-color: #0f172a;        
        --surface-color: #1e293b;   
        --text-primary: #f8fafc;    
        --text-secondary: #94a3b8;  
        --accent-red: #ff4b2b;      
        --accent-gold: #f5af19;     
        --accent-green: #10b981;
        --border-color: rgba(255, 255, 255, 0.1);
        --header-bg: rgba(15, 23, 42, 0.7);
        --hover-bg: rgba(255, 255, 255, 0.03);
        --content-bg: rgba(0, 0, 0, 0.2);
        --shadow-color: rgba(0, 0, 0, 0.2);
    }

    @media (prefers-color-scheme: light) {
        :root {
            --bg-color: #f8fafc;        
            --surface-color: #ffffff;   
            --text-primary: #0f172a;    
            --text-secondary: #64748b;  
            --accent-red: #e11d48;      
            --accent-gold: #d97706;     
            --accent-green: #059669;
            --border-color: rgba(0, 0, 0, 0.1);
            --header-bg: rgba(255, 255, 255, 0.85);
            --hover-bg: rgba(0, 0, 0, 0.03);
            --content-bg: rgba(0, 0, 0, 0.02);
            --shadow-color: rgba(0, 0, 0, 0.06);
        }
    }

    body {
        margin: 0; padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-color);
        color: var(--text-primary);
        min-height: 100vh;
        display: flex; flex-direction: column;
        transition: background-color 0.4s ease, color 0.4s ease;
        overflow-x: hidden;
    }

    header {
        position: fixed; top: 0; left: 0; width: 100%;
        padding: 1rem 2rem; box-sizing: border-box;
        display: flex; align-items: center; gap: 1.5rem;
        background: var(--header-bg);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        z-index: 1000;
    }

    .icon-btn {
        background: transparent; border: none;
        color: var(--text-secondary); cursor: pointer;
        padding: 0.5rem; border-radius: 0.75rem;
        transition: all 0.4s ease; display: flex; align-items: center; justify-content: center;
    }

    .icon-btn:hover { background: var(--hover-bg); color: var(--accent-gold); transform: translateY(-2px); }

    main {
        flex: 1; margin-top: 80px; padding: 2rem;
        max-width: 800px; width: 100%;
        margin-left: auto; margin-right: auto; box-sizing: border-box;
        display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
    }

    h1 {
        font-size: 2.3rem; font-weight: 800; text-align: center; margin-bottom: 1.5rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    /* --- RULES SCREEN --- */
    .rules-container { width: 100%; display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
    .rule-card {
        background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px var(--shadow-color);
        display: flex; flex-direction: column; gap: 0.5rem; text-align: left; width: 100%; box-sizing: border-box;
    }
    .rule-header { font-size: 1.3rem; font-weight: 800; color: var(--accent-gold); }
    .rule-desc { font-size: 0.95rem; color: var(--text-primary); line-height: 1.5; white-space: pre-line; }

    .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; width: 100%; margin-top: 2rem; }
    .btn {
        padding: 1rem 2rem; font-size: 1.1rem; font-weight: 600; cursor: pointer;
        border-radius: 0.75rem; border: none; transition: all 0.4s ease;
        background: var(--surface-color); color: var(--text-primary);
        border: 1px solid var(--border-color); box-shadow: 0 4px 6px var(--shadow-color);
    }
    .btn:hover { border-color: var(--accent-gold); transform: translateY(-3px); box-shadow: 0 10px 15px var(--shadow-color); }
    .btn.primary { background: linear-gradient(135deg, var(--accent-gold), var(--accent-red)); color: white; border: none; }
    .btn.primary:hover { filter: brightness(1.1); }

    /* --- GAME SCREEN --- */
    .game-container { display: none; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 50vh; text-align: center; }
    
    .prompt-box { margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.5rem; align-items: center; }
    .prompt-title { font-size: 1.1rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; }
    .prompt-verb { font-size: 2.8rem; font-weight: 800; color: var(--text-primary); }
    .prompt-translation { font-size: 1.4rem; color: var(--text-secondary); font-style: italic; }
    .prompt-pronoun-wrap { font-size: 1.5rem; color: var(--text-primary); margin-top: 1rem; }
    .prompt-pronoun { font-size: 2rem; font-weight: 800; color: var(--accent-gold); }

    .input-box {
        font-size: 3.5rem; font-weight: 800; color: var(--accent-gold);
        min-height: 4.5rem; border-bottom: 4px solid var(--border-color);
        min-width: 60%; text-align: center; margin-bottom: 1.5rem;
        transition: border-color 0.3s ease, color 0.3s ease;
        display: flex; align-items: center; justify-content: center;
        letter-spacing: 1px;
    }
    .input-box.correct { border-color: var(--accent-green); color: var(--accent-green); }
    .input-box.wrong { border-color: var(--accent-red); color: var(--accent-red); animation: shake 0.4s ease; }
    .input-box:empty::before { content: attr(data-placeholder); color: var(--text-secondary); opacity: 0.3; font-size: 2rem; font-weight: 600; }

    .game-hints { font-size: 1rem; color: var(--text-secondary); opacity: 0.7; }
    .attempts-badge { background: rgba(225, 29, 72, 0.1); color: var(--accent-red); padding: 0.3rem 0.8rem; border-radius: 1rem; font-weight: 600; margin-bottom: 1rem; display: none; }

    .game-counters {
        display: flex; gap: 2rem; justify-content: center;
        font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;
    }
    .game-counters b { color: var(--text-primary); }

    .settings-row {
        display: flex; flex-direction: column; align-items: center; gap: 0.5rem; margin-top: 1rem;
        color: var(--text-secondary); font-size: 0.95rem; text-align: center;
    }
    .custom-select {
        background: var(--bg-color); color: var(--text-primary); border: 1px solid var(--border-color);
        padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1rem; font-family: 'Inter', sans-serif;
        outline: none; cursor: pointer; transition: border-color 0.3s;
    }
    .custom-select:focus { border-color: var(--accent-gold); }

    .pill-group {
        display: flex; flex-wrap: wrap; justify-content: center; gap: 0.65rem;
        max-width: 760px;
    }
    .pill-btn {
        background: var(--surface-color); border: 1px solid var(--border-color);
        color: var(--text-primary); padding: 0.75rem 1rem; border-radius: 999px;
        font-size: 0.95rem; font-weight: 800; cursor: pointer; transition: all 0.3s ease;
    }
    .pill-btn:hover { border-color: var(--accent-gold); transform: translateY(-2px); }
    .pill-btn.active {
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        color: white; border-color: transparent; box-shadow: 0 4px 10px rgba(255, 75, 43, 0.25);
    }

    /* --- MODALS / ALERTS --- */
    .modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.6); backdrop-filter: blur(5px);
        display: flex; align-items: center; justify-content: center; z-index: 2000;
        opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    }
    .modal-overlay.active { opacity: 1; pointer-events: auto; }
    .modal-content {
        background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 1.5rem; padding: 2.5rem; text-align: center; max-width: 420px; width: 90%;
        box-shadow: 0 20px 25px rgba(0,0,0,0.3); transform: scale(0.9); transition: transform 0.3s ease;
        box-sizing: border-box;
    }
    .modal-overlay.active .modal-content { transform: scale(1); }
    .modal-content h2 { margin-top: 0; color: var(--text-primary); font-size: 1.8rem; }
    .modal-content p { color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.5; }
    .modal-content .btn-group { flex-direction: column; }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        75% { transform: translateX(-10px); }
    }
`;
document.head.appendChild(styleElement);

function createSVGIcon(pathData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24"); svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24"); svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor"); svg.setAttribute("stroke-width", "2.5");
    svg.setAttribute("stroke-linecap", "round"); svg.setAttribute("stroke-linejoin", "round");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData); svg.appendChild(path);
    return svg;
}

// ==========================================
// 2. ДАННЫЕ И СОСТОЯНИЕ
// ==========================================

const PRONOUNS = [
    { de: "ich", key: "p_ich" },
    { de: "du", key: "p_du" },
    { de: "er", key: "p_er" },
    { de: "sie", key: "p_sie_sg" },
    { de: "es", key: "p_es" },
    { de: "wir", key: "p_wir" },
    { de: "ihr", key: "p_ihr" },
    { de: "sie", key: "p_sie_pl" },
    { de: "Sie", key: "p_sie_form" }
];

const VERB_KEYS = [
    "word_sein", "word_haben", "word_werden", "word_machen", "word_tun", 
    "word_geben", "word_nehmen", "word_bringen", "word_brauchen", "word_lassen", 
    "word_gehen", "word_kommen", "word_fahren", "word_bleiben", "word_stehen", 
    "word_liegen", "word_sitzen", "word_sagen", "word_fragen", "word_antworten", 
    "word_sehen", "word_hoeren", "word_finden", "word_suchen_v", "word_wissen", 
    "word_kennen", "word_denken", "word_glauben", "word_lernen_v",
    "word_koennen", "word_muessen", "word_duerfen", "word_wollen", "word_sollen", 
    "word_moegen", "word_moechten",
    "word_aufstehen", "word_aufwachen", "word_einschlafen", "word_anziehen", 
    "word_ausziehen", "word_umziehen", "word_einkaufen", "word_ausgeben", 
    "word_einladen", "word_mitbringen", "word_anfangen", "word_aufhoeren", 
    "word_mitmachen", "word_anrufen_sep", "word_zuhoren", "word_aufmachen", 
    "word_zumachen", "word_einschalten_sep", "word_ausschalten_sep", "word_abfahren", 
    "word_ankommen", "word_einsteigen", "word_aussteigen", "word_umsteigen",
    "word_essen", "word_trinken", "word_kochen", "word_backen", "word_braten", 
    "word_probieren", "word_bestellen", "word_heiraten"
];

const VERB_TOPIC_KEYS = {
    basic_regular: [
        "word_machen", "word_brauchen", "word_gehen", "word_kommen", "word_sagen",
        "word_fragen", "word_hoeren", "word_suchen_v", "word_glauben", "word_lernen_v",
        "word_wohnen", "word_studieren", "word_kaufen", "word_spielen", "word_kochen",
        "word_bestellen", "word_trinken"
    ],
    stem_t_s: [
        "word_antworten", "word_arbeiten", "word_finden", "word_heiraten"
    ],
    strong: [
        "word_geben", "word_nehmen", "word_fahren", "word_sehen", "word_essen"
    ],
    modal: [
        "word_koennen", "word_muessen", "word_duerfen", "word_wollen", "word_sollen",
        "word_moegen", "word_moechten"
    ],
    separable: [
        "word_aufstehen", "word_aufwachen", "word_einschlafen", "word_anziehen",
        "word_ausziehen", "word_umziehen", "word_einkaufen", "word_ausgeben",
        "word_einladen", "word_mitbringen", "word_anfangen", "word_aufhoeren",
        "word_mitmachen", "word_anrufen_sep", "word_zuhoren", "word_aufmachen",
        "word_zumachen", "word_einschalten_sep", "word_ausschalten_sep", "word_abfahren",
        "word_ankommen", "word_einsteigen", "word_aussteigen", "word_umsteigen"
    ],
    auxiliaries: [
        "word_sein", "word_haben", "word_werden"
    ],
    all: VERB_KEYS
};

const IRREGULAR_VERBS = {
    "sein": {
        "ich": "bin", "du": "bist", "er": "ist", "sie": "ist", "es": "ist",
        "wir": "sind", "ihr": "seid", "sie_pl": "sind", "sie_form": "sind"
    },
    "haben": {
        "ich": "habe", "du": "hast", "er": "hat", "sie": "hat", "es": "hat",
        "wir": "haben", "ihr": "habt", "sie_pl": "haben", "sie_form": "haben"
    },
    "werden": {
        "ich": "werde", "du": "wirst", "er": "wird", "sie": "wird", "es": "wird",
        "wir": "werden", "ihr": "werdet", "sie_pl": "werden", "sie_form": "werden"
    },
    "wissen": {
        "ich": "weiß", "du": "weißt", "er": "weiß", "sie": "weiß", "es": "weiß",
        "wir": "wissen", "ihr": "wisst", "sie_pl": "wissen", "sie_form": "wissen"
    },
    "können": {
        "ich": "kann", "du": "kannst", "er": "kann", "sie": "kann", "es": "kann",
        "wir": "können", "ihr": "könnt", "sie_pl": "können", "sie_form": "können"
    },
    "müssen": {
        "ich": "muss", "du": "musst", "er": "muss", "sie": "muss", "es": "muss",
        "wir": "müssen", "ihr": "müsst", "sie_pl": "müssen", "sie_form": "müssen"
    },
    "dürfen": {
        "ich": "darf", "du": "darfst", "er": "darf", "sie": "darf", "es": "darf",
        "wir": "dürfen", "ihr": "dürft", "sie_pl": "dürfen", "sie_form": "dürfen"
    },
    "wollen": {
        "ich": "will", "du": "willst", "er": "will", "sie": "will", "es": "will",
        "wir": "wollen", "ihr": "wollt", "sie_pl": "wollen", "sie_form": "wollen"
    },
    "sollen": {
        "ich": "soll", "du": "sollst", "er": "soll", "sie": "soll", "es": "soll",
        "wir": "sollen", "ihr": "sollt", "sie_pl": "sollen", "sie_form": "sollen"
    },
    "mögen": {
        "ich": "mag", "du": "magst", "er": "mag", "sie": "mag", "es": "mag",
        "wir": "mögen", "ihr": "mögt", "sie_pl": "mögen", "sie_form": "mögen"
    },
    "möchten": {
        "ich": "möchte", "du": "möchtest", "er": "möchte", "sie": "möchte", "es": "möchte",
        "wir": "möchten", "ihr": "möchtet", "sie_pl": "möchten", "sie_form": "möchten"
    },
    "geben": { "du": "gibst", "er": "gibt", "sie": "gibt", "es": "gibt" },
    "nehmen": { "du": "nimmst", "er": "nimmt", "sie": "nimmt", "es": "nimmt" },
    "sehen": { "du": "siehst", "er": "sieht", "sie": "sieht", "es": "sieht" },
    "lesen": { "du": "liest", "er": "liest", "sie": "liest", "es": "liest" },
    "sprechen": { "du": "sprichst", "er": "spricht", "sie": "spricht", "es": "spricht" },
    "essen": { "du": "isst", "er": "isst", "sie": "isst", "es": "isst" },
    "tragen": { "du": "trägst", "er": "trägt", "sie": "trägt", "es": "trägt" },
    "waschen": { "du": "wäschst", "er": "wäscht", "sie": "wäscht", "es": "wäscht" },
    "schlafen": { "du": "schläfst", "er": "schläft", "sie": "schläft", "es": "schläft" },
    "laufen": { "du": "läufst", "er": "läuft", "sie": "läuft", "es": "läuft" },
    "helfen": { "du": "hilfst", "er": "hilft", "sie": "hilft", "es": "hilft" },
    "treffen": { "du": "triffst", "er": "trifft", "sie": "trifft", "es": "trifft" },
    "fahren": { "du": "fährst", "er": "fährt", "sie": "fährt", "es": "fährt" },
    "laden": { "du": "lädst", "er": "lädt", "sie": "lädt", "es": "lädt" },
    "braten": { "du": "brätst", "er": "brät", "sie": "brät", "es": "brät" }
};

let gameState = 'RULES'; // RULES, PLAYING, END
let mode = 'ASSISTED'; // ASSISTED, UNASSISTED
let queue = [];
let currentIndex = 0;
let currentInputStr = "";
let attemptsLeft = 2;
let isAnimating = false;
let repeatCount = 10; // Number of questions selected by user
let selectedVerbTopic = "basic_regular";

let currentPhase = 1; // 1 = ASSISTED, 2 = UNASSISTED

// ==========================================
// 3. MORPHOLOGICAL CONJUGATOR ENGINE
// ==========================================
function conjugate(infinitive, pronoun) {
    let prefix = "";
    let baseVerb = infinitive.replace(/\s*\(.*?\)\s*/g, '').trim();
    
    // Split separable prefixes
    const prefixes = ["auf", "an", "aus", "mit", "ein", "um", "ab", "zu", "vor", "bei", "weg", "los"];
    for (let p of prefixes) {
        if (infinitive.startsWith(p) && infinitive !== p && infinitive.length > p.length + 2) {
            let remainder = infinitive.substring(p.length);
            if (remainder.endsWith("en") || remainder.endsWith("n")) {
                prefix = p;
                baseVerb = remainder;
                break;
            }
        }
    }
    
    let conjugatedBase = "";
    
    // Check irregular lookup
    if (IRREGULAR_VERBS[baseVerb] && IRREGULAR_VERBS[baseVerb][pronoun]) {
        conjugatedBase = IRREGULAR_VERBS[baseVerb][pronoun];
    } else {
        // Regular stem splitting
        let stem = "";
        let endingType = "en"; 
        
        if (baseVerb.endsWith("eln")) {
            stem = baseVerb.slice(0, -1); // sammeln -> sammel
            endingType = "eln";
        } else if (baseVerb.endsWith("en")) {
            stem = baseVerb.slice(0, -2);
            endingType = "en";
        } else if (baseVerb.endsWith("n")) {
            stem = baseVerb.slice(0, -1);
            endingType = "n";
        } else {
            stem = baseVerb;
        }
        
        // Final fallback if irregular lookup contains plural forms later
        switch (pronoun) {
            case "ich":
                if (endingType === "eln") {
                    conjugatedBase = stem.slice(0, -2) + "le"; 
                } else {
                    conjugatedBase = stem + "e";
                }
                break;
                
            case "du":
                let endsInDOrT = stem.endsWith("d") || stem.endsWith("t");
                let endsInConsonantN = false;
                if (stem.endsWith("n") && stem.length > 2) {
                    let prevChar = stem.charAt(stem.length - 2);
                    if (prevChar !== 'l' && prevChar !== 'r' && prevChar !== 'm' && prevChar !== 'n' && !"aeiouäöü".includes(prevChar)) {
                        endsInConsonantN = true;
                    }
                }
                let endsInSibilant = stem.endsWith("s") || stem.endsWith("ß") || stem.endsWith("z") || stem.endsWith("x");
                
                if (endsInDOrT || endsInConsonantN) {
                    conjugatedBase = stem + "est";
                } else if (endsInSibilant) {
                    conjugatedBase = stem + "t";
                } else {
                    conjugatedBase = stem + "st";
                }
                break;
                
            case "er":
            case "sie":
            case "es":
                let erEndsInDOrT = stem.endsWith("d") || stem.endsWith("t");
                let erEndsInConsonantN = false;
                if (stem.endsWith("n") && stem.length > 2) {
                    let prevChar = stem.charAt(stem.length - 2);
                    if (prevChar !== 'l' && prevChar !== 'r' && prevChar !== 'm' && prevChar !== 'n' && !"aeiouäöü".includes(prevChar)) {
                        erEndsInConsonantN = true;
                    }
                }
                
                if (erEndsInDOrT || erEndsInConsonantN) {
                    conjugatedBase = stem + "et";
                } else {
                    conjugatedBase = stem + "t";
                }
                break;
                
            case "wir":
                if (endingType === "eln") {
                    conjugatedBase = stem + "n";
                } else {
                    conjugatedBase = stem + "en";
                }
                break;
                
            case "ihr":
                let ihrEndsInDOrT = stem.endsWith("d") || stem.endsWith("t");
                let ihrEndsInConsonantN = false;
                if (stem.endsWith("n") && stem.length > 2) {
                    let prevChar = stem.charAt(stem.length - 2);
                    if (prevChar !== 'l' && prevChar !== 'r' && prevChar !== 'm' && prevChar !== 'n' && !"aeiouäöü".includes(prevChar)) {
                        ihrEndsInConsonantN = true;
                    }
                }
                
                if (ihrEndsInDOrT || ihrEndsInConsonantN) {
                    conjugatedBase = stem + "et";
                } else {
                    conjugatedBase = stem + "t";
                }
                break;
                
            case "sie_pl":
            case "sie_form":
                if (endingType === "eln") {
                    conjugatedBase = stem + "n";
                } else {
                    conjugatedBase = stem + "en";
                }
                break;
        }
    }
    
    if (prefix !== "") {
        return conjugatedBase + " " + prefix;
    }
    return conjugatedBase;
}

// ==========================================
// 4. UI ЭЛЕМЕНТЫ
// ==========================================
const headerElement = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = t("verb_conjugation", "back_to_menu");
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener('click', () => { window.location.href = "index.html?page=Home"; });
headerElement.appendChild(backBtn);

const mainElement = document.createElement("main");

// RULES UI
const rulesSection = document.createElement("div");
rulesSection.style.width = "100%";
const rulesTitle = document.createElement("h1");
rulesTitle.textContent = t("verb_conjugation", "verb_conjugation_title");
rulesSection.appendChild(rulesTitle);

const rulesContainer = document.createElement("div");
rulesContainer.classList.add("rules-container");

const ruleCards = [
    { titleKey: "rules_general_title", descKey: "rules_general_desc" },
    { titleKey: "rules_special_1_title", descKey: "rules_special_1_desc" },
    { titleKey: "rules_special_2_title", descKey: "rules_special_2_desc" },
    { titleKey: "rules_special_3_title", descKey: "rules_special_3_desc" },
    { titleKey: "rules_special_4_title", descKey: "rules_special_4_desc" },
    { titleKey: "rules_special_5_title", descKey: "rules_special_5_desc" }
];

ruleCards.forEach(rc => {
    const card = document.createElement("div");
    card.classList.add("rule-card");
    const title = document.createElement("div");
    title.classList.add("rule-header");
    title.textContent = t("verb_conjugation", rc.titleKey);
    const desc = document.createElement("div");
    desc.classList.add("rule-desc");
    desc.textContent = t("verb_conjugation", rc.descKey);
    card.appendChild(title);
    card.appendChild(desc);
    rulesContainer.appendChild(card);
});
rulesSection.appendChild(rulesContainer);

const settingsRow = document.createElement("div");
settingsRow.classList.add("settings-row");
const topicInfo = document.createElement("div");
topicInfo.textContent = t("verb_conjugation", "topic_info");
const topicGroup = document.createElement("div");
topicGroup.classList.add("pill-group");

const topicOptions = [
    { value: "basic_regular", labelKey: "topic_basic_regular" },
    { value: "stem_t_s", labelKey: "topic_stem_t_s" },
    { value: "strong", labelKey: "topic_strong" },
    { value: "modal", labelKey: "topic_modal" },
    { value: "separable", labelKey: "topic_separable" },
    { value: "auxiliaries", labelKey: "topic_auxiliaries" },
    { value: "all", labelKey: "topic_all" }
];

topicOptions.forEach(optionData => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("pill-btn");
    if (optionData.value === selectedVerbTopic) btn.classList.add("active");
    btn.textContent = t("verb_conjugation", optionData.labelKey);
    btn.addEventListener("click", () => {
        selectedVerbTopic = optionData.value;
        Array.from(topicGroup.children).forEach(child => child.classList.remove("active"));
        btn.classList.add("active");
    });
    topicGroup.appendChild(btn);
});

const repeatInfo = document.createElement("div");
repeatInfo.textContent = t("verb_conjugation", "repeat_info");
const repeatSelect = document.createElement("select");
repeatSelect.classList.add("custom-select");
[5, 10, 15, 20, 30, 50].forEach(val => {
    const opt = document.createElement("option");
    opt.value = val; opt.textContent = val;
    if (val === 10) opt.selected = true;
    repeatSelect.appendChild(opt);
});
repeatSelect.addEventListener('change', (e) => {
    repeatCount = parseInt(e.target.value);
});
settingsRow.appendChild(topicInfo);
settingsRow.appendChild(topicGroup);
settingsRow.appendChild(repeatInfo);
settingsRow.appendChild(repeatSelect);
rulesSection.appendChild(settingsRow);

const rulesBtnGroup = document.createElement("div");
rulesBtnGroup.classList.add("btn-group");

const startLearningBtn = document.createElement("button");
startLearningBtn.classList.add("btn", "primary"); 
startLearningBtn.textContent = t("verb_conjugation", "start_learning");
startLearningBtn.addEventListener('click', () => startFullCourse());

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn"); 
startUnassistedBtn.textContent = t("verb_conjugation", "start_unassisted");
startUnassistedBtn.addEventListener('click', () => {
    currentPhase = 2; // Jump directly to Phase 2
    startGame('UNASSISTED');
});

rulesBtnGroup.appendChild(startLearningBtn);
rulesBtnGroup.appendChild(startUnassistedBtn);
rulesSection.appendChild(rulesBtnGroup);

// GAME UI
const gameSection = document.createElement("div");
gameSection.classList.add("game-container");
const gameCounters = document.createElement("div");
gameCounters.classList.add("game-counters");
const attemptsBadge = document.createElement("div");
attemptsBadge.classList.add("attempts-badge");

const promptBox = document.createElement("div");
promptBox.classList.add("prompt-box");
const promptTitle = document.createElement("div");
promptTitle.classList.add("prompt-title");
promptTitle.textContent = t("verb_conjugation", "conjugate_prompt");
const promptVerb = document.createElement("div");
promptVerb.classList.add("prompt-verb");
const promptTranslation = document.createElement("div");
promptTranslation.classList.add("prompt-translation");
const promptPronounWrap = document.createElement("div");
promptPronounWrap.classList.add("prompt-pronoun-wrap");

promptBox.appendChild(promptTitle);
promptBox.appendChild(promptVerb);
promptBox.appendChild(promptTranslation);
promptBox.appendChild(promptPronounWrap);

const inputBox = document.createElement("div");
inputBox.classList.add("input-box");
inputBox.dataset.placeholder = t("verb_conjugation", "type_here");
const gameHints = document.createElement("div");
gameHints.classList.add("game-hints");
gameHints.textContent = t("verb_conjugation", "press_enter");

gameSection.appendChild(gameCounters);
gameSection.appendChild(attemptsBadge);
gameSection.appendChild(promptBox);
gameSection.appendChild(inputBox);
gameSection.appendChild(gameHints);

// END UI
const endSection = document.createElement("div");
endSection.classList.add("game-container");
const endTitle = document.createElement("h1");
endTitle.textContent = t("verb_conjugation", "game_over_title");
const endBtnGroup = document.createElement("div");
endBtnGroup.classList.add("btn-group");
const playAgainRulesBtn = document.createElement("button");
playAgainRulesBtn.classList.add("btn"); playAgainRulesBtn.textContent = t("verb_conjugation", "back_to_rules");
playAgainRulesBtn.addEventListener('click', () => showRules());
const menuBtn = document.createElement("button");
menuBtn.classList.add("btn"); menuBtn.textContent = t("verb_conjugation", "back_to_menu");
menuBtn.addEventListener('click', () => { window.location.href = "index.html?page=Home"; });
endBtnGroup.appendChild(playAgainRulesBtn);
endBtnGroup.appendChild(menuBtn);
endSection.appendChild(endTitle);
endSection.appendChild(endBtnGroup);

// MODALS
const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
const modalTitle = document.createElement("h2");
const modalDesc = document.createElement("p");
const modalBtnGroup = document.createElement("div");
modalBtnGroup.classList.add("btn-group");

modalContent.appendChild(modalTitle);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalBtnGroup);
modalOverlay.appendChild(modalContent);

mainElement.appendChild(rulesSection);
mainElement.appendChild(gameSection);
mainElement.appendChild(endSection);

document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
document.body.appendChild(modalOverlay);

// ==========================================
// 5. ЛОГИКА ИГРЫ
// ==========================================

function showRules() {
    gameState = 'RULES';
    rulesSection.style.display = "flex";
    rulesSection.style.flexDirection = "column";
    gameSection.style.display = "none";
    endSection.style.display = "none";
    modalOverlay.classList.remove("active");
}

function startFullCourse() {
    currentPhase = 1;
    startGame('ASSISTED');
}

function nextPhase() {
    if (currentPhase === 1) {
        currentPhase = 2;
        startGame('UNASSISTED');
    } else {
        showEndScreen();
    }
}

function getSelectedVerbKeys() {
    return VERB_TOPIC_KEYS[selectedVerbTopic] || VERB_TOPIC_KEYS.basic_regular;
}

function startGame(selectedMode) {
    mode = selectedMode;
    gameState = 'PLAYING';
    queue = [];
    const activeVerbKeys = getSelectedVerbKeys();
    
    // Generate fresh queue of size repeatCount
    for (let i = 0; i < repeatCount; i++) {
        let randVerbKey = activeVerbKeys[Math.floor(Math.random() * activeVerbKeys.length)];
        let randPronoun = PRONOUNS[Math.floor(Math.random() * PRONOUNS.length)];
        
        let inf = TRANSLATIONS_VOCABULARY[randVerbKey].de;
        let trans = t("vocabulary", randVerbKey);
        
        // Handle pronoun variant (e.g. sie plural or Sie formal)
        let pronounStr = randPronoun.de;
        if (randPronoun.key === "p_sie_pl") {
            pronounStr = "sie_pl";
        } else if (randPronoun.key === "p_sie_form") {
            pronounStr = "sie_form";
        }

        let ans = conjugate(inf, pronounStr);
        
        queue.push({
            verbKey: randVerbKey,
            infinitive: inf,
            pronoun: randPronoun.de,
            pronounKey: randPronoun.key,
            translation: trans,
            answer: ans
        });
    }

    currentIndex = 0;
    attemptsLeft = 2;
    currentInputStr = "";
    isAnimating = false;

    rulesSection.style.display = "none";
    gameSection.style.display = "flex";
    endSection.style.display = "none";
    modalOverlay.classList.remove("active");

    renderQuestion();
}

function renderQuestion() {
    if (currentIndex >= queue.length) {
        nextPhase();
        return;
    }
    currentInputStr = "";
    updateInputDisplay();
    inputBox.className = "input-box";

    const q = queue[currentIndex];
    let totalLeft = queue.length - currentIndex;
    
    gameCounters.innerHTML = `
        <div>${t("verb_conjugation", "total_left")} <b>${totalLeft}</b></div>
    `;

    promptVerb.textContent = q.infinitive;
    promptTranslation.textContent = `(${q.translation})`;
    promptPronounWrap.innerHTML = `${t("verb_conjugation", "for_pronoun")}: <span class="prompt-pronoun">${q.pronoun} (${t("pronouns", q.pronounKey)})</span>`;

    if (mode === 'ASSISTED') {
        attemptsBadge.style.display = "none";
        // Show correct conjugated verb in the hint
        gameHints.innerHTML = `${t("verb_conjugation", "press_enter")} | <span style="color: var(--accent-gold); font-weight:600;">Hint: ${q.answer}</span>`;
    } else {
        attemptsBadge.style.display = "block";
        attemptsBadge.textContent = t("verb_conjugation", "attempts_left") + attemptsLeft;
        gameHints.textContent = t("verb_conjugation", "press_enter");
    }
}

function updateInputDisplay() {
    inputBox.textContent = currentInputStr;
}

function showEndScreen() {
    gameState = 'END';
    rulesSection.style.display = "none";
    gameSection.style.display = "none";
    endSection.style.display = "flex";
}

function showModal(title, desc, btns) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalBtnGroup.innerHTML = '';
    btns.forEach(b => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        if (b.primary) btn.classList.add("primary");
        btn.textContent = b.text;
        btn.addEventListener('click', b.action);
        modalBtnGroup.appendChild(btn);
    });
    modalOverlay.classList.add("active");
}

function checkAnswer() {
    if (currentInputStr.trim() === "") return;
    isAnimating = true;

    const q = queue[currentIndex];
    
    // Normalize spaces and compare
    let cleanInput = currentInputStr.trim().replace(/\s+/g, ' ').toLowerCase();
    let cleanAnswer = q.answer.trim().replace(/\s+/g, ' ').toLowerCase();

    // Allow alternative umlaut spellings for users without German keyboards
    let normalizedInput = cleanInput.replace(/oe/g, 'ö').replace(/ue/g, 'ü').replace(/ae/g, 'ä').replace(/ss/g, 'ß');

    if (cleanInput === cleanAnswer || normalizedInput === cleanAnswer) {
        inputBox.classList.add("correct");
        setTimeout(() => {
            currentIndex++;
            attemptsLeft = 2;
            isAnimating = false;
            renderQuestion();
        }, 500);
    } else {
        inputBox.classList.add("wrong");
        setTimeout(() => {
            inputBox.classList.remove("wrong");
            isAnimating = false;

            if (mode === 'ASSISTED') {
                showModal(
                    "Ой-ой!",
                    t("verb_conjugation", "incorrect_assisted") + `\n\nПравильно: ${q.answer}`,
                    [{ text: t("verb_conjugation", "back_to_rules"), primary: true, action: showRules }]
                );
            } else {
                attemptsLeft--;
                if (attemptsLeft < 0) {
                    showModal(
                        "Ой-ой!",
                        t("verb_conjugation", "failed_unassisted") + `\n\nПравильна відповідь була: ${q.answer}\n\n` + t("verb_conjugation", "choose_action"),
                        [
                            { text: t("verb_conjugation", "back_to_rules"), primary: true, action: showRules }
                        ]
                    );
                } else {
                    currentInputStr = "";
                    renderQuestion();
                }
            }
        }, 400);
    }
}

// Global Keyboard Listener
document.addEventListener('keydown', (e) => {
    if (gameState !== 'PLAYING' || isAnimating || modalOverlay.classList.contains("active")) return;

    if (e.key === 'Backspace') {
        currentInputStr = currentInputStr.slice(0, -1);
        updateInputDisplay();
    } else if (e.key === 'Enter') {
        checkAnswer();
    } else if (e.key.length === 1) {
        // Support all standard letters, spaces (for separable prefix), and German umlauts/esszet
        currentInputStr += e.key;
        updateInputDisplay();
    }
});

// Инициализация
showRules();
