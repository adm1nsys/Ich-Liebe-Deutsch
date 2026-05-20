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
        max-width: 900px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .rules-container,
    .game-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 1.5rem;
        box-shadow: 0 4px 6px var(--shadow-color);
        box-sizing: border-box;
    }

    .rule-title {
        font-size: 1.35rem;
        font-weight: 800;
        color: var(--accent-gold);
        margin-bottom: 0.6rem;
    }

    .rule-desc {
        color: var(--text-secondary);
        line-height: 1.5;
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

    .settings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .setting-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .setting-label {
        color: var(--text-secondary);
        font-weight: 800;
        text-transform: uppercase;
        font-size: 0.78rem;
        letter-spacing: 0.08em;
    }

    .custom-select {
        width: 100%;
        background: var(--content-bg);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        padding: 0.9rem 1rem;
        font: inherit;
        outline: none;
        cursor: pointer;
    }

    .custom-select:focus {
        border-color: var(--accent-gold);
    }

    .action-group {
        display: flex;
        gap: 1rem;
        width: 100%;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    .btn-primary,
    .btn-secondary {
        flex: 1;
        min-width: 220px;
        border: none;
        border-radius: 0.75rem;
        padding: 1rem 1.5rem;
        color: var(--text-primary);
        font-size: 1.05rem;
        font-weight: 800;
        cursor: pointer;
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .btn-primary {
        color: white;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        box-shadow: 0 4px 15px rgba(255, 75, 43, 0.35);
    }

    .btn-secondary {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
    }

    .btn-primary:hover,
    .btn-secondary:hover {
        transform: translateY(-2px);
        border-color: var(--accent-gold);
    }

    .game-container {
        display: none;
    }

    .status-bar {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        color: var(--text-secondary);
        font-weight: 800;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1rem;
    }

    .question-card {
        text-align: center;
        padding: 2rem;
    }

    .meta-line {
        color: var(--text-secondary);
        font-size: 0.95rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 1rem;
    }

    .phrase {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }

    .hint-line {
        min-height: 1.5rem;
        color: var(--accent-gold);
        font-weight: 800;
        margin-bottom: 1.5rem;
    }

    .answer-row {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .answer-input {
        width: min(320px, 100%);
        background: var(--content-bg);
        color: var(--text-primary);
        border: 2px solid var(--border-color);
        border-radius: 0.75rem;
        padding: 1rem;
        font-size: 1.4rem;
        font-weight: 800;
        text-align: center;
        outline: none;
    }

    .answer-input:focus {
        border-color: var(--accent-gold);
    }

    .answer-input.correct {
        border-color: var(--accent-green);
        background: rgba(16, 185, 129, 0.1);
    }

    .answer-input.wrong {
        border-color: var(--accent-red);
        background: rgba(255, 75, 43, 0.1);
    }

    .feedback-message {
        min-height: 1.5rem;
        margin-top: 1rem;
        font-size: 1.1rem;
        font-weight: 800;
        text-align: center;
    }

    .feedback-message.correct { color: var(--accent-green); }
    .feedback-message.error { color: var(--accent-red); }

    @media (max-width: 640px) {
        main { padding: 1.25rem; }
        h1 { font-size: 2rem; }
        .phrase { font-size: 1.9rem; }
        .article-table { font-size: 0.78rem; }
        .article-table th, .article-table td { padding: 0.55rem; }
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
// 2. ДАННЫЕ
// ==========================================
const CASES = ["nominative", "accusative", "dative", "genitive"];
const CASE_LABELS = {
    nominative: "Nominativ",
    accusative: "Akkusativ",
    dative: "Dativ",
    genitive: "Genitiv"
};
const GENDER_LABELS = {
    masculine: "Maskulin",
    feminine: "Feminin",
    neuter: "Neutrum",
    plural: "Plural"
};
const DEFINITE_ARTICLES = {
    nominative: { masculine: "der", feminine: "die", neuter: "das", plural: "die" },
    accusative: { masculine: "den", feminine: "die", neuter: "das", plural: "die" },
    dative: { masculine: "dem", feminine: "der", neuter: "dem", plural: "den" },
    genitive: { masculine: "des", feminine: "der", neuter: "des", plural: "der" }
};
const INDEFINITE_ARTICLES = {
    nominative: { masculine: "ein", feminine: "eine", neuter: "ein", plural: "" },
    accusative: { masculine: "einen", feminine: "eine", neuter: "ein", plural: "" },
    dative: { masculine: "einem", feminine: "einer", neuter: "einem", plural: "" },
    genitive: { masculine: "eines", feminine: "einer", neuter: "eines", plural: "" }
};
const NO_ARTICLE_LABEL = "kein Artikel";
const NO_ARTICLE_INPUTS = ["", "-", "kein", "kein artikel", "no article"];
const NOUNS = [
    { gender: "masculine", word: "Mann", forms: { nominative: "Mann", accusative: "Mann", dative: "Mann", genitive: "Mannes" } },
    { gender: "masculine", word: "Tisch", forms: { nominative: "Tisch", accusative: "Tisch", dative: "Tisch", genitive: "Tisches" } },
    { gender: "feminine", word: "Frau", forms: { nominative: "Frau", accusative: "Frau", dative: "Frau", genitive: "Frau" } },
    { gender: "feminine", word: "Lampe", forms: { nominative: "Lampe", accusative: "Lampe", dative: "Lampe", genitive: "Lampe" } },
    { gender: "neuter", word: "Kind", forms: { nominative: "Kind", accusative: "Kind", dative: "Kind", genitive: "Kindes" } },
    { gender: "neuter", word: "Buch", forms: { nominative: "Buch", accusative: "Buch", dative: "Buch", genitive: "Buches" } },
    { gender: "plural", word: "Kinder", forms: { nominative: "Kinder", accusative: "Kinder", dative: "Kindern", genitive: "Kinder" } },
    { gender: "plural", word: "Bücher", forms: { nominative: "Bücher", accusative: "Bücher", dative: "Büchern", genitive: "Bücher" } }
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function normalizeAnswer(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function getArticle(caseName, articleType, gender) {
    const table = articleType === "definite" ? DEFINITE_ARTICLES : INDEFINITE_ARTICLES;
    return table[caseName][gender];
}

function getDisplayAnswer(question) {
    return question.article || NO_ARTICLE_LABEL;
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
const title = document.createElement("h1");
title.textContent = t("articles", "module_title");
mainElement.appendChild(title);

const rulesSection = document.createElement("div");
rulesSection.classList.add("rules-container");

const rulesCard = document.createElement("div");
rulesCard.classList.add("card");
rulesCard.innerHTML = `
    <div class="rule-title">${t("articles", "rules_title")}</div>
    <div class="rule-desc">${t("articles", "rules_desc")}</div>
    <table class="article-table">
        <thead>
            <tr>
                <th>Fall</th>
                <th>der/ein</th>
                <th>die/eine</th>
                <th>das/ein</th>
                <th>Plural</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Nominativ</td><td>der / ein</td><td>die / eine</td><td>das / ein</td><td>die / -</td></tr>
            <tr><td>Akkusativ</td><td>den / einen</td><td>die / eine</td><td>das / ein</td><td>die / -</td></tr>
            <tr><td>Dativ</td><td>dem / einem</td><td>der / einer</td><td>dem / einem</td><td>den / -</td></tr>
            <tr><td>Genitiv</td><td>des / eines</td><td>der / einer</td><td>des / eines</td><td>der / -</td></tr>
        </tbody>
    </table>
`;
rulesSection.appendChild(rulesCard);

const settingsCard = document.createElement("div");
settingsCard.classList.add("card");
const settingsGrid = document.createElement("div");
settingsGrid.classList.add("settings-grid");

function createSelect(label, options) {
    const group = document.createElement("label");
    group.classList.add("setting-group");
    const labelEl = document.createElement("span");
    labelEl.classList.add("setting-label");
    labelEl.textContent = label;
    const select = document.createElement("select");
    select.classList.add("custom-select");
    options.forEach(optionData => {
        const option = document.createElement("option");
        option.value = optionData.value;
        option.textContent = optionData.label;
        select.appendChild(option);
    });
    group.appendChild(labelEl);
    group.appendChild(select);
    settingsGrid.appendChild(group);
    return select;
}

const caseSelect = createSelect(t("articles", "case_label"), [
    { value: "all", label: t("articles", "all_cases") },
    { value: "nominative", label: t("articles", "nominative") },
    { value: "accusative", label: t("articles", "accusative") },
    { value: "dative", label: t("articles", "dative") },
    { value: "genitive", label: t("articles", "genitive") }
]);

const articleSelect = createSelect(t("articles", "article_label"), [
    { value: "both", label: t("articles", "both_articles") },
    { value: "definite", label: t("articles", "definite") },
    { value: "indefinite", label: t("articles", "indefinite") }
]);

const countSelect = createSelect(t("articles", "count_label"), [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" }
]);

settingsCard.appendChild(settingsGrid);

const actionGroup = document.createElement("div");
actionGroup.classList.add("action-group");
const btnAssisted = document.createElement("button");
btnAssisted.classList.add("btn-primary");
btnAssisted.textContent = t("articles", "start_assisted");
btnAssisted.addEventListener("click", () => startGame("ASSISTED"));

const btnUnassisted = document.createElement("button");
btnUnassisted.classList.add("btn-secondary");
btnUnassisted.textContent = t("articles", "start_unassisted");
btnUnassisted.addEventListener("click", () => startGame("UNASSISTED"));

actionGroup.appendChild(btnAssisted);
actionGroup.appendChild(btnUnassisted);
settingsCard.appendChild(actionGroup);
rulesSection.appendChild(settingsCard);

const gameSection = document.createElement("div");
gameSection.classList.add("game-container");

const statusBar = document.createElement("div");
statusBar.classList.add("status-bar");
const statusLeft = document.createElement("div");
const statusRight = document.createElement("div");
statusBar.appendChild(statusLeft);
statusBar.appendChild(statusRight);

const questionCard = document.createElement("div");
questionCard.classList.add("card", "question-card");
const metaLine = document.createElement("div");
metaLine.classList.add("meta-line");
const phrase = document.createElement("div");
phrase.classList.add("phrase");
const hintLine = document.createElement("div");
hintLine.classList.add("hint-line");

const answerRow = document.createElement("div");
answerRow.classList.add("answer-row");
const answerInput = document.createElement("input");
answerInput.classList.add("answer-input");
answerInput.autocomplete = "off";
answerInput.placeholder = "der / ein / -";
const checkBtn = document.createElement("button");
checkBtn.classList.add("btn-primary");
checkBtn.style.flex = "0 1 220px";
checkBtn.textContent = t("articles", "check_btn");
answerRow.appendChild(answerInput);
answerRow.appendChild(checkBtn);

const feedback = document.createElement("div");
feedback.classList.add("feedback-message");

questionCard.appendChild(metaLine);
questionCard.appendChild(phrase);
questionCard.appendChild(hintLine);
questionCard.appendChild(answerRow);
questionCard.appendChild(feedback);

gameSection.appendChild(statusBar);
gameSection.appendChild(questionCard);

mainElement.appendChild(rulesSection);
mainElement.appendChild(gameSection);
document.body.innerHTML = "";
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);

// ==========================================
// 4. GAME LOGIC
// ==========================================
let gameMode = "ASSISTED";
let questionCount = 5;
let currentIndex = 0;
let currentQuestion = null;
let selectedCase = "all";
let selectedArticleType = "both";

function buildQuestionPool() {
    const cases = selectedCase === "all" ? CASES : [selectedCase];
    const articleTypes = selectedArticleType === "both" ? ["definite", "indefinite"] : [selectedArticleType];
    const pool = [];

    cases.forEach(caseName => {
        articleTypes.forEach(articleType => {
            NOUNS.forEach(noun => {
                const article = getArticle(caseName, articleType, noun.gender);
                pool.push({
                    caseName,
                    articleType,
                    noun,
                    article,
                    nounForm: noun.forms[caseName]
                });
            });
        });
    });

    return pool;
}

function startGame(mode) {
    gameMode = mode;
    questionCount = Number(countSelect.value);
    selectedCase = caseSelect.value;
    selectedArticleType = articleSelect.value;
    currentIndex = 0;
    rulesSection.style.display = "none";
    gameSection.style.display = "flex";
    nextQuestion();
}

function nextQuestion() {
    if (currentIndex >= questionCount) {
        showGameOver();
        return;
    }

    currentQuestion = getRandom(buildQuestionPool());
    answerInput.value = "";
    answerInput.className = "answer-input";
    feedback.className = "feedback-message";
    feedback.textContent = "";
    checkBtn.textContent = t("articles", "check_btn");
    checkBtn.onclick = verifyAnswer;

    statusLeft.textContent = t("articles", "module_title");
    statusRight.textContent = `${currentIndex + 1} / ${questionCount}`;
    metaLine.textContent = `${CASE_LABELS[currentQuestion.caseName]} · ${t("articles", currentQuestion.articleType)} · ${GENDER_LABELS[currentQuestion.noun.gender]}`;
    phrase.textContent = `___ ${currentQuestion.nounForm}`;

    if (gameMode === "ASSISTED") {
        hintLine.textContent = `${t("articles", "expected")} ${getDisplayAnswer(currentQuestion)} ${currentQuestion.nounForm}`;
    } else {
        hintLine.textContent = "";
    }

    answerInput.focus();
}

function verifyAnswer() {
    const userAnswer = normalizeAnswer(answerInput.value);
    const expected = normalizeAnswer(currentQuestion.article);
    const noArticleExpected = currentQuestion.article === "";
    const isCorrect = noArticleExpected
        ? NO_ARTICLE_INPUTS.includes(userAnswer)
        : userAnswer === expected;

    if (isCorrect) {
        answerInput.classList.add("correct");
        feedback.textContent = t("articles", "correct_msg");
        feedback.className = "feedback-message correct";
        checkBtn.textContent = t("articles", "next_btn");
        checkBtn.onclick = () => {
            currentIndex++;
            nextQuestion();
        };
    } else {
        answerInput.classList.add("wrong");
        feedback.textContent = `${t("articles", "incorrect_msg")} ${t("articles", "expected")} ${getDisplayAnswer(currentQuestion)} ${currentQuestion.nounForm}`;
        feedback.className = "feedback-message error";
    }
}

function showGameOver() {
    questionCard.innerHTML = `
        <div class="phrase">${t("articles", "game_over")}</div>
        <button class="btn-primary" style="width: min(320px, 100%);" onclick="window.location.reload()">${t("articles", "back_to_menu")}</button>
    `;
    statusRight.textContent = `${questionCount} / ${questionCount}`;
}

answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        verifyAnswer();
    }
});
