// ==========================================
// Tests module: typing speed and vocabulary dictation
// ==========================================
const testsStyle = document.createElement("style");
testsStyle.textContent = `
    @import url('fonts/fonts.css');

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
        --hover-bg-strong: rgba(255, 255, 255, 0.08);
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
        gap: 1rem;
        background: var(--header-bg);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        z-index: 1000;
    }

    main {
        margin: 80px auto 0;
        padding: 2rem;
        max-width: 980px;
        box-sizing: border-box;
    }

    h1 {
        margin: 0 0 1.5rem;
        text-align: center;
        font-size: clamp(2rem, 8vw, 3.25rem);
        font-weight: 800;
        letter-spacing: 0;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .icon-btn, .btn {
        border: 1px solid var(--border-color);
        background: var(--surface-color);
        color: var(--text-primary);
        cursor: pointer;
        transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
        font-family: inherit;
        font-weight: 800;
    }

    .icon-btn {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.75rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        background: transparent;
    }

    .icon-btn:hover, .btn:hover {
        border-color: var(--accent-gold);
        transform: translateY(-2px);
    }

    .btn {
        min-height: 2.8rem;
        padding: 0.75rem 1rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .btn.primary {
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        border: none;
        color: #ffffff;
    }

    .btn.danger {
        border-color: rgba(225, 29, 72, 0.45);
        color: var(--accent-red);
    }

    .btn:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        transform: none;
    }

    .tabs {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem;
        margin-bottom: 1.25rem;
    }

    .tab-btn.active {
        background: var(--accent-gold);
        border-color: var(--accent-gold);
        color: var(--accent-contrast, #111827);
    }

    .panel {
        display: none;
        flex-direction: column;
        gap: 1rem;
    }

    .panel.active {
        display: flex;
    }

    .section-box {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 1.25rem;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .typing-text {
        line-height: 1.75;
        font-size: 1.08rem;
        color: var(--text-secondary);
    }

    .typing-text span.done {
        color: var(--accent-green);
    }

    .typing-text span.current {
        color: var(--accent-gold);
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 0.18em;
    }

    .typing-text span.wrong {
        color: var(--accent-red);
        background: rgba(255, 75, 43, 0.12);
    }

    .input-field, .text-field {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid var(--border-color);
        border-radius: 0.85rem;
        background: var(--bg-color);
        color: var(--text-primary);
        font: inherit;
        outline: none;
    }

    .input-field {
        min-height: 3.2rem;
        padding: 0.85rem 1rem;
        font-size: 1.15rem;
    }

    .text-field {
        min-height: 9rem;
        padding: 1rem;
        resize: vertical;
        line-height: 1.55;
    }

    .input-field:focus, .text-field:focus {
        border-color: var(--accent-gold);
        box-shadow: 0 0 0 2px rgba(245, 175, 25, 0.18);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.75rem;
    }

    .stat-card {
        padding: 0.9rem;
        border: 1px solid var(--border-color);
        border-radius: 0.85rem;
        background: var(--content-bg);
        text-align: center;
    }

    .stat-value {
        color: var(--accent-gold);
        font-size: 1.55rem;
        font-weight: 800;
        line-height: 1.1;
    }

    .stat-label {
        color: var(--text-secondary);
        margin-top: 0.25rem;
        font-size: 0.82rem;
        font-weight: 800;
    }

    .controls-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
    }

    .field-label {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        color: var(--text-secondary);
        font-size: 0.85rem;
        font-weight: 800;
    }

    .field-label.inline {
        flex-direction: row;
        align-items: center;
        color: var(--text-primary);
        font-size: 0.95rem;
    }

    .number-field {
        width: 6rem;
        min-height: 2.6rem;
        padding: 0.5rem 0.7rem;
        border-radius: 0.7rem;
        border: 1px solid var(--border-color);
        background: var(--bg-color);
        color: var(--text-primary);
        font: inherit;
        font-weight: 800;
    }

    .select-field {
        min-height: 2.8rem;
        padding: 0.5rem 0.7rem;
        border-radius: 0.7rem;
        border: 1px solid var(--border-color);
        background: var(--bg-color);
        color: var(--text-primary);
        font: inherit;
        font-weight: 800;
        min-width: 14rem;
    }

    .word-picker {
        max-height: 19rem;
        overflow: auto;
        display: grid;
        gap: 0.45rem;
        padding-right: 0.25rem;
    }

    .word-option {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.65rem;
        border-radius: 0.65rem;
        cursor: pointer;
        color: var(--text-primary);
    }

    .word-option:hover {
        background: var(--hover-bg);
    }

    .word-option input {
        margin-top: 0.2rem;
        width: 1.15rem;
        height: 1.15rem;
        accent-color: var(--accent-gold);
    }

    .word-de {
        color: var(--accent-gold);
        font-weight: 800;
    }

    .word-native {
        color: var(--text-secondary);
        font-size: 0.92rem;
    }

    .dictation-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
    }

    .dictation-status {
        color: var(--text-secondary);
        font-weight: 800;
    }

    .hint-word {
        min-height: 1.5rem;
        color: var(--accent-gold);
        font-weight: 800;
    }

    .feedback {
        min-height: 1.6rem;
        font-weight: 800;
        color: var(--text-secondary);
        text-align: center;
    }

    .feedback.ok {
        color: var(--accent-green);
    }

    .feedback.bad {
        color: var(--accent-red);
    }

    .hidden {
        display: none !important;
    }

    @media (max-width: 760px) {
        header {
            padding: 0.75rem 1rem;
        }

        main {
            margin-top: 64px;
            padding: 1rem;
        }

        .tabs, .stats-grid {
            grid-template-columns: 1fr 1fr;
        }

        .section-box {
            padding: 1rem;
            border-radius: 0.75rem;
        }

        .controls-row .btn {
            flex: 1 1 auto;
        }

        .input-field {
            font-size: 1rem;
        }
    }
`;
document.head.appendChild(testsStyle);

const TEST_TEXT = {
    tests_title: { en: "Tests", de: "Tests", cs: "Testy", pl: "Testy", da: "Tests", uk: "Тести" },
    typing_tab: { en: "Typing speed", de: "Tippgeschwindigkeit", cs: "Rychlost psaní", pl: "Szybkość pisania", da: "Skrivehastighed", uk: "Швидкість друку" },
    dictation_tab: { en: "Word dictation", de: "Wortdiktat", cs: "Diktát slov", pl: "Dyktando słów", da: "Orddiktat", uk: "Диктант слів" },
    start: { en: "Start", de: "Start", cs: "Start", pl: "Start", da: "Start", uk: "Старт" },
    restart: { en: "Restart", de: "Neu starten", cs: "Restart", pl: "Restart", da: "Genstart", uk: "Заново" },
    finish: { en: "Finish", de: "Beenden", cs: "Dokončit", pl: "Zakończ", da: "Afslut", uk: "Завершити" },
    type_here: { en: "Type here", de: "Hier tippen", cs: "Pište zde", pl: "Pisz tutaj", da: "Skriv her", uk: "Пишіть тут" },
    wpm: { en: "WPM", de: "WPM", cs: "WPM", pl: "WPM", da: "WPM", uk: "WPM" },
    cpm: { en: "CPM", de: "CPM", cs: "CPM", pl: "CPM", da: "CPM", uk: "CPM" },
    accuracy: { en: "Accuracy", de: "Genauigkeit", cs: "Přesnost", pl: "Dokładność", da: "Nøjagtighed", uk: "Точність" },
    time: { en: "Time", de: "Zeit", cs: "Čas", pl: "Czas", da: "Tid", uk: "Час" },
    select_words: { en: "Choose words", de: "Wörter wählen", cs: "Vyberte slova", pl: "Wybierz słowa", da: "Vælg ord", uk: "Виберіть слова" },
    search_words: { en: "Search words...", de: "Wörter suchen...", cs: "Hledat slova...", pl: "Szukaj słów...", da: "Søg ord...", uk: "Пошук слів..." },
    selected: { en: "Selected", de: "Ausgewählt", cs: "Vybráno", pl: "Wybrano", da: "Valgt", uk: "Вибрано" },
    max_errors: { en: "Max errors", de: "Max. Fehler", cs: "Max. chyb", pl: "Maks. błędów", da: "Maks. fejl", uk: "Макс. помилок" },
    assisted: { en: "Hints", de: "Hinweise", cs: "Nápovědy", pl: "Podpowiedzi", da: "Hints", uk: "Підказки" },
    pronounce: { en: "Pronounce", de: "Anhören", cs: "Přehrát", pl: "Odtwórz", da: "Udtal", uk: "Вимовити" },
    show_word: { en: "Show word", de: "Wort zeigen", cs: "Ukázat slovo", pl: "Pokaż słowo", da: "Vis ord", uk: "Показати слово" },
    check: { en: "Check", de: "Prüfen", cs: "Zkontrolovat", pl: "Sprawdź", da: "Tjek", uk: "Перевірити" },
    next: { en: "Next", de: "Weiter", cs: "Další", pl: "Dalej", da: "Næste", uk: "Далі" },
    no_words: { en: "Choose at least one word.", de: "Wähle mindestens ein Wort.", cs: "Vyberte alespoň jedno slovo.", pl: "Wybierz co najmniej jedno słowo.", da: "Vælg mindst ét ord.", uk: "Виберіть хоча б одне слово." },
    correct: { en: "Correct", de: "Richtig", cs: "Správně", pl: "Dobrze", da: "Korrekt", uk: "Правильно" },
    wrong: { en: "Wrong", de: "Falsch", cs: "Špatně", pl: "Źle", da: "Forkert", uk: "Неправильно" },
    failed: { en: "Failed. Correct word:", de: "Nicht bestanden. Richtiges Wort:", cs: "Neúspěch. Správné slovo:", pl: "Niepowodzenie. Poprawne słowo:", da: "Ikke bestået. Korrekt ord:", uk: "Провалено. Правильне слово:" },
    done: { en: "Completed", de: "Abgeschlossen", cs: "Dokončeno", pl: "Ukończono", da: "Fuldført", uk: "Завершено" },
    progress: { en: "Progress", de: "Fortschritt", cs: "Pokrok", pl: "Postęp", da: "Fremskridt", uk: "Прогрес" },
    errors: { en: "Errors", de: "Fehler", cs: "Chyby", pl: "Błędy", da: "Fejl", uk: "Помилки" },
    browser_voice: { en: "Uses your browser voice.", de: "Nutzt die Browserstimme.", cs: "Používá hlas prohlížeče.", pl: "Używa głosu przeglądarki.", da: "Bruger browserens stemme.", uk: "Використовує голос браузера." },
    select_all: { en: "Select all", de: "Alle wählen", cs: "Vybrat vše", pl: "Zaznacz wszystko", da: "Vælg alle", uk: "Вибрати все" },
    deselect_all: { en: "Deselect all", de: "Alle abwählen", cs: "Zrušit výběr", pl: "Odznacz wszystko", da: "Fravælg alle", uk: "Скасувати все" },
    word_lists: { en: "Word lists", de: "Wortlisten", cs: "Seznamy slov", pl: "Listy słów", da: "Ordlister", uk: "Списки слів" },
    choose_word_list: { en: "Choose a list", de: "Liste wählen", cs: "Vyberte seznam", pl: "Wybierz listę", da: "Vælg liste", uk: "Виберіть список" },
    use_word_list: { en: "Use list", de: "Liste nutzen", cs: "Použít seznam", pl: "Użyj listy", da: "Brug liste", uk: "Взяти список" },
    list_to_learn: { en: "To learn", de: "Zu lernen", cs: "K naučení", pl: "Do nauczenia", da: "Skal læres", uk: "Вивчити" },
    list_learned: { en: "Learned", de: "Gelernt", cs: "Naučeno", pl: "Już nauczone", da: "Lært", uk: "Уже вивчив" },
    list_words_selected: { en: "List selected", de: "Liste ausgewählt", cs: "Seznam vybrán", pl: "Wybrano listę", da: "Liste valgt", uk: "Список вибрано" },
    list_empty: { en: "This list has no words yet.", de: "Diese Liste hat noch keine Wörter.", cs: "Tento seznam zatím nemá slova.", pl: "Ta lista nie ma jeszcze słów.", da: "Denne liste har ingen ord endnu.", uk: "У цьому списку ще немає слів." }
};

function tx(key) {
    const lang = typeof getLanguage === "function" ? getLanguage() : "en";
    return (TEST_TEXT[key] && (TEST_TEXT[key][lang] || TEST_TEXT[key].en)) || key;
}

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

function normalizeAnswer(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,!?;:()[\]{}"“”„«»]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toLocaleLowerCase();
}

const PERSONAL_VOCABULARY_STORAGE_KEY = "vocabulary_personal_state_v1";
const DEFAULT_PERSONAL_LISTS = [
    { id: "to_learn", type: "default", titleKey: "list_to_learn", wordKeys: [] },
    { id: "learned", type: "default", titleKey: "list_learned", wordKeys: [] }
];

function uniqueValues(values) {
    return [...new Set((values || []).filter(Boolean))];
}

function loadPersonalVocabularyState() {
    let parsed = {};
    try {
        parsed = JSON.parse(localStorage.getItem(PERSONAL_VOCABULARY_STORAGE_KEY) || "{}");
    } catch (error) {
        parsed = {};
    }

    const savedLists = Array.isArray(parsed.lists) ? parsed.lists : [];
    const lists = DEFAULT_PERSONAL_LISTS.map(defaultList => {
        const saved = savedLists.find(list => list && list.id === defaultList.id);
        return {
            ...defaultList,
            wordKeys: uniqueValues(saved ? saved.wordKeys : [])
        };
    });

    savedLists
        .filter(list => list && list.type === "custom" && list.id && list.name)
        .forEach(list => {
            if (!lists.some(existing => existing.id === list.id)) {
                lists.push({
                    id: String(list.id),
                    type: "custom",
                    name: String(list.name).trim(),
                    wordKeys: uniqueValues(list.wordKeys)
                });
            }
        });

    const customWords = Array.isArray(parsed.customWords)
        ? parsed.customWords
            .filter(word => word && word.key && word.de && word.native)
            .map(word => ({
                key: String(word.key),
                de: String(word.de).trim(),
                native: String(word.native).trim()
            }))
        : [];

    return { lists, customWords };
}

function getPersonalListLabel(list) {
    return list.titleKey ? tx(list.titleKey) : list.name;
}

function getVocabularyWords() {
    const source = typeof TRANSLATIONS_VOCABULARY === "object" ? TRANSLATIONS_VOCABULARY : {};
    const fallbackWords = Object.entries(source)
        .filter(([key, value]) => key.startsWith("word_") && value && value.de && value.uk);

    let vocabularyEntries = [];
    try {
        const request = new XMLHttpRequest();
        request.open("GET", "JS/Zur_Information/Vocabulary/index.js?t=" + Date.now(), false);
        request.send(null);
        if (request.status >= 200 && request.status < 300) {
            vocabularyEntries = [...request.responseText.matchAll(/\{\s*de:\s*"([^"]+)"\s*,\s*key:\s*"([^"]+)"\s*\}/g)]
                .map(match => [match[2], { ...(source[match[2]] || {}), de: match[1] }])
                .filter(([, value]) => value && value.de);
        }
    } catch (error) {
        vocabularyEntries = [];
    }

    const entries = vocabularyEntries.length ? vocabularyEntries : fallbackWords;
    return [
        ...entries.map(([key, value]) => ({
            key,
            de: String(value.de),
            native: String(value[typeof getLanguage === "function" ? getLanguage() : "uk"] || value.uk || value.en || value.de)
        })),
        ...personalVocabularyState.customWords.map(word => ({
            key: word.key,
            de: word.de,
            native: word.native
        }))
    ]
        .filter((word, index, words) => words.findIndex(item => item.key === word.key || normalizeAnswer(item.de) === normalizeAnswer(word.de)) === index)
        .sort((a, b) => a.de.localeCompare(b.de, "de"));
}

function getAvailablePersonalWordLists(words) {
    const knownKeys = new Set(words.map(word => word.key));
    return personalVocabularyState.lists.map(list => {
        const wordKeys = uniqueValues(list.wordKeys).filter(key => knownKeys.has(key));
        return {
            ...list,
            label: getPersonalListLabel(list),
            wordKeys
        };
    });
}

function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
}

const personalVocabularyState = loadPersonalVocabularyState();
const vocabularyWords = getVocabularyWords();
const personalWordLists = getAvailablePersonalWordLists(vocabularyWords);
let activePanel = "typing";

const headerElement = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = typeof t === "function" ? t("home", "back_to_menu") : "Back";
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener("click", () => window.location.href = "index.html?page=Home");
headerElement.appendChild(backBtn);

const mainElement = document.createElement("main");
const title = document.createElement("h1");
title.textContent = tx("tests_title");
mainElement.appendChild(title);

const tabs = document.createElement("div");
tabs.classList.add("tabs");
const typingTab = document.createElement("button");
typingTab.classList.add("btn", "tab-btn", "active");
typingTab.textContent = tx("typing_tab");
const dictationTab = document.createElement("button");
dictationTab.classList.add("btn", "tab-btn");
dictationTab.textContent = tx("dictation_tab");
tabs.appendChild(typingTab);
tabs.appendChild(dictationTab);
mainElement.appendChild(tabs);

const typingPanel = document.createElement("section");
typingPanel.classList.add("panel", "active");
const dictationPanel = document.createElement("section");
dictationPanel.classList.add("panel");

function switchPanel(panelName) {
    activePanel = panelName;
    typingPanel.classList.toggle("active", panelName === "typing");
    dictationPanel.classList.toggle("active", panelName === "dictation");
    typingTab.classList.toggle("active", panelName === "typing");
    dictationTab.classList.toggle("active", panelName === "dictation");
}

typingTab.addEventListener("click", () => switchPanel("typing"));
dictationTab.addEventListener("click", () => switchPanel("dictation"));

// Typing speed
let typingText = buildRandomTypingText();
let typingStartedAt = null;
let typingTimer = null;

const typingTextBox = document.createElement("div");
typingTextBox.classList.add("section-box", "typing-text");
const typingInput = document.createElement("textarea");
typingInput.classList.add("text-field");
typingInput.placeholder = tx("type_here");
typingInput.autocapitalize = "off";
typingInput.autocomplete = "off";
typingInput.spellcheck = false;

const statsBox = document.createElement("div");
statsBox.classList.add("stats-grid");

const statEls = {};
["wpm", "cpm", "accuracy", "time"].forEach(key => {
    const card = document.createElement("div");
    card.classList.add("stat-card");
    const value = document.createElement("div");
    value.classList.add("stat-value");
    value.textContent = key === "accuracy" ? "100%" : "0";
    const label = document.createElement("div");
    label.classList.add("stat-label");
    label.textContent = tx(key);
    card.appendChild(value);
    card.appendChild(label);
    statsBox.appendChild(card);
    statEls[key] = value;
});

const typingControls = document.createElement("div");
typingControls.classList.add("controls-row");
const typingRestartBtn = document.createElement("button");
typingRestartBtn.classList.add("btn");
typingRestartBtn.textContent = tx("restart");
typingRestartBtn.addEventListener("click", resetTypingTest);
typingControls.appendChild(typingRestartBtn);

typingPanel.appendChild(typingTextBox);
typingPanel.appendChild(typingInput);
typingPanel.appendChild(statsBox);
typingPanel.appendChild(typingControls);

function renderTypingText(input = "") {
    typingTextBox.innerHTML = "";
    [...typingText].forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        if (index < input.length) {
            span.classList.add(input[index] === char ? "done" : "wrong");
        } else if (index === input.length) {
            span.classList.add("current");
        }
        typingTextBox.appendChild(span);
    });
}

function cleanTypingWord(value) {
    return String(value || "")
        .replace(/,\s*-[a-zäöüß]*/gi, "")
        .replace(/\([^)]*\)/g, "")
        .replace(/\s*\/\s*/g, " ")
        .replace(/[.,!?;:"“”„«»]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function buildRandomTypingText() {
    const words = vocabularyWords
        .map(word => cleanTypingWord(word.de))
        .filter(word => word && word.length >= 2 && word.length <= 18 && !word.includes("..."));

    const pool = words.length ? words : [
        "Hallo", "Danke", "Bitte", "Familie", "Schule", "Wasser", "Milch",
        "Gemüse", "sprechen", "lernen", "kommen", "gehen", "schreiben"
    ];

    return shuffle(pool)
        .slice(0, 32)
        .join(" ");
}

function updateTypingStats() {
    const input = typingInput.value;
    const elapsedMs = typingStartedAt ? Date.now() - typingStartedAt : 0;
    const minutes = Math.max(elapsedMs / 60000, 1 / 60000);
    const correctChars = [...input].filter((char, index) => char === typingText[index]).length;
    const accuracy = input.length ? Math.round((correctChars / input.length) * 100) : 100;
    statEls.cpm.textContent = String(Math.round(correctChars / minutes));
    statEls.wpm.textContent = String(Math.round((correctChars / 5) / minutes));
    statEls.accuracy.textContent = `${accuracy}%`;
    statEls.time.textContent = `${Math.floor(elapsedMs / 1000)}s`;

    if (input.length >= typingText.length) {
        clearInterval(typingTimer);
        typingTimer = null;
    }
}

function resetTypingTest() {
    typingText = buildRandomTypingText();
    typingInput.value = "";
    typingStartedAt = null;
    if (typingTimer) clearInterval(typingTimer);
    typingTimer = null;
    renderTypingText();
    updateTypingStats();
    typingInput.focus();
}

typingInput.addEventListener("input", () => {
    if (!typingStartedAt) {
        typingStartedAt = Date.now();
        typingTimer = setInterval(updateTypingStats, 500);
    }
    renderTypingText(typingInput.value);
    updateTypingStats();
});

renderTypingText();

// Dictation
let dictationQueue = [];
let dictationIndex = 0;
let dictationErrors = 0;
let dictationActive = false;
let hintShown = false;

const pickerBox = document.createElement("div");
pickerBox.classList.add("section-box");
const pickerControls = document.createElement("div");
pickerControls.classList.add("controls-row");
const wordSearch = document.createElement("input");
wordSearch.classList.add("input-field");
wordSearch.type = "search";
wordSearch.placeholder = tx("search_words");
wordSearch.setAttribute("aria-label", tx("search_words"));
wordSearch.style.flex = "1 1 18rem";
const selectAllBtn = document.createElement("button");
selectAllBtn.classList.add("btn");
selectAllBtn.textContent = tx("select_all");
const deselectAllBtn = document.createElement("button");
deselectAllBtn.classList.add("btn");
deselectAllBtn.textContent = tx("deselect_all");
pickerControls.appendChild(wordSearch);
pickerControls.appendChild(selectAllBtn);
pickerControls.appendChild(deselectAllBtn);

const listControls = document.createElement("div");
listControls.classList.add("controls-row");
const wordListLabel = document.createElement("label");
wordListLabel.classList.add("field-label");
wordListLabel.textContent = tx("word_lists");
const wordListSelect = document.createElement("select");
wordListSelect.classList.add("select-field");
wordListSelect.setAttribute("aria-label", tx("choose_word_list"));
personalWordLists.forEach(list => {
    const option = document.createElement("option");
    option.value = list.id;
    option.textContent = `${list.label} (${list.wordKeys.length})`;
    option.disabled = list.wordKeys.length === 0;
    wordListSelect.appendChild(option);
});
wordListLabel.appendChild(wordListSelect);
const useWordListBtn = document.createElement("button");
useWordListBtn.classList.add("btn");
useWordListBtn.textContent = tx("use_word_list");
useWordListBtn.disabled = personalWordLists.every(list => list.wordKeys.length === 0);
listControls.appendChild(wordListLabel);
listControls.appendChild(useWordListBtn);

const pickerMeta = document.createElement("div");
pickerMeta.classList.add("dictation-status");
pickerMeta.textContent = `${tx("selected")}: 0`;
const wordPicker = document.createElement("div");
wordPicker.classList.add("word-picker");
pickerBox.appendChild(pickerControls);
pickerBox.appendChild(listControls);
pickerBox.appendChild(pickerMeta);
pickerBox.appendChild(wordPicker);

const dictationSettings = document.createElement("div");
dictationSettings.classList.add("section-box", "controls-row");
const maxErrorsLabel = document.createElement("label");
maxErrorsLabel.classList.add("field-label");
maxErrorsLabel.textContent = tx("max_errors");
const maxErrorsInput = document.createElement("input");
maxErrorsInput.classList.add("number-field");
maxErrorsInput.type = "number";
maxErrorsInput.min = "0";
maxErrorsInput.max = "99";
maxErrorsInput.value = "3";
maxErrorsLabel.appendChild(maxErrorsInput);

const assistedLabel = document.createElement("label");
assistedLabel.classList.add("field-label", "inline");
const assistedInput = document.createElement("input");
assistedInput.type = "checkbox";
assistedInput.checked = true;
assistedLabel.appendChild(assistedInput);
assistedLabel.appendChild(document.createTextNode(tx("assisted")));

const startDictationBtn = document.createElement("button");
startDictationBtn.classList.add("btn", "primary");
startDictationBtn.textContent = tx("start");
dictationSettings.appendChild(maxErrorsLabel);
dictationSettings.appendChild(assistedLabel);
dictationSettings.appendChild(startDictationBtn);

const dictationCard = document.createElement("div");
dictationCard.classList.add("section-box", "dictation-card", "hidden");
const dictationStatus = document.createElement("div");
dictationStatus.classList.add("dictation-status");
const pronounceBtn = document.createElement("button");
pronounceBtn.classList.add("btn", "primary");
pronounceBtn.textContent = tx("pronounce");
const hintBtn = document.createElement("button");
hintBtn.classList.add("btn");
hintBtn.textContent = tx("show_word");
const hintWord = document.createElement("div");
hintWord.classList.add("hint-word");
const dictationInput = document.createElement("input");
dictationInput.classList.add("input-field");
dictationInput.placeholder = tx("type_here");
dictationInput.autocapitalize = "off";
dictationInput.autocomplete = "off";
dictationInput.spellcheck = false;
const dictationActions = document.createElement("div");
dictationActions.classList.add("controls-row");
const checkBtn = document.createElement("button");
checkBtn.classList.add("btn", "primary");
checkBtn.textContent = tx("check");
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn");
stopBtn.textContent = tx("finish");
dictationActions.appendChild(checkBtn);
dictationActions.appendChild(stopBtn);
const dictationFeedback = document.createElement("div");
dictationFeedback.classList.add("feedback");
const voiceNote = document.createElement("div");
voiceNote.classList.add("dictation-status");
voiceNote.textContent = tx("browser_voice");

dictationCard.appendChild(dictationStatus);
dictationCard.appendChild(pronounceBtn);
dictationCard.appendChild(hintBtn);
dictationCard.appendChild(hintWord);
dictationCard.appendChild(dictationInput);
dictationCard.appendChild(dictationActions);
dictationCard.appendChild(dictationFeedback);
dictationCard.appendChild(voiceNote);

dictationPanel.appendChild(pickerBox);
dictationPanel.appendChild(dictationSettings);
dictationPanel.appendChild(dictationCard);

const wordOptions = [];
vocabularyWords.forEach(word => {
    const label = document.createElement("label");
    label.classList.add("word-option");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = word.key;
    const textWrap = document.createElement("div");
    const de = document.createElement("div");
    de.classList.add("word-de");
    de.textContent = word.de;
    const native = document.createElement("div");
    native.classList.add("word-native");
    native.textContent = word.native;
    textWrap.appendChild(de);
    textWrap.appendChild(native);
    label.appendChild(cb);
    label.appendChild(textWrap);
    wordPicker.appendChild(label);
    wordOptions.push({
        word,
        label,
        checkbox: cb,
        search: normalizeAnswer(`${word.de} ${word.native}`)
    });
});

const firstNonEmptyPersonalList = personalWordLists.find(list => list.wordKeys.length > 0);
if (firstNonEmptyPersonalList) {
    wordListSelect.value = firstNonEmptyPersonalList.id;
}

function updateSelectedCount() {
    const count = wordOptions.filter(option => option.checkbox.checked).length;
    pickerMeta.textContent = `${tx("selected")}: ${count}`;
}

function filterWords() {
    const query = normalizeAnswer(wordSearch.value);
    wordOptions.forEach(option => {
        option.label.classList.toggle("hidden", query && !option.search.includes(query));
    });
}

wordSearch.addEventListener("input", filterWords);
wordOptions.forEach(option => option.checkbox.addEventListener("change", updateSelectedCount));
selectAllBtn.addEventListener("click", () => {
    wordOptions.forEach(option => {
        if (!option.label.classList.contains("hidden")) option.checkbox.checked = true;
    });
    updateSelectedCount();
});
deselectAllBtn.addEventListener("click", () => {
    wordOptions.forEach(option => {
        if (!option.label.classList.contains("hidden")) option.checkbox.checked = false;
    });
    updateSelectedCount();
});

useWordListBtn.addEventListener("click", () => {
    const activeList = personalWordLists.find(list => list.id === wordListSelect.value);
    if (!activeList || activeList.wordKeys.length === 0) {
        pickerMeta.textContent = `${tx("selected")}: 0 · ${tx("list_empty")}`;
        return;
    }

    const activeKeys = new Set(activeList.wordKeys);
    wordSearch.value = "";
    wordOptions.forEach(option => {
        option.checkbox.checked = activeKeys.has(option.word.key);
        option.label.classList.remove("hidden");
    });
    const selectedCount = wordOptions.filter(option => option.checkbox.checked).length;
    pickerMeta.textContent = `${tx("selected")}: ${selectedCount} · ${tx("list_words_selected")}: ${activeList.label}`;
});

function currentDictationWord() {
    return dictationQueue[dictationIndex];
}

function speakCurrentWord() {
    const word = currentDictationWord();
    if (!word || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word.de.replace(/,.*$/, ""));
    utterance.lang = "de-DE";
    utterance.rate = 0.86;
    window.speechSynthesis.speak(utterance);
}

function renderDictationRound() {
    const word = currentDictationWord();
    hintShown = false;
    dictationInput.value = "";
    hintWord.textContent = "";
    hintBtn.classList.toggle("hidden", !assistedInput.checked);
    dictationFeedback.className = "feedback";
    dictationFeedback.textContent = "";
    dictationStatus.textContent = `${tx("progress")}: ${dictationIndex + 1}/${dictationQueue.length} · ${tx("errors")}: ${dictationErrors}/${maxErrorsInput.value}`;
    if (word) speakCurrentWord();
    dictationInput.focus();
}

function finishDictation(message, isBad = false) {
    dictationActive = false;
    dictationFeedback.className = `feedback ${isBad ? "bad" : "ok"}`;
    dictationFeedback.textContent = message;
    dictationCard.classList.remove("hidden");
    pickerBox.classList.remove("hidden");
    dictationSettings.classList.remove("hidden");
}

function startDictation() {
    const selectedKeys = new Set(wordOptions.filter(option => option.checkbox.checked).map(option => option.word.key));
    const selectedWords = vocabularyWords.filter(word => selectedKeys.has(word.key));
    if (selectedWords.length === 0) {
        dictationFeedback.className = "feedback bad";
        dictationFeedback.textContent = tx("no_words");
        dictationCard.classList.remove("hidden");
        return;
    }

    dictationQueue = shuffle(selectedWords);
    dictationIndex = 0;
    dictationErrors = 0;
    dictationActive = true;
    pickerBox.classList.add("hidden");
    dictationSettings.classList.add("hidden");
    dictationCard.classList.remove("hidden");
    renderDictationRound();
}

function checkDictationAnswer() {
    if (!dictationActive) return;
    const word = currentDictationWord();
    if (!word) return;

    if (normalizeAnswer(dictationInput.value) === normalizeAnswer(word.de)) {
        dictationFeedback.className = "feedback ok";
        dictationFeedback.textContent = tx("correct");
        dictationIndex += 1;
        if (dictationIndex >= dictationQueue.length) {
            finishDictation(`${tx("done")} · ${tx("errors")}: ${dictationErrors}`, false);
            return;
        }
        setTimeout(renderDictationRound, 500);
        return;
    }

    dictationErrors += 1;
    const maxErrors = Math.max(0, parseInt(maxErrorsInput.value, 10) || 0);
    if (dictationErrors > maxErrors) {
        finishDictation(`${tx("failed")} ${word.de}`, true);
        return;
    }

    dictationFeedback.className = "feedback bad";
    dictationFeedback.textContent = `${tx("wrong")} · ${tx("errors")}: ${dictationErrors}/${maxErrors}`;
    dictationStatus.textContent = `${tx("progress")}: ${dictationIndex + 1}/${dictationQueue.length} · ${tx("errors")}: ${dictationErrors}/${maxErrors}`;
    dictationInput.select();
}

startDictationBtn.addEventListener("click", startDictation);
pronounceBtn.addEventListener("click", speakCurrentWord);
hintBtn.addEventListener("click", () => {
    const word = currentDictationWord();
    if (!word) return;
    hintShown = true;
    hintWord.textContent = word.de;
});
checkBtn.addEventListener("click", checkDictationAnswer);
stopBtn.addEventListener("click", () => finishDictation(tx("done"), false));
dictationInput.addEventListener("keydown", event => {
    if (event.key === "Enter") checkDictationAnswer();
});

updateSelectedCount();

mainElement.appendChild(typingPanel);
mainElement.appendChild(dictationPanel);
document.body.innerHTML = "";
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
