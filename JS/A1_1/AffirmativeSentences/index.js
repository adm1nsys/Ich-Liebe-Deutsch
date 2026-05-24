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
    }
    .rule-header { font-size: 1.3rem; font-weight: 800; color: var(--accent-gold); display: flex; align-items: center; gap: 0.5rem; }
    .rule-desc { font-size: 0.95rem; color: var(--text-primary); line-height: 1.5; margin-bottom: 1rem; }

    .example-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; border-radius: 0.5rem; overflow: hidden; margin-top: 0.5rem; }
    .example-table th, .example-table td { padding: 0.75rem; border: 1px solid var(--border-color); text-align: center; }
    .example-table th { background: rgba(245, 175, 25, 0.08); color: var(--accent-gold); font-weight: 600; }
    .pos-1 { color: #3b82f6; font-weight: bold; }
    .pos-2 { color: var(--accent-red); font-weight: bold; text-decoration: underline; }
    .pos-3 { color: var(--accent-green); font-weight: bold; }

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
backBtn.title = t("affirmative", "back_to_menu");
backBtn.onclick = () => window.location.href = "index.html?page=Home";

const headerTitle = document.createElement('div');
headerTitle.style.fontWeight = '800';
headerTitle.style.fontSize = '1.2rem';
headerTitle.textContent = t("affirmative", "module_title");

header.appendChild(backBtn);
header.appendChild(headerTitle);
document.body.appendChild(header);

const main = document.createElement('main');
const title = document.createElement('h1');
title.textContent = t("affirmative", "module_title");
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

// ==========================================
// 4. SENTENCE GENERATOR
// ==========================================
const VOCAB = {
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
        { de: "(name)", en: "(name)", uk: "(ім'я)" }
    ],
    cities: [
        { de: "Berlin", en: "Berlin", uk: "Берліні", bare: "Берлін" },
        { de: "Wien", en: "Vienna", uk: "Відні", bare: "Відень" },
        { de: "Kyjiw", en: "Kyiv", uk: "Києві", bare: "Київ" },
        { de: "Hamburg", en: "Hamburg", uk: "Гамбурзі", bare: "Гамбург" },
        { de: "München", en: "Munich", uk: "Мюнхені", bare: "Мюнхен" },
        { de: "Prag", en: "Prague", uk: "Празі", bare: "Прага" }
    ],
    countries_aus: [
        { de: "der Ukraine", en: "Ukraine", uk: "України" },
        { de: "Deutschland", en: "Germany", uk: "Німеччини" },
        { de: "Polen", en: "Poland", uk: "Польщі" },
        { de: "Tschechien", en: "Czechia", uk: "Чехії" },
        { de: "Dänemark", en: "Denmark", uk: "Данії" },
        { de: "Österreich", en: "Austria", uk: "Австрії" }
    ],
    ages: [
        { de: "20", en: "20", uk: "20" },
        { de: "25", en: "25", uk: "25" },
        { de: "30", en: "30", uk: "30" },
        { de: "18", en: "18", uk: "18" },
        { de: "35", en: "35", uk: "35" },
        { de: "42", en: "42", uk: "42" }
    ],
    professions: [
        { de: "als Lehrer", en: "as a teacher", uk: "вчителем" },
        { de: "als Arzt", en: "as a doctor", uk: "лікарем" },
        { de: "als Programmierer", en: "as a programmer", uk: "програмістом" },
        { de: "als Verkäufer", en: "as a salesperson", uk: "продавцем" },
        { de: "als Koch", en: "as a cook", uk: "кухарем" },
        { de: "als Student", en: "as a student", uk: "студентом" }
    ],
    studies: [
        { de: "Informatik", en: "Computer Science", uk: "інформатику" },
        { de: "Medizin", en: "Medicine", uk: "медицину" },
        { de: "Kunst", en: "Art", uk: "мистецтво" },
        { de: "Deutsch", en: "German", uk: "німецьку" },
        { de: "Mathematik", en: "Mathematics", uk: "математику" },
        { de: "Musik", en: "Music", uk: "музику" }
    ],
    languages: [
        { de: "Englisch", en: "English", uk: "англійською" },
        { de: "Spanisch", en: "Spanish", uk: "іспанською" },
        { de: "Französisch", en: "French", uk: "французькою" },
        { de: "Deutsch", en: "German", uk: "німецькою" },
        { de: "Polnisch", en: "Polish", uk: "польською" },
        { de: "Ukrainisch", en: "Ukrainian", uk: "українською" }
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
    connectors: [
        { de: "und", en: "and", uk: "і / та" },
        { de: "aber", en: "but", uk: "але" }
    ],
    modals: [
        { infinitive: "wollen", en: "want to", uk: "хотіти" },
        { infinitive: "können", en: "can", uk: "могти" },
        { infinitive: "müssen", en: "must", uk: "мусити" },
        { infinitive: "möchten", en: "would like to", uk: "хотів би" },
        { infinitive: "dürfen", en: "may", uk: "мати дозвіл" }
    ],
    modalActions: [
        { verb: {de: "lernen", uk: "вчити"}, obj: {de: "Deutsch", uk: "німецьку"}, en: "learn German", uk: "вчити німецьку" },
        { verb: {de: "spielen", uk: "грати"}, obj: {de: "Fußball", uk: "в футбол"}, en: "play football", uk: "грати в футбол" },
        { verb: {de: "essen", uk: "їсти"}, obj: {de: "Pizza", uk: "піцу"}, en: "eat pizza", uk: "їсти піцу" },
        { verb: {de: "trinken", uk: "пити"}, obj: {de: "Kaffee", uk: "каву"}, en: "drink coffee", uk: "пити каву" },
        { verb: {de: "machen", uk: "робити"}, obj: {de: "Sport", uk: "спорт"}, en: "do sports", uk: "займатися спортом" },
        { verb: {de: "lesen", uk: "читати"}, obj: {de: "ein Buch", uk: "книгу"}, en: "read a book", uk: "читати книгу" },
        { verb: {de: "schreiben", uk: "писати"}, obj: {de: "eine E-Mail", uk: "імейл"}, en: "write an email", uk: "писати імейл" },
        { verb: {de: "kaufen", uk: "купувати"}, obj: {de: "Obst", uk: "фрукти"}, en: "buy fruit", uk: "купувати фрукти" }
    ],
    timeAdverbs: [
        { de: "um 7 Uhr", uk: "о 7 годині" },
        { de: "am Morgen", uk: "вранці" },
        { de: "am Abend", uk: "ввечері" },
        { de: "am Wochenende", uk: "на вихідних" },
        { de: "jeden Tag", uk: "кожного дня" },
        { de: "heute", uk: "сьогодні" },
        { de: "morgen", uk: "завтра" }
    ],
    sepVerbsAlltag: [
        { infinitive: "aufstehen", prefix: "auf", stem: "stehen", en: "wake up", uk: "прокидатися" },
        { infinitive: "fernsehen", prefix: "fern", stem: "sehen", en: "watch TV", uk: "дивитися телевізор" },
        { infinitive: "einkaufen", prefix: "ein", stem: "kaufen", en: "shop", uk: "робити покупки" },
        { infinitive: "anrufen", prefix: "an", stem: "rufen", en: "call", uk: "дзвонити" },
        { infinitive: "anfangen", prefix: "an", stem: "fangen", en: "start", uk: "починати" },
        { infinitive: "aufräumen", prefix: "auf", stem: "räumen", en: "tidy up", uk: "прибирати" },
        { infinitive: "mitkommen", prefix: "mit", stem: "kommen", en: "come along", uk: "йти разом" },
        { infinitive: "aufmachen", prefix: "auf", stem: "machen", en: "open", uk: "відчиняти" },
        { infinitive: "zumachen", prefix: "zu", stem: "machen", en: "close", uk: "зачиняти" },
        { infinitive: "mitbringen", prefix: "mit", stem: "bringen", en: "bring along", uk: "приносити з собою" }
    ],
    dailyActions: [
        { verb: { de: "arbeiten", uk: "працювати" }, obj: { de: "im Büro", uk: "в офісі" }, en: "work in the office", uk: "працювати в офісі" },
        { verb: { de: "lernen", uk: "вчити" }, obj: { de: "Deutsch", uk: "німецьку" }, en: "learn German", uk: "вчити німецьку" },
        { verb: { de: "gehen", uk: "йти" }, obj: { de: "zur Schule", uk: "до школи" }, en: "go to school", uk: "йти до школи" },
        { verb: { de: "spielen", uk: "грати" }, obj: { de: "Fußball", uk: "у футбол" }, en: "play football", uk: "грати у футбол" },
        { verb: { de: "lesen", uk: "читати" }, obj: { de: "ein Buch", uk: "книгу" }, en: "read a book", uk: "читати книгу" },
        { verb: { de: "schreiben", uk: "писати" }, obj: { de: "eine E-Mail", uk: "імейл" }, en: "write an email", uk: "писати імейл" },
        { verb: { de: "trinken", uk: "пити" }, obj: { de: "Kaffee", uk: "каву" }, en: "drink coffee", uk: "пити каву" },
        { verb: { de: "kochen", uk: "готувати" }, obj: { de: "eine Suppe", uk: "суп" }, en: "cook soup", uk: "готувати суп" }
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
        { de: "Gemüse", uk: "овочі" }
    ],
    foodVerbs: [
        { infinitive: "essen", uk: "їсти" },
        { infinitive: "trinken", uk: "пити" },
        { infinitive: "kaufen", uk: "купувати" },
        { infinitive: "kochen", uk: "готувати" },
        { infinitive: "bestellen", uk: "замовляти" },
        { infinitive: "probieren", uk: "пробувати" },
        { infinitive: "brauchen", uk: "потребувати" }
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
        { de: "Kollegen", gender: "pl", uk: "колег" }
    ],
    familyVerbs: [
        { infinitive: "besuchen", uk: "відвідувати" },
        { infinitive: "lieben", uk: "любити" },
        { infinitive: "sehen", uk: "бачити" },
        { infinitive: "treffen", uk: "зустрічати" }
    ]
};

function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function buildSimpleIntro(forcedSubj = null, forcedTemplate = null, includeSeparable = false) {
    const templatePool = includeSeparable ? [0, 1, 2, 3, 4, 5, 6, 7, 8] : [0, 1, 2, 3, 4, 6, 7, 8];
    let templateType = forcedTemplate !== null ? forcedTemplate : getRandom(templatePool);
    
    let subj = forcedSubj || getRandom([...VOCAB.subjects, ...VOCAB.names]);
    if (!forcedSubj && (templateType === 0 || templateType === 5)) {
        // Prevent (name) for heißen and sich vorstellen
        subj = getRandom(VOCAB.subjects);
    }
    let pronounKey = subj.de === "(name)" ? "er" : subj.de;
    let sText = subj.de;

    if (templateType === 0) { // heißen
        let v = VOCAB.verbs.heißen;
        let conj = conjugate(v.infinitive, pronounKey);
        let obj = "(name)";
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: obj, trans: "(ім'я)", type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [${obj}] / [${subj.uk}] [${v.uk}] [${obj}]`,
            standardStr: `${sText} ${conj} ${obj}`,
            invertedStr: `${obj} ${conj} ${sText}`
        };
    } 
    else if (templateType === 1) { // wohnen in
        let v = VOCAB.verbs.wohnen;
        let conj = conjugate(v.infinitive, pronounKey);
        let city = getRandom(VOCAB.cities);
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: "in " + city.de, trans: "в " + city.uk, type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [in ${city.en}] / [${subj.uk}] [${v.uk}] [у ${city.bare}]`,
            standardStr: `${sText} ${conj} in ${city.de}`,
            invertedStr: `in ${city.de} ${conj} ${sText}`
        };
    }
    else if (templateType === 2) { // kommen aus
        let v = VOCAB.verbs.kommen;
        let conj = conjugate(v.infinitive, pronounKey);
        let country = getRandom(VOCAB.countries_aus);
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: "aus " + country.de, trans: "з " + country.uk, type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [from ${country.en}] / [${subj.uk}] [${v.uk}] [з ${country.uk}]`,
            standardStr: `${sText} ${conj} aus ${country.de}`,
            invertedStr: `aus ${country.de} ${conj} ${sText}`
        };
    }
    else if (templateType === 3) { // sein alt
        let v = VOCAB.verbs.sein;
        let conj = conjugate(v.infinitive, pronounKey);
        let age = getRandom(VOCAB.ages);
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: age.de + " Jahre alt", trans: age.uk + " років", type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [${age.en} years old] / [${subj.uk}] [${v.uk}] [${age.uk} років]`,
            standardStr: `${sText} ${conj} ${age.de} Jahre alt`,
            invertedStr: `${age.de} Jahre alt ${conj} ${sText}`
        };
    }
    else if (templateType === 4) { // lernen Deutsch
        let v = VOCAB.verbs.lernen;
        let conj = conjugate(v.infinitive, pronounKey);
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: "Deutsch", trans: "німецьку", type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [German] / [${subj.uk}] [${v.uk}] [німецьку]`,
            standardStr: `${sText} ${conj} Deutsch`,
            invertedStr: `Deutsch ${conj} ${sText}`
        };
    }
    else if (templateType === 5) { // sich vorstellen (heute stelle ich mich vor)
        let v = VOCAB.verbs.vorstellen;
        let conjFull = conjugate(v.infinitive, pronounKey); // "stelle vor"
        let split = conjFull.split(" ");
        let vBase = split[0];
        let prefix = split[1];
        let refl = getReflexive(pronounKey);
        let time = { de: "heute", uk: "сьогодні" };
        
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: vBase, type: "verb" },
                { id: "r", text: refl, trans: "себе", type: "object" },
                { id: "t", text: time.de, trans: time.uk, type: "object" },
                { id: "pref", text: prefix, trans: "(префікс)", type: "object" }
            ],
            prompt: `[${subj.en}] [to introduce oneself] / [${subj.uk}] [представлятися]`,
            standardStr: `${sText} ${vBase} ${refl} ${time.de} ${prefix}`,
            invertedStr: `${time.de} ${vBase} ${sText} ${refl} ${prefix}`,
            standardIds: ["s", "v", "r", "t", "pref"],
            invertedIds: ["t", "v", "s", "r", "pref"]
        };
    }
    else if (templateType === 6) { // arbeiten als
        let v = VOCAB.verbs.arbeiten;
        let conj = conjugate(v.infinitive, pronounKey);
        let prof = getRandom(VOCAB.professions);
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: prof.de, trans: prof.uk, type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [${prof.en}] / [${subj.uk}] [${v.uk}] [${prof.uk}]`,
            standardStr: `${sText} ${conj} ${prof.de}`,
            invertedStr: `${prof.de} ${conj} ${sText}`
        };
    }
    else if (templateType === 7) { // studieren
        let v = VOCAB.verbs.studieren;
        let conj = conjugate(v.infinitive, pronounKey);
        let study = getRandom(VOCAB.studies);
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: study.de, trans: study.uk, type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [${study.en}] / [${subj.uk}] [${v.uk}] [${study.uk}]`,
            standardStr: `${sText} ${conj} ${study.de}`,
            invertedStr: `${study.de} ${conj} ${sText}`
        };
    }
    else { // sprechen
        let v = VOCAB.verbs.sprechen;
        let conj = conjugate(v.infinitive, pronounKey);
        let lang = getRandom(VOCAB.languages);
        return {
            blocks: [
                { id: "s", text: sText, trans: subj.uk, type: "subject" },
                { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
                { id: "o", text: lang.de, trans: lang.uk, type: "object" }
            ],
            prompt: `[${subj.en}] [${v.en}] [${lang.en}] / [${subj.uk}] [${v.uk}] [${lang.uk}]`,
            standardStr: `${sText} ${conj} ${lang.de}`,
            invertedStr: `${lang.de} ${conj} ${sText}`
        };
    }
}

function buildModalSentence(forcedSubj = null) {
    let subj = forcedSubj || getRandom([...VOCAB.subjects, ...VOCAB.names]);
    let pronounKey = subj.de === "(name)" ? "er" : subj.de;
    
    let modal = getRandom(VOCAB.modals);
    let conj = conjugate(modal.infinitive, pronounKey);
    let action = getRandom(VOCAB.modalActions);
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "vm", text: modal.infinitive, trans: modal.uk, conjugated: conj, type: "verb_modal" },
            { id: "o", text: action.obj.de, trans: action.obj.uk, type: "object" },
            { id: "vi", text: action.verb.de, trans: action.verb.uk, type: "verb_main" }
        ],
        prompt: `[${subj.en}] [${modal.en}] [${action.en}] / [${subj.uk}] [${modal.uk}] [${action.uk}]`,
        standardStr: `${subj.de} ${conj} ${action.obj.de} ${action.verb.de}`,
        invertedStr: `${action.obj.de} ${conj} ${subj.de} ${action.verb.de}`,
        standardIds: ["s", "vm", "o", "vi"],
        invertedIds: ["o", "vm", "s", "vi"]
    };
}

function buildAlltagSentence(forcedSubj = null, includeSeparable = false) {
    let subj = forcedSubj || getRandom([...VOCAB.subjects, ...VOCAB.names]);
    let pronounKey = subj.de === "(name)" ? "er" : subj.de;
    let time = getRandom(VOCAB.timeAdverbs);

    if (!includeSeparable) {
        let action = getRandom(VOCAB.dailyActions);
        let conj = conjugate(action.verb.de, pronounKey);

        return {
            blocks: [
                { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
                { id: "v", text: action.verb.de, trans: action.verb.uk, conjugated: conj, type: "verb" },
                { id: "o", text: action.obj.de, trans: action.obj.uk, type: "object" },
                { id: "t", text: time.de, trans: time.uk, type: "object" }
            ],
            prompt: `[${subj.uk}] [${action.uk}] [${time.uk}]`,
            standardStr: `${subj.de} ${conj} ${action.obj.de} ${time.de}`,
            invertedStr: `${time.de} ${conj} ${subj.de} ${action.obj.de}`,
            standardIds: ["s", "v", "o", "t"],
            invertedIds: ["t", "v", "s", "o"]
        };
    }

    let v = getRandom(VOCAB.sepVerbsAlltag);
    let conj = conjugate(v.stem, pronounKey);
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
            { id: "t", text: time.de, trans: time.uk, type: "object" },
            { id: "pref", text: v.prefix, trans: "(префікс)", type: "object" }
        ],
        prompt: `[${subj.uk}] [${v.uk}] [${time.uk}]`,
        standardStr: `${subj.de} ${conj} ${time.de} ${v.prefix}`,
        invertedStr: `${time.de} ${conj} ${subj.de} ${v.prefix}`,
        standardIds: ["s", "v", "t", "pref"],
        invertedIds: ["t", "v", "s", "pref"]
    };
}

function buildFoodSentence(forcedSubj = null) {
    let subj = forcedSubj || getRandom([...VOCAB.subjects, ...VOCAB.names]);
    let pronounKey = subj.de === "(name)" ? "er" : subj.de;
    let v = getRandom(VOCAB.foodVerbs);
    let conj = conjugate(v.infinitive, pronounKey);
    let food = getRandom(VOCAB.foodItems);
    
    if (v.infinitive === "trinken") {
        food = getRandom([{ de: "einen Kaffee", uk: "каву" }, { de: "einen Tee", uk: "чай" }, { de: "Wasser", uk: "воду" }]);
    } else if (v.infinitive === "essen") {
        food = getRandom([{ de: "eine Pizza", uk: "піцу" }, { de: "ein Brot", uk: "хліб" }, { de: "einen Apfel", uk: "яблуко" }, { de: "eine Suppe", uk: "суп" }]);
    }
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
            { id: "o", text: food.de, trans: food.uk, type: "object" }
        ],
        prompt: `[${subj.uk}] [${v.uk}] [${food.uk}]`,
        standardStr: `${subj.de} ${conj} ${food.de}`,
        invertedStr: `${food.de} ${conj} ${subj.de}`,
        standardIds: ["s", "v", "o"],
        invertedIds: ["o", "v", "s"]
    };
}

function buildFamilySentence(forcedSubj = null) {
    let subj = forcedSubj || getRandom(VOCAB.subjects); 
    let pronounKey = subj.de;
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
    
    return {
        blocks: [
            { id: "s", text: subj.de, trans: subj.uk, type: "subject" },
            { id: "v", text: v.infinitive, trans: v.uk, conjugated: conj, type: "verb" },
            { id: "o", text: objectText, trans: member.uk, type: "object" }
        ],
        prompt: `[${subj.uk}] [${v.uk}] [${member.uk}]`,
        standardStr: `${subj.de} ${conj} ${objectText}`,
        invertedStr: `${objectText} ${conj} ${subj.de}`,
        standardIds: ["s", "v", "o"],
        invertedIds: ["o", "v", "s"]
    };
}

function generateSentence(topic, difficulty, verbLevel = 'BASIC') {
    let validTopics = ['INTRO', 'MODALS', 'ALLTAG', 'FOOD', 'FAMILY'];
    if (topic === 'RANDOM') topic = getRandom(validTopics);

    const includeSeparable = verbLevel === 'SEPARABLE';
    let isModal = topic === 'MODALS';
    let buildFunc;
    if (topic === 'MODALS') buildFunc = buildModalSentence;
    else if (topic === 'ALLTAG') buildFunc = (subj = null) => buildAlltagSentence(subj, includeSeparable);
    else if (topic === 'FOOD') buildFunc = buildFoodSentence;
    else if (topic === 'FAMILY') buildFunc = buildFamilySentence;
    else buildFunc = (subj = null) => buildSimpleIntro(subj, null, includeSeparable);

    if (difficulty === 'SIMPLE') {
        let s = buildFunc();
        return {
            isComplex: false,
            blocks: s.blocks,
            prompt: s.prompt,
            standardStr: s.standardStr,
            invertedStr: s.invertedStr,
            standardIds: s.standardIds || ["s", "v", "o"],
            invertedIds: s.invertedIds || ["o", "v", "s"]
        };
    } else {
        // Complex sentence: Logical pairs with the SAME subject
        let subj = getRandom(VOCAB.subjects); 
        let s1 = buildFunc(subj);
        let s2 = buildFunc(subj);
        let conn = getRandom(VOCAB.connectors);
        
        if (topic === 'INTRO') {
            let combo = Math.floor(Math.random() * 4);
            if (combo === 0) { s1 = buildSimpleIntro(subj, 0, includeSeparable); s2 = buildSimpleIntro(subj, 2, includeSeparable); conn = VOCAB.connectors[0]; }
            else if (combo === 1) { s1 = buildSimpleIntro(subj, 1, includeSeparable); s2 = buildSimpleIntro(subj, 6, includeSeparable); conn = VOCAB.connectors[0]; }
            else if (combo === 2) { s1 = buildSimpleIntro(subj, 3, includeSeparable); s2 = buildSimpleIntro(subj, 7, includeSeparable); conn = VOCAB.connectors[0]; }
            else { s1 = buildSimpleIntro(subj, 4, includeSeparable); s2 = buildSimpleIntro(subj, 8, includeSeparable); conn = VOCAB.connectors[1]; }
        }
        
        let s1_stdIds = s1.standardIds || ["s", "v", "o"];
        let s1_invIds = s1.invertedIds || ["o", "v", "s"];
        let s2_stdIds = s2.standardIds || ["s", "v", "o"];
        let s2_invIds = s2.invertedIds || ["o", "v", "s"];

        let blocks = [
            ...s1.blocks.map(b => ({...b, id: "1_" + b.id})),
            { id: "conn", text: conn.de, trans: conn.uk, type: "connector" },
            ...s2.blocks.map(b => ({...b, id: "2_" + b.id}))
        ];
        
        let prompt = `${s1.prompt} \n[${conn.en} / ${conn.uk}] \n${s2.prompt}`;
        let standardStr = `${s1.standardStr}, ${conn.de} ${s2.standardStr}`;
        let invertedStr = `${s1.invertedStr}, ${conn.de} ${s2.invertedStr}`;
        
        return {
            isComplex: true,
            blocks: blocks,
            prompt: prompt,
            standardStr: standardStr,
            invertedStr: invertedStr,
            standardIds: [...s1_stdIds.map(id => "1_" + id), "conn", ...s2_stdIds.map(id => "2_" + id)],
            invertedIds: [...s1_invIds.map(id => "1_" + id), "conn", ...s2_invIds.map(id => "2_" + id)]
        };
    }
}

// ==========================================
// 5. APP STATE & UI LOGIC
// ==========================================
let practiceTopics = ['INTRO', 'MODALS', 'ALLTAG', 'FOOD', 'FAMILY'];
let practiceCount = 5;
let practiceFormat = 'BLOCKS'; // BLOCKS or TYPING
let practiceDifficulty = 'SIMPLE'; // SIMPLE or COMPLEX
let practiceVerbLevel = 'BASIC'; // BASIC or SEPARABLE
let practiceMode = 'ASSISTED'; // ASSISTED or UNASSISTED

let currentQuestionIndex = 0;
let currentSentence = null;
let currentPhase = 'STANDARD'; // STANDARD or INVERTED
let currentBlocks = [];
let userSelection = [];
let attemptsLeft = 2; // For typing mode

const rulesSection = document.createElement("div");
rulesSection.classList.add("rules-container");

// Rules Card
const rulesCard = document.createElement("div");
rulesCard.classList.add("rule-card");
rulesCard.innerHTML = `
    <div class="rule-header">💡 ${t("affirmative", "rules_title")}</div>
    <div class="rule-desc">${t("affirmative", "rules_desc")}</div>
    <table class="example-table">
        <thead>
            <tr><th>Order</th><th>Pos 1</th><th>Pos 2 (Verb)</th><th>Pos 3</th></tr>
        </thead>
        <tbody>
            <tr>
                <td>${t("affirmative", "standard_order")}</td>
                <td class="pos-1">Ich</td>
                <td class="pos-2">wohne</td>
                <td class="pos-3">in Berlin</td>
            </tr>
            <tr>
                <td>${t("affirmative", "inverted_order")}</td>
                <td class="pos-3">In Berlin</td>
                <td class="pos-2">wohne</td>
                <td class="pos-1">ich</td>
            </tr>
        </tbody>
    </table>
`;
rulesSection.appendChild(rulesCard);

// Settings
const createSettingGroup = (titleKey, options, activeVal, onSelect) => {
    const title = document.createElement("div");
    title.classList.add("section-title");
    title.textContent = t("affirmative", titleKey);
    rulesSection.appendChild(title);

    const group = document.createElement("div");
    group.classList.add("pill-group");
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("pill-btn");
        if (opt.val === activeVal) btn.classList.add("active");
        btn.textContent = t("affirmative", opt.labelKey) || opt.label;
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
    title.textContent = t("affirmative", titleKey);
    rulesSection.appendChild(title);

    const group = document.createElement("div");
    group.classList.add("pill-group");
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.classList.add("pill-btn");
        if (activeVals.includes(opt.val)) btn.classList.add("active");
        btn.textContent = t("affirmative", opt.labelKey) || opt.label;
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
    { val: "MODALS", label: "Модальні" },
    { val: "ALLTAG", label: "Мій день" },
    { val: "FOOD", label: "Їжа та покупки" },
    { val: "FAMILY", label: "Сім'я та друзі" }
], practiceTopics, (val) => practiceTopics = val);

createSettingGroup("settings_format", [
    { val: "BLOCKS", labelKey: "format_blocks" },
    { val: "TYPING", labelKey: "format_typing" }
], practiceFormat, (val) => practiceFormat = val);

createSettingGroup("settings_diff", [
    { val: "SIMPLE", labelKey: "diff_simple" },
    { val: "COMPLEX", labelKey: "diff_complex" }
], practiceDifficulty, (val) => practiceDifficulty = val);

createSettingGroup("settings_verb_level", [
    { val: "BASIC", labelKey: "verb_level_basic" },
    { val: "SEPARABLE", labelKey: "verb_level_separable" }
], practiceVerbLevel, (val) => practiceVerbLevel = val);

createSettingGroup("settings_count", [
    { val: 5, label: "5" },
    { val: 10, label: "10" },
    { val: 15, label: "15" },
    { val: 20, label: "20" }
], practiceCount, (val) => practiceCount = val);

const actionGroup = document.createElement("div");
actionGroup.classList.add("action-group");

const btnAssisted = document.createElement("button");
btnAssisted.classList.add("btn-primary");
btnAssisted.textContent = t("affirmative", "start_assisted");
btnAssisted.onclick = () => startGame('ASSISTED');

const btnUnassisted = document.createElement("button");
btnUnassisted.classList.add("btn-secondary");
btnUnassisted.textContent = t("affirmative", "start_unassisted");
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
statusLeft.textContent = t("affirmative", "module_title");
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
typingInput.placeholder = "Ich wohne in Berlin...";
typingArea.appendChild(typingInput);

const feedbackMsg = document.createElement("div");
feedbackMsg.classList.add("feedback-message");

const checkBtn = document.createElement("button");
checkBtn.classList.add("btn-primary");
checkBtn.style.marginTop = "1rem";
checkBtn.style.width = "100%";
checkBtn.textContent = t("affirmative", "check_btn");

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
    let pickedTopic = getRandom(practiceTopics);
    currentSentence = generateSentence(pickedTopic, practiceDifficulty, practiceVerbLevel);
    currentPhase = 'STANDARD';
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
    checkBtn.textContent = t("affirmative", "check_btn");
    checkBtn.onclick = verifySentence;

    statusRight.textContent = `${currentQuestionIndex + 1} / ${practiceCount}`;
    
    if (currentPhase === 'STANDARD') {
        promptPhase.textContent = t("affirmative", "phase_standard_prompt");
        promptPhase.style.color = "var(--text-secondary)";
    } else {
        promptPhase.textContent = t("affirmative", "phase_invert_prompt");
        promptPhase.style.color = "var(--accent-red)";
    }
    
    if (practiceMode === 'ASSISTED') {
        let hint = currentPhase === 'STANDARD' ? currentSentence.standardStr : currentSentence.invertedStr;
        hint = hint.charAt(0).toUpperCase() + hint.slice(1);
        promptText.innerHTML = `<span style="color:var(--accent-gold); font-size:1.2rem; font-weight:800;">Очікується: ${hint}</span>`;
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
    if (currentPhase === 'STANDARD') {
        correctOrder = currentSentence.standardIds.map(id => currentSentence.blocks.find(b => b.id === id));
    } else {
        correctOrder = currentSentence.invertedIds.map(id => currentSentence.blocks.find(b => b.id === id));
    }

    let shuffled = [...currentSentence.blocks].sort(() => Math.random() - 0.5);
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

    const clone = document.createElement("div");
    clone.classList.add("word-block", "in-sentence");
    
    let displayMain = block.text;
    if (block.type === "verb" || block.type === "verb_modal") displayMain = block.conjugated;
    
    if (userSelection.length === 1) {
        displayMain = displayMain.charAt(0).toUpperCase() + displayMain.slice(1);
    }

    clone.innerHTML = `<div class="word-main">${displayMain}</div>`;

    clone.onclick = () => {
        let idx = userSelection.indexOf(block);
        if (idx > -1) {
            userSelection.splice(idx, 1);
            clone.remove();
            originalEl.classList.remove("selected");
            reRenderSentenceArea();
        }
    };

    sentenceArea.appendChild(clone);
}

function reRenderSentenceArea() {
    sentenceArea.innerHTML = "";
    userSelection.forEach((block, index) => {
        const clone = document.createElement("div");
        clone.classList.add("word-block");
        
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
}

function verifySentence() {
    if (practiceFormat === 'BLOCKS') {
        verifyBlocks();
    } else {
        verifyTyping();
    }
}

function verifyBlocks() {
    if (userSelection.length !== currentSentence.blocks.length) {
        feedbackMsg.textContent = "Please use all words!";
        feedbackMsg.className = "feedback-message error";
        return;
    }

    let targetIds = currentPhase === 'STANDARD' ? currentSentence.standardIds : currentSentence.invertedIds;
    let isCorrect = true;
    for(let i=0; i<targetIds.length; i++) {
        if (!userSelection[i] || userSelection[i].id !== targetIds[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        feedbackMsg.textContent = t("affirmative", "correct_msg");
        feedbackMsg.className = "feedback-message correct";
        sentenceArea.style.borderColor = "var(--accent-green)";
        
        checkBtn.textContent = t("affirmative", "next_btn");
        checkBtn.onclick = () => {
            sentenceArea.style.borderColor = "var(--border-color)";
            if (currentPhase === 'STANDARD') {
                currentPhase = 'INVERTED';
                setupPhase();
            } else {
                currentQuestionIndex++;
                nextQuestion();
            }
        };
    } else {
        feedbackMsg.textContent = t("affirmative", "incorrect_msg");
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

    let targetAnswer = currentPhase === 'STANDARD' ? currentSentence.standardStr : currentSentence.invertedStr;
    targetAnswer = targetAnswer.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,!?]/g, "");
    
    if (inputStr === targetAnswer || normalizedInput === targetAnswer) {
        typingInput.classList.add("correct");
        feedbackMsg.textContent = t("affirmative", "correct_msg");
        feedbackMsg.className = "feedback-message correct";
        
        setTimeout(() => {
            if (currentPhase === 'STANDARD') {
                currentPhase = 'INVERTED';
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
            feedbackMsg.textContent = t("affirmative", "incorrect_msg");
            feedbackMsg.className = "feedback-message error";
        } else {
            attemptsLeft--;
            if (attemptsLeft < 0) {
                let actual = targetAnswer.charAt(0).toUpperCase() + targetAnswer.slice(1) + ".";
                showModal(
                    "Ой-ой!",
                    `Спроби вичерпано!\n\nПравильна відповідь була:\n${actual}`,
                    [{ text: "До правил", primary: true, action: showRules }]
                );
            } else {
                feedbackMsg.textContent = `${t("affirmative", "incorrect_msg")} (${attemptsLeft} tries left)`;
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
        <h1 style="margin-bottom: 0.5rem;">${t("affirmative", "game_over")}</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">You completed ${practiceCount} sentences perfectly!</p>
        <button class="btn-primary" onclick="window.location.reload()">${t("affirmative", "back_to_menu")}</button>
    `;
    
    document.body.appendChild(finishScreen);
}
