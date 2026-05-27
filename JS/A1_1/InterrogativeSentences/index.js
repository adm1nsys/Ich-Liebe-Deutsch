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

    /* Rules Section */
    .rules-container { width: 100%; display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 2rem; }
    .rule-card {
        background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px var(--shadow-color);
        display: flex; flex-direction: column; gap: 0.5rem; text-align: left; width: 100%; box-sizing: border-box;
        overflow-x: auto;
    }
    .rule-header { font-size: 1.3rem; font-weight: 800; color: var(--accent-gold); display: flex; align-items: center; gap: 0.5rem; }
    .rule-desc { font-size: 0.95rem; color: var(--text-primary); line-height: 1.5; margin-bottom: 1rem; }
    .rule-subtitle { font-size: 1rem; font-weight: 800; color: var(--accent-gold); margin-top: 1rem; }
    .rule-list { margin: 0.25rem 0 0.5rem; padding-left: 1.2rem; color: var(--text-primary); line-height: 1.55; font-size: 0.95rem; }
    .rule-list li { margin-bottom: 0.35rem; }
    .rule-note {
        background: var(--content-bg); border-left: 3px solid var(--accent-gold);
        padding: 0.85rem 1rem; border-radius: 0.5rem; color: var(--text-primary);
        line-height: 1.5; font-size: 0.95rem; margin-top: 0.5rem;
    }

    .example-table { width: 100%; min-width: 560px; border-collapse: collapse; font-size: 0.9rem; border-radius: 0.5rem; overflow: hidden; margin-top: 0.5rem; }
    .example-table th, .example-table td { padding: 0.75rem; border: 1px solid var(--border-color); text-align: center; }
    .example-table th { background: rgba(245, 175, 25, 0.08); color: var(--accent-gold); font-weight: 600; }
    .pos-1 { color: #3b82f6; font-weight: bold; }
    .pos-2 { color: var(--accent-red); font-weight: bold; text-decoration: underline; }
    .pos-3 { color: var(--accent-green); font-weight: bold; }
    .variant-list { list-style-position: outside; padding-left: 1.6rem; }
    .variant-list li { margin-bottom: 0.8rem; line-height: 1.55; }
    .variant-name { color: var(--accent-gold); font-weight: 800; }
    .variant-pattern { color: var(--text-secondary); font-weight: 700; }
    .variant-example { display: block; margin-top: 0.25rem; color: var(--text-primary); }
    .variant-example span { font-weight: 800; }
    .variant-note {
        background: var(--content-bg); border: 1px solid var(--border-color);
        border-radius: 0.5rem; padding: 0.75rem 0.9rem; margin-top: 0.5rem;
        line-height: 1.55; font-size: 0.95rem;
    }

    /* Pill Selection */
    .section-title { font-size: 1.05rem; font-weight: 600; color: var(--text-secondary); margin-top: 1.5rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; width: 100%; text-align: left; }
    .pill-group { display: flex; flex-wrap: wrap; gap: 0.75rem; width: 100%; margin-bottom: 1rem; }
    .pill-btn {
        background: var(--surface-color); border: 1px solid var(--border-color);
        color: var(--text-primary); padding: 0.75rem 1.25rem; border-radius: 2rem;
        font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;
    }
    .pill-btn:hover { border-color: var(--text-secondary); transform: translateY(-2px); }
    .pill-btn.active { background: linear-gradient(135deg, var(--accent-gold), var(--accent-red)); color: white; border-color: transparent; box-shadow: 0 4px 10px rgba(255, 75, 43, 0.3); }

    /* Start Action Buttons */
    .action-group { display: flex; gap: 1rem; width: 100%; margin-top: 1.5rem; flex-wrap: wrap; }
    .btn-primary, .btn-secondary {
        flex: 1; min-width: 200px; padding: 1rem 1.5rem; border-radius: 0.75rem;
        font-size: 1.1rem; font-weight: 800; cursor: pointer; transition: all 0.3s ease;
        text-align: center; border: none; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
    }
    .btn-primary { background: linear-gradient(135deg, var(--accent-gold), var(--accent-red)); color: white; box-shadow: 0 4px 15px rgba(255, 75, 43, 0.4); }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 75, 43, 0.6); }
    .btn-secondary { background: var(--surface-color); color: var(--text-primary); border: 1px solid var(--border-color); }
    .btn-secondary:hover { border-color: var(--accent-gold); transform: translateY(-2px); }

    /* Game Screen */
    .status-bar { width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); font-size: 1rem; font-weight: 600; color: var(--text-secondary); }
    .progress-counter { color: var(--accent-gold); }

    .prompt-container { width: 100%; text-align: center; margin-bottom: 2rem; }
    .prompt-text { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem; }
    .prompt-phase { font-size: 1.1rem; color: var(--accent-red); font-weight: 600; margin-bottom: 1rem; }

    /* Blocks Mode */
    .sentence-builder-area {
        width: 100%; min-height: 80px; background: var(--surface-color);
        border: 2px dashed var(--border-color); border-radius: 1rem;
        display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 1rem; box-sizing: border-box;
        align-items: center; justify-content: flex-start; margin-bottom: 2rem; transition: border-color 0.3s ease;
    }
    .sentence-builder-area.active { border-color: var(--accent-gold); }

    .word-bank {
        width: 100%; display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin-bottom: 2rem;
    }

    .word-block {
        background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 0.5rem; padding: 0.75rem 1rem; cursor: pointer;
        display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
        transition: all 0.2s ease; user-select: none; box-shadow: 0 2px 4px var(--shadow-color);
        position: relative;
    }
    .word-block:hover { border-color: var(--accent-gold); transform: translateY(-2px); }
    .word-block.selected { opacity: 0; pointer-events: none; transform: scale(0.9); }
    
    .word-main { font-size: 1.1rem; font-weight: 600; color: var(--text-primary); }
    .word-trans { font-size: 0.75rem; color: var(--text-secondary); font-style: italic; }
    
    .word-block.helper .helper-number {
        position: absolute; top: -8px; right: -8px; width: 20px; height: 20px;
        background: var(--accent-red); color: white; font-size: 0.7rem; font-weight: 800;
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
    }

    .in-sentence { animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
    @keyframes popIn {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
    }

    /* Typing Mode */
    .typing-area {
        width: 100%; display: none; flex-direction: column; align-items: center; gap: 1rem; margin-bottom: 2rem;
    }
    .typing-input {
        width: 100%; background: var(--surface-color); border: 2px solid var(--border-color);
        color: var(--text-primary); font-size: 1.3rem; font-weight: 600; padding: 1.2rem;
        border-radius: 1rem; text-align: center; box-sizing: border-box; outline: none; transition: border-color 0.3s ease;
    }
    .typing-input:focus { border-color: var(--accent-gold); }
    .typing-input.correct { border-color: var(--accent-green); background: rgba(16, 185, 129, 0.1); }
    .typing-input.wrong { border-color: var(--accent-red); background: rgba(239, 68, 68, 0.1); animation: shake 0.4s ease; }

    .feedback-message { font-size: 1.2rem; font-weight: 800; margin-top: 1rem; text-align: center; min-height: 1.5rem; white-space: pre-line; }
    .feedback-message.correct { color: var(--accent-green); }
    .feedback-message.error { color: var(--accent-red); }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    /* Fullscreen Finish Screen */
    .finish-screen {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: var(--bg-color); display: flex; flex-direction: column;
        align-items: center; justify-content: center; z-index: 2000;
        animation: fadeIn 0.5s ease forwards;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .finish-icon { font-size: 5rem; margin-bottom: 1rem; }

    /* Modal Overlay */
    .modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(8px);
        display: flex; align-items: center; justify-content: center;
        z-index: 2000; opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
    }
    .modal-overlay.active { opacity: 1; pointer-events: auto; }
    .modal-card {
        background: var(--surface-color); padding: 2.5rem; border-radius: 1.5rem;
        max-width: 400px; width: 90%; text-align: center; border: 1px solid var(--border-color);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); transform: translateY(20px); transition: transform 0.4s ease;
    }
    .modal-overlay.active .modal-card { transform: translateY(0); }
    .modal-title { font-size: 1.8rem; font-weight: 800; color: var(--accent-red); margin-bottom: 1rem; }
    .modal-desc { font-size: 1.1rem; color: var(--text-primary); margin-bottom: 2rem; line-height: 1.5; white-space: pre-line; }
</style>
`;
document.head.appendChild(styleElement);

// ==========================================
// 2. DOM ELEMENTS & SETUP
// ==========================================
const header = document.createElement('header');
const backBtn = document.createElement('button');
backBtn.className = 'icon-btn';
backBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
backBtn.title = t("interrogative", "back_to_menu");
backBtn.onclick = () => window.location.href = "index.html?page=Home";

const headerTitle = document.createElement('div');
headerTitle.style.fontWeight = '800';
headerTitle.style.fontSize = '1.2rem';
headerTitle.textContent = t("interrogative", "module_title");

header.appendChild(backBtn);
header.appendChild(headerTitle);
document.body.appendChild(header);

const main = document.createElement('main');
const title = document.createElement('h1');
title.textContent = t("interrogative", "module_title");
main.appendChild(title);

// ==========================================
// 3. MORPHOLOGICAL CONJUGATOR ENGINE
// ==========================================
const IRREGULAR_VERBS = {
    "sein": {
        "ich": "bin", "du": "bist", "er": "ist", "sie": "ist", "es": "ist",
        "wir": "sind", "ihr": "seid", "sie_pl": "sind", "sie_form": "sind"
    },
    "haben": {
        "ich": "habe", "du": "hast", "er": "hat", "sie": "hat", "es": "hat",
        "wir": "haben", "ihr": "habt", "sie_pl": "haben", "sie_form": "haben"
    },
    "können": {
        "ich": "kann", "du": "kannst", "er": "kann", "sie": "kann", "es": "kann",
        "wir": "können", "ihr": "könnt", "sie_pl": "können", "sie_form": "können"
    },
    "müssen": {
        "ich": "muss", "du": "musst", "er": "muss", "sie": "muss", "es": "muss",
        "wir": "müssen", "ihr": "müsst", "sie_pl": "müssen", "sie_form": "müssen"
    },
    "wollen": {
        "ich": "will", "du": "willst", "er": "will", "sie": "will", "es": "will",
        "wir": "wollen", "ihr": "wollt", "sie_pl": "wollen", "sie_form": "wollen"
    },
    "möchten": {
        "ich": "möchte", "du": "möchtest", "er": "möchte", "sie": "möchte", "es": "möchte",
        "wir": "möchten", "ihr": "möchtet", "sie_pl": "möchten", "sie_form": "möchten"
    },
    "dürfen": {
        "ich": "darf", "du": "darfst", "er": "darf", "sie": "darf", "es": "darf",
        "wir": "dürfen", "ihr": "dürft", "sie_pl": "dürfen", "sie_form": "dürfen"
    },
    "sollen": {
        "ich": "soll", "du": "sollst", "er": "soll", "sie": "soll", "es": "soll",
        "wir": "sollen", "ihr": "sollt", "sie_pl": "sollen", "sie_form": "sollen"
    },
    "mögen": {
        "ich": "mag", "du": "magst", "er": "mag", "sie": "mag", "es": "mag",
        "wir": "mögen", "ihr": "mögt", "sie_pl": "mögen", "sie_form": "mögen"
    },
    "öffnen": {
        "ich": "öffne", "du": "öffnest", "er": "öffnet", "sie": "öffnet", "es": "öffnet",
        "wir": "öffnen", "ihr": "öffnet", "sie_pl": "öffnen", "sie_form": "öffnen"
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
    "fangen": { "du": "fängst", "er": "fängt", "sie": "fängt", "es": "fängt" }
};

function conjugate(infinitive, pronoun) {
    let prefix = "";
    let baseVerb = infinitive.replace(/\s*\(.*?\)\s*/g, '').trim();
    
    if (baseVerb === "heissen") baseVerb = "heißen";

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
    let mappedPronoun = pronoun;
    if (pronoun === "(name)") mappedPronoun = "er";
    if (pronoun === "Sie") mappedPronoun = "sie_form";
    
    if (IRREGULAR_VERBS[baseVerb] && IRREGULAR_VERBS[baseVerb][mappedPronoun]) {
        conjugatedBase = IRREGULAR_VERBS[baseVerb][mappedPronoun];
    } else {
        let stem = "";
        let endingType = "en"; 
        
        if (baseVerb.endsWith("eln")) { stem = baseVerb.slice(0, -1); endingType = "eln"; } 
        else if (baseVerb.endsWith("en")) { stem = baseVerb.slice(0, -2); endingType = "en"; } 
        else if (baseVerb.endsWith("n")) { stem = baseVerb.slice(0, -1); endingType = "n"; } 
        else { stem = baseVerb; }
        
        switch (mappedPronoun) {
            case "ich":
                conjugatedBase = (endingType === "eln") ? stem.slice(0, -2) + "le" : stem + "e";
                break;
            case "du":
                let endsInDOrT = stem.endsWith("d") || stem.endsWith("t");
                let endsInSibilant = stem.endsWith("s") || stem.endsWith("ß") || stem.endsWith("z") || stem.endsWith("x");
                if (endsInDOrT) conjugatedBase = stem + "est";
                else if (endsInSibilant) conjugatedBase = stem + "t";
                else conjugatedBase = stem + "st";
                break;
            case "er":
            case "sie":
            case "es":
                if (stem.endsWith("d") || stem.endsWith("t")) conjugatedBase = stem + "et";
                else conjugatedBase = stem + "t";
                break;
            case "wir":
            case "sie_pl":
            case "sie_form":
                conjugatedBase = (endingType === "eln") ? stem + "n" : stem + "en";
                break;
            case "ihr":
                if (stem.endsWith("d") || stem.endsWith("t")) conjugatedBase = stem + "et";
                else conjugatedBase = stem + "t";
                break;
        }
    }
    
    if (prefix !== "") return conjugatedBase + " " + prefix;
    return conjugatedBase;
}

function getReflexive(pronoun) {
    const map = { "ich": "mich", "du": "dich", "er": "sich", "sie": "sich", "es": "sich", "wir": "uns", "ihr": "euch", "sie_pl": "sich", "Sie": "sich" };
    return map[pronoun] || "sich";
}

function getPronounKey(subject) {
    if (!subject) return "er";
    if (subject.pronoun) return subject.pronoun;
    if (subject.de === "(name)") return "er";
    return subject.de;
}

// ==========================================
// 4. SENTENCE GENERATOR
// ==========================================
const VOCAB = {

    wWords: [
        { de: "Warum", uk: "Чому" },
        { de: "Wann", uk: "Коли" },
        { de: "Wo", uk: "Де" },
        { de: "Wie", uk: "Як" },
        { de: "Was", uk: "Що" },
        { de: "Woher", uk: "Звідки" },
        { de: "Wen", uk: "Кого" }
    ],

    subjects: [
        { de: "ich", en: "I", uk: "я" },
        { de: "du", en: "you", uk: "ти" },
        { de: "er", en: "he", uk: "він" },
        { de: "sie", en: "she", uk: "вона" },
        { de: "wir", en: "we", uk: "ми" },
        { de: "ihr", en: "you (plural)", uk: "ви (множина)" },
        { de: "Sie", en: "You (formal)", uk: "Ви (ввічливо)" }
    ],
    names: [
        { de: "(name)", en: "(name)", uk: "(ім'я)", pronoun: "er" },
        { de: "Anna", en: "Anna", uk: "Анна", pronoun: "sie" },
        { de: "Maria", en: "Maria", uk: "Марія", pronoun: "sie" },
        { de: "Sofia", en: "Sofia", uk: "Софія", pronoun: "sie" },
        { de: "Lukas", en: "Lukas", uk: "Лукас", pronoun: "er" },
        { de: "Max", en: "Max", uk: "Макс", pronoun: "er" },
        { de: "Paul", en: "Paul", uk: "Пауль", pronoun: "er" }
    ],
    cities: [
        { de: "Berlin", en: "Berlin", uk: "Берліні", bare: "Берлін" },
        { de: "Wien", en: "Vienna", uk: "Відні", bare: "Відень" },
        { de: "Kyjiw", en: "Kyiv", uk: "Києві", bare: "Київ" },
        { de: "Hamburg", en: "Hamburg", uk: "Гамбурзі", bare: "Гамбург" },
        { de: "München", en: "Munich", uk: "Мюнхені", bare: "Мюнхен" },
        { de: "Prag", en: "Prague", uk: "Празі", bare: "Прага" },
        { de: "Köln", en: "Cologne", uk: "Кельні", bare: "Кельн" },
        { de: "Leipzig", en: "Leipzig", uk: "Лейпцигу", bare: "Лейпциг" },
        { de: "Dresden", en: "Dresden", uk: "Дрездені", bare: "Дрезден" },
        { de: "Stuttgart", en: "Stuttgart", uk: "Штутгарті", bare: "Штутгарт" },
        { de: "Frankfurt", en: "Frankfurt", uk: "Франкфурті", bare: "Франкфурт" },
        { de: "Bremen", en: "Bremen", uk: "Бремені", bare: "Бремен" }
    ],
    countries_aus: [
        { de: "der Ukraine", en: "Ukraine", uk: "України" },
        { de: "Deutschland", en: "Germany", uk: "Німеччини" },
        { de: "Polen", en: "Poland", uk: "Польщі" },
        { de: "Tschechien", en: "Czechia", uk: "Чехії" },
        { de: "Dänemark", en: "Denmark", uk: "Данії" },
        { de: "Österreich", en: "Austria", uk: "Австрії" },
        { de: "Frankreich", en: "France", uk: "Франції" },
        { de: "Spanien", en: "Spain", uk: "Іспанії" },
        { de: "Italien", en: "Italy", uk: "Італії" },
        { de: "der Schweiz", en: "Switzerland", uk: "Швейцарії" },
        { de: "Litauen", en: "Lithuania", uk: "Литви" },
        { de: "Rumänien", en: "Romania", uk: "Румунії" }
    ],
    ages: [
        { de: "20", en: "20", uk: "20" },
        { de: "25", en: "25", uk: "25" },
        { de: "30", en: "30", uk: "30" },
        { de: "18", en: "18", uk: "18" },
        { de: "35", en: "35", uk: "35" },
        { de: "42", en: "42", uk: "42" },
        { de: "16", en: "16", uk: "16" },
        { de: "22", en: "22", uk: "22" },
        { de: "28", en: "28", uk: "28" },
        { de: "50", en: "50", uk: "50" }
    ],
    professions: [
        { de: "als Lehrer", en: "as a teacher", uk: "вчителем" },
        { de: "als Arzt", en: "as a doctor", uk: "лікарем" },
        { de: "als Programmierer", en: "as a programmer", uk: "програмістом" },
        { de: "als Verkäufer", en: "as a salesperson", uk: "продавцем" },
        { de: "als Koch", en: "as a cook", uk: "кухарем" },
        { de: "als Student", en: "as a student", uk: "студентом" },
        { de: "als Fahrer", en: "as a driver", uk: "водієм" },
        { de: "als Kellner", en: "as a waiter", uk: "офіціантом" },
        { de: "als Designer", en: "as a designer", uk: "дизайнером" },
        { de: "als Ingenieur", en: "as an engineer", uk: "інженером" },
        { de: "als Mechaniker", en: "as a mechanic", uk: "механіком" },
        { de: "als Friseur", en: "as a hairdresser", uk: "перукарем" }
    ],
    studies: [
        { de: "Informatik", en: "Computer Science", uk: "інформатику" },
        { de: "Medizin", en: "Medicine", uk: "медицину" },
        { de: "Kunst", en: "Art", uk: "мистецтво" },
        { de: "Deutsch", en: "German", uk: "німецьку" },
        { de: "Mathematik", en: "Mathematics", uk: "математику" },
        { de: "Musik", en: "Music", uk: "музику" },
        { de: "Biologie", en: "Biology", uk: "біологію" },
        { de: "Geschichte", en: "History", uk: "історію" },
        { de: "Wirtschaft", en: "Economics", uk: "економіку" },
        { de: "Physik", en: "Physics", uk: "фізику" },
        { de: "Jura", en: "Law", uk: "право" },
        { de: "Literatur", en: "Literature", uk: "літературу" }
    ],
    languages: [
        { de: "Englisch", en: "English", uk: "англійською" },
        { de: "Spanisch", en: "Spanish", uk: "іспанською" },
        { de: "Französisch", en: "French", uk: "французькою" },
        { de: "Deutsch", en: "German", uk: "німецькою" },
        { de: "Polnisch", en: "Polish", uk: "польською" },
        { de: "Ukrainisch", en: "Ukrainian", uk: "українською" },
        { de: "Tschechisch", en: "Czech", uk: "чеською" },
        { de: "Dänisch", en: "Danish", uk: "данською" },
        { de: "Italienisch", en: "Italian", uk: "італійською" },
        { de: "Russisch", en: "Russian", uk: "російською" },
        { de: "Türkisch", en: "Turkish", uk: "турецькою" },
        { de: "Arabisch", en: "Arabic", uk: "арабською" }
    ],
    verbs: {
        heißen: { infinitive: "heißen", en: "to be called", uk: "називатися" },
        wohnen: { infinitive: "wohnen", en: "to live", uk: "проживати" },
        kommen: { infinitive: "kommen", en: "to come", uk: "походити" },
        sein: { infinitive: "sein", en: "to be", uk: "бути" },
        lernen: { infinitive: "lernen", en: "to learn", uk: "вчити" },
        vorstellen: { infinitive: "vorstellen", en: "to introduce", uk: "представляти" },
        arbeiten: { infinitive: "arbeiten", en: "to work", uk: "працювати" },
        studieren: { infinitive: "studieren", en: "to study", uk: "навчатися (в унів.)" },
        sprechen: { infinitive: "sprechen", en: "to speak", uk: "розмовляти" }
    },
    actions: [
        {
            verb: { de: "heißen", uk: "називатися" },
            obj: { de: "(name)", uk: "(ім'я)" },
            uk: "називатися (ім'я)"
        },
        {
            verb: { de: "wohnen", uk: "жити" },
            obj: { de: "in Berlin", uk: "у Берліні" },
            uk: "жити у Берліні"
        },
        {
            verb: { de: "kommen", uk: "походити" },
            obj: { de: "aus der Ukraine", uk: "з України" },
            uk: "походити з України"
        },
        {
            verb: { de: "lernen", uk: "вчити" },
            obj: { de: "Deutsch", uk: "німецьку" },
            uk: "вчити німецьку"
        },
        {
            verb: { de: "sprechen", uk: "розмовляти" },
            obj: { de: "Englisch", uk: "англійською" },
            uk: "розмовляти англійською"
        },
        {
            verb: { de: "studieren", uk: "навчатися" },
            obj: { de: "Informatik", uk: "інформатику" },
            uk: "вивчати інформатику"
        },
        {
            verb: { de: "arbeiten", uk: "працювати" },
            obj: { de: "als Programmierer", uk: "програмістом" },
            uk: "працювати програмістом"
        },
        {
            verb: { de: "essen", uk: "їсти" },
            obj: { de: "eine Pizza", uk: "піцу" },
            uk: "їсти піцу"
        },
        {
            verb: { de: "trinken", uk: "пити" },
            obj: { de: "Kaffee", uk: "каву" },
            uk: "пити каву"
        },
        {
            verb: { de: "lesen", uk: "читати" },
            obj: { de: "ein Buch", uk: "книгу" },
            uk: "читати книгу"
        },
        {
            verb: { de: "spielen", uk: "грати" },
            obj: { de: "Fußball", uk: "у футбол" },
            uk: "грати у футбол"
        },
        {
            verb: { de: "kochen", uk: "готувати" },
            obj: { de: "eine Suppe", uk: "суп" },
            uk: "готувати суп"
        },
        {
            verb: { de: "wohnen", uk: "жити" },
            obj: { de: "in München", uk: "у Мюнхені" },
            uk: "жити у Мюнхені"
        },
        {
            verb: { de: "wohnen", uk: "жити" },
            obj: { de: "in Hamburg", uk: "у Гамбурзі" },
            uk: "жити у Гамбурзі"
        },
        {
            verb: { de: "wohnen", uk: "жити" },
            obj: { de: "in Köln", uk: "у Кельні" },
            uk: "жити у Кельні"
        },
        {
            verb: { de: "wohnen", uk: "жити" },
            obj: { de: "in Leipzig", uk: "у Лейпцигу" },
            uk: "жити у Лейпцигу"
        },
        {
            verb: { de: "kommen", uk: "походити" },
            obj: { de: "aus Deutschland", uk: "з Німеччини" },
            uk: "походити з Німеччини"
        },
        {
            verb: { de: "kommen", uk: "походити" },
            obj: { de: "aus Polen", uk: "з Польщі" },
            uk: "походити з Польщі"
        },
        {
            verb: { de: "kommen", uk: "походити" },
            obj: { de: "aus Italien", uk: "з Італії" },
            uk: "походити з Італії"
        },
        {
            verb: { de: "kommen", uk: "походити" },
            obj: { de: "aus der Schweiz", uk: "зі Швейцарії" },
            uk: "походити зі Швейцарії"
        },
        {
            verb: { de: "sprechen", uk: "розмовляти" },
            obj: { de: "Deutsch", uk: "німецькою" },
            uk: "розмовляти німецькою"
        },
        {
            verb: { de: "sprechen", uk: "розмовляти" },
            obj: { de: "Polnisch", uk: "польською" },
            uk: "розмовляти польською"
        },
        {
            verb: { de: "sprechen", uk: "розмовляти" },
            obj: { de: "Ukrainisch", uk: "українською" },
            uk: "розмовляти українською"
        },
        {
            verb: { de: "sprechen", uk: "розмовляти" },
            obj: { de: "Italienisch", uk: "італійською" },
            uk: "розмовляти італійською"
        },
        {
            verb: { de: "studieren", uk: "навчатися" },
            obj: { de: "Medizin", uk: "медицину" },
            uk: "вивчати медицину"
        },
        {
            verb: { de: "studieren", uk: "навчатися" },
            obj: { de: "Mathematik", uk: "математику" },
            uk: "вивчати математику"
        },
        {
            verb: { de: "studieren", uk: "навчатися" },
            obj: { de: "Biologie", uk: "біологію" },
            uk: "вивчати біологію"
        },
        {
            verb: { de: "studieren", uk: "навчатися" },
            obj: { de: "Wirtschaft", uk: "економіку" },
            uk: "вивчати економіку"
        },
        {
            verb: { de: "arbeiten", uk: "працювати" },
            obj: { de: "als Lehrer", uk: "вчителем" },
            uk: "працювати вчителем"
        },
        {
            verb: { de: "arbeiten", uk: "працювати" },
            obj: { de: "als Koch", uk: "кухарем" },
            uk: "працювати кухарем"
        },
        {
            verb: { de: "arbeiten", uk: "працювати" },
            obj: { de: "als Fahrer", uk: "водієм" },
            uk: "працювати водієм"
        },
        {
            verb: { de: "arbeiten", uk: "працювати" },
            obj: { de: "als Designer", uk: "дизайнером" },
            uk: "працювати дизайнером"
        },
        {
            verb: { de: "lernen", uk: "вчити" },
            obj: { de: "Mathematik", uk: "математику" },
            uk: "вчити математику"
        },
        {
            verb: { de: "lernen", uk: "вчити" },
            obj: { de: "Musik", uk: "музику" },
            uk: "вчити музику"
        },
        {
            verb: { de: "hören", uk: "слухати" },
            obj: { de: "Musik", uk: "музику" },
            uk: "слухати музику"
        },
        {
            verb: { de: "suchen", uk: "шукати" },
            obj: { de: "den Schlüssel", uk: "ключ" },
            uk: "шукати ключ"
        },
        {
            verb: { de: "finden", uk: "знаходити" },
            obj: { de: "den Bahnhof", uk: "вокзал" },
            uk: "знаходити вокзал"
        },
        {
            verb: { de: "bezahlen", uk: "оплачувати" },
            obj: { de: "die Rechnung", uk: "рахунок" },
            uk: "оплачувати рахунок"
        },
        {
            verb: { de: "öffnen", uk: "відчиняти" },
            obj: { de: "die Tür", uk: "двері" },
            uk: "відчиняти двері"
        }
    ],
    connectors: [
        { de: "und", en: "and", uk: "і / та" },
        { de: "aber", en: "but", uk: "але" }
    ],
    modals: [
        { infinitive: "wollen", en: "want to", uk: "хотіти" },
        { infinitive: "können", en: "can", uk: "могти" },
        { infinitive: "müssen", en: "must", uk: "мусити" },
        { infinitive: "möchten", en: "would like to", uk: "хотів би" },
        { infinitive: "dürfen", en: "may", uk: "мати дозвіл" },
        { infinitive: "sollen", en: "should", uk: "бути повинним" }
    ],
    modalActions: [
        { verb: {de: "lernen", uk: "вчити"}, obj: {de: "Deutsch", uk: "німецьку"}, en: "learn German", uk: "вчити німецьку" },
        { verb: {de: "spielen", uk: "грати"}, obj: {de: "Fußball", uk: "в футбол"}, en: "play football", uk: "грати в футбол" },
        { verb: {de: "essen", uk: "їсти"}, obj: {de: "Pizza", uk: "піцу"}, en: "eat pizza", uk: "їсти піцу" },
        { verb: {de: "trinken", uk: "пити"}, obj: {de: "Kaffee", uk: "каву"}, en: "drink coffee", uk: "пити каву" },
        { verb: {de: "machen", uk: "робити"}, obj: {de: "Sport", uk: "спорт"}, en: "do sports", uk: "займатися спортом" },
        { verb: {de: "lesen", uk: "читати"}, obj: {de: "ein Buch", uk: "книгу"}, en: "read a book", uk: "читати книгу" },
        { verb: {de: "schreiben", uk: "писати"}, obj: {de: "eine E-Mail", uk: "імейл"}, en: "write an email", uk: "писати імейл" },
        { verb: {de: "kaufen", uk: "купувати"}, obj: {de: "Obst", uk: "фрукти"}, en: "buy fruit", uk: "купувати фрукти" },
        { verb: {de: "gehen", uk: "йти"}, obj: {de: "nach Hause", uk: "додому"}, en: "go home", uk: "йти додому" },
        { verb: {de: "fahren", uk: "їхати"}, obj: {de: "mit dem Bus", uk: "автобусом"}, en: "go by bus", uk: "їхати автобусом" },
        { verb: {de: "sitzen", uk: "сидіти"}, obj: {de: "im Café", uk: "у кафе"}, en: "sit in the cafe", uk: "сидіти у кафе" },
        { verb: {de: "kochen", uk: "готувати"}, obj: {de: "eine Suppe", uk: "суп"}, en: "cook soup", uk: "готувати суп" },
        { verb: {de: "bezahlen", uk: "оплачувати"}, obj: {de: "die Rechnung", uk: "рахунок"}, en: "pay the bill", uk: "оплачувати рахунок" },
        { verb: {de: "öffnen", uk: "відчиняти"}, obj: {de: "die Tür", uk: "двері"}, en: "open the door", uk: "відчиняти двері" }
    ],
    timeAdverbs: [
        { de: "um 7 Uhr", uk: "о 7 годині" },
        { de: "am Morgen", uk: "вранці" },
        { de: "am Abend", uk: "ввечері" },
        { de: "am Wochenende", uk: "на вихідних" },
        { de: "jeden Tag", uk: "кожного дня" },
        { de: "heute", uk: "сьогодні" },
        { de: "morgen", uk: "завтра" },
        { de: "um 8 Uhr", uk: "о 8 годині" },
        { de: "um 9 Uhr", uk: "о 9 годині" },
        { de: "am Nachmittag", uk: "після обіду" },
        { de: "oft", uk: "часто" },
        { de: "manchmal", uk: "іноді" },
        { de: "später", uk: "пізніше" }
    ],
    sepVerbsAlltag: [
        { infinitive: "aufstehen", prefix: "auf", stem: "stehen", en: "wake up", uk: "прокидатися" },
        { infinitive: "fernsehen", prefix: "fern", stem: "sehen", en: "watch TV", uk: "дивитися телевізор" },
        { infinitive: "einkaufen", prefix: "ein", stem: "kaufen", en: "shop", uk: "робити покупки" },
        { infinitive: "anrufen", prefix: "an", stem: "rufen", obj: { de: "Anna", uk: "Анні" }, en: "call", uk: "дзвонити" },
        { infinitive: "anfangen", prefix: "an", stem: "fangen", en: "start", uk: "починати" },
        { infinitive: "aufräumen", prefix: "auf", stem: "räumen", obj: { de: "das Zimmer", uk: "кімнату" }, en: "tidy up", uk: "прибирати" },
        { infinitive: "mitkommen", prefix: "mit", stem: "kommen", en: "come along", uk: "йти разом" },
        { infinitive: "aufmachen", prefix: "auf", stem: "machen", obj: { de: "die Tür", uk: "двері" }, en: "open", uk: "відчиняти" },
        { infinitive: "zumachen", prefix: "zu", stem: "machen", obj: { de: "das Fenster", uk: "вікно" }, en: "close", uk: "зачиняти" },
        { infinitive: "mitbringen", prefix: "mit", stem: "bringen", obj: { de: "ein Buch", uk: "книгу" }, en: "bring along", uk: "приносити з собою" },
        { infinitive: "ausgehen", prefix: "aus", stem: "gehen", en: "go out", uk: "виходити / гуляти" },
        { infinitive: "einsteigen", prefix: "ein", stem: "steigen", obj: { de: "in den Bus", uk: "в автобус" }, en: "get in", uk: "сідати у транспорт" },
        { infinitive: "abholen", prefix: "ab", stem: "holen", obj: { de: "Max", uk: "Макса" }, en: "pick up", uk: "забирати" },
        { infinitive: "vorbereiten", prefix: "vor", stem: "bereiten", obj: { de: "das Essen", uk: "їжу" }, en: "prepare", uk: "готувати" }
    ],
    dailyActions: [
        { verb: { de: "arbeiten", uk: "працювати" }, obj: { de: "im Büro", uk: "в офісі" }, en: "work in the office", uk: "працювати в офісі" },
        { verb: { de: "lernen", uk: "вчити" }, obj: { de: "Deutsch", uk: "німецьку" }, en: "learn German", uk: "вчити німецьку" },
        { verb: { de: "gehen", uk: "йти" }, obj: { de: "zur Schule", uk: "до школи" }, en: "go to school", uk: "йти до школи" },
        { verb: { de: "spielen", uk: "грати" }, obj: { de: "Fußball", uk: "у футбол" }, en: "play football", uk: "грати у футбол" },
        { verb: { de: "lesen", uk: "читати" }, obj: { de: "ein Buch", uk: "книгу" }, en: "read a book", uk: "читати книгу" },
        { verb: { de: "schreiben", uk: "писати" }, obj: { de: "eine E-Mail", uk: "імейл" }, en: "write an email", uk: "писати імейл" },
        { verb: { de: "trinken", uk: "пити" }, obj: { de: "Kaffee", uk: "каву" }, en: "drink coffee", uk: "пити каву" },
        { verb: { de: "kochen", uk: "готувати" }, obj: { de: "eine Suppe", uk: "суп" }, en: "cook soup", uk: "готувати суп" },
        { verb: { de: "sitzen", uk: "сидіти" }, obj: { de: "im Café", uk: "у кафе" }, en: "sit in the cafe", uk: "сидіти у кафе" },
        { verb: { de: "fahren", uk: "їхати" }, obj: { de: "zur Arbeit", uk: "на роботу" }, en: "go to work", uk: "їхати на роботу" },
        { verb: { de: "hören", uk: "слухати" }, obj: { de: "Musik", uk: "музику" }, en: "listen to music", uk: "слухати музику" },
        { verb: { de: "warten", uk: "чекати" }, obj: { de: "am Bahnhof", uk: "на вокзалі" }, en: "wait at the station", uk: "чекати на вокзалі" },
        { verb: { de: "bleiben", uk: "залишатися" }, obj: { de: "zu Hause", uk: "вдома" }, en: "stay home", uk: "залишатися вдома" },
        { verb: { de: "reisen", uk: "подорожувати" }, obj: { de: "nach Berlin", uk: "до Берліна" }, en: "travel to Berlin", uk: "подорожувати до Берліна" },
        { verb: { de: "bezahlen", uk: "оплачувати" }, obj: { de: "die Rechnung", uk: "рахунок" }, en: "pay the bill", uk: "оплачувати рахунок" },
        { verb: { de: "finden", uk: "знаходити" }, obj: { de: "den Schlüssel", uk: "ключ" }, en: "find the key", uk: "знаходити ключ" }
    ],
    foodItems: [
        { de: "einen Apfel", uk: "яблуко" },
        { de: "eine Pizza", uk: "піцу" },
        { de: "ein Brot", uk: "хліб" },
        { de: "einen Kaffee", uk: "каву" },
        { de: "einen Tee", uk: "чай" },
        { de: "Wasser", uk: "воду" },
        { de: "eine Suppe", uk: "суп" },
        { de: "einen Kuchen", uk: "пиріг" },
        { de: "Fleisch", uk: "м'ясо" },
        { de: "Gemüse", uk: "овочі" },
        { de: "ein Brötchen", uk: "булочку" },
        { de: "einen Saft", uk: "сік" },
        { de: "Milch", uk: "молоко" },
        { de: "einen Salat", uk: "салат" },
        { de: "Reis", uk: "рис" },
        { de: "Nudeln", uk: "макарони" },
        { de: "Käse", uk: "сир" },
        { de: "Obst", uk: "фрукти" }
    ],
    foodVerbs: [
        { infinitive: "essen", uk: "їсти" },
        { infinitive: "trinken", uk: "пити" },
        { infinitive: "kaufen", uk: "купувати" },
        { infinitive: "kochen", uk: "готувати" },
        { infinitive: "bestellen", uk: "замовляти" },
        { infinitive: "probieren", uk: "пробувати" },
        { infinitive: "brauchen", uk: "потребувати" },
        { infinitive: "nehmen", uk: "брати" },
        { infinitive: "mögen", uk: "любити / подобатися" },
        { infinitive: "bezahlen", uk: "оплачувати" }
    ],
    familyMembers: [
        { de: "Bruder", gender: "m", uk: "брата" },
        { de: "Schwester", gender: "f", uk: "сестру" },
        { de: "Mutter", gender: "f", uk: "матір" },
        { de: "Vater", gender: "m", uk: "батька" },
        { de: "Oma", gender: "f", uk: "бабусю" },
        { de: "Opa", gender: "m", uk: "дідуся" },
        { de: "Eltern", gender: "pl", uk: "батьків" },
        { de: "Freund", gender: "m", uk: "друга" },
        { de: "Freundin", gender: "f", uk: "подругу" },
        { de: "Kind", gender: "n", uk: "дитину" },
        { de: "Kollegen", gender: "pl", uk: "колег" },
        { de: "Tante", gender: "f", uk: "тітку" },
        { de: "Onkel", gender: "m", uk: "дядька" },
        { de: "Cousin", gender: "m", uk: "кузена" },
        { de: "Cousine", gender: "f", uk: "кузину" },
        { de: "Nachbar", gender: "m", uk: "сусіда" },
        { de: "Nachbarin", gender: "f", uk: "сусідку" },
        { de: "Chef", gender: "m", uk: "шефа" },
        { de: "Chefin", gender: "f", uk: "шефиню" },
        { de: "Freunde", gender: "pl", uk: "друзів" }
    ],
    familyVerbs: [
        { infinitive: "besuchen", uk: "відвідувати" },
        { infinitive: "lieben", uk: "любити" },
        { infinitive: "sehen", uk: "бачити" },
        { infinitive: "treffen", uk: "зустрічати" },
        { infinitive: "fragen", uk: "питати" },
        { infinitive: "kennen", uk: "знати" },
        { infinitive: "brauchen", uk: "потребувати" }
    ]
};

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getSubjectPool() {
    return [...VOCAB.subjects, ...VOCAB.names.filter(name => name.de !== "(name)")];
}

function getDifferentRandom(arr, currentValue, getValue = item => item) {
    if (arr.length < 2) return getRandom(arr);
    let picked = getRandom(arr);
    let attempts = 0;
    while (getValue(picked) === currentValue && attempts < 12) {
        picked = getRandom(arr);
        attempts++;
    }
    return picked;
}

function getSeparableObject(verb, subject) {
    if (!verb.obj) return null;
    if (verb.obj.de !== subject.de) return verb.obj;

    const people = [
        { de: "Anna", uk: "Анну" },
        { de: "Maria", uk: "Марію" },
        { de: "Lukas", uk: "Лукаса" },
        { de: "Max", uk: "Макса" }
    ];
    return getDifferentRandom(people, subject.de, person => person.de);
}


function buildSimpleIntro(forcedSubj = null, forcedActionIdx = -1) {
    let subj = forcedSubj || getRandom(getSubjectPool());
    let pronounKey = getPronounKey(subj);
    let action = forcedActionIdx >= 0 ? VOCAB.actions[forcedActionIdx] : getRandom(VOCAB.actions);
    if (action.verb.de === "heißen") {
        const nameOptions = VOCAB.names.filter(name => name.de !== "(name)");
        const targetName = getDifferentRandom(nameOptions, subj.de, name => name.de);
        action = {
            ...action,
            obj: { de: targetName.de, uk: targetName.uk },
            uk: `називатися ${targetName.uk}`
        };
    }
    let conj = conjugate(action.verb.de, pronounKey);
    let w = { de: "Was", uk: "Що" };
    let wQuestionStr = `Was ${conj} ${subj.de}?`;

    if (action.verb.de === "heißen") {
        w = { de: "Wie", uk: "Як" };
        wQuestionStr = `Wie ${conj} ${subj.de}?`;
    } else if (action.verb.de === "wohnen") {
        w = { de: "Wo", uk: "Де" };
        wQuestionStr = `Wo ${conj} ${subj.de}?`;
    } else if (action.verb.de === "kommen") {
        w = { de: "Woher", uk: "Звідки" };
        wQuestionStr = `Woher ${conj} ${subj.de}?`;
    } else if (action.verb.de === "sprechen") {
        w = { de: "Welche Sprache", uk: "Якою мовою" };
        wQuestionStr = `Welche Sprache ${conj} ${subj.de}?`;
    } else if (action.verb.de === "arbeiten") {
        w = { de: "Als was", uk: "Ким" };
        wQuestionStr = `Als was ${conj} ${subj.de}?`;
    }
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "v", text: action.verb.de, trans: action.verb.uk, conjugated: conj, type: "verb" },
            { id: "o", text: action.obj.de, trans: action.obj.uk, type: "object" },
            { id: "w", text: w.de, trans: w.uk, type: "w_word" }
        ],
        prompt: `[${subj.uk}] [${action.uk}]`,
        standardStr: `${conj} ${subj.de} ${action.obj.de}?`,
        invertedStr: wQuestionStr,
        standardIds: ["v", "s", "o"],
        invertedIds: ["w", "v", "s"]
    };
}

function buildModalSentence(forcedSubj = null) {
    let subj = forcedSubj || getRandom(getSubjectPool());
    let pronounKey = getPronounKey(subj);
    let v_mod = getRandom(VOCAB.modals);
    let conj = conjugate(v_mod.infinitive, pronounKey);
    let action = getRandom(VOCAB.modalActions);
    let w = { de: "Was", uk: "Що" };
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "vm", text: v_mod.infinitive, trans: v_mod.uk, conjugated: conj, type: "verb_modal" },
            { id: "o", text: action.obj.de, trans: action.obj.uk, type: "object" },
            { id: "vi", text: action.verb.de, trans: action.verb.uk, type: "verb_main" },
            { id: "w", text: w.de, trans: w.uk, type: "w_word" }
        ],
        prompt: `[${subj.uk}] [${v_mod.uk}] [${action.uk}]`,
        standardStr: `${conj} ${subj.de} ${action.obj.de} ${action.verb.de}?`,
        invertedStr: `${w.de} ${conj} ${subj.de} ${action.verb.de}?`,
        standardIds: ["vm", "s", "o", "vi"],
        invertedIds: ["w", "vm", "s", "vi"]
    };
}

function buildAlltagSentence(forcedSubj = null, includeSeparable = false) {
    let subj = forcedSubj || getRandom(getSubjectPool());
    let pronounKey = getPronounKey(subj);
    let time = getRandom(VOCAB.timeAdverbs);
    let v = getRandom(VOCAB.sepVerbsAlltag);

    if (!includeSeparable) {
        let action = getRandom(VOCAB.dailyActions);
        let conj = conjugate(action.verb.de, pronounKey);
        let w = { de: "Wann", uk: "Коли" };

        return {
            blocks: [
                { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
                { id: "v", text: action.verb.de, trans: action.verb.uk, conjugated: conj, type: "verb" },
                { id: "o", text: action.obj.de, trans: action.obj.uk, type: "object" },
                { id: "t", text: time.de, trans: time.uk, type: "object" },
                { id: "w", text: w.de, trans: w.uk, type: "w_word" }
            ],
            prompt: `[${subj.uk}] [${action.uk}] [${time.uk}]`,
            standardStr: `${conj} ${subj.de} ${time.de} ${action.obj.de}?`,
            invertedStr: `${w.de} ${conj} ${subj.de} ${action.obj.de}?`,
            standardIds: ["v", "s", "t", "o"],
            invertedIds: ["w", "v", "s", "o"]
        };
    }

    let conj = conjugate(v.stem, pronounKey);
    let w = { de: "Wann", uk: "Коли" };
    let separableObject = getSeparableObject(v, subj);
    let objectBlock = separableObject ? { id: "o", text: separableObject.de, trans: separableObject.uk, type: "object" } : null;
    let objectText = separableObject ? ` ${separableObject.de}` : "";
    let standardIds = ["v", "s", "t"];
    let invertedIds = ["w", "v", "s"];
    if (objectBlock) {
        standardIds.push("o");
        invertedIds.push("o");
    }
    standardIds.push("pref");
    invertedIds.push("pref");
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
            { id: "t", text: time.de, trans: time.uk, type: "object" },
            ...(objectBlock ? [objectBlock] : []),
            { id: "pref", text: v.prefix, trans: "(префікс)", type: "object" },
            { id: "w", text: w.de, trans: w.uk, type: "w_word" }
        ],
        prompt: `[${subj.uk}] [${v.uk}${separableObject ? ` ${separableObject.uk}` : ""}] [${time.uk}]`,
        standardStr: `${conj} ${subj.de} ${time.de}${objectText} ${v.prefix}?`,
        invertedStr: `${w.de} ${conj} ${subj.de}${objectText} ${v.prefix}?`,
        standardIds,
        invertedIds
    };
}

function buildFoodSentence(forcedSubj = null) {
    let subj = forcedSubj || getRandom(getSubjectPool());
    let pronounKey = getPronounKey(subj);
    let v = getRandom(VOCAB.foodVerbs);
    let conj = conjugate(v.infinitive, pronounKey);
    let food = getRandom(VOCAB.foodItems);
    
    if (v.infinitive === "trinken") {
        food = getRandom([
            { de: "einen Kaffee", uk: "каву" },
            { de: "einen Tee", uk: "чай" },
            { de: "Wasser", uk: "воду" },
            { de: "einen Saft", uk: "сік" },
            { de: "Milch", uk: "молоко" }
        ]);
    } else if (v.infinitive === "essen") {
        food = getRandom([
            { de: "eine Pizza", uk: "піцу" },
            { de: "ein Brot", uk: "хліб" },
            { de: "einen Apfel", uk: "яблуко" },
            { de: "eine Suppe", uk: "суп" },
            { de: "ein Brötchen", uk: "булочку" },
            { de: "einen Salat", uk: "салат" },
            { de: "Nudeln", uk: "макарони" },
            { de: "Käse", uk: "сир" }
        ]);
    }
    
    let w = { de: "Was", uk: "Що" };
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
            { id: "o", text: food.de, trans: food.uk, type: "object" },
            { id: "w", text: w.de, trans: w.uk, type: "w_word" }
        ],
        prompt: `[${subj.uk}] [${v.uk}] [${food.uk}]`,
        standardStr: `${conj} ${subj.de} ${food.de}?`,
        invertedStr: `${w.de} ${conj} ${subj.de}?`,
        standardIds: ["v", "s", "o"],
        invertedIds: ["w", "v", "s"]
    };
}

function buildFamilySentence(forcedSubj = null) {
    let subj = forcedSubj || getRandom(getSubjectPool());
    let pronounKey = getPronounKey(subj);
    let v = getRandom(VOCAB.familyVerbs);
    let conj = conjugate(v.infinitive, pronounKey);
    let member = getRandom(VOCAB.familyMembers);
    
    let poss = "mein"; 
    if (pronounKey === "du") poss = "dein";
    if (pronounKey === "er" || pronounKey === "es") poss = "sein";
    if (pronounKey === "sie" || pronounKey === "sie_pl") poss = "ihr";
    if (pronounKey === "wir") poss = "unser";
    if (pronounKey === "ihr") poss = "euer";
    if (pronounKey === "Sie") poss = "Ihr";
    
    let ending = "";
    if (member.gender === "m") ending = "en";
    if (member.gender === "f" || member.gender === "pl") ending = "e";
    
    let fullPoss = poss + ending;
    if (poss === "euer") {
        if (ending === "e") fullPoss = "eure";
        if (ending === "en") fullPoss = "euren";
    }
    if (poss === "unser" && ending === "en") fullPoss = "unseren";
    
    let objectText = `${fullPoss} ${member.de}`;
    let w = { de: "Wen", uk: "Кого" };
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
            { id: "o", text: objectText, trans: member.uk, type: "object" },
            { id: "w", text: w.de, trans: w.uk, type: "w_word" }
        ],
        prompt: `[${subj.uk}] [${v.uk}] [${member.uk}]`,
        standardStr: `${conj} ${subj.de} ${objectText}?`,
        invertedStr: `${w.de} ${conj} ${subj.de}?`,
        standardIds: ["v", "s", "o"],
        invertedIds: ["w", "v", "s"]
    };
}

function buildConnectorSimpleClause(index, subject, action, time) {
    const pronounKey = getPronounKey(subject);
    const conj = conjugate(action.verb.de, pronounKey);
    const wText = index === "1" ? "Wann" : "wann";

    return {
        blocks: [
            { id: `v${index}`, text: action.verb.de, trans: action.verb.uk, conjugated: conj, type: "verb" },
            { id: `s${index}`, text: subject.de, trans: subject.uk, type: "subject" },
            { id: `t${index}`, text: time.de, trans: time.uk, type: "object" },
            { id: `o${index}`, text: action.obj.de, trans: action.obj.uk, type: "object" },
            { id: `w${index}`, text: wText, trans: "Коли", type: "w_word" }
        ],
        prompt: `[${subject.uk}] [${action.uk}] [${time.uk}]`,
        standardStr: `${conj} ${subject.de} ${time.de} ${action.obj.de}`,
        invertedStr: `${wText} ${conj} ${subject.de} ${action.obj.de}`,
        standardIds: [`v${index}`, `s${index}`, `t${index}`, `o${index}`],
        invertedIds: [`w${index}`, `v${index}`, `s${index}`, `o${index}`]
    };
}

function buildConnectorSeparableClause(index, subject, verb, time) {
    const pronounKey = getPronounKey(subject);
    const conj = conjugate(verb.stem, pronounKey);
    const wText = index === "1" ? "Wann" : "wann";
    const separableObject = getSeparableObject(verb, subject);
    const objectBlock = separableObject ? { id: `o${index}`, text: separableObject.de, trans: separableObject.uk, type: "object" } : null;
    const objectText = separableObject ? ` ${separableObject.de}` : "";
    const standardIds = [`v${index}`, `s${index}`, `t${index}`];
    const invertedIds = [`w${index}`, `v${index}`, `s${index}`];
    if (objectBlock) {
        standardIds.push(`o${index}`);
        invertedIds.push(`o${index}`);
    }
    standardIds.push(`pref${index}`);
    invertedIds.push(`pref${index}`);

    return {
        blocks: [
            { id: `v${index}`, text: verb.infinitive, trans: verb.uk, conjugated: conj, type: "verb" },
            { id: `s${index}`, text: subject.de, trans: subject.uk, type: "subject" },
            { id: `t${index}`, text: time.de, trans: time.uk, type: "object" },
            ...(objectBlock ? [objectBlock] : []),
            { id: `pref${index}`, text: verb.prefix, trans: "(префікс)", type: "object" },
            { id: `w${index}`, text: wText, trans: "Коли", type: "w_word" }
        ],
        prompt: `[${subject.uk}] [${verb.uk}${separableObject ? ` ${separableObject.uk}` : ""}] [${time.uk}]`,
        standardStr: `${conj} ${subject.de} ${time.de}${objectText} ${verb.prefix}`,
        invertedStr: `${wText} ${conj} ${subject.de}${objectText} ${verb.prefix}`,
        standardIds,
        invertedIds
    };
}

function buildConnectorSentence(includeSeparable = false) {
    const subjects = getSubjectPool().filter(subject => subject.de !== "ich");
    const simpleConnectorActions = VOCAB.dailyActions.filter(action => !/\bauf\b/.test(action.obj.de));
    const subj1 = getRandom(subjects);
    const subj2 = getDifferentRandom(subjects, subj1.de, subject => subject.de);
    const time1 = getRandom(VOCAB.timeAdverbs);
    const time2 = getDifferentRandom(VOCAB.timeAdverbs, time1.de, time => time.de);
    const connector = getRandom(VOCAB.connectors);

    const clause1 = includeSeparable
        ? buildConnectorSeparableClause("1", subj1, getRandom(VOCAB.sepVerbsAlltag), time1)
        : buildConnectorSimpleClause("1", subj1, getRandom(simpleConnectorActions), time1);

    const secondVerb = includeSeparable
        ? getDifferentRandom(VOCAB.sepVerbsAlltag, clause1.blocks[0].text, verb => verb.infinitive)
        : getDifferentRandom(simpleConnectorActions, clause1.blocks[0].text, action => action.verb.de);
    const clause2 = includeSeparable
        ? buildConnectorSeparableClause("2", subj2, secondVerb, time2)
        : buildConnectorSimpleClause("2", subj2, secondVerb, time2);
    const connectorText = connector.de === "aber" ? ", aber" : connector.de;
    const connectorPhrase = connector.de === "aber" ? ", aber" : ` ${connector.de}`;

    return {
        blocks: [
            ...clause1.blocks,
            { id: "c", text: connectorText, trans: connector.uk, type: "connector" },
            ...clause2.blocks
        ],
        prompt: `${clause1.prompt} [${connector.uk}] ${clause2.prompt}`,
        standardStr: `${clause1.standardStr}${connectorPhrase} ${clause2.standardStr}?`,
        invertedStr: `${clause1.invertedStr}${connectorPhrase} ${clause2.invertedStr}?`,
        standardIds: [...clause1.standardIds, "c", ...clause2.standardIds],
        invertedIds: [...clause1.invertedIds, "c", ...clause2.invertedIds]
    };
}

function generateSentence(topic, verbLevel = 'BASIC') {
    let validTopics = ['INTRO', 'MODALS', 'ALLTAG', 'FOOD', 'FAMILY'];
    if (topic === 'RANDOM') topic = getRandom(validTopics);

    let s;
    if (verbLevel === 'SEPARABLE') {
        s = buildAlltagSentence(null, true);
    } else if (verbLevel === 'CONNECTORS') {
        s = buildConnectorSentence(false);
    } else if (verbLevel === 'CONNECTORS_SEPARABLE') {
        s = buildConnectorSentence(true);
    } else {
        let buildFunc;
        if (topic === 'MODALS') buildFunc = buildModalSentence;
        else if (topic === 'ALLTAG') buildFunc = (subj = null) => buildAlltagSentence(subj, false);
        else if (topic === 'FOOD') buildFunc = buildFoodSentence;
        else if (topic === 'FAMILY') buildFunc = buildFamilySentence;
        else buildFunc = buildSimpleIntro;

        s = buildFunc();
    }
    return {
        isComplex: false,
        blocks: s.blocks,
        prompt: s.prompt,
        standardStr: s.standardStr,
        invertedStr: s.invertedStr,
        standardIds: s.standardIds,
        invertedIds: s.invertedIds
    };
}

const RECENT_QUESTION_STORAGE_KEY = "interrogative_recent_question_keys";
const RECENT_QUESTION_LIMIT = 500;

function getQuestionKey(sentence) {
    return `${sentence.standardStr}||${sentence.invertedStr}`;
}

function loadRecentQuestionKeys() {
    try {
        if (typeof localStorage === "undefined") return [];
        const saved = JSON.parse(localStorage.getItem(RECENT_QUESTION_STORAGE_KEY) || "[]");
        return Array.isArray(saved) ? saved.filter(item => typeof item === "string") : [];
    } catch (error) {
        return [];
    }
}

function saveRecentQuestionKeys(questionKeys) {
    try {
        if (typeof localStorage === "undefined") return;
        const combined = [...loadRecentQuestionKeys(), ...questionKeys];
        const newestUnique = [];
        const seen = new Set();

        for (let i = combined.length - 1; i >= 0; i--) {
            const key = combined[i];
            if (seen.has(key)) continue;
            seen.add(key);
            newestUnique.unshift(key);
        }

        localStorage.setItem(RECENT_QUESTION_STORAGE_KEY, JSON.stringify(newestUnique.slice(-RECENT_QUESTION_LIMIT)));
    } catch (error) {
        // Training should still work when storage is unavailable.
    }
}

function buildPracticeQueue() {
    const queue = [];
    const usedKeys = new Set();
    const recentKeys = new Set(loadRecentQuestionKeys());
    const selectedTopics = practiceTopics.length ? practiceTopics : ['INTRO', 'MODALS', 'ALLTAG', 'FOOD', 'FAMILY'];
    const maxAttempts = Math.max(practiceCount * 120, 1500);

    let attempts = 0;
    while (queue.length < practiceCount && attempts < maxAttempts) {
        const pickedTopic = getRandom(selectedTopics);
        const sentence = generateSentence(pickedTopic, practiceVerbLevel);
        const key = getQuestionKey(sentence);
        attempts++;

        if (usedKeys.has(key) || recentKeys.has(key)) continue;
        usedKeys.add(key);
        queue.push(sentence);
    }

    attempts = 0;
    while (queue.length < practiceCount && attempts < maxAttempts) {
        const pickedTopic = getRandom(selectedTopics);
        const sentence = generateSentence(pickedTopic, practiceVerbLevel);
        const key = getQuestionKey(sentence);
        attempts++;

        if (usedKeys.has(key)) continue;
        usedKeys.add(key);
        queue.push(sentence);
    }

    saveRecentQuestionKeys(queue.map(getQuestionKey));
    return queue;
}

// ==========================================
// 5. APP STATE & UI LOGIC
// ==========================================
let practiceTopics = ['INTRO', 'MODALS', 'ALLTAG', 'FOOD', 'FAMILY'];
let practiceCount = 5;
let practiceFormat = 'BLOCKS'; // BLOCKS or TYPING
let practiceVerbLevel = 'BASIC'; // BASIC or SEPARABLE
let practiceMode = 'ASSISTED'; // ASSISTED or UNASSISTED

let currentQuestionIndex = 0;
let currentSentence = null;
let sentenceQueue = [];
let currentPhase = 'JA_NEIN'; // STANDARD or INVERTED
let currentBlocks = [];
let userSelection = [];
let attemptsLeft = 2; // For typing mode

const rulesSection = document.createElement("div");
rulesSection.classList.add("rules-container");

// Rules Card
const rulesCard = document.createElement("div");
rulesCard.classList.add("rule-card");
rulesCard.innerHTML = `
    <div class="rule-header">💡 ${t("interrogative", "rules_title")}</div>
    <div class="rule-desc">${t("interrogative", "rules_desc")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_from_statement_title")}</div>
    <ul class="rule-list">
        <li>${t("interrogative", "rule_from_statement_1")}</li>
        <li>${t("interrogative", "rule_from_statement_2")}</li>
        <li>${t("interrogative", "rule_from_statement_3")}</li>
    </ul>
    <table class="example-table">
        <thead>
            <tr>
                <th>${t("interrogative", "table_type")}</th>
                <th>${t("interrogative", "table_pos_1")}</th>
                <th>${t("interrogative", "table_pos_2")}</th>
                <th>${t("interrogative", "table_pos_3")}</th>
                <th>${t("interrogative", "table_rest")}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${t("interrogative", "statement_example")}</td>
                <td class="pos-1">Du</td>
                <td class="pos-2">wohnst</td>
                <td class="pos-3">in Berlin.</td>
                <td>-</td>
            </tr>
            <tr>
                <td>${t("interrogative", "standard_order")}</td>
                <td class="pos-2">Wohnst</td>
                <td class="pos-1">du</td>
                <td class="pos-3">in Berlin?</td>
                <td>-</td>
            </tr>
            <tr>
                <td>${t("interrogative", "inverted_order")}</td>
                <td class="pos-3">Wo</td>
                <td class="pos-2">wohnst</td>
                <td class="pos-1">du?</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
    <div class="rule-note">${t("interrogative", "rule_statement_note")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_w_words_title")}</div>
    <ul class="rule-list">
        <li>${t("interrogative", "rule_w_words_1")}</li>
        <li>${t("interrogative", "rule_w_words_2")}</li>
        <li>${t("interrogative", "rule_w_words_3")}</li>
        <li>${t("interrogative", "rule_w_words_4")}</li>
    </ul>
    <table class="example-table">
        <thead>
            <tr>
                <th>${t("interrogative", "table_question_word")}</th>
                <th>${t("interrogative", "table_asks_for")}</th>
                <th>${t("interrogative", "table_example")}</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Wo?</td><td>${t("interrogative", "asks_place")}</td><td>Wo wohnst du?</td></tr>
            <tr><td>Wann?</td><td>${t("interrogative", "asks_time")}</td><td>Wann arbeitest du im Büro?</td></tr>
            <tr><td>Was?</td><td>${t("interrogative", "asks_object")}</td><td>Was isst du?</td></tr>
            <tr><td>Woher?</td><td>${t("interrogative", "asks_origin")}</td><td>Woher kommst du?</td></tr>
            <tr><td>Wen?</td><td>${t("interrogative", "asks_person")}</td><td>Wen besuchst du?</td></tr>
            <tr><td>Wem?</td><td>${t("interrogative", "asks_dative_person")}</td><td>Wem hilfst du?</td></tr>
        </tbody>
    </table>
    <div class="rule-note">${t("interrogative", "rule_w_words_note")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_object_case_title")}</div>
    <div class="rule-desc">${t("interrogative", "rule_object_case_desc")}</div>
    <ul class="rule-list">
        <li>${t("interrogative", "rule_object_case_1")}</li>
        <li>${t("interrogative", "rule_object_case_2")}</li>
        <li>${t("interrogative", "rule_object_case_3")}</li>
        <li>${t("interrogative", "rule_object_case_4")}</li>
    </ul>
    <table class="example-table">
        <thead>
            <tr>
                <th>${t("interrogative", "table_pattern")}</th>
                <th>${t("interrogative", "table_question")}</th>
                <th>${t("interrogative", "table_logic")}</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>kaufen + Akk.</td><td>Was kaufst du?</td><td>${t("interrogative", "object_logic_was")}</td></tr>
            <tr><td>besuchen + Akk.</td><td>Wen besuchst du?</td><td>${t("interrogative", "object_logic_wen")}</td></tr>
            <tr><td>helfen + Dat.</td><td>Wem hilfst du?</td><td>${t("interrogative", "object_logic_wem")}</td></tr>
            <tr><td>geben + Dat. + Akk.</td><td>Wem gibst du das Buch?</td><td>${t("interrogative", "object_logic_give")}</td></tr>
            <tr><td>sprechen mit + Dat.</td><td>Mit wem sprichst du?</td><td>${t("interrogative", "object_logic_mit_wem")}</td></tr>
            <tr><td>warten auf + Akk.</td><td>Auf wen wartest du? / Worauf wartest du?</td><td>${t("interrogative", "object_logic_worauf")}</td></tr>
        </tbody>
    </table>
    <div class="rule-note">${t("interrogative", "rule_object_case_note")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_time_place_title")}</div>
    <ul class="rule-list">
        <li>${t("interrogative", "rule_time_place_1")}</li>
        <li>${t("interrogative", "rule_time_place_2")}</li>
        <li>${t("interrogative", "rule_time_place_3")}</li>
    </ul>
    <table class="example-table">
        <thead>
            <tr>
                <th>${t("interrogative", "table_type")}</th>
                <th>${t("interrogative", "table_pos_1")}</th>
                <th>${t("interrogative", "table_pos_2")}</th>
                <th>${t("interrogative", "table_pos_3")}</th>
                <th>${t("interrogative", "table_rest")}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${t("interrogative", "standard_order")}</td>
                <td class="pos-2">Sitzt</td>
                <td class="pos-1">ihr</td>
                <td>um 8 Uhr</td>
                <td>im Café?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "inverted_order")}</td>
                <td class="pos-3">Wann</td>
                <td class="pos-2">sitzt</td>
                <td class="pos-1">ihr</td>
                <td>im Café?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "inverted_order")}</td>
                <td class="pos-3">Wo</td>
                <td class="pos-2">sitzt</td>
                <td class="pos-1">ihr</td>
                <td>um 8 Uhr?</td>
            </tr>
        </tbody>
    </table>

    <div class="rule-subtitle">${t("interrogative", "rule_tekomolo_title")}</div>
    <div class="rule-desc">${t("interrogative", "rule_tekomolo_desc")}</div>
    <ul class="rule-list">
        <li>${t("interrogative", "rule_tekomolo_1")}</li>
        <li>${t("interrogative", "rule_tekomolo_2")}</li>
        <li>${t("interrogative", "rule_tekomolo_3")}</li>
        <li>${t("interrogative", "rule_tekomolo_4")}</li>
        <li>${t("interrogative", "rule_tekomolo_5")}</li>
    </ul>
    <table class="example-table">
        <thead>
            <tr>
                <th>${t("interrogative", "table_type")}</th>
                <th>${t("interrogative", "table_frame_start")}</th>
                <th>${t("interrogative", "table_subject")}</th>
                <th>${t("interrogative", "table_te")}</th>
                <th>${t("interrogative", "table_ka")}</th>
                <th>${t("interrogative", "table_mo")}</th>
                <th>${t("interrogative", "table_lo")}</th>
                <th>${t("interrogative", "table_end")}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${t("interrogative", "statement_example")}</td>
                <td class="pos-1">Anna <span class="pos-2">kauft</span></td>
                <td>-</td>
                <td>am Montag um 8 Uhr</td>
                <td>wegen des Tests</td>
                <td>mit viel Glück</td>
                <td>im Supermarkt</td>
                <td class="pos-3">ein.</td>
            </tr>
            <tr>
                <td>${t("interrogative", "standard_order")}</td>
                <td class="pos-2">Kauft</td>
                <td class="pos-1">Anna</td>
                <td>am Montag um 8 Uhr</td>
                <td>wegen des Tests</td>
                <td>ohne Probleme</td>
                <td>im Supermarkt</td>
                <td class="pos-3">ein?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "inverted_order")}</td>
                <td><span class="pos-3">Wann</span> <span class="pos-2">kauft</span></td>
                <td class="pos-1">Anna</td>
                <td>-</td>
                <td>wegen des Tests</td>
                <td>ohne Probleme</td>
                <td>im Supermarkt</td>
                <td class="pos-3">ein?</td>
            </tr>
        </tbody>
    </table>
    <div class="rule-note">${t("interrogative", "rule_tekomolo_note")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_modal_title")}</div>
    <ul class="rule-list">
        <li>${t("interrogative", "rule_modal_1")}</li>
        <li>${t("interrogative", "rule_modal_2")}</li>
        <li>${t("interrogative", "rule_modal_3")}</li>
    </ul>
    <table class="example-table">
        <thead>
            <tr>
                <th>${t("interrogative", "table_type")}</th>
                <th>${t("interrogative", "table_pos_1")}</th>
                <th>${t("interrogative", "table_pos_2")}</th>
                <th>${t("interrogative", "table_middle")}</th>
                <th>${t("interrogative", "table_end")}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${t("interrogative", "standard_order")}</td>
                <td class="pos-2">Kannst</td>
                <td class="pos-1">du</td>
                <td>Deutsch</td>
                <td class="pos-3">lernen?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "inverted_order")}</td>
                <td class="pos-3">Was</td>
                <td class="pos-2">kannst</td>
                <td>du</td>
                <td class="pos-3">lernen?</td>
            </tr>
        </tbody>
    </table>
    <div class="rule-note">${t("interrogative", "rule_modal_note")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_separable_complex_title")}</div>
    <ul class="rule-list">
        <li>${t("interrogative", "rule_separable_1")}</li>
        <li>${t("interrogative", "rule_separable_2")}</li>
        <li>${t("interrogative", "rule_separable_3")}</li>
        <li>${t("interrogative", "rule_separable_4")}</li>
        <li>${t("interrogative", "rule_complex_1")}</li>
        <li>${t("interrogative", "rule_complex_2")}</li>
        <li>${t("interrogative", "rule_complex_3")}</li>
    </ul>
    <table class="example-table">
        <thead>
            <tr>
                <th>${t("interrogative", "table_pattern")}</th>
                <th>${t("interrogative", "table_logic")}</th>
                <th>${t("interrogative", "table_example")}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${t("interrogative", "separable_yes_no_label")}</td>
                <td>${t("interrogative", "separable_yes_no_logic")}</td>
                <td>Stehst du um 7 Uhr auf?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "separable_w_label")}</td>
                <td>${t("interrogative", "separable_w_logic")}</td>
                <td>Wann stehst du auf?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "separable_modal_label")}</td>
                <td>${t("interrogative", "separable_modal_logic")}</td>
                <td>Musst du um 7 Uhr aufstehen?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "complex_example_label")}</td>
                <td>${t("interrogative", "complex_question_logic")}</td>
                <td>Wohnst du in Berlin und arbeitest du im Büro?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "complex_no_sep_label")}</td>
                <td>${t("interrogative", "complex_no_sep_logic")}</td>
                <td>Arbeitet Anna heute im Büro, aber lernt Max am Abend Deutsch?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "complex_sep_label")}</td>
                <td>${t("interrogative", "complex_sep_logic")}</td>
                <td>Steht Anna um 7 Uhr auf und kauft Max am Abend ein?</td>
            </tr>
            <tr>
                <td>${t("interrogative", "complex_w_label")}</td>
                <td>${t("interrogative", "complex_w_logic")}</td>
                <td>Wo wohnst du und wo arbeitest du?</td>
            </tr>
        </tbody>
    </table>
    <div class="rule-note">${t("interrogative", "rule_separable_complex_note")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_variants_title")}</div>
    <div class="rule-desc">${t("interrogative", "rule_variants_desc")}</div>
    <ol class="variant-list">
        <li>
            <span class="variant-name">${t("interrogative", "variant_yes_no_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_yes_no_pattern")}</span>
            <span class="variant-example"><span class="pos-2">Kommst</span> <span class="pos-1">du</span> heute?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_w_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_w_pattern")}</span>
            <span class="variant-example"><span class="pos-3">Wann</span> <span class="pos-2">kommst</span> <span class="pos-1">du</span>?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_subject_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_subject_pattern")}</span>
            <span class="variant-example"><span class="pos-3">Wer</span> <span class="pos-2">kommt</span> heute? / <span class="pos-3">Was</span> <span class="pos-2">passiert</span>?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_object_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_object_pattern")}</span>
            <span class="variant-example"><span class="pos-3">Was</span> <span class="pos-2">kaufst</span> <span class="pos-1">du</span>? / <span class="pos-3">Wen</span> <span class="pos-2">besuchst</span> <span class="pos-1">du</span>? / <span class="pos-3">Wem</span> <span class="pos-2">hilfst</span> <span class="pos-1">du</span>? / <span class="pos-3">Mit wem</span> <span class="pos-2">sprichst</span> <span class="pos-1">du</span>?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_teka_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_teka_pattern")}</span>
            <span class="variant-example"><span class="pos-2">Kaufst</span> <span class="pos-1">du</span> morgen wegen der Party mit viel Freude im Supermarkt ein?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_modal_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_modal_pattern")}</span>
            <span class="variant-example"><span class="pos-3">Was</span> <span class="pos-2">möchtest</span> <span class="pos-1">du</span> heute lernen?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_separable_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_separable_pattern")}</span>
            <span class="variant-example"><span class="pos-2">Stehst</span> <span class="pos-1">du</span> um 7 Uhr <span class="pos-3">auf</span>? / <span class="pos-3">Wann</span> <span class="pos-2">stehst</span> <span class="pos-1">du</span> <span class="pos-3">auf</span>?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_choice_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_choice_pattern")}</span>
            <span class="variant-example"><span class="pos-2">Trinkst</span> <span class="pos-1">du</span> Kaffee oder Tee? / <span class="pos-3">Wann</span> <span class="pos-2">kommst</span> <span class="pos-1">du</span>, heute oder morgen?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_compound_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_compound_pattern")}</span>
            <span class="variant-example"><span class="pos-2">Wohnst</span> <span class="pos-1">du</span> in Berlin und <span class="pos-2">arbeitest</span> <span class="pos-1">du</span> im Büro?</span>
        </li>
        <li>
            <span class="variant-name">${t("interrogative", "variant_echo_name")}</span>
            <span class="variant-pattern">${t("interrogative", "variant_echo_pattern")}</span>
            <span class="variant-example"><span class="pos-1">Du</span> <span class="pos-2">kommst</span> heute?</span>
        </li>
    </ol>
    <div class="rule-note">${t("interrogative", "rule_variants_note")}</div>

    <div class="rule-subtitle">${t("interrogative", "rule_checklist_title")}</div>
    <ol class="variant-list">
        <li>${t("interrogative", "rule_checklist_1")}</li>
        <li>${t("interrogative", "rule_checklist_2")}</li>
        <li>${t("interrogative", "rule_checklist_3")}</li>
        <li>${t("interrogative", "rule_checklist_4")}</li>
        <li>${t("interrogative", "rule_checklist_5")}</li>
        <li>${t("interrogative", "rule_checklist_6")}</li>
        <li>${t("interrogative", "rule_checklist_7")}</li>
    </ol>
    <div class="rule-note">${t("interrogative", "rule_checklist_note")}</div>
`;
rulesSection.appendChild(rulesCard);

// Settings
const createSettingGroup = (titleKey, options, activeVal, onSelect) => {
    const title = document.createElement("div");
    title.classList.add("section-title");
    title.textContent = t("interrogative", titleKey);
    rulesSection.appendChild(title);

    const group = document.createElement("div");
    group.classList.add("pill-group");
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("pill-btn");
        if (opt.val === activeVal) btn.classList.add("active");
        btn.textContent = t("interrogative", opt.labelKey) || opt.label;
        btn.onclick = () => {
            Array.from(group.children).forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            onSelect(opt.val);
        };
        group.appendChild(btn);
    });
    rulesSection.appendChild(group);
};

const createMultiSettingGroup = (titleKey, options, activeVals, onSelect) => {
    const title = document.createElement("div");
    title.classList.add("section-title");
    title.textContent = t("interrogative", titleKey);
    rulesSection.appendChild(title);

    const group = document.createElement("div");
    group.classList.add("pill-group");
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("pill-btn");
        if (activeVals.includes(opt.val)) btn.classList.add("active");
        btn.textContent = t("interrogative", opt.labelKey) || opt.label;
        btn.onclick = () => {
            if (btn.classList.contains("active")) {
                if (activeVals.length > 1) { // Prevent deselecting the last one
                    btn.classList.remove("active");
                    activeVals = activeVals.filter(v => v !== opt.val);
                    onSelect(activeVals);
                }
            } else {
                btn.classList.add("active");
                activeVals.push(opt.val);
                onSelect(activeVals);
            }
        };
        group.appendChild(btn);
    });
    rulesSection.appendChild(group);
};

createMultiSettingGroup("settings_topic", [
    { val: "INTRO", labelKey: "topic_intro" },
    { val: "MODALS", labelKey: "topic_modals" },
    { val: "ALLTAG", labelKey: "topic_alltag" },
    { val: "FOOD", labelKey: "topic_food" },
    { val: "FAMILY", labelKey: "topic_family" }
], practiceTopics, (val) => practiceTopics = val);

createSettingGroup("settings_format", [
    { val: "BLOCKS", labelKey: "format_blocks" },
    { val: "TYPING", labelKey: "format_typing" }
], practiceFormat, (val) => practiceFormat = val);

createSettingGroup("settings_verb_level", [
    { val: "BASIC", labelKey: "verb_level_basic" },
    { val: "SEPARABLE", labelKey: "verb_level_separable" },
    { val: "CONNECTORS", labelKey: "verb_level_connectors" },
    { val: "CONNECTORS_SEPARABLE", labelKey: "verb_level_connectors_separable" }
], practiceVerbLevel, (val) => practiceVerbLevel = val);

createSettingGroup("settings_count", [
    { val: 5, label: "5" },
    { val: 10, label: "10" },
    { val: 15, label: "15" },
    { val: 20, label: "20" },
    { val: 50, label: "50" }
], practiceCount, (val) => practiceCount = val);

const actionGroup = document.createElement("div");
actionGroup.classList.add("action-group");

const btnAssisted = document.createElement("button");
btnAssisted.classList.add("btn-primary");
btnAssisted.textContent = t("interrogative", "start_assisted");
btnAssisted.onclick = () => startGame('ASSISTED');

const btnUnassisted = document.createElement("button");
btnUnassisted.classList.add("btn-secondary");
btnUnassisted.textContent = t("interrogative", "start_unassisted");
btnUnassisted.onclick = () => startGame('UNASSISTED');

actionGroup.appendChild(btnAssisted);
actionGroup.appendChild(btnUnassisted);
rulesSection.appendChild(actionGroup);
main.appendChild(rulesSection);

// GAME UI
const gameSection = document.createElement("div");
gameSection.style.display = "none";
gameSection.style.width = "100%";
gameSection.style.flexDirection = "column";

const statusBar = document.createElement("div");
statusBar.classList.add("status-bar");
const statusLeft = document.createElement("div");
statusLeft.textContent = t("interrogative", "module_title");
const statusRight = document.createElement("div");
statusRight.classList.add("progress-counter");
statusBar.appendChild(statusLeft);
statusBar.appendChild(statusRight);

const promptContainer = document.createElement("div");
promptContainer.classList.add("prompt-container");
const promptPhase = document.createElement("div");
promptPhase.classList.add("prompt-phase");
const promptText = document.createElement("div");
promptText.classList.add("prompt-text");
promptText.style.whiteSpace = "pre-line";
promptContainer.appendChild(promptPhase);
promptContainer.appendChild(promptText);

const sentenceArea = document.createElement("div");
sentenceArea.classList.add("sentence-builder-area");

const wordBank = document.createElement("div");
wordBank.classList.add("word-bank");

const typingArea = document.createElement("div");
typingArea.classList.add("typing-area");
const typingInput = document.createElement("input");
typingInput.classList.add("typing-input");
typingInput.type = "text";
typingInput.autocomplete = "off";
typingInput.placeholder = "Wohnst du in Berlin?";
typingArea.appendChild(typingInput);

const feedbackMsg = document.createElement("div");
feedbackMsg.classList.add("feedback-message");

const checkBtn = document.createElement("button");
checkBtn.classList.add("btn-primary");
checkBtn.style.marginTop = "1rem";
checkBtn.style.width = "100%";
checkBtn.textContent = t("interrogative", "check_btn");

gameSection.appendChild(statusBar);
gameSection.appendChild(promptContainer);
gameSection.appendChild(sentenceArea);
gameSection.appendChild(wordBank);
gameSection.appendChild(typingArea);
gameSection.appendChild(checkBtn);
gameSection.appendChild(feedbackMsg);

// Modal UI Elements
const modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay";
const modalContent = document.createElement("div");
modalContent.className = "modal-card";
const modalTitle = document.createElement("div");
modalTitle.className = "modal-title";
const modalDesc = document.createElement("div");
modalDesc.className = "modal-desc";
const modalBtnGroup = document.createElement("div");
modalBtnGroup.className = "action-group";

modalContent.appendChild(modalTitle);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalBtnGroup);
modalOverlay.appendChild(modalContent);

main.appendChild(gameSection);
document.body.appendChild(main);
document.body.appendChild(modalOverlay);

// GAME LOGIC
function startGame(mode) {
    practiceMode = mode;
    currentQuestionIndex = 0;
    sentenceQueue = buildPracticeQueue();
    rulesSection.style.display = "none";
    gameSection.style.display = "flex";
    modalOverlay.classList.remove("active");
    
    if (practiceFormat === 'BLOCKS') {
        sentenceArea.style.display = "flex";
        wordBank.style.display = "flex";
        typingArea.style.display = "none";
        checkBtn.style.display = "block";
    } else {
        sentenceArea.style.display = "none";
        wordBank.style.display = "flex"; // Show word bank even in typing mode!
        typingArea.style.display = "flex";
        checkBtn.style.display = "none"; // Enter key replaces button in typing
    }
    
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex >= practiceCount) {
        showGameOver();
        return;
    }
    currentSentence = sentenceQueue[currentQuestionIndex] || generateSentence(getRandom(practiceTopics), practiceVerbLevel);
    currentPhase = 'JA_NEIN';
    attemptsLeft = 2; // For unassisted typing
    setupPhase();
}

function setupPhase() {
    userSelection = [];
    sentenceArea.innerHTML = "";
    wordBank.innerHTML = "";
    typingInput.value = "";
    typingInput.className = "typing-input";
    
    feedbackMsg.className = "feedback-message";
    feedbackMsg.textContent = "";
    checkBtn.textContent = t("interrogative", "check_btn");
    checkBtn.onclick = verifySentence;

    statusRight.textContent = `${currentQuestionIndex + 1} / ${practiceCount}`;

    if (currentPhase === 'JA_NEIN') {
        promptPhase.textContent = t("interrogative", "phase_ja_nein_prompt");
        promptPhase.style.color = "var(--text-secondary)";
    } else {
        promptPhase.textContent = t("interrogative", "phase_w_prompt");
        promptPhase.style.color = "var(--accent-red)";
    }
    
    if (practiceMode === 'ASSISTED') {
        let hint = currentPhase === 'JA_NEIN' ? currentSentence.standardStr : currentSentence.invertedStr;
        hint = hint.charAt(0).toUpperCase() + hint.slice(1);
        promptText.innerHTML = `<span style="color:var(--accent-gold); font-size:1.2rem; font-weight:800;">${t("interrogative", "expected_label")} ${hint}</span>`;
    } else {
        promptText.innerHTML = "";
    }

    if (practiceFormat === 'BLOCKS') {
        setupBlocksMode(true);
    } else {
        setupBlocksMode(false);
        typingInput.focus();
    }
}

function setupBlocksMode(isClickable) {

    let correctOrder = [];
    if (currentPhase === 'JA_NEIN') {
        correctOrder = currentSentence.standardIds.map(id => currentSentence.blocks.find(b => b.id === id));
    } else {
        correctOrder = currentSentence.invertedIds.map(id => currentSentence.blocks.find(b => b.id === id));
    }

    let shuffled = [...correctOrder].sort(() => Math.random() - 0.5);

    currentBlocks = shuffled;

    shuffled.forEach(block => {
        const blockEl = document.createElement("div");
        blockEl.classList.add("word-block");
        blockEl.dataset.blockId = block.id;

        const helperIndex = correctOrder.findIndex(correctBlock => correctBlock && correctBlock.id === block.id);
        if (practiceMode === 'ASSISTED' && practiceFormat === 'BLOCKS' && helperIndex !== -1) {
            blockEl.classList.add("helper");
            const helperNumber = document.createElement("div");
            helperNumber.classList.add("helper-number");
            helperNumber.textContent = helperIndex + 1;
            blockEl.appendChild(helperNumber);
        }


        const mainText = document.createElement("div");
        mainText.classList.add("word-main");
        mainText.textContent = block.text;

        const transText = document.createElement("div");
        transText.classList.add("word-trans");
        transText.textContent = block.trans;

        blockEl.appendChild(mainText);
        blockEl.appendChild(transText);

        if (isClickable) {
            blockEl.onclick = () => selectBlock(block, blockEl);
            blockEl.style.cursor = "pointer";
        } else {
            blockEl.style.cursor = "default";
        }
        wordBank.appendChild(blockEl);
    });
}

function selectBlock(block, originalEl) {
    if (originalEl.classList.contains("selected")) return;
    
    originalEl.classList.add("selected");
    userSelection.push(block);
    reRenderSentenceArea();
}

function reRenderSentenceArea() {
    sentenceArea.innerHTML = "";
    userSelection.forEach((block, index) => {
        const clone = document.createElement("div");
        clone.classList.add("word-block", "in-sentence");
        
        let displayMain = block.text;
        if (block.type === "verb" || block.type === "verb_modal") displayMain = block.conjugated;
        if (index === 0) displayMain = displayMain.charAt(0).toUpperCase() + displayMain.slice(1);

        clone.innerHTML = `<div class="word-main">${displayMain}</div>`;
        clone.onclick = () => {
            let idx = userSelection.indexOf(block);
            if (idx > -1) {
                userSelection.splice(idx, 1);
                clone.remove();
                
                // Use data-block-id to target the exact block in the word bank
                let originalEl = wordBank.querySelector(`[data-block-id="${block.id}"]`);
                if (originalEl) originalEl.classList.remove("selected");
                
                reRenderSentenceArea();
            }
        };
        sentenceArea.appendChild(clone);
    });

    const questionMark = document.createElement("div");
    questionMark.style.fontSize = "2rem";
    questionMark.style.fontWeight = "800";
    questionMark.style.color = "var(--text-primary)";
    questionMark.style.display = "flex";
    questionMark.style.alignItems = "center";
    questionMark.style.marginLeft = "0.5rem";
    questionMark.textContent = "?";
    sentenceArea.appendChild(questionMark);
}

function verifySentence() {
    if (practiceFormat === 'BLOCKS') {
        verifyBlocks();
    } else {
        verifyTyping();
    }
}

function verifyBlocks() {
    let targetIds = currentPhase === 'JA_NEIN' ? currentSentence.standardIds : currentSentence.invertedIds;

    if (userSelection.length !== targetIds.length) {
        feedbackMsg.textContent = t("interrogative", "use_all_words");
        feedbackMsg.className = "feedback-message error";
        return;
    }

    let isCorrect = true;
    for(let i=0; i<targetIds.length; i++) {
        if (!userSelection[i] || userSelection[i].id !== targetIds[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        feedbackMsg.textContent = t("interrogative", "correct_msg");
        feedbackMsg.className = "feedback-message correct";
        sentenceArea.style.borderColor = "var(--accent-green)";
        
        checkBtn.textContent = t("interrogative", "next_btn");
        checkBtn.onclick = () => {
            sentenceArea.style.borderColor = "var(--border-color)";
            if (currentPhase === 'JA_NEIN') {
                currentPhase = 'W_FRAGE';
                setupPhase();
            } else {
                currentQuestionIndex++;
                nextQuestion();
            }
        };
    } else {
        feedbackMsg.textContent = t("interrogative", "incorrect_msg");
        feedbackMsg.className = "feedback-message error";
        sentenceArea.style.borderColor = "var(--accent-red)";
        setTimeout(() => sentenceArea.style.borderColor = "var(--border-color)", 1000);
    }
}

function verifyTyping() {
    let inputStr = typingInput.value.trim().toLowerCase().replace(/\s+/g, ' ');
    // Remove punctuation from input to be safe
    inputStr = inputStr.replace(/[.,!?]/g, "");
    
    // Normalize umlauts for flexible typing
    let normalizedInput = inputStr.replace(/oe/g, 'ö').replace(/ue/g, 'ü').replace(/ae/g, 'ä').replace(/ss/g, 'ß');

    let targetAnswer = currentPhase === 'JA_NEIN' ? currentSentence.standardStr : currentSentence.invertedStr;
    targetAnswer = targetAnswer.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,!?]/g, "");
    
    if (inputStr === targetAnswer || normalizedInput === targetAnswer) {
        typingInput.classList.add("correct");
        feedbackMsg.textContent = t("interrogative", "correct_msg");
        feedbackMsg.className = "feedback-message correct";
        
        setTimeout(() => {
            if (currentPhase === 'JA_NEIN') {
                currentPhase = 'W_FRAGE';
                setupPhase();
            } else {
                currentQuestionIndex++;
                nextQuestion();
            }
        }, 1000);
    } else {
        typingInput.classList.add("wrong");
        setTimeout(() => typingInput.classList.remove("wrong"), 400);

        if (practiceMode === 'ASSISTED') {
            // Already has hint on screen
            feedbackMsg.textContent = t("interrogative", "incorrect_msg");
            feedbackMsg.className = "feedback-message error";
        } else {
            attemptsLeft--;
            if (attemptsLeft < 0) {
                let actual = targetAnswer.charAt(0).toUpperCase() + targetAnswer.slice(1) + "?";
                showModal(
                    t("interrogative", "modal_error_title"),
                    `${t("interrogative", "attempts_exhausted")}\n\n${t("interrogative", "correct_answer_was")}\n${actual}`,
                    [{ text: t("interrogative", "back_to_rules"), primary: true, action: showRules }]
                );
            } else {
                feedbackMsg.textContent = `${t("interrogative", "incorrect_msg")} (${t("interrogative", "tries_left").replace("{count}", attemptsLeft)})`;
                feedbackMsg.className = "feedback-message error";
            }
        }
    }
}

function showModal(title, desc, btns) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalBtnGroup.innerHTML = '';
    btns.forEach(b => {
        const btn = document.createElement("button");
        btn.classList.add("btn-primary");
        btn.textContent = b.text;
        btn.addEventListener('click', b.action);
        modalBtnGroup.appendChild(btn);
    });
    modalOverlay.classList.add("active");
}

function showRules() {
    rulesSection.style.display = "flex";
    rulesSection.style.flexDirection = "column";
    gameSection.style.display = "none";
    modalOverlay.classList.remove("active");
}

// Global Keyboard Listener for Typing Mode
document.addEventListener('keydown', (e) => {
    if (gameSection.style.display === "flex" && practiceFormat === 'TYPING' && !modalOverlay.classList.contains("active")) {
        if (e.key === 'Enter') {
            verifyTyping();
        }
    }
});

function showGameOver() {
    const finishScreen = document.createElement("div");
    finishScreen.classList.add("finish-screen");
    
    finishScreen.innerHTML = `
        <div class="finish-icon">🎉</div>
        <h1 style="margin-bottom: 0.5rem;">${t("interrogative", "game_over")}</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${t("interrogative", "finish_summary").replace("{count}", practiceCount)}</p>
        <button class="btn-primary" onclick="window.location.reload()">${t("interrogative", "back_to_menu")}</button>
    `;
    
    document.body.appendChild(finishScreen);
}
