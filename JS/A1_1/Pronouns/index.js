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
        font-size: 2.5rem; font-weight: 800; text-align: center; margin-bottom: 2rem;
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
    .rule-header { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: baseline; font-size: 1.5rem; font-weight: 800; }
    .rule-de { color: var(--accent-gold); }
    .rule-native { color: var(--text-secondary); font-size: 1.2rem; }
    .rule-desc { font-size: 1rem; color: var(--text-primary); font-style: italic; opacity: 0.8; margin-top: 0.5rem; }

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
    .game-container { display: none; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 60vh; text-align: center; }
    .question-box { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; color: var(--text-secondary); }
    .question-box span.de-hint { color: var(--text-primary); }
    
    .input-box {
        font-size: 4rem; font-weight: 800; color: var(--accent-gold);
        min-height: 5rem; border-bottom: 4px solid var(--border-color);
        min-width: 50%; text-align: center; margin-bottom: 1rem;
        transition: border-color 0.3s ease, color 0.3s ease;
        display: flex; align-items: center; justify-content: center;
    }
    .input-box.correct { border-color: var(--accent-green); color: var(--accent-green); }
    .input-box.wrong { border-color: var(--accent-red); color: var(--accent-red); animation: shake 0.4s ease; }
    .input-box:empty::before { content: attr(data-placeholder); color: var(--text-secondary); opacity: 0.3; font-size: 2rem; font-weight: 600; }

    .game-hints { font-size: 1rem; color: var(--text-secondary); opacity: 0.7; }
    .attempts-badge { background: rgba(225, 29, 72, 0.1); color: var(--accent-red); padding: 0.3rem 0.8rem; border-radius: 1rem; font-weight: 600; margin-bottom: 1rem; display: none; }

    .game-counters {
        display: flex; gap: 2rem; justify-content: center;
        font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;
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
        border-radius: 1.5rem; padding: 2.5rem; text-align: center; max-width: 400px;
        box-shadow: 0 20px 25px rgba(0,0,0,0.3); transform: scale(0.9); transition: transform 0.3s ease;
    }
    .modal-overlay.active .modal-content { transform: scale(1); }
    .modal-content h2 { margin-top: 0; color: var(--text-primary); font-size: 1.8rem; }
    .modal-content p { color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; }
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
    { de: "du", key: "p_du", descKey: "rule_desc_du" },
    { de: "er", key: "p_er" },
    { de: "sie", key: "p_sie_sg" },
    { de: "es", key: "p_es" },
    { de: "wir", key: "p_wir" },
    { de: "ihr", key: "p_ihr", descKey: "rule_desc_ihr" },
    { de: "sie", key: "p_sie_pl" },
    { de: "Sie", key: "p_sie_form", descKey: "rule_desc_sie_form" }
];

let gameState = 'RULES'; // RULES, PLAYING, END
let mode = 'ASSISTED'; // ASSISTED, UNASSISTED
let queue = [];
let currentIndex = 0;
let currentInputStr = "";
let attemptsLeft = 2;
let isAnimating = false;
let repeatCount = 10; 

let currentPhase = 1; // 1 = ASSISTED, 2 = UNASSISTED
let statsRunId = null;

// ==========================================
// 3. UI ЭЛЕМЕНТЫ
// ==========================================
const headerElement = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = t("pronouns", "back_to_menu");
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener('click', () => { window.location.href = "index.html?page=Home"; });
headerElement.appendChild(backBtn);

const mainElement = document.createElement("main");

// RULES UI
const rulesSection = document.createElement("div");
rulesSection.style.width = "100%";
const rulesTitle = document.createElement("h1");
rulesTitle.textContent = t("pronouns", "rules_title");
rulesSection.appendChild(rulesTitle);

const rulesContainer = document.createElement("div");
rulesContainer.classList.add("rules-container");
PRONOUNS.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("rule-card");
    const header = document.createElement("div");
    header.innerHTML = `<span class="rule-de">${p.de}</span> <span class="rule-native" style="margin-left: 0.5rem;">— ${t("pronouns", p.key)}</span>`;

    card.appendChild(header);
    if (p.descKey) {
        const desc = document.createElement("div"); desc.classList.add("rule-desc");
        desc.textContent = t("pronouns", p.descKey);
        card.appendChild(desc);
    }
    rulesContainer.appendChild(card);
});
rulesSection.appendChild(rulesContainer);

const settingsRow = document.createElement("div");
settingsRow.classList.add("settings-row");
const repeatInfo = document.createElement("div");
repeatInfo.textContent = t("pronouns", "repeat_info");
const repeatSelect = document.createElement("select");
repeatSelect.classList.add("custom-select");
[5, 10, 15, 20].forEach(val => {
    const opt = document.createElement("option");
    opt.value = val; opt.textContent = val;
    if (val === 10) opt.selected = true;
    repeatSelect.appendChild(opt);
});
repeatSelect.addEventListener('change', (e) => {
    repeatCount = parseInt(e.target.value);
});
settingsRow.appendChild(repeatInfo);
settingsRow.appendChild(repeatSelect);
rulesSection.appendChild(settingsRow);

const rulesBtnGroup = document.createElement("div");
rulesBtnGroup.classList.add("btn-group");

const startLearningBtn = document.createElement("button");
startLearningBtn.classList.add("btn", "primary"); 
startLearningBtn.textContent = t("pronouns", "start_learning");
startLearningBtn.addEventListener('click', () => startFullCourse());

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn"); 
startUnassistedBtn.textContent = t("pronouns", "start_unassisted");
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
const questionBox = document.createElement("div");
questionBox.classList.add("question-box");
const inputBox = document.createElement("div");
inputBox.classList.add("input-box");
inputBox.dataset.placeholder = t("pronouns", "type_here");
const gameHints = document.createElement("div");
gameHints.classList.add("game-hints");
gameHints.textContent = t("pronouns", "press_enter");

gameSection.appendChild(gameCounters);
gameSection.appendChild(attemptsBadge);
gameSection.appendChild(questionBox);
gameSection.appendChild(inputBox);
gameSection.appendChild(gameHints);

// END UI
const endSection = document.createElement("div");
endSection.classList.add("game-container"); // Reuse centering styles
const endTitle = document.createElement("h1");
endTitle.textContent = t("pronouns", "game_over_title");
const endBtnGroup = document.createElement("div");
endBtnGroup.classList.add("btn-group");
const playAgainRulesBtn = document.createElement("button");
playAgainRulesBtn.classList.add("btn"); playAgainRulesBtn.textContent = t("pronouns", "back_to_rules");
playAgainRulesBtn.addEventListener('click', () => showRules());
const menuBtn = document.createElement("button");
menuBtn.classList.add("btn"); menuBtn.textContent = t("pronouns", "back_to_menu");
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
// 4. ЛОГИКА
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
    if (statsRunId && window.AppStats) {
        window.AppStats.cancelRun(statsRunId);
        statsRunId = null;
    }
    gameState = 'PLAYING';
    queue = [];
    
    for (let i = 0; i < repeatCount; i++) {
        PRONOUNS.forEach(p => queue.push(p));
    }
    queue.sort(() => Math.random() - 0.5);

    if (selectedMode === 'UNASSISTED' && window.AppStats) {
        statsRunId = window.AppStats.startRun({
            moduleId: "Pronouns",
            moduleName: t("home", "module_1_topic_1"),
            mode: selectedMode,
            params: [
                { label: t("statistics", "questions_param"), value: queue.length },
                { label: t("statistics", "repeats_param"), value: repeatCount }
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
    inputBox.className = "input-box"; // reset classes

    const currentP = queue[currentIndex];
    
    let totalLeft = queue.length - currentIndex;
    let thisPronounLeft = queue.slice(currentIndex).filter(p => p.key === currentP.key).length;
    gameCounters.innerHTML = `
        <div>${t("pronouns", "total_left")} <b>${totalLeft}</b></div>
        <div>${t("pronouns", "pronoun_left")} <b>${thisPronounLeft}</b></div>
    `;

    const nativeText = t("pronouns", currentP.key);

    if (mode === 'ASSISTED') {
        attemptsBadge.style.display = "none";
        questionBox.innerHTML = `${nativeText} - <span class="de-hint">${currentP.de}</span>`;
    } else {
        attemptsBadge.style.display = "block";
        attemptsBadge.textContent = t("pronouns", "attempts_left") + attemptsLeft;
        questionBox.innerHTML = nativeText;
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
    if (currentInputStr === "") return;
    isAnimating = true;

    const currentP = queue[currentIndex];
    if (currentInputStr.trim() === currentP.de) {
        // Correct
        inputBox.classList.add("correct");
        setTimeout(() => {
            currentIndex++;
            attemptsLeft = 2; // Reset attempts for next question
            isAnimating = false;
            renderQuestion();
        }, 500);
    } else {
        // Incorrect
        inputBox.classList.add("wrong");
        setTimeout(() => {
            inputBox.classList.remove("wrong");
            isAnimating = false;

            if (mode === 'ASSISTED') {
                // Если с помощником - сразу кидаем к правилам
                showModal(
                    "Ой-ой!",
                    t("pronouns", "incorrect_assisted"),
                    [{ text: t("pronouns", "back_to_rules"), primary: true, action: showRules }]
                );
            } else {
                // Без помощника
                if (window.AppStats) window.AppStats.recordMistake(statsRunId);
                attemptsLeft--;
                if (attemptsLeft < 0) {
                    if (statsRunId && window.AppStats) {
                        window.AppStats.cancelRun(statsRunId);
                        statsRunId = null;
                    }
                    showModal(
                        "Ой-ой!",
                        t("pronouns", "failed_unassisted") + " " + t("pronouns", "choose_action"),
                        [
                            { text: t("pronouns", "back_to_rules"), primary: true, action: showRules }
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
        // Allow typing any normal character
        currentInputStr += e.key;
        updateInputDisplay();
    }
});

// Инициализация
showRules();
