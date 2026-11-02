// Constants with groups and lessons (Easy to edit)
const COURSE_MODULES = [
    {
        levelKey: "module_0_title",
        topics: [
            "module_0_topic_1",
            "module_0_topic_2",
            "module_0_topic_3"
        ]
    },
    {
        levelKey: "module_tests_title",
        topics: [
            "module_tests_topic_1"
        ]
    },
    {
        levelKey: "module_vhs_title",
        topics: [
            "vhs_lesson_1",
            "vhs_lesson_2",
            "vhs_lesson_3",
            "vhs_lesson_4",
            "vhs_lesson_5",
            "vhs_lesson_6",
            "vhs_lesson_7"
        ]
    },
    {
        levelKey: "module_1_title",
        topics: [
            "module_1_topic_1",
            "module_1_topic_2",
            "module_1_topic_3",
            "module_1_topic_19",
            "module_1_topic_20"
        ]
    },
    {
        levelKey: "module_2_title",
        topics: [
            "module_1_topic_5",
            "module_1_topic_6",
            "module_1_topic_7",
            "module_1_topic_8",
            "module_1_topic_16",
            "module_1_topic_17",
            "module_1_topic_18"
        ]
    },
    {
        levelKey: "module_3_title",
        topics: [
            "module_1_topic_4",
            "module_1_topic_15",
            "module_1_topic_12",
            "module_1_topic_13",
            "module_1_topic_14"
        ]
    }
];

const TOPIC_ROUTES = {
    module_0_topic_1: "Alphabet",
    module_0_topic_2: "Pronunciation",
    module_0_topic_3: "Vocabulary",
    module_tests_topic_1: "Tests",
    vhs_lesson_1: "VhsLesson1",
    vhs_lesson_2: "VhsLesson2",
    vhs_lesson_3: "VhsLesson3",
    vhs_lesson_4: "VhsLesson4",
    vhs_lesson_5: "VhsLesson5",
    vhs_lesson_6: "VhsLesson6",
    vhs_lesson_7: "VhsLesson7",
    module_1_topic_1: "Pronouns",
    module_1_topic_2: "VerbConjugation",
    module_1_topic_3: "HabenSein",
    module_1_topic_4: "Articles",
    module_1_topic_5: "AffirmativeSentences",
    module_1_topic_6: "InterrogativeSentences",
    module_1_topic_7: "QuestionWords",
    module_1_topic_8: "Negation",
    module_1_topic_12: "NominativeCase",
    module_1_topic_13: "AccusativeCase",
    module_1_topic_14: "PluralNouns",
    module_1_topic_15: "PossessivePronouns",
    module_1_topic_16: "ModalVerbs",
    module_1_topic_17: "SeparableVerbs",
    module_1_topic_18: "BasicPrepositions",
    module_1_topic_19: "NumbersTimeDates",
    module_1_topic_20: "BasicStructures"
};

const TOPIC_SEARCH_TERMS = {
    module_0_topic_1: "alphabet abc buchstaben алфавіт буквы літери",
    module_0_topic_2: "pronunciation aussprache вимова произношение sound звуки",
    module_0_topic_3: "vocabulary words wortschatz словник словарь слова lernen learned lists",
    module_tests_topic_1: "tests typing speed диктант dictation words печать друк слова произнести schreiben hören",
    vhs_lesson_1: "schritt fuer schritt 1 lektion 1 guten tag name personalien alphabet countries languages ich du sie kommen heissen sprechen sein aus",
    vhs_lesson_2: "schritt fuer schritt 1 lektion 2 meine familie wie gehts brother sister wohnen leben haben mein meine dein deine",
    vhs_lesson_3: "schritt fuer schritt 1 lektion 3 einkaufen lebensmittel preise mengen ein eine kein keine moechten plural",
    vhs_lesson_4: "schritt fuer schritt 1 lektion 4 meine wohnung zimmer moebel farben der die das hier dort nicht kein",
    vhs_lesson_5: "schritt fuer schritt 1 lektion 5 mein tag uhrzeit wochentage tagesablauf trennbare verben am um von bis",
    vhs_lesson_6: "schritt fuer schritt 1 lektion 6 freizeit wetter hobbies akkusativ ja nein doch lesen treffen nehmen fahren",
    vhs_lesson_7: "schritt fuer schritt 1 lektion 7 kinder schule koennen wollen perfekt haben sein satzklammer",
    module_1_topic_1: "pronouns займенники местоимения ich mich mir du dich dir nominativ akkusativ dativ",
    module_1_topic_2: "verb conjugation prasens präsens відмінювання спряжение gehen sitzen sollen mussen müssen konnen können wollen mochten möchten durfen dürfen",
    module_1_topic_3: "haben sein ist bist bin war hat verbs дієслова глаголы",
    module_1_topic_4: "articles artikel артиклі артикли der die das ein eine kein nominativ akkusativ dativ genitiv",
    module_1_topic_5: "affirmative statements речення предложения tekamolo te-ka-mo-lo word order modal verbs und aber separable prefixes trennbare",
    module_1_topic_6: "questions fragen питальні вопросы ja nein w wort word order und aber separable prefixes",
    module_1_topic_7: "question words w words fragewort wer was wann wo wohin woher warum wieso weshalb wie viele welcher welche um wie viel",
    module_1_topic_8: "negation заперечення отрицание nicht kein keine negative questions",
    module_1_topic_12: "nominative nominativ називний именительный subject wer was der die das",
    module_1_topic_13: "accusative akkusativ знахідний винительный wen was den einen",
    module_1_topic_14: "plural множина множественное число nouns substantive die",
    module_1_topic_15: "possessive case pronouns присвійні відмінкові mein meine dein deine unser euer ihr mich mir dich dir",
    module_1_topic_16: "modal verbs модальні модальные sollen mussen müssen konnen können wollen mochten möchten durfen dürfen",
    module_1_topic_17: "separable verbs trennbare відокремлювані отделяемые prefixes приставки aufstehen einkaufen",
    module_1_topic_18: "prepositions прийменники предлоги bei mit auf in an um dativ akkusativ",
    module_1_topic_19: "numbers time dates zahlen uhr zeit datum числа час даты год месяц день",
    module_1_topic_20: "basic structures das ist es gibt ich mochte möchte ich hatte hätte gern phrases"
};

function normalizeSearchText(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase()
        .trim();
}

// ==========================================
// 1. ADDING STYLES (CSS)
// ==========================================
const styleElement = document.createElement('style');
styleElement.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

    :root {
        /* DARK THEME (Default) */
        --bg-color: #0f172a;        
        --surface-color: #1e293b;   
        --text-primary: #f8fafc;    
        --text-secondary: #94a3b8;  
        --accent-red: #ff4b2b;      
        --accent-gold: #f5af19;     
        --border-color: rgba(255, 255, 255, 0.1);
        --header-bg: rgba(15, 23, 42, 0.7);
        --hover-bg: rgba(255, 255, 255, 0.03);
        --hover-bg-strong: rgba(255, 255, 255, 0.08);
        --content-bg: rgba(0, 0, 0, 0.2);
        --shadow-color: rgba(0, 0, 0, 0.2);
    }

    @media (prefers-color-scheme: light) {
        :root {
            /* LIGHT THEME (Activates automatically) */
            --bg-color: #f8fafc;        
            --surface-color: #ffffff;   
            --text-primary: #0f172a;    
            --text-secondary: #64748b;  
            --accent-red: #e11d48;      
            --accent-gold: #d97706;     
            --border-color: rgba(0, 0, 0, 0.1);
            --header-bg: rgba(255, 255, 255, 0.85);
            --hover-bg: rgba(0, 0, 0, 0.03);
            --hover-bg-strong: rgba(0, 0, 0, 0.08);
            --content-bg: rgba(0, 0, 0, 0.02);
            --shadow-color: rgba(0, 0, 0, 0.06);
        }
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-color);
        color: var(--text-primary);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        transition: background-color 0.4s ease, color 0.4s ease;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem 2rem;
        box-sizing: border-box;
        display: flex;
        gap: 1.5rem;
        background: var(--header-bg);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        z-index: 1000;
        transition: background-color 0.4s ease, border-color 0.4s ease;
    }

    .icon-btn {
        background: transparent;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.75rem;
        transition: all 0.4s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-btn:hover {
        background: var(--hover-bg-strong);
        color: var(--accent-gold);
        transform: translateY(-2px);
    }

    main {
        flex: 1;
        margin-top: 80px; 
        padding: 2rem;
        max-width: 900px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }

    h1 {
        font-size: clamp(2.05rem, 9vw, 3.5rem);
        font-weight: 800;
        text-align: center;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0;
    }

    .home-search {
        margin: -1.2rem 0 2rem;
    }

    .search-box {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        width: 100%;
        box-sizing: border-box;
        padding: 0.85rem 1rem;
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        color: var(--text-secondary);
        box-shadow: 0 4px 6px var(--shadow-color);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .search-box:focus-within {
        border-color: var(--accent-gold);
        box-shadow: 0 8px 18px var(--shadow-color);
    }

    .search-box svg {
        flex: 0 0 auto;
    }

    .search-input {
        width: 100%;
        min-width: 0;
        background: transparent;
        border: none;
        outline: none;
        color: var(--text-primary);
        font: inherit;
        font-size: 1rem;
    }

    .search-input::placeholder {
        color: var(--text-secondary);
    }

    .search-clear {
        flex: 0 0 auto;
        width: 2.2rem;
        height: 2.2rem;
        border: 1px solid var(--border-color);
        border-radius: 0.65rem;
        background: var(--hover-bg);
        color: var(--text-secondary);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .search-clear:hover {
        background: var(--hover-bg-strong);
        color: var(--text-primary);
    }

    .search-empty {
        margin-top: 1rem;
        color: var(--text-secondary);
        text-align: center;
        font-weight: 600;
    }

    .search-clear[hidden],
    .search-empty[hidden],
    .accordion[hidden],
    .topic-btn[hidden] {
        display: none !important;
    }

    .accordion {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        margin-bottom: 1.2rem;
        overflow: hidden;
        transition: all 0.4s ease;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .accordion:hover {
        border-color: var(--text-secondary);
        box-shadow: 0 10px 15px var(--shadow-color);
    }

    .accordion-header {
        padding: 1.5rem;
        font-size: clamp(1rem, 4vw, 1.25rem);
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.4s ease, background-color 0.4s ease;
    }

    .accordion-header::after {
        content: '+';
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--text-secondary);
        transition: transform 0.4s ease, color 0.4s ease;
    }

    .accordion.open .accordion-header::after {
        transform: rotate(45deg); 
        color: var(--accent-red);
    }

    .accordion.open .accordion-header {
        border-bottom-color: var(--border-color);
    }

    .accordion-content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.4s ease;
        background: var(--content-bg);
    }

    .accordion.open .accordion-content {
        grid-template-rows: 1fr;
    }

    .topic-list {
        overflow: hidden;
    }

    .topic-list-inner {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .topic-btn {
        background: var(--hover-bg);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        padding: 1.2rem;
        border-radius: 0.75rem;
        font-size: 1.05rem;
        font-weight: 500;
        text-align: left;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .topic-btn::before {
        content: '';
        flex: 0 0 auto;
        width: 8px;
        height: 8px;
        background: var(--text-secondary);
        border-radius: 50%;
        margin-right: 0;
        transition: background 0.4s ease;
    }

    .topic-btn:hover {
        background: var(--hover-bg-strong);
        border-color: var(--accent-gold);
        transform: translateX(8px); 
    }

    .topic-btn:hover::before {
        background: var(--accent-gold);
    }

    .topic-label {
        flex: 1;
        min-width: 0;
    }

    .topic-badge {
        flex: 0 0 auto;
        padding: 0.25rem 0.5rem;
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        color: var(--text-secondary);
        font-size: 0.75rem;
        font-weight: 800;
        text-transform: uppercase;
    }

    .topic-btn:disabled {
        cursor: not-allowed;
        opacity: 0.62;
    }

    .topic-btn:disabled:hover {
        transform: none;
        border-color: var(--border-color);
        background: var(--hover-bg);
    }

    .topic-btn:disabled:hover::before {
        background: var(--text-secondary);
    }

    @media (max-width: 760px) {
        header {
            padding: 0.75rem 1rem;
            gap: 0.75rem;
        }

        main {
            margin-top: 64px;
            padding: 1rem;
            max-width: 100%;
        }

        h1 {
            margin: 0.75rem 0 1.5rem;
            line-height: 1.08;
            overflow-wrap: anywhere;
        }

        .home-search {
            margin: 0 0 1rem;
        }

        .search-box {
            padding: 0.7rem 0.8rem;
            gap: 0.65rem;
        }

        .search-input {
            font-size: 0.95rem;
        }

        .accordion {
            border-radius: 0.75rem;
            margin-bottom: 0.85rem;
        }

        .accordion-header {
            padding: 1rem;
            line-height: 1.25;
            gap: 0.75rem;
        }

        .accordion-header::after {
            flex: 0 0 auto;
            font-size: 1.45rem;
        }

        .topic-list-inner {
            padding: 1rem;
            gap: 0.55rem;
        }

        .topic-btn {
            padding: 0.9rem;
            border-radius: 0.65rem;
            font-size: 0.95rem;
            line-height: 1.25;
            align-items: flex-start;
        }

        .topic-btn:hover {
            transform: none;
        }

        .topic-label {
            overflow-wrap: anywhere;
        }

        .topic-badge {
            font-size: 0.68rem;
        }

    }

    /* Footer in the style of the adm1nsys project sites */
    footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.75rem 1.5rem;
        margin: 4rem 0 0;
        padding: 1.5rem 2rem 2rem;
        border-top: 1px solid var(--border-color);
        color: var(--text-secondary);
        font: 400 12px/1.6 ui-monospace, SFMono-Regular, Menlo, monospace;
        transition: border-color 0.4s ease;
    }

    .footer-links {
        display: flex;
        gap: 1.25rem;
    }

    .footer-links a {
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.4s ease;
    }

    .footer-links a:hover {
        color: var(--text-primary);
    }

    /* Back to the projects list, only when the visitor came from adm1nsys */
    .back-to-projects {
        display: inline-flex;
        align-items: center;
        margin-right: auto;
        padding: 0 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        color: var(--text-secondary);
        font: 500 12px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        text-decoration: none;
        transition: color 0.4s ease, border-color 0.4s ease;
    }

    .back-to-projects:hover {
        color: var(--text-primary);
    }

    @media (max-width: 760px) {
        footer {
            margin-top: 2rem;
            padding: 1.25rem 1rem 1.5rem;
        }
    }
    }
`;
document.head.appendChild(styleElement);

// Helper function to generate SVG icons without innerHTML
function createSVGIcon(pathData, isSettings = false) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    if (isSettings) {
        svg.setAttribute("stroke-width", "2");
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "12");
        circle.setAttribute("cy", "12");
        circle.setAttribute("r", "3");
        svg.appendChild(circle);
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);

    return svg;
}

// ==========================================
// 2. HEADER
// ==========================================
const headerElement = document.createElement("header");

const statBtn = document.createElement("button");
statBtn.classList.add("icon-btn");
statBtn.title = t("home", "stat_btn");
statBtn.appendChild(createSVGIcon("M18 20V10M12 20V4M6 20v-6"));
statBtn.addEventListener('click', () => {
    window.location.href = "index.html?page=Statistics";
});

const settingsBtn = document.createElement("button");
settingsBtn.classList.add("icon-btn");
settingsBtn.title = t("home", "settings_btn");
settingsBtn.appendChild(createSVGIcon("M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z", true));

settingsBtn.addEventListener('click', () => {
    window.location.href = "index.html?page=Settings";
});

// Came from adm1nsys.github.io/adm1nsys: remembered for this tab, so it survives moving between pages
try {
    if (new URLSearchParams(window.location.search).get("from") === "adm1nsys") sessionStorage.setItem("fromAdm1nsys", "1");
} catch (e) { /* storage blocked: no back link */ }
let cameFromAdm1nsys = false;
try { cameFromAdm1nsys = sessionStorage.getItem("fromAdm1nsys") === "1"; } catch (e) { }
if (cameFromAdm1nsys) {
    const backLink = document.createElement("a");
    backLink.classList.add("back-to-projects");
    backLink.href = "/adm1nsys/projects.html";
    backLink.textContent = "‹ Projects";
    headerElement.appendChild(backLink);
}

headerElement.appendChild(statBtn);
headerElement.appendChild(settingsBtn);

// ==========================================
// 3. MAIN (Content)
// ==========================================
const mainElement = document.createElement("main");

const titleH1 = document.createElement("h1");
titleH1.textContent = "Ich Liebe Deutsch";
mainElement.appendChild(titleH1);

const searchSection = document.createElement("section");
searchSection.classList.add("home-search");

const searchBox = document.createElement("div");
searchBox.classList.add("search-box");
searchBox.appendChild(createSVGIcon("M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15"));

const searchInput = document.createElement("input");
searchInput.classList.add("search-input");
searchInput.type = "search";
searchInput.placeholder = t("home", "search_placeholder");
searchInput.setAttribute("aria-label", t("home", "search_placeholder"));

const clearSearchBtn = document.createElement("button");
clearSearchBtn.classList.add("search-clear");
clearSearchBtn.type = "button";
clearSearchBtn.title = t("home", "search_clear");
clearSearchBtn.setAttribute("aria-label", t("home", "search_clear"));
clearSearchBtn.hidden = true;
clearSearchBtn.appendChild(createSVGIcon("M18 6 6 18M6 6l12 12"));

searchBox.appendChild(searchInput);
searchBox.appendChild(clearSearchBtn);
searchSection.appendChild(searchBox);

const searchEmpty = document.createElement("div");
searchEmpty.classList.add("search-empty");
searchEmpty.textContent = t("home", "search_no_results");
searchEmpty.setAttribute("aria-live", "polite");
searchEmpty.hidden = true;
searchSection.appendChild(searchEmpty);
mainElement.appendChild(searchSection);

const renderedModules = [];

// Loop over our constant to create lists
COURSE_MODULES.forEach(module => {
    const moduleTitle = t("home", module.levelKey);
    const accordionDiv = document.createElement("div");
    accordionDiv.classList.add("accordion");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("accordion-header");
    headerDiv.textContent = moduleTitle;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("accordion-content");

    const topicListDiv = document.createElement("div");
    topicListDiv.classList.add("topic-list");

    const topicListInnerDiv = document.createElement("div");
    topicListInnerDiv.classList.add("topic-list-inner");

    const renderedTopics = [];

    module.topics.forEach(topicKey => {
        const topicText = t("home", topicKey);
        const route = TOPIC_ROUTES[topicKey];
        const btn = document.createElement("button");
        btn.classList.add("topic-btn");
        btn.type = "button";

        const labelSpan = document.createElement("span");
        labelSpan.classList.add("topic-label");
        labelSpan.textContent = topicText;
        btn.appendChild(labelSpan);

        if (route) {
            btn.addEventListener('click', () => {
                window.location.href = `index.html?page=${route}`;
            });
        } else {
            btn.disabled = true;
            btn.title = t("home", "topic_soon");
            const badgeSpan = document.createElement("span");
            badgeSpan.classList.add("topic-badge");
            badgeSpan.textContent = t("home", "topic_soon");
            btn.appendChild(badgeSpan);
        }

        topicListInnerDiv.appendChild(btn);
        renderedTopics.push({
            button: btn,
            searchText: normalizeSearchText([
                moduleTitle,
                topicText,
                route || "",
                TOPIC_SEARCH_TERMS[topicKey] || ""
            ].join(" "))
        });
    });

    topicListDiv.appendChild(topicListInnerDiv);
    contentDiv.appendChild(topicListDiv);
    accordionDiv.appendChild(headerDiv);
    accordionDiv.appendChild(contentDiv);

    // Add smooth expand logic (toggle open class)
    headerDiv.addEventListener('click', () => {
        accordionDiv.classList.toggle('open');
    });

    mainElement.appendChild(accordionDiv);
    renderedModules.push({
        accordion: accordionDiv,
        topics: renderedTopics
    });
});

function applyHomeSearch() {
    const query = normalizeSearchText(searchInput.value);
    let visibleTopicsCount = 0;

    renderedModules.forEach(moduleView => {
        let hasVisibleTopic = false;

        moduleView.topics.forEach(topicView => {
            const isMatch = !query || topicView.searchText.includes(query);
            topicView.button.hidden = !isMatch;
            hasVisibleTopic = hasVisibleTopic || isMatch;
            if (isMatch) visibleTopicsCount += 1;
        });

        moduleView.accordion.hidden = !hasVisibleTopic;

        if (query) {
            moduleView.accordion.classList.toggle("open", hasVisibleTopic);
        }
    });

    clearSearchBtn.hidden = !query;
    searchEmpty.hidden = !query || visibleTopicsCount > 0;
}

searchInput.addEventListener("input", applyHomeSearch);
clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    applyHomeSearch();
    searchInput.focus();
});

// ==========================================
// 4. FOOTER
// ==========================================
const footerElement = document.createElement("footer");

const copyright = document.createElement("span");
copyright.textContent = `© ${new Date().getFullYear()} Heorhii Romanenko · MIT`;

const linksDiv = document.createElement("div");
linksDiv.classList.add("footer-links");

const FOOTER_LINKS = [
    { text: "adm1nsys", url: "/adm1nsys/" },
    { text: "Source on GitHub", url: "https://github.com/adm1nsys/Ich-Liebe-Deutsch", external: true }
];

FOOTER_LINKS.forEach(linkInfo => {
    const aTag = document.createElement("a");
    aTag.href = linkInfo.url;
    if (linkInfo.external) {
        aTag.target = "_blank";
        aTag.rel = "noopener noreferrer";
    }
    aTag.textContent = linkInfo.text;
    linksDiv.appendChild(aTag);
});

footerElement.appendChild(copyright);
footerElement.appendChild(linksDiv);

// ==========================================
// 5. INSERT EVERYTHING INTO BODY
// ==========================================
// Clear body before insertion (in case of script reload)
document.body.innerHTML = '';
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
document.body.appendChild(footerElement);
