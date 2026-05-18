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
    .rules-container { width: 100%; display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 2rem; }
    
    .rule-card {
        background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px var(--shadow-color);
        display: flex; flex-direction: column; gap: 0.5rem; text-align: left; width: 100%; box-sizing: border-box;
    }
    .rule-card.hack-card {
        border-left: 5px solid var(--accent-gold);
    }
    .rule-header { font-size: 1.3rem; font-weight: 800; color: var(--accent-gold); display: flex; align-items: center; gap: 0.5rem; }
    .rule-desc { font-size: 0.95rem; color: var(--text-primary); line-height: 1.5; }

    /* Grammar Hack Comparison Table */
    .comparison-table {
        width: 100%; border-collapse: collapse; margin-top: 1rem;
        font-size: 0.9rem; color: var(--text-primary);
        border-radius: 0.5rem; overflow: hidden;
    }
    .comparison-table th, .comparison-table td {
        padding: 0.75rem; border: 1px solid var(--border-color); text-align: center;
    }
    .comparison-table th {
        background: rgba(245, 175, 25, 0.08); font-weight: 600; color: var(--accent-gold);
    }
    .comparison-table td b {
        font-size: 1rem;
    }
    .highlight-match { color: var(--accent-green); font-weight: 800; }
    .highlight-exc { color: var(--accent-red); font-style: italic; }

    /* Pill Selection Segmented Controls */
    .section-title {
        font-size: 1.05rem; font-weight: 600; color: var(--text-secondary);
        margin-top: 1rem; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .pill-group {
        display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.5rem; flex-wrap: wrap;
    }
    .pill-btn {
        background: var(--surface-color); border: 1px solid var(--border-color);
        color: var(--text-primary); padding: 0.6rem 1.4rem; border-radius: 2rem;
        font-weight: 600; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 4px var(--shadow-color);
    }
    .pill-btn:hover { border-color: var(--accent-gold); transform: translateY(-1px); }
    .pill-btn.active {
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        border-color: transparent; color: white;
        box-shadow: 0 4px 10px rgba(245, 175, 25, 0.2);
    }

    .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; width: 100%; margin-top: 1.5rem; }
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

const CONJUGATION_MAP = {
    "haben": {
        "p_ich": "habe",
        "p_du": "hast",
        "p_er": "hat",
        "p_sie_sg": "hat",
        "p_es": "hat",
        "p_wir": "haben",
        "p_ihr": "habt",
        "p_sie_pl": "haben",
        "p_sie_form": "haben"
    },
    "sein": {
        "p_ich": "bin",
        "p_du": "bist",
        "p_er": "ist",
        "p_sie_sg": "ist",
        "p_es": "ist",
        "p_wir": "sind",
        "p_ihr": "seid",
        "p_sie_pl": "sind",
        "p_sie_form": "sind"
    }
};

let gameState = 'RULES'; 
let mode = 'ASSISTED'; 
let practiceVerbMode = 'MIXED'; // MIXED, HABEN, SEIN
let queue = [];
let currentIndex = 0;
let currentInputStr = "";
let attemptsLeft = 2;
let isAnimating = false;
let pronounRepeatCount = 5; 

let currentPhase = 1; // 1 = ASSISTED, 2 = UNASSISTED

// ==========================================
// 3. UI ЭЛЕМЕНТЫ
// ==========================================
const headerElement = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = t("haben_sein", "back_to_menu");
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener('click', () => { window.location.href = "index.html?page=Home"; });
headerElement.appendChild(backBtn);

const mainElement = document.createElement("main");

// RULES UI
const rulesSection = document.createElement("div");
rulesSection.style.width = "100%";
const rulesTitle = document.createElement("h1");
rulesTitle.textContent = t("haben_sein", "haben_sein_title");
rulesSection.appendChild(rulesTitle);

const rulesContainer = document.createElement("div");
rulesContainer.classList.add("rules-container");

// Card 1: Visual comparison pattern hack!
const hackCard = document.createElement("div");
hackCard.classList.add("rule-card", "hack-card");
const hackHeader = document.createElement("div");
hackHeader.classList.add("rule-header");
hackHeader.textContent = t("haben_sein", "hack_title");
const hackDesc = document.createElement("div");
hackDesc.classList.add("rule-desc");
hackDesc.textContent = t("haben_sein", "hack_desc");

// Hack table element
const hackTable = document.createElement("table");
hackTable.classList.add("comparison-table");
hackTable.innerHTML = `
    <thead>
        <tr>
            <th>${t("haben_sein", "for_pronoun")}</th>
            <th>sein (бути)</th>
            <th>haben (мати)</th>
            <th>Закономірність / Pattern</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>er / sie / es</b></td>
            <td>is<b class="highlight-match">t</b></td>
            <td>ha<b class="highlight-match">t</b></td>
            <td>Закінчуються на <b class="highlight-match">-t</b></td>
        </tr>
        <tr>
            <td><b>wir / sie / Sie</b></td>
            <td>sin<b class="highlight-match">d</b></td>
            <td>habe<b class="highlight-match">n</b></td>
            <td>Закінчуються на приголосну <b class="highlight-match">-d / -n</b></td>
        </tr>
        <tr>
            <td><b>ihr</b></td>
            <td>sei<b class="highlight-match">d</b></td>
            <td>hab<b class="highlight-match">t</b></td>
            <td>Закінчуються на <b class="highlight-match">-d / -t</b> (звук [t])</td>
        </tr>
        <tr class="highlight-exc">
            <td><b>ich / du</b></td>
            <td>bin / bist</td>
            <td>habe / hast</td>
            <td style="color: var(--accent-red); font-weight: 600;">Унікальні винятки!</td>
        </tr>
    </tbody>
`;

hackCard.appendChild(hackHeader);
hackCard.appendChild(hackDesc);
hackCard.appendChild(hackTable);
rulesContainer.appendChild(hackCard);

rulesSection.appendChild(rulesContainer);

// Choose Practice Mode Segmented Pills
const modeTitle = document.createElement("div");
modeTitle.classList.add("section-title");
modeTitle.textContent = t("haben_sein", "mode_select");
rulesSection.appendChild(modeTitle);

const pillGroup = document.createElement("div");
pillGroup.classList.add("pill-group");

const modes = [
    { code: "MIXED", labelKey: "mode_mixed" },
    { code: "HABEN", labelKey: "mode_haben" },
    { code: "SEIN", labelKey: "mode_sein" }
];

modes.forEach(m => {
    const pill = document.createElement("button");
    pill.classList.add("pill-btn");
    if (m.code === practiceVerbMode) pill.classList.add("active");
    pill.textContent = t("haben_sein", m.labelKey);
    pill.addEventListener('click', () => {
        document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        practiceVerbMode = m.code;
    });
    pillGroup.appendChild(pill);
});
rulesSection.appendChild(pillGroup);

// Repeat Word Count Settings
const settingsRow = document.createElement("div");
settingsRow.classList.add("settings-row");
const repeatInfo = document.createElement("div");
repeatInfo.textContent = t("haben_sein", "repeat_info");
const repeatSelect = document.createElement("select");
repeatSelect.classList.add("custom-select");
[5, 10, 15, 20].forEach(val => {
    const opt = document.createElement("option");
    opt.value = val; opt.textContent = val;
    if (val === 5) opt.selected = true;
    repeatSelect.appendChild(opt);
});
repeatSelect.addEventListener('change', (e) => {
    pronounRepeatCount = parseInt(e.target.value);
});
settingsRow.appendChild(repeatInfo);
settingsRow.appendChild(repeatSelect);
rulesSection.appendChild(settingsRow);

const rulesBtnGroup = document.createElement("div");
rulesBtnGroup.classList.add("btn-group");

const startLearningBtn = document.createElement("button");
startLearningBtn.classList.add("btn", "primary"); 
startLearningBtn.textContent = t("haben_sein", "start_learning");
startLearningBtn.addEventListener('click', () => startFullCourse());

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn"); 
startUnassistedBtn.textContent = t("haben_sein", "start_unassisted");
startUnassistedBtn.addEventListener('click', () => {
    currentPhase = 2; 
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
promptTitle.textContent = t("haben_sein", "conjugate_prompt");
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
inputBox.dataset.placeholder = t("haben_sein", "type_here");
const gameHints = document.createElement("div");
gameHints.classList.add("game-hints");
gameHints.textContent = t("haben_sein", "press_enter");

gameSection.appendChild(gameCounters);
gameSection.appendChild(attemptsBadge);
gameSection.appendChild(promptBox);
gameSection.appendChild(inputBox);
gameSection.appendChild(gameHints);

// END UI
const endSection = document.createElement("div");
endSection.classList.add("game-container");
const endTitle = document.createElement("h1");
endTitle.textContent = t("haben_sein", "game_over_title");
const endBtnGroup = document.createElement("div");
endBtnGroup.classList.add("btn-group");
const playAgainRulesBtn = document.createElement("button");
playAgainRulesBtn.classList.add("btn"); playAgainRulesBtn.textContent = t("haben_sein", "back_to_rules");
playAgainRulesBtn.addEventListener('click', () => showRules());
const menuBtn = document.createElement("button");
menuBtn.classList.add("btn"); menuBtn.textContent = t("haben_sein", "back_to_menu");
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
// 4. ЛОГИКА ИГРЫ
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

function startGame(selectedMode) {
    mode = selectedMode;
    gameState = 'PLAYING';
    queue = [];
    
    // Choose list of available verbs based on pill selection
    let activeVerbs = [];
    if (practiceVerbMode === 'HABEN') {
        activeVerbs = ['haben'];
    } else if (practiceVerbMode === 'SEIN') {
        activeVerbs = ['sein'];
    } else {
        activeVerbs = ['haben', 'sein'];
    }

    // Generate a structured queue: each pronoun is practiced exactly pronounRepeatCount times for each active verb
    for (let p of PRONOUNS) {
        for (let verb of activeVerbs) {
            for (let i = 0; i < pronounRepeatCount; i++) {
                let verbKey = (verb === "haben") ? "word_haben" : "word_sein";
                let trans = t("vocabulary", verbKey);
                let ans = CONJUGATION_MAP[verb][p.key];
                
                queue.push({
                    verb: verb,
                    infinitive: verb,
                    pronoun: p.de,
                    pronounKey: p.key,
                    translation: trans,
                    answer: ans
                });
            }
        }
    }

    // Fisher-Yates Shuffle the queue for random presentation order
    for (let i = queue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [queue[i], queue[j]] = [queue[j], queue[i]];
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
        <div>${t("haben_sein", "total_left")} <b>${totalLeft}</b></div>
    `;

    promptVerb.textContent = q.infinitive;
    promptTranslation.textContent = `(${q.translation})`;
    promptPronounWrap.innerHTML = `${t("haben_sein", "for_pronoun")}: <span class="prompt-pronoun">${q.pronoun} (${t("pronouns", q.pronounKey)})</span>`;

    if (mode === 'ASSISTED') {
        attemptsBadge.style.display = "none";
        gameHints.innerHTML = `${t("haben_sein", "press_enter")} | <span style="color: var(--accent-gold); font-weight:600;">Hint: ${q.answer}</span>`;
    } else {
        attemptsBadge.style.display = "block";
        attemptsBadge.textContent = t("haben_sein", "attempts_left") + attemptsLeft;
        gameHints.textContent = t("haben_sein", "press_enter");
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
    let cleanInput = currentInputStr.trim().toLowerCase();
    let cleanAnswer = q.answer.trim().toLowerCase();

    if (cleanInput === cleanAnswer) {
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
                    t("haben_sein", "incorrect_assisted"),
                    [{ text: t("haben_sein", "back_to_rules"), primary: true, action: showRules }]
                );
            } else {
                attemptsLeft--;
                if (attemptsLeft < 0) {
                    showModal(
                        "Ой-ой!",
                        t("haben_sein", "failed_unassisted") + " " + t("haben_sein", "choose_action"),
                        [
                            { text: t("haben_sein", "back_to_rules"), primary: true, action: showRules }
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
        currentInputStr += e.key;
        updateInputDisplay();
    }
});

// Инициализация
showRules();
