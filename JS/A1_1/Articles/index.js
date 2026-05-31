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
        --hover-bg: rgba(255, 255, 255, 0.05);
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
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-color);
        color: var(--text-primary);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem 2rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        background: var(--header-bg);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        z-index: 1000;
    }

    .icon-btn {
        background: transparent;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.75rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-btn:hover {
        background: var(--hover-bg);
        color: var(--accent-gold);
        transform: translateY(-2px);
    }

    main {
        flex: 1;
        margin-top: 80px;
        padding: 2rem;
        max-width: 980px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 800;
        text-align: center;
        margin: 0 0 2rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .rules-section,
    .game-container,
    .end-container {
        width: 100%;
    }

    .rules-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .rule-card,
    .table-card,
    .settings-card {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px var(--shadow-color);
        box-sizing: border-box;
    }

    .rule-card {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
    }

    .rule-header,
    .table-title {
        font-size: 1.25rem;
        font-weight: 800;
        color: var(--accent-gold);
    }

    .rule-desc {
        color: var(--text-secondary);
        line-height: 1.55;
        white-space: pre-line;
    }

    .tables-grid {
        display: flex;
        // grid-template-columns: repeat(2, minmax(0, 1fr));
        flex-direction: column;
        gap: 1rem;
    }

    .article-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
        overflow: hidden;
        border-radius: 0.75rem;
        font-size: 0.95rem;
    }

    .article-table th,
    .article-table td {
        border: 1px solid var(--border-color);
        padding: 0.75rem;
        text-align: center;
    }

    .article-table th {
        color: var(--accent-gold);
        background: var(--content-bg);
        font-weight: 800;
    }

    .article-table td:first-child {
        color: var(--text-secondary);
        font-weight: 800;
    }

    .settings-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .settings-row {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        color: var(--text-secondary);
        font-size: 0.95rem;
        text-align: center;
    }

    .pill-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.65rem;
        max-width: 820px;
    }

    .pill-btn {
        background: var(--content-bg);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        padding: 0.75rem 1rem;
        border-radius: 999px;
        font-size: 0.95rem;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .pill-btn:hover {
        border-color: var(--accent-gold);
        transform: translateY(-2px);
    }

    .pill-btn.active {
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        color: white;
        border-color: transparent;
        box-shadow: 0 4px 10px rgba(255, 75, 43, 0.25);
    }

    .custom-select {
        background: var(--bg-color);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        padding: 0.6rem 1rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        outline: none;
        cursor: pointer;
        transition: border-color 0.3s;
    }

    .custom-select:focus {
        border-color: var(--accent-gold);
    }

    .btn-group {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        margin-top: 1rem;
    }

    .btn {
        padding: 1rem 2rem;
        font-size: 1.05rem;
        font-weight: 800;
        cursor: pointer;
        border-radius: 0.75rem;
        border: 1px solid var(--border-color);
        transition: all 0.3s ease;
        background: var(--surface-color);
        color: var(--text-primary);
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .btn:hover {
        border-color: var(--accent-gold);
        transform: translateY(-2px);
        box-shadow: 0 10px 15px var(--shadow-color);
    }

    .btn.primary {
        color: white;
        border: none;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        box-shadow: 0 4px 15px rgba(255, 75, 43, 0.35);
    }

    .game-container,
    .end-container {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 58vh;
        text-align: center;
    }

    .game-counters {
        display: flex;
        gap: 2rem;
        justify-content: center;
        font-size: 0.95rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }

    .game-counters b {
        color: var(--text-primary);
    }

    .attempts-badge {
        background: rgba(225, 29, 72, 0.1);
        color: var(--accent-red);
        padding: 0.3rem 0.8rem;
        border-radius: 1rem;
        font-weight: 800;
        margin-bottom: 1rem;
        display: none;
    }

    .prompt-box {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        align-items: center;
    }

    .prompt-title {
        font-size: 1.05rem;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 800;
    }

    .prompt-question {
        font-size: 2.6rem;
        line-height: 1.2;
        font-weight: 800;
        color: var(--text-primary);
    }

    .prompt-note {
        font-size: 1rem;
        color: var(--text-secondary);
    }

    .input-box {
        font-size: 3.5rem;
        font-weight: 800;
        color: var(--accent-gold);
        min-height: 4.5rem;
        border-bottom: 4px solid var(--border-color);
        min-width: min(460px, 80%);
        text-align: center;
        margin-bottom: 1.5rem;
        transition: border-color 0.3s ease, color 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 1px;
    }

    .input-box.correct {
        border-color: var(--accent-green);
        color: var(--accent-green);
    }

    .input-box.wrong {
        border-color: var(--accent-red);
        color: var(--accent-red);
        animation: shake 0.4s ease;
    }

    .input-box:empty::before {
        content: attr(data-placeholder);
        color: var(--text-secondary);
        opacity: 0.3;
        font-size: 2rem;
        font-weight: 600;
    }

    .game-hints {
        font-size: 1rem;
        color: var(--text-secondary);
        opacity: 0.85;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .modal-overlay.active {
        opacity: 1;
        pointer-events: auto;
    }

    .modal-content {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 2.5rem;
        text-align: center;
        max-width: 420px;
        width: 90%;
        box-shadow: 0 20px 25px rgba(0,0,0,0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
        box-sizing: border-box;
    }

    .modal-overlay.active .modal-content {
        transform: scale(1);
    }

    .modal-content h2 {
        margin-top: 0;
        color: var(--text-primary);
        font-size: 1.8rem;
    }

    .modal-content p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        font-size: 1.1rem;
        line-height: 1.5;
        white-space: pre-line;
    }

    .modal-content .btn-group {
        flex-direction: column;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        75% { transform: translateX(-10px); }
    }

    @media (max-width: 820px) {
        .tables-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 640px) {
        main {
            padding: 1.25rem;
        }

        h1 {
            font-size: 2rem;
        }

        .prompt-question {
            font-size: 1.8rem;
        }

        .input-box {
            min-width: 100%;
            font-size: 2.8rem;
        }

        .article-table {
            font-size: 0.78rem;
        }

        .article-table th,
        .article-table td {
            padding: 0.55rem;
        }
    }
`;
document.head.appendChild(styleElement);

function createSVGIcon(pathData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);
    return svg;
}

// ==========================================
// 2. ДАННЫЕ И СОСТОЯНИЕ
// ==========================================
const CASES = ["nominative", "accusative", "dative", "genitive"];
const GENDERS = ["masculine", "feminine", "neuter", "plural"];
const ARTICLE_TYPES = ["definite", "indefinite"];

const DEFINITE_ARTICLES = {
    nominative: { masculine: "der", feminine: "die", neuter: "das", plural: "die" },
    accusative: { masculine: "den", feminine: "die", neuter: "das", plural: "die" },
    dative: { masculine: "dem", feminine: "der", neuter: "dem", plural: "den" },
    genitive: { masculine: "des", feminine: "der", neuter: "des", plural: "der" }
};

const INDEFINITE_ARTICLES = {
    nominative: { masculine: "ein", feminine: "eine", neuter: "ein", plural: "-" },
    accusative: { masculine: "einen", feminine: "eine", neuter: "ein", plural: "-" },
    dative: { masculine: "einem", feminine: "einer", neuter: "einem", plural: "-" },
    genitive: { masculine: "eines", feminine: "einer", neuter: "eines", plural: "-" }
};

const ARTICLE_TABLES = {
    definite: DEFINITE_ARTICLES,
    indefinite: INDEFINITE_ARTICLES
};

const ARTICLE_TYPE_LABEL_KEYS = {
    definite: "definite_question",
    indefinite: "indefinite_question"
};

const GENDER_LABEL_KEYS = {
    masculine: "masculine_gender",
    feminine: "feminine_gender",
    neuter: "neuter_gender",
    plural: "plural_gender"
};

let gameState = "RULES";
let mode = "ASSISTED";
let currentPhase = 1;
let selectedCases = [...CASES];
let selectedArticleType = "both";
let repeatCount = 10;
let queue = [];
let statsRunId = null;
let currentIndex = 0;
let currentInputStr = "";
let attemptsLeft = 2;
let isAnimating = false;

function getArticle(caseName, articleType, gender) {
    return ARTICLE_TABLES[articleType][caseName][gender];
}

function normalizeAnswer(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function isCorrectAnswer(input, answer) {
    const normalizedInput = normalizeAnswer(input);
    const normalizedAnswer = normalizeAnswer(answer);

    if (normalizedAnswer === "-") {
        return ["-", "no", "none", "no article", "kein artikel", "немає", "нет"].includes(normalizedInput);
    }

    return normalizedInput === normalizedAnswer;
}

function shuffle(items) {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ==========================================
// 3. UI
// ==========================================
const headerElement = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = t("articles", "back_to_menu");
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener("click", () => {
    window.location.href = "index.html?page=Home";
});

const headerTitle = document.createElement("div");
headerTitle.style.fontWeight = "800";
headerTitle.style.fontSize = "1.2rem";
headerTitle.textContent = t("articles", "module_title");

headerElement.appendChild(backBtn);
headerElement.appendChild(headerTitle);

const mainElement = document.createElement("main");

const rulesSection = document.createElement("div");
rulesSection.classList.add("rules-section");

const title = document.createElement("h1");
title.textContent = t("articles", "module_title");
rulesSection.appendChild(title);

function createRuleCard(titleKey, descKey) {
    const card = document.createElement("div");
    card.classList.add("rule-card");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("rule-header");
    cardTitle.textContent = t("articles", titleKey);

    const cardDesc = document.createElement("div");
    cardDesc.classList.add("rule-desc");
    cardDesc.textContent = t("articles", descKey);

    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    return card;
}

function createArticleTable(articleType, titleKey) {
    const card = document.createElement("div");
    card.classList.add("table-card");

    const tableTitle = document.createElement("div");
    tableTitle.classList.add("table-title");
    tableTitle.textContent = t("articles", titleKey);

    const table = document.createElement("table");
    table.classList.add("article-table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>${t("articles", "case_table_head")}</th>
            <th>${t("articles", "masculine_short")}</th>
            <th>${t("articles", "feminine_short")}</th>
            <th>${t("articles", "neuter_short")}</th>
            <th>${t("articles", "plural_short")}</th>
        </tr>
    `;

    const tbody = document.createElement("tbody");
    CASES.forEach(caseName => {
        const row = document.createElement("tr");
        const cells = [
            t("articles", caseName),
            getArticle(caseName, articleType, "masculine"),
            getArticle(caseName, articleType, "feminine"),
            getArticle(caseName, articleType, "neuter"),
            getArticle(caseName, articleType, "plural")
        ];
        cells.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    card.appendChild(tableTitle);
    card.appendChild(table);
    return card;
}

rulesSection.appendChild(createRuleCard("rules_title", "rules_desc"));
rulesSection.appendChild(createRuleCard("usage_title", "usage_desc"));

const tablesGrid = document.createElement("div");
tablesGrid.classList.add("tables-grid");
tablesGrid.appendChild(createArticleTable("definite", "definite_table_title"));
tablesGrid.appendChild(createArticleTable("indefinite", "indefinite_table_title"));
rulesSection.appendChild(tablesGrid);

const settingsCard = document.createElement("div");
settingsCard.classList.add("settings-card");

const caseSettingsRow = document.createElement("div");
caseSettingsRow.classList.add("settings-row");
const caseInfo = document.createElement("div");
caseInfo.textContent = t("articles", "case_label");
const caseGroup = document.createElement("div");
caseGroup.classList.add("pill-group");

CASES.forEach(caseName => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("pill-btn", "active");
    btn.textContent = t("articles", caseName);
    btn.addEventListener("click", () => {
        if (selectedCases.includes(caseName)) {
            if (selectedCases.length === 1) return;
            selectedCases = selectedCases.filter(item => item !== caseName);
            btn.classList.remove("active");
        } else {
            selectedCases.push(caseName);
            btn.classList.add("active");
        }
    });
    caseGroup.appendChild(btn);
});

caseSettingsRow.appendChild(caseInfo);
caseSettingsRow.appendChild(caseGroup);
settingsCard.appendChild(caseSettingsRow);

const typeSettingsRow = document.createElement("div");
typeSettingsRow.classList.add("settings-row");
const typeInfo = document.createElement("div");
typeInfo.textContent = t("articles", "article_label");
const typeGroup = document.createElement("div");
typeGroup.classList.add("pill-group");

[
    { value: "both", key: "both_articles" },
    { value: "definite", key: "definite_question" },
    { value: "indefinite", key: "indefinite_question" }
].forEach(optionData => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("pill-btn");
    if (optionData.value === selectedArticleType) btn.classList.add("active");
    btn.textContent = t("articles", optionData.key);
    btn.addEventListener("click", () => {
        selectedArticleType = optionData.value;
        Array.from(typeGroup.children).forEach(child => child.classList.remove("active"));
        btn.classList.add("active");
    });
    typeGroup.appendChild(btn);
});

typeSettingsRow.appendChild(typeInfo);
typeSettingsRow.appendChild(typeGroup);
settingsCard.appendChild(typeSettingsRow);

const repeatSettingsRow = document.createElement("div");
repeatSettingsRow.classList.add("settings-row");
const repeatInfo = document.createElement("div");
repeatInfo.textContent = t("articles", "count_label");
const repeatSelect = document.createElement("select");
repeatSelect.classList.add("custom-select");
[5, 10, 15, 20, 30, 50].forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    if (value === repeatCount) option.selected = true;
    repeatSelect.appendChild(option);
});
repeatSelect.addEventListener("change", (event) => {
    repeatCount = parseInt(event.target.value);
});

repeatSettingsRow.appendChild(repeatInfo);
repeatSettingsRow.appendChild(repeatSelect);
settingsCard.appendChild(repeatSettingsRow);

const rulesBtnGroup = document.createElement("div");
rulesBtnGroup.classList.add("btn-group");

const startLearningBtn = document.createElement("button");
startLearningBtn.classList.add("btn", "primary");
startLearningBtn.textContent = t("articles", "start_learning");
startLearningBtn.addEventListener("click", () => startFullCourse());

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn");
startUnassistedBtn.textContent = t("articles", "start_unassisted");
startUnassistedBtn.addEventListener("click", () => {
    currentPhase = 2;
    startGame("UNASSISTED");
});

rulesBtnGroup.appendChild(startLearningBtn);
rulesBtnGroup.appendChild(startUnassistedBtn);
settingsCard.appendChild(rulesBtnGroup);
rulesSection.appendChild(settingsCard);

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
promptTitle.textContent = t("articles", "choose_article_prompt");

const promptQuestion = document.createElement("div");
promptQuestion.classList.add("prompt-question");

const promptNote = document.createElement("div");
promptNote.classList.add("prompt-note");
promptNote.textContent = t("articles", "question_note");

promptBox.appendChild(promptTitle);
promptBox.appendChild(promptQuestion);
promptBox.appendChild(promptNote);

const inputBox = document.createElement("div");
inputBox.classList.add("input-box");
inputBox.dataset.placeholder = t("articles", "type_here");

const gameHints = document.createElement("div");
gameHints.classList.add("game-hints");

gameSection.appendChild(gameCounters);
gameSection.appendChild(attemptsBadge);
gameSection.appendChild(promptBox);
gameSection.appendChild(inputBox);
gameSection.appendChild(gameHints);

const endSection = document.createElement("div");
endSection.classList.add("end-container");
const endTitle = document.createElement("h1");
endTitle.textContent = t("articles", "game_over");
const endBtnGroup = document.createElement("div");
endBtnGroup.classList.add("btn-group");

const playAgainRulesBtn = document.createElement("button");
playAgainRulesBtn.classList.add("btn");
playAgainRulesBtn.textContent = t("articles", "back_to_rules");
playAgainRulesBtn.addEventListener("click", () => showRules());

const menuBtn = document.createElement("button");
menuBtn.classList.add("btn");
menuBtn.textContent = t("articles", "back_to_menu");
menuBtn.addEventListener("click", () => {
    window.location.href = "index.html?page=Home";
});

endBtnGroup.appendChild(playAgainRulesBtn);
endBtnGroup.appendChild(menuBtn);
endSection.appendChild(endTitle);
endSection.appendChild(endBtnGroup);

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

document.body.innerHTML = "";
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
document.body.appendChild(modalOverlay);

// ==========================================
// 4. ЛОГИКА ИГРЫ
// ==========================================
function showRules() {
    gameState = "RULES";
    rulesSection.style.display = "flex";
    gameSection.style.display = "none";
    endSection.style.display = "none";
    modalOverlay.classList.remove("active");
}

function startFullCourse() {
    currentPhase = 1;
    startGame("ASSISTED");
}

function nextPhase() {
    if (currentPhase === 1) {
        currentPhase = 2;
        startGame("UNASSISTED");
    } else {
        showEndScreen();
    }
}

function buildQuestionPool() {
    const activeCases = selectedCases.length ? selectedCases : CASES;
    const activeArticleTypes = selectedArticleType === "both" ? ARTICLE_TYPES : [selectedArticleType];
    const pool = [];

    activeCases.forEach(caseName => {
        activeArticleTypes.forEach(articleType => {
            GENDERS.forEach(gender => {
                pool.push({
                    caseName,
                    articleType,
                    gender,
                    answer: getArticle(caseName, articleType, gender)
                });
            });
        });
    });

    return pool;
}

function createQuestionQueue() {
    const pool = buildQuestionPool();
    let result = [];

    while (result.length < repeatCount) {
        result = result.concat(shuffle(pool));
    }

    return result.slice(0, repeatCount);
}

function startGame(selectedMode) {
    mode = selectedMode;
    if (statsRunId && window.AppStats) {
        window.AppStats.cancelRun(statsRunId);
        statsRunId = null;
    }
    gameState = "PLAYING";
    queue = createQuestionQueue();

    if (selectedMode === "UNASSISTED" && window.AppStats) {
        const articleTypeLabel = selectedArticleType === "both"
            ? t("articles", "both_articles")
            : t("articles", ARTICLE_TYPE_LABEL_KEYS[selectedArticleType]);
        statsRunId = window.AppStats.startRun({
            moduleId: "Articles",
            moduleName: t("home", "module_1_topic_4"),
            mode: selectedMode,
            params: [
                { label: t("statistics", "questions_param"), value: queue.length },
                { label: t("statistics", "cases_param"), value: selectedCases.map(caseName => t("articles", caseName)).join(", ") },
                { label: t("statistics", "article_type_param"), value: articleTypeLabel }
            ]
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

    const question = queue[currentIndex];
    const totalLeft = queue.length - currentIndex;
    const caseLabel = t("articles", question.caseName);
    const articleTypeLabel = t("articles", ARTICLE_TYPE_LABEL_KEYS[question.articleType]);
    const genderLabel = t("articles", GENDER_LABEL_KEYS[question.gender]);

    gameCounters.innerHTML = `<div>${t("articles", "total_left")} <b>${totalLeft}</b></div>`;
    promptQuestion.textContent = `${caseLabel} · ${articleTypeLabel} · ${genderLabel}`;

    if (mode === "ASSISTED") {
        attemptsBadge.style.display = "none";
        gameHints.innerHTML = `${t("articles", "press_enter")} | <span style="color: var(--accent-gold); font-weight:800;">${t("articles", "hint_label")} ${question.answer}</span>`;
    } else {
        attemptsBadge.style.display = "block";
        attemptsBadge.textContent = t("articles", "attempts_left") + attemptsLeft;
        gameHints.textContent = t("articles", "press_enter");
    }
}

function updateInputDisplay() {
    inputBox.textContent = currentInputStr;
}

function showEndScreen() {
    if (statsRunId && window.AppStats) {
        window.AppStats.finishRun(statsRunId);
        statsRunId = null;
    }
    gameState = "END";
    rulesSection.style.display = "none";
    gameSection.style.display = "none";
    endSection.style.display = "flex";
}

function showModal(title, desc, buttons) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalBtnGroup.innerHTML = "";

    buttons.forEach(buttonData => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        if (buttonData.primary) btn.classList.add("primary");
        btn.textContent = buttonData.text;
        btn.addEventListener("click", buttonData.action);
        modalBtnGroup.appendChild(btn);
    });

    modalOverlay.classList.add("active");
}

function checkAnswer() {
    if (currentInputStr.trim() === "" || isAnimating) return;

    isAnimating = true;
    const question = queue[currentIndex];

    if (isCorrectAnswer(currentInputStr, question.answer)) {
        inputBox.classList.add("correct");
        setTimeout(() => {
            currentIndex++;
            attemptsLeft = 2;
            isAnimating = false;
            renderQuestion();
        }, 500);
        return;
    }

    inputBox.classList.add("wrong");

    setTimeout(() => {
        inputBox.classList.remove("wrong");
        isAnimating = false;

        if (mode === "ASSISTED") {
            showModal(
                t("articles", "mistake_title"),
                `${t("articles", "incorrect_assisted")}\n\n${t("articles", "expected")} ${question.answer}`,
                [{ text: t("articles", "back_to_rules"), primary: true, action: showRules }]
            );
            return;
        }

        attemptsLeft--;
        if (window.AppStats) window.AppStats.recordMistake(statsRunId);
        if (attemptsLeft < 0) {
            if (statsRunId && window.AppStats) {
                window.AppStats.cancelRun(statsRunId);
                statsRunId = null;
            }
            showModal(
                t("articles", "mistake_title"),
                `${t("articles", "failed_unassisted")}\n\n${t("articles", "expected")} ${question.answer}\n\n${t("articles", "choose_action")}`,
                [{ text: t("articles", "back_to_rules"), primary: true, action: showRules }]
            );
        } else {
            renderQuestion();
        }
    }, 400);
}

document.addEventListener("keydown", (event) => {
    if (gameState !== "PLAYING" || isAnimating || modalOverlay.classList.contains("active")) return;

    if (event.key === "Backspace") {
        currentInputStr = currentInputStr.slice(0, -1);
        updateInputDisplay();
    } else if (event.key === "Enter") {
        checkAnswer();
    } else if (event.key.length === 1) {
        currentInputStr += event.key;
        updateInputDisplay();
    }
});

showRules();
