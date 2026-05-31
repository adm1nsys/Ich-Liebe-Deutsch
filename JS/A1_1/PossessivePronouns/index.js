// ==========================================
// 1. STYLES
// ==========================================
const styleElement = document.createElement("style");
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
        max-width: 980px; width: 100%;
        margin-left: auto; margin-right: auto; box-sizing: border-box;
        display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
    }

    h1 {
        font-size: 2.3rem; font-weight: 800; text-align: center; margin-bottom: 1.5rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    .rules-container { width: 100%; display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 2rem; }
    .rule-card {
        background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px var(--shadow-color);
        display: flex; flex-direction: column; gap: 0.5rem; text-align: left; width: 100%; box-sizing: border-box;
        overflow-x: auto;
    }
    .rule-header { font-size: 1.3rem; font-weight: 800; color: var(--accent-gold); display: flex; align-items: center; gap: 0.5rem; }
    .rule-desc { font-size: 0.95rem; color: var(--text-primary); line-height: 1.5; margin-bottom: 0.75rem; }
    .rule-subtitle { font-size: 1rem; font-weight: 800; color: var(--accent-gold); margin-top: 1rem; }
    .rule-list { margin: 0.25rem 0 0.5rem; padding-left: 1.2rem; color: var(--text-primary); line-height: 1.55; font-size: 0.95rem; }
    .rule-list li { margin-bottom: 0.35rem; }
    .forms-table { width: 100%; min-width: 720px; border-collapse: collapse; font-size: 0.9rem; border-radius: 0.5rem; overflow: hidden; margin-top: 0.5rem; }
    .forms-table th, .forms-table td { padding: 0.72rem; border: 1px solid var(--border-color); text-align: center; vertical-align: top; }
    .forms-table th { background: rgba(245, 175, 25, 0.08); color: var(--accent-gold); font-weight: 800; }
    .forms-table td:first-child { color: var(--accent-green); font-weight: 800; white-space: nowrap; }

    .section-title { font-size: 1.05rem; font-weight: 600; color: var(--text-secondary); margin-top: 1.5rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; width: 100%; text-align: left; }
    .pill-group { display: flex; flex-wrap: wrap; gap: 0.75rem; width: 100%; margin-bottom: 1rem; }
    .pill-btn {
        background: var(--surface-color); border: 1px solid var(--border-color);
        color: var(--text-primary); padding: 0.75rem 1.25rem; border-radius: 2rem;
        font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;
    }
    .pill-btn:hover { border-color: var(--text-secondary); transform: translateY(-2px); }
    .pill-btn.active { background: linear-gradient(135deg, var(--accent-gold), var(--accent-red)); color: white; border-color: transparent; box-shadow: 0 4px 10px rgba(255, 75, 43, 0.3); }

    .action-group { display: flex; gap: 1rem; width: 100%; margin-top: 1.5rem; flex-wrap: wrap; }
    .btn-primary, .btn-secondary {
        flex: 1; min-width: 200px; padding: 1rem 1.5rem; border-radius: 0.75rem;
        font-size: 1.05rem; font-weight: 800; cursor: pointer; transition: all 0.3s ease;
        text-align: center; border: none; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
    }
    .btn-primary { background: linear-gradient(135deg, var(--accent-gold), var(--accent-red)); color: white; box-shadow: 0 4px 15px rgba(255, 75, 43, 0.4); }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 75, 43, 0.6); }
    .btn-secondary { background: var(--surface-color); color: var(--text-primary); border: 1px solid var(--border-color); }
    .btn-secondary:hover { border-color: var(--accent-gold); transform: translateY(-2px); }

    .game-section { display: none; width: 100%; flex-direction: column; }
    .status-bar { width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-color); font-size: 1rem; font-weight: 600; color: var(--text-secondary); }
    .progress-counter { color: var(--accent-gold); }
    .task-card {
        width: 100%; background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 1rem; padding: 1.5rem; box-sizing: border-box; box-shadow: 0 4px 6px var(--shadow-color);
        margin-bottom: 1.2rem;
    }
    .task-label { color: var(--text-secondary); font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 0.4rem; }
    .task-text { color: var(--text-primary); font-size: 1.08rem; font-weight: 700; line-height: 1.45; margin-bottom: 1rem; }
    .sentence-text { font-size: 1.65rem; font-weight: 800; line-height: 1.35; color: var(--text-primary); }
    .blank { color: var(--accent-gold); border-bottom: 3px solid var(--accent-gold); padding: 0 0.25rem; }
    .hint-box {
        display: none; width: 100%; background: var(--content-bg); border-left: 3px solid var(--accent-gold);
        border-radius: 0.5rem; padding: 0.9rem 1rem; box-sizing: border-box; margin-bottom: 1.2rem;
        color: var(--text-primary); line-height: 1.5;
    }
    .hint-box strong { color: var(--accent-gold); }
    .answer-options { width: 100%; display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; margin-bottom: 1rem; }
    .answer-block {
        background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 0.6rem; padding: 0.85rem 1rem; cursor: pointer;
        color: var(--text-primary); font-size: 1rem; font-weight: 800;
        transition: all 0.2s ease; min-width: 105px; text-align: center;
    }
    .answer-block:hover { border-color: var(--accent-gold); transform: translateY(-2px); }
    .answer-block.selected { background: rgba(245, 175, 25, 0.12); border-color: var(--accent-gold); color: var(--accent-gold); }
    .answer-block.correct { background: rgba(16, 185, 129, 0.16); border-color: var(--accent-green); color: var(--accent-green); }
    .answer-block.wrong { background: rgba(255, 75, 43, 0.12); border-color: var(--accent-red); color: var(--accent-red); }

    .typing-area { display: none; width: 100%; margin-bottom: 1rem; }
    .typing-input {
        width: 100%; background: var(--surface-color); border: 2px solid var(--border-color);
        color: var(--text-primary); font-size: 1.25rem; font-weight: 700; padding: 1.1rem;
        border-radius: 1rem; text-align: center; box-sizing: border-box; outline: none; transition: border-color 0.3s ease;
    }
    .typing-input:focus { border-color: var(--accent-gold); }
    .typing-input.correct { border-color: var(--accent-green); background: rgba(16, 185, 129, 0.1); }
    .typing-input.wrong { border-color: var(--accent-red); background: rgba(239, 68, 68, 0.1); animation: shake 0.4s ease; }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    .feedback-message { font-size: 1.1rem; font-weight: 800; margin: 0.75rem 0 1rem; text-align: center; min-height: 1.5rem; white-space: pre-line; }
    .feedback-message.correct { color: var(--accent-green); }
    .feedback-message.error { color: var(--accent-red); }
    .finish-screen {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: var(--bg-color); display: flex; flex-direction: column;
        align-items: center; justify-content: center; z-index: 2000;
        animation: fadeIn 0.5s ease forwards; text-align: center; padding: 2rem; box-sizing: border-box;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .finish-icon { font-size: 5rem; margin-bottom: 1rem; }

    @media (max-width: 640px) {
        main { padding: 1rem; }
        h1 { font-size: 1.75rem; }
        .sentence-text { font-size: 1.3rem; }
        .rule-card, .task-card { padding: 1rem; }
        .btn-primary, .btn-secondary { min-width: 100%; }
    }
`;
document.head.appendChild(styleElement);

// ==========================================
// 2. DATA
// ==========================================
const OWNER_ROWS = [
    ["ich", "mein-", "mein Vater / meine Mutter"],
    ["du", "dein-", "dein Vater / deine Mutter"],
    ["er / es", "sein-", "sein Vater / seine Mutter"],
    ["sie", "ihr-", "ihr Vater / ihre Mutter"],
    ["wir", "unser-", "unser Vater / unsere Mutter"],
    ["ihr", "euer-", "euer Vater / eure Mutter"],
    ["sie", "ihr-", "ihr Vater / ihre Mutter"],
    ["Sie", "Ihr-", "Ihr Vater / Ihre Mutter"]
];

const PERSONAL_CASE_ROWS = [
    ["ich", "mich", "mir"],
    ["du", "dich", "dir"],
    ["er", "ihn", "ihm"],
    ["sie", "sie", "ihr"],
    ["es", "es", "ihm"],
    ["wir", "uns", "uns"],
    ["ihr", "euch", "euch"],
    ["sie", "sie", "ihnen"],
    ["Sie", "Sie", "Ihnen"]
];

const POSSESSIVE_ITEMS = [
    { topic: "POSSESSIVE", answer: "mein", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Das ist ___ Vater.", meaning: { en: "That is my father.", uk: "Це мій батько." }, hint: { en: "Vater is masculine Nominativ: mein Vater.", uk: "Vater — чоловічий Nominativ: mein Vater." } },
    { topic: "POSSESSIVE", answer: "meine", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Das ist ___ Mutter.", meaning: { en: "That is my mother.", uk: "Це моя мама." }, hint: { en: "Mutter is feminine Nominativ: meine Mutter.", uk: "Mutter — жіночий Nominativ: meine Mutter." } },
    { topic: "POSSESSIVE", answer: "mein", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Das ist ___ Kind.", meaning: { en: "That is my child.", uk: "Це моя дитина." }, hint: { en: "Kind is neuter Nominativ: mein Kind.", uk: "Kind — середній Nominativ: mein Kind." } },
    { topic: "POSSESSIVE", answer: "meine", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Das sind ___ Kinder.", meaning: { en: "Those are my children.", uk: "Це мої діти." }, hint: { en: "Plural Nominativ: meine Kinder.", uk: "Множина Nominativ: meine Kinder." } },
    { topic: "POSSESSIVE", answer: "meinen", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich sehe ___ Vater.", meaning: { en: "I see my father.", uk: "Я бачу свого батька." }, hint: { en: "sehen + masculine Akkusativ: meinen Vater.", uk: "sehen + чоловічий Akkusativ: meinen Vater." } },
    { topic: "POSSESSIVE", answer: "meine", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich sehe ___ Mutter.", meaning: { en: "I see my mother.", uk: "Я бачу свою маму." }, hint: { en: "Feminine Akkusativ stays like Nominativ: meine Mutter.", uk: "Жіночий Akkusativ як Nominativ: meine Mutter." } },
    { topic: "POSSESSIVE", answer: "mein", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich sehe ___ Kind.", meaning: { en: "I see my child.", uk: "Я бачу свою дитину." }, hint: { en: "Neuter Akkusativ stays like Nominativ: mein Kind.", uk: "Середній Akkusativ як Nominativ: mein Kind." } },
    { topic: "POSSESSIVE", answer: "meine", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich sehe ___ Kinder.", meaning: { en: "I see my children.", uk: "Я бачу своїх дітей." }, hint: { en: "Plural Akkusativ: meine Kinder.", uk: "Множина Akkusativ: meine Kinder." } },
    { topic: "POSSESSIVE", answer: "meinem", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich helfe ___ Vater.", meaning: { en: "I help my father.", uk: "Я допомагаю своєму батькові." }, hint: { en: "helfen + Dativ, masculine: meinem Vater.", uk: "helfen + Dativ, чоловічий: meinem Vater." } },
    { topic: "POSSESSIVE", answer: "meiner", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich helfe ___ Mutter.", meaning: { en: "I help my mother.", uk: "Я допомагаю своїй мамі." }, hint: { en: "helfen + Dativ, feminine: meiner Mutter.", uk: "helfen + Dativ, жіночий: meiner Mutter." } },
    { topic: "POSSESSIVE", answer: "meinem", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich helfe ___ Kind.", meaning: { en: "I help my child.", uk: "Я допомагаю своїй дитині." }, hint: { en: "Dativ neuter: meinem Kind.", uk: "Dativ середній: meinem Kind." } },
    { topic: "POSSESSIVE", answer: "meinen", options: ["mein", "meine", "meinen", "meinem", "meiner"], sentence: "Ich helfe ___ Kindern.", meaning: { en: "I help my children.", uk: "Я допомагаю своїм дітям." }, hint: { en: "Dativ plural: meinen Kindern.", uk: "Dativ множини: meinen Kindern." } },

    { topic: "OWNER", answer: "deine", options: ["meine", "deine", "seine", "ihre", "unsere", "eure", "Ihre"], sentence: "du + Schwester: Das ist ___ Schwester.", meaning: { en: "your sister", uk: "твоя сестра" }, hint: { en: "du -> dein-. Schwester is feminine: deine Schwester.", uk: "du -> dein-. Schwester жіночого роду: deine Schwester." } },
    { topic: "OWNER", answer: "deinen", options: ["meinen", "deinen", "seinen", "ihren", "unseren", "euren", "Ihren"], sentence: "du + Bruder: Ich sehe ___ Bruder.", meaning: { en: "I see your brother.", uk: "Я бачу твого брата." }, hint: { en: "du -> dein-. Bruder is masculine Akkusativ: deinen Bruder.", uk: "du -> dein-. Bruder чоловічий Akkusativ: deinen Bruder." } },
    { topic: "OWNER", answer: "sein", options: ["mein", "dein", "sein", "ihr", "unser", "euer", "Ihr"], sentence: "er + Auto: Das ist ___ Auto.", meaning: { en: "his car", uk: "його авто" }, hint: { en: "er -> sein-. Auto is neuter Nominativ: sein Auto.", uk: "er -> sein-. Auto середнього роду: sein Auto." } },
    { topic: "OWNER", answer: "seine", options: ["meine", "deine", "seine", "ihre", "unsere", "eure", "Ihre"], sentence: "es + Farbe: ___ Farbe ist blau.", meaning: { en: "Its color is blue.", uk: "Його/її колір синій." }, hint: { en: "es -> sein-. Farbe is feminine: seine Farbe.", uk: "es -> sein-. Farbe жіночого роду: seine Farbe." } },
    { topic: "OWNER", answer: "ihre", options: ["meine", "deine", "seine", "ihre", "unsere", "eure", "Ihre"], sentence: "sie + Tasche: Das ist ___ Tasche.", meaning: { en: "her bag", uk: "її сумка" }, hint: { en: "sie (she) -> ihr-. Tasche is feminine: ihre Tasche.", uk: "sie (вона) -> ihr-. Tasche жіночого роду: ihre Tasche." } },
    { topic: "OWNER", answer: "ihren", options: ["meinen", "deinen", "seinen", "ihren", "unseren", "euren", "Ihren"], sentence: "sie + Hund: Ich sehe ___ Hund.", meaning: { en: "I see her dog.", uk: "Я бачу її собаку." }, hint: { en: "Hund is masculine Akkusativ: ihren Hund.", uk: "Hund чоловічий Akkusativ: ihren Hund." } },
    { topic: "OWNER", answer: "unser", options: ["mein", "dein", "sein", "ihr", "unser", "euer", "Ihr"], sentence: "wir + Lehrer: Das ist ___ Lehrer.", meaning: { en: "our teacher", uk: "наш учитель" }, hint: { en: "wir -> unser-. Lehrer is masculine Nominativ: unser Lehrer.", uk: "wir -> unser-. Lehrer чоловічий Nominativ: unser Lehrer." } },
    { topic: "OWNER", answer: "unsere", options: ["meine", "deine", "seine", "ihre", "unsere", "eure", "Ihre"], sentence: "wir + Freunde: Das sind ___ Freunde.", meaning: { en: "our friends", uk: "наші друзі" }, hint: { en: "wir -> unser-. Plural: unsere Freunde.", uk: "wir -> unser-. Множина: unsere Freunde." } },
    { topic: "OWNER", answer: "euer", options: ["mein", "dein", "sein", "ihr", "unser", "euer", "Ihr"], sentence: "ihr + Vater: Ist das ___ Vater?", meaning: { en: "Is that your father? (you plural)", uk: "Це ваш батько? (до групи друзів)" }, hint: { en: "ihr -> euer-. Masculine Nominativ: euer Vater.", uk: "ihr -> euer-. Чоловічий Nominativ: euer Vater." } },
    { topic: "OWNER", answer: "eure", options: ["meine", "deine", "seine", "ihre", "unsere", "eure", "Ihre"], sentence: "ihr + Mutter: Ist das ___ Mutter?", meaning: { en: "Is that your mother? (you plural)", uk: "Це ваша мама? (до групи друзів)" }, hint: { en: "euer loses e before endings: eure Mutter.", uk: "euer втрачає e перед закінченням: eure Mutter." } },
    { topic: "OWNER", answer: "Ihre", options: ["meine", "deine", "seine", "ihre", "unsere", "eure", "Ihre"], sentence: "Sie + Adresse: Ist das ___ Adresse?", meaning: { en: "Is that your address? (formal)", uk: "Це Ваша адреса? (ввічливо)" }, hint: { en: "Formal Sie -> Ihr-, always capitalized. Adresse is feminine: Ihre Adresse.", uk: "Ввічливе Sie -> Ihr-, завжди з великої літери. Adresse жіночого роду: Ihre Adresse." } },
    { topic: "OWNER", answer: "Ihren", options: ["meinen", "deinen", "seinen", "ihren", "unseren", "euren", "Ihren"], sentence: "Sie + Pass: Ich sehe ___ Pass.", meaning: { en: "I see your passport. (formal)", uk: "Я бачу Ваш паспорт. (ввічливо)" }, hint: { en: "Formal Sie -> Ihr-. Pass is masculine Akkusativ: Ihren Pass.", uk: "Ввічливе Sie -> Ihr-. Pass чоловічий Akkusativ: Ihren Pass." } },
    { topic: "OWNER", answer: "ihr", options: ["mein", "dein", "sein", "ihr", "unser", "euer", "Ihr"], sentence: "sie (they) + Haus: Das ist ___ Haus.", meaning: { en: "their house", uk: "їхній будинок" }, hint: { en: "sie (they) -> ihr-. Haus is neuter: ihr Haus.", uk: "sie (вони) -> ihr-. Haus середнього роду: ihr Haus." } },
    { topic: "OWNER", answer: "ihre", options: ["meine", "deine", "seine", "ihre", "unsere", "eure", "Ihre"], sentence: "sie (they) + Kinder: Das sind ___ Kinder.", meaning: { en: "their children", uk: "їхні діти" }, hint: { en: "sie (they) -> ihr-. Plural: ihre Kinder.", uk: "sie (вони) -> ihr-. Множина: ihre Kinder." } },

    { topic: "PERSONAL_CASE", answer: "ich", options: ["ich", "mich", "mir"], sentence: "___ komme heute.", meaning: { en: "I am coming today.", uk: "Я сьогодні прийду." }, hint: { en: "Subject -> Nominativ: ich.", uk: "Підмет -> Nominativ: ich." }, accept: ["ich", "Ich"] },
    { topic: "PERSONAL_CASE", answer: "mich", options: ["ich", "mich", "mir"], sentence: "Anna sieht ___.", meaning: { en: "Anna sees me.", uk: "Анна бачить мене." }, hint: { en: "Direct object -> Akkusativ: mich.", uk: "Прямий додаток -> Akkusativ: mich." } },
    { topic: "PERSONAL_CASE", answer: "mir", options: ["ich", "mich", "mir"], sentence: "Anna hilft ___.", meaning: { en: "Anna helps me.", uk: "Анна допомагає мені." }, hint: { en: "helfen + Dativ: mir.", uk: "helfen + Dativ: mir." } },
    { topic: "PERSONAL_CASE", answer: "du", options: ["du", "dich", "dir"], sentence: "___ lernst Deutsch.", meaning: { en: "You are learning German.", uk: "Ти вчиш німецьку." }, hint: { en: "Subject -> Nominativ: du.", uk: "Підмет -> Nominativ: du." }, accept: ["du", "Du"] },
    { topic: "PERSONAL_CASE", answer: "dich", options: ["du", "dich", "dir"], sentence: "Ich sehe ___.", meaning: { en: "I see you.", uk: "Я бачу тебе." }, hint: { en: "Direct object -> Akkusativ: dich.", uk: "Прямий додаток -> Akkusativ: dich." } },
    { topic: "PERSONAL_CASE", answer: "dir", options: ["du", "dich", "dir"], sentence: "Ich helfe ___.", meaning: { en: "I help you.", uk: "Я допомагаю тобі." }, hint: { en: "helfen + Dativ: dir.", uk: "helfen + Dativ: dir." } },
    { topic: "PERSONAL_CASE", answer: "er", options: ["er", "ihn", "ihm"], sentence: "___ wohnt in Berlin.", meaning: { en: "He lives in Berlin.", uk: "Він живе в Берліні." }, hint: { en: "Subject -> Nominativ: er.", uk: "Підмет -> Nominativ: er." }, accept: ["er", "Er"] },
    { topic: "PERSONAL_CASE", answer: "ihn", options: ["er", "ihn", "ihm"], sentence: "Ich besuche ___.", meaning: { en: "I visit him.", uk: "Я відвідую його." }, hint: { en: "besuchen takes Akkusativ: ihn.", uk: "besuchen вимагає Akkusativ: ihn." } },
    { topic: "PERSONAL_CASE", answer: "ihm", options: ["er", "ihn", "ihm"], sentence: "Ich gebe ___ das Buch.", meaning: { en: "I give him the book.", uk: "Я даю йому книгу." }, hint: { en: "Recipient -> Dativ: ihm.", uk: "Отримувач -> Dativ: ihm." } },
    { topic: "PERSONAL_CASE", answer: "sie", options: ["sie", "ihr"], sentence: "___ arbeitet heute.", meaning: { en: "She is working today.", uk: "Вона сьогодні працює." }, hint: { en: "Subject -> Nominativ: sie.", uk: "Підмет -> Nominativ: sie." }, accept: ["sie", "Sie"] },
    { topic: "PERSONAL_CASE", answer: "sie", options: ["sie", "ihr"], sentence: "Ich sehe ___.", meaning: { en: "I see her.", uk: "Я бачу її." }, hint: { en: "Feminine Akkusativ looks like Nominativ: sie.", uk: "Жіночий Akkusativ виглядає як Nominativ: sie." } },
    { topic: "PERSONAL_CASE", answer: "ihr", options: ["sie", "ihr"], sentence: "Ich helfe ___.", meaning: { en: "I help her.", uk: "Я допомагаю їй." }, hint: { en: "Feminine Dativ: ihr.", uk: "Жіночий Dativ: ihr." } },
    { topic: "PERSONAL_CASE", answer: "es", options: ["es", "ihm"], sentence: "___ ist klein.", meaning: { en: "It is small.", uk: "Воно маленьке." }, hint: { en: "Subject -> Nominativ: es.", uk: "Підмет -> Nominativ: es." }, accept: ["es", "Es"] },
    { topic: "PERSONAL_CASE", answer: "es", options: ["es", "ihm"], sentence: "Ich sehe ___.", meaning: { en: "I see it.", uk: "Я бачу це/його." }, hint: { en: "Neuter Akkusativ: es.", uk: "Середній Akkusativ: es." } },
    { topic: "PERSONAL_CASE", answer: "ihm", options: ["es", "ihm"], sentence: "Ich helfe ___.", meaning: { en: "I help it / him.", uk: "Я допомагаю йому/цьому." }, hint: { en: "Neuter Dativ: ihm.", uk: "Середній Dativ: ihm." } },
    { topic: "PERSONAL_CASE", answer: "wir", options: ["wir", "uns"], sentence: "___ lernen Deutsch.", meaning: { en: "We are learning German.", uk: "Ми вчимо німецьку." }, hint: { en: "Subject -> Nominativ: wir.", uk: "Підмет -> Nominativ: wir." }, accept: ["wir", "Wir"] },
    { topic: "PERSONAL_CASE", answer: "uns", options: ["wir", "uns"], sentence: "Anna sieht ___.", meaning: { en: "Anna sees us.", uk: "Анна бачить нас." }, hint: { en: "Akkusativ plural 1st person: uns.", uk: "Akkusativ для wir: uns." } },
    { topic: "PERSONAL_CASE", answer: "uns", options: ["wir", "uns"], sentence: "Anna hilft ___.", meaning: { en: "Anna helps us.", uk: "Анна допомагає нам." }, hint: { en: "Dativ for wir is also uns.", uk: "Dativ для wir теж uns." } },
    { topic: "PERSONAL_CASE", answer: "ihr", options: ["ihr", "euch"], sentence: "___ seid freundlich.", meaning: { en: "You all are friendly.", uk: "Ви дружні. (до групи друзів)" }, hint: { en: "Subject -> Nominativ: ihr.", uk: "Підмет -> Nominativ: ihr." }, accept: ["ihr", "Ihr"] },
    { topic: "PERSONAL_CASE", answer: "euch", options: ["ihr", "euch"], sentence: "Ich sehe ___.", meaning: { en: "I see you all.", uk: "Я бачу вас. (до групи друзів)" }, hint: { en: "Akkusativ for ihr: euch.", uk: "Akkusativ для ihr: euch." } },
    { topic: "PERSONAL_CASE", answer: "euch", options: ["ihr", "euch"], sentence: "Ich helfe ___.", meaning: { en: "I help you all.", uk: "Я допомагаю вам. (до групи друзів)" }, hint: { en: "Dativ for ihr is also euch.", uk: "Dativ для ihr теж euch." } },
    { topic: "PERSONAL_CASE", answer: "sie", options: ["sie", "ihnen"], sentence: "___ kommen morgen.", meaning: { en: "They are coming tomorrow.", uk: "Вони прийдуть завтра." }, hint: { en: "Subject -> Nominativ plural: sie.", uk: "Підмет -> Nominativ множини: sie." }, accept: ["sie", "Sie"] },
    { topic: "PERSONAL_CASE", answer: "sie", options: ["sie", "ihnen"], sentence: "Ich sehe ___.", meaning: { en: "I see them.", uk: "Я бачу їх." }, hint: { en: "Akkusativ plural: sie.", uk: "Akkusativ множини: sie." } },
    { topic: "PERSONAL_CASE", answer: "ihnen", options: ["sie", "ihnen"], sentence: "Ich helfe ___.", meaning: { en: "I help them.", uk: "Я допомагаю їм." }, hint: { en: "Dativ plural: ihnen.", uk: "Dativ множини: ihnen." } },
    { topic: "PERSONAL_CASE", answer: "Sie", options: ["Sie", "Ihnen"], sentence: "___ wohnen hier?", meaning: { en: "Do you live here? (formal)", uk: "Ви тут живете? (ввічливо)" }, hint: { en: "Formal subject is capitalized: Sie.", uk: "Ввічливий підмет з великої літери: Sie." } },
    { topic: "PERSONAL_CASE", answer: "Sie", options: ["Sie", "Ihnen"], sentence: "Ich sehe ___.", meaning: { en: "I see you. (formal)", uk: "Я бачу Вас. (ввічливо)" }, hint: { en: "Formal Akkusativ is also Sie.", uk: "Ввічливий Akkusativ теж Sie." } },
    { topic: "PERSONAL_CASE", answer: "Ihnen", options: ["Sie", "Ihnen"], sentence: "Ich helfe ___.", meaning: { en: "I help you. (formal)", uk: "Я допомагаю Вам. (ввічливо)" }, hint: { en: "Formal Dativ: Ihnen.", uk: "Ввічливий Dativ: Ihnen." } }
];

// ==========================================
// 3. HELPERS
// ==========================================
function getLocalized(value) {
    if (!value) return "";
    const lang = getLanguage();
    return value[lang] || value.en || value.uk || "";
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function sentenceWithBlank(sentence) {
    return escapeHtml(sentence).replace("___", `<span class="blank">___</span>`);
}

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function normalizeAnswer(value) {
    return String(value).trim().replace(/[?!.,]/g, "").replace(/\s+/g, " ");
}

function isCorrectAnswer(value, item) {
    const normalized = normalizeAnswer(value);
    const accepted = item.accept || [item.answer];
    return accepted.some(answer => normalizeAnswer(answer) === normalized);
}

function getItemsForTopic() {
    if (practiceTopic === "MIXED") return POSSESSIVE_ITEMS;
    return POSSESSIVE_ITEMS.filter(item => item.topic === practiceTopic);
}

function buildPracticeQueue() {
    const source = getItemsForTopic();
    const queue = [];
    while (queue.length < practiceCount) {
        queue.push(...shuffle(source));
    }
    return queue.slice(0, practiceCount);
}

function createSVGIcon(pathData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);
    return svg;
}

function tableRows(rows) {
    return rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("");
}

// ==========================================
// 4. DOM SETUP
// ==========================================
const header = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.className = "icon-btn";
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.title = t("possessive_pronouns", "back_to_menu");
backBtn.onclick = () => window.location.href = "index.html?page=Home";

const headerTitle = document.createElement("div");
headerTitle.style.fontWeight = "800";
headerTitle.style.fontSize = "1.2rem";
headerTitle.textContent = t("possessive_pronouns", "module_title");

header.appendChild(backBtn);
header.appendChild(headerTitle);
document.body.appendChild(header);

const main = document.createElement("main");
const title = document.createElement("h1");
title.textContent = t("possessive_pronouns", "module_title");
main.appendChild(title);

const rulesSection = document.createElement("div");
rulesSection.classList.add("rules-container");

const rulesCard = document.createElement("div");
rulesCard.classList.add("rule-card");
rulesCard.innerHTML = `
    <div class="rule-header">💡 ${t("possessive_pronouns", "rules_title")}</div>
    <div class="rule-desc">${t("possessive_pronouns", "rules_desc")}</div>

    <div class="rule-subtitle">${t("possessive_pronouns", "owner_title")}</div>
    <div class="rule-desc">${t("possessive_pronouns", "owner_desc")}</div>
    <table class="forms-table">
        <thead>
            <tr>
                <th>${t("possessive_pronouns", "table_person")}</th>
                <th>${t("possessive_pronouns", "table_owner_word")}</th>
                <th>${t("possessive_pronouns", "table_example")}</th>
            </tr>
        </thead>
        <tbody>${tableRows(OWNER_ROWS)}</tbody>
    </table>

    <div class="rule-subtitle">${t("possessive_pronouns", "endings_title")}</div>
    <div class="rule-desc">${t("possessive_pronouns", "endings_desc")}</div>
    <table class="forms-table">
        <thead>
            <tr>
                <th>${t("possessive_pronouns", "table_case")}</th>
                <th>${t("possessive_pronouns", "table_m")}</th>
                <th>${t("possessive_pronouns", "table_f")}</th>
                <th>${t("possessive_pronouns", "table_n")}</th>
                <th>${t("possessive_pronouns", "table_pl")}</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Nominativ</td><td>mein Vater</td><td>meine Mutter</td><td>mein Kind</td><td>meine Kinder</td></tr>
            <tr><td>Akkusativ</td><td>meinen Vater</td><td>meine Mutter</td><td>mein Kind</td><td>meine Kinder</td></tr>
            <tr><td>Dativ</td><td>meinem Vater</td><td>meiner Mutter</td><td>meinem Kind</td><td>meinen Kindern</td></tr>
        </tbody>
    </table>

    <div class="rule-subtitle">${t("possessive_pronouns", "personal_cases_title")}</div>
    <div class="rule-desc">${t("possessive_pronouns", "personal_cases_desc")}</div>
    <table class="forms-table">
        <thead>
            <tr>
                <th>${t("possessive_pronouns", "table_nominative")}</th>
                <th>${t("possessive_pronouns", "table_akkusative")}</th>
                <th>${t("possessive_pronouns", "table_dative")}</th>
            </tr>
        </thead>
        <tbody>${tableRows(PERSONAL_CASE_ROWS)}</tbody>
    </table>

    <div class="rule-subtitle">${t("possessive_pronouns", "rules_core_title")}</div>
    <ol class="rule-list">
        <li>${t("possessive_pronouns", "rule_1")}</li>
        <li>${t("possessive_pronouns", "rule_2")}</li>
        <li>${t("possessive_pronouns", "rule_3")}</li>
        <li>${t("possessive_pronouns", "rule_4")}</li>
        <li>${t("possessive_pronouns", "rule_5")}</li>
    </ol>
`;
rulesSection.appendChild(rulesCard);

function createSettingGroup(titleKey, options, activeVal, onSelect) {
    const groupTitle = document.createElement("div");
    groupTitle.classList.add("section-title");
    groupTitle.textContent = t("possessive_pronouns", titleKey);
    rulesSection.appendChild(groupTitle);

    const group = document.createElement("div");
    group.classList.add("pill-group");
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("pill-btn");
        if (option.val === activeVal) btn.classList.add("active");
        btn.textContent = option.labelKey ? t("possessive_pronouns", option.labelKey) : option.label;
        btn.onclick = () => {
            Array.from(group.children).forEach(child => child.classList.remove("active"));
            btn.classList.add("active");
            onSelect(option.val);
        };
        group.appendChild(btn);
    });
    rulesSection.appendChild(group);
}

let practiceCount = 5;
let practiceFormat = "BLOCKS";
let practiceTopic = "MIXED";
let practiceMode = "ASSISTED";
let currentIndex = 0;
let currentItem = null;
let currentQueue = [];
let selectedAnswer = "";
let attemptsLeft = 2;
let answerLocked = false;
let statsRunId = null;

createSettingGroup("settings_topic", [
    { val: "MIXED", labelKey: "topic_mixed" },
    { val: "POSSESSIVE", labelKey: "topic_possessive" },
    { val: "OWNER", labelKey: "topic_owner" },
    { val: "PERSONAL_CASE", labelKey: "topic_personal_case" }
], practiceTopic, value => practiceTopic = value);

createSettingGroup("settings_format", [
    { val: "BLOCKS", labelKey: "format_blocks" },
    { val: "TYPING", labelKey: "format_typing" }
], practiceFormat, value => practiceFormat = value);

createSettingGroup("settings_count", [
    { val: 5, label: "5" },
    { val: 10, label: "10" },
    { val: 15, label: "15" },
    { val: 20, label: "20" },
    { val: 50, label: "50" }
], practiceCount, value => practiceCount = value);

const actionGroup = document.createElement("div");
actionGroup.classList.add("action-group");

const startAssistedBtn = document.createElement("button");
startAssistedBtn.classList.add("btn-primary");
startAssistedBtn.textContent = t("possessive_pronouns", "start_assisted");
startAssistedBtn.onclick = () => startGame("ASSISTED");

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn-secondary");
startUnassistedBtn.textContent = t("possessive_pronouns", "start_unassisted");
startUnassistedBtn.onclick = () => startGame("UNASSISTED");

actionGroup.appendChild(startAssistedBtn);
actionGroup.appendChild(startUnassistedBtn);
rulesSection.appendChild(actionGroup);
main.appendChild(rulesSection);

const gameSection = document.createElement("div");
gameSection.classList.add("game-section");

const statusBar = document.createElement("div");
statusBar.classList.add("status-bar");
const statusLeft = document.createElement("div");
statusLeft.textContent = t("possessive_pronouns", "module_title");
const statusRight = document.createElement("div");
statusRight.classList.add("progress-counter");
statusBar.appendChild(statusLeft);
statusBar.appendChild(statusRight);

const taskCard = document.createElement("div");
taskCard.classList.add("task-card");
const taskLabel = document.createElement("div");
taskLabel.classList.add("task-label");
taskLabel.textContent = t("possessive_pronouns", "task_label");
const taskText = document.createElement("div");
taskText.classList.add("task-text");
const sentenceLabel = document.createElement("div");
sentenceLabel.classList.add("task-label");
sentenceLabel.textContent = t("possessive_pronouns", "sentence_label");
const sentenceText = document.createElement("div");
sentenceText.classList.add("sentence-text");
taskCard.appendChild(taskLabel);
taskCard.appendChild(taskText);
taskCard.appendChild(sentenceLabel);
taskCard.appendChild(sentenceText);

const hintBox = document.createElement("div");
hintBox.classList.add("hint-box");

const answerOptions = document.createElement("div");
answerOptions.classList.add("answer-options");

const typingArea = document.createElement("div");
typingArea.classList.add("typing-area");
const typingInput = document.createElement("input");
typingInput.classList.add("typing-input");
typingInput.type = "text";
typingInput.autocomplete = "off";
typingInput.placeholder = t("possessive_pronouns", "type_here");
typingArea.appendChild(typingInput);

const feedbackMsg = document.createElement("div");
feedbackMsg.classList.add("feedback-message");

const checkBtn = document.createElement("button");
checkBtn.classList.add("btn-primary");
checkBtn.style.width = "100%";
checkBtn.textContent = t("possessive_pronouns", "check_btn");
checkBtn.onclick = verifyAnswer;

gameSection.appendChild(statusBar);
gameSection.appendChild(taskCard);
gameSection.appendChild(hintBox);
gameSection.appendChild(answerOptions);
gameSection.appendChild(typingArea);
gameSection.appendChild(feedbackMsg);
gameSection.appendChild(checkBtn);
main.appendChild(gameSection);
document.body.appendChild(main);

// ==========================================
// 5. GAME LOGIC
// ==========================================
function startGame(mode) {
    practiceMode = mode;
    if (statsRunId && window.AppStats) {
        window.AppStats.cancelRun(statsRunId);
        statsRunId = null;
    }
    currentIndex = 0;
    currentQueue = buildPracticeQueue();
    if (mode === "UNASSISTED" && window.AppStats) {
        const topicLabels = {
            MIXED: t("possessive_pronouns", "topic_mixed"),
            POSSESSIVE: t("possessive_pronouns", "topic_possessive"),
            OWNER: t("possessive_pronouns", "topic_owner"),
            PERSONAL_CASE: t("possessive_pronouns", "topic_personal_case")
        };
        const formatLabels = {
            BLOCKS: t("possessive_pronouns", "format_blocks"),
            TYPING: t("possessive_pronouns", "format_typing")
        };
        statsRunId = window.AppStats.startRun({
            moduleId: "PossessivePronouns",
            moduleName: t("home", "module_1_topic_15"),
            mode,
            params: [
                { label: t("statistics", "questions_param"), value: currentQueue.length },
                { label: t("statistics", "topic_param"), value: topicLabels[practiceTopic] || practiceTopic },
                { label: t("statistics", "format_param"), value: formatLabels[practiceFormat] || practiceFormat }
            ]
        });
    }
    rulesSection.style.display = "none";
    gameSection.style.display = "flex";
    nextQuestion();
}

function nextQuestion() {
    if (currentIndex >= currentQueue.length) {
        showGameOver();
        return;
    }

    currentItem = currentQueue[currentIndex];
    selectedAnswer = "";
    attemptsLeft = 2;
    answerLocked = false;
    feedbackMsg.textContent = "";
    feedbackMsg.className = "feedback-message";
    typingInput.value = "";
    typingInput.className = "typing-input";
    checkBtn.textContent = t("possessive_pronouns", "check_btn");
    checkBtn.onclick = verifyAnswer;

    statusRight.textContent = `${currentIndex + 1} / ${practiceCount}`;
    taskText.textContent = getLocalized(currentItem.meaning);
    sentenceText.innerHTML = sentenceWithBlank(currentItem.sentence);

    if (practiceMode === "ASSISTED") {
        hintBox.style.display = "block";
        hintBox.innerHTML = `<strong>${t("possessive_pronouns", "hint_label")}:</strong> ${escapeHtml(getLocalized(currentItem.hint))}`;
    } else {
        hintBox.style.display = "none";
        hintBox.textContent = "";
    }

    if (practiceFormat === "BLOCKS") {
        typingArea.style.display = "none";
        answerOptions.style.display = "flex";
        renderAnswerOptions();
    } else {
        answerOptions.style.display = "none";
        typingArea.style.display = "block";
        typingInput.focus();
    }
}

function renderAnswerOptions() {
    answerOptions.innerHTML = "";
    shuffle(currentItem.options || [currentItem.answer]).forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("answer-block");
        btn.textContent = option;
        btn.onclick = () => {
            if (answerLocked) return;
            selectedAnswer = option;
            Array.from(answerOptions.children).forEach(child => child.classList.remove("selected"));
            btn.classList.add("selected");
        };
        answerOptions.appendChild(btn);
    });
}

function getCurrentAnswer() {
    return practiceFormat === "TYPING" ? typingInput.value : selectedAnswer;
}

function verifyAnswer() {
    if (answerLocked) {
        currentIndex++;
        nextQuestion();
        return;
    }

    const answer = getCurrentAnswer();
    if (!answer.trim()) {
        feedbackMsg.textContent = t("possessive_pronouns", "incorrect_msg");
        feedbackMsg.className = "feedback-message error";
        return;
    }

    if (isCorrectAnswer(answer, currentItem)) {
        markCorrect();
    } else {
        markWrong();
    }
}

function markCorrect() {
    answerLocked = true;
    feedbackMsg.textContent = t("possessive_pronouns", "correct_msg");
    feedbackMsg.className = "feedback-message correct";
    typingInput.classList.add("correct");
    Array.from(answerOptions.children).forEach(btn => {
        if (isCorrectAnswer(btn.textContent, currentItem)) btn.classList.add("correct");
    });
    checkBtn.textContent = t("possessive_pronouns", "next_btn");
}

function markWrong() {
    if (practiceMode === "UNASSISTED" && window.AppStats) window.AppStats.recordMistake(statsRunId);
    typingInput.classList.add("wrong");
    setTimeout(() => typingInput.classList.remove("wrong"), 400);
    Array.from(answerOptions.children).forEach(btn => {
        if (btn.classList.contains("selected")) btn.classList.add("wrong");
    });

    attemptsLeft--;
    if (practiceMode === "UNASSISTED" && attemptsLeft >= 0) {
        feedbackMsg.textContent = `${t("possessive_pronouns", "incorrect_msg")} (${t("possessive_pronouns", "tries_left").replace("{count}", attemptsLeft)})`;
        feedbackMsg.className = "feedback-message error";
        return;
    }

    answerLocked = true;
    feedbackMsg.textContent = `${t("possessive_pronouns", "incorrect_msg")}\n${t("possessive_pronouns", "correct_answer_was")} ${currentItem.answer}`;
    feedbackMsg.className = "feedback-message error";
    Array.from(answerOptions.children).forEach(btn => {
        if (isCorrectAnswer(btn.textContent, currentItem)) btn.classList.add("correct");
    });
    checkBtn.textContent = t("possessive_pronouns", "next_btn");
}

document.addEventListener("keydown", event => {
    if (gameSection.style.display === "flex" && practiceFormat === "TYPING" && event.key === "Enter") {
        verifyAnswer();
    }
});

function showGameOver() {
    if (statsRunId && window.AppStats) {
        window.AppStats.finishRun(statsRunId);
        statsRunId = null;
    }
    const finishScreen = document.createElement("div");
    finishScreen.classList.add("finish-screen");
    finishScreen.innerHTML = `
        <div class="finish-icon">🎉</div>
        <h1 style="margin-bottom: 0.5rem;">${t("possessive_pronouns", "game_over")}</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${t("possessive_pronouns", "finish_summary").replace("{count}", practiceCount)}</p>
        <button class="btn-primary" id="possessiveBackToRules">${t("possessive_pronouns", "back_to_rules")}</button>
    `;
    document.body.appendChild(finishScreen);
    document.getElementById("possessiveBackToRules").onclick = () => {
        finishScreen.remove();
        gameSection.style.display = "none";
        rulesSection.style.display = "flex";
    };
}
