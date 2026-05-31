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

    .question-table { width: 100%; min-width: 720px; border-collapse: collapse; font-size: 0.9rem; border-radius: 0.5rem; overflow: hidden; margin-top: 0.5rem; }
    .question-table th, .question-table td { padding: 0.72rem; border: 1px solid var(--border-color); text-align: left; vertical-align: top; }
    .question-table th { background: rgba(245, 175, 25, 0.08); color: var(--accent-gold); font-weight: 800; }
    .question-table td:first-child { color: var(--accent-green); font-weight: 800; white-space: nowrap; }

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
    .task-text { color: var(--text-primary); font-size: 1.15rem; font-weight: 700; line-height: 1.45; margin-bottom: 1rem; }
    .sentence-text { font-size: 1.7rem; font-weight: 800; line-height: 1.35; color: var(--text-primary); }
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
        transition: all 0.2s ease; min-width: 120px; text-align: center;
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
        h1 { font-size: 1.8rem; }
        .sentence-text { font-size: 1.35rem; }
        .rule-card, .task-card { padding: 1rem; }
        .btn-primary, .btn-secondary { min-width: 100%; }
    }
`;
document.head.appendChild(styleElement);

// ==========================================
// 2. DATA
// ==========================================
const QUESTION_WORDS = [
    {
        block: "Wer",
        meaning: { en: "who?", uk: "хто?" },
        use: { en: "person as subject", uk: "людина як підмет" },
        example: "Wer kommt heute?",
        task: { en: "who is coming today", uk: "хто сьогодні приходить" },
        exercise: "___ kommt heute?",
        hint: { en: "Subject question. Do not add another subject after the verb.", uk: "Питання до підмета. Не додавай ще один підмет після дієслова." }
    },
    {
        block: "Wen",
        meaning: { en: "whom?", uk: "кого?" },
        use: { en: "person in Akkusativ", uk: "людина в Akkusativ" },
        example: "Wen besuchst du?",
        task: { en: "whom you are visiting", uk: "кого ти відвідуєш" },
        exercise: "___ besuchst du?",
        hint: { en: "Akkusativ person: besuchen + Akk.", uk: "Людина в Akkusativ: besuchen + Akk." }
    },
    {
        block: "Wem",
        meaning: { en: "to whom?", uk: "кому?" },
        use: { en: "person in Dativ", uk: "людина в Dativ" },
        example: "Wem hilfst du?",
        task: { en: "whom you are helping", uk: "кому ти допомагаєш" },
        exercise: "___ hilfst du?",
        hint: { en: "Dativ person: helfen + Dat.", uk: "Людина в Dativ: helfen + Dat." }
    },
    {
        block: "Wessen",
        meaning: { en: "whose?", uk: "чий? / чия?" },
        use: { en: "owner or possession", uk: "власник / належність" },
        example: "Wessen Tasche ist das?",
        task: { en: "whose bag this is", uk: "чия це сумка" },
        exercise: "___ Tasche ist das?",
        hint: { en: "Possession: whose?", uk: "Належність: чий/чия?" }
    },
    {
        block: "Was",
        meaning: { en: "what?", uk: "що?" },
        use: { en: "thing or action", uk: "річ або дія" },
        example: "Was kaufst du?",
        task: { en: "what you are buying", uk: "що ти купуєш" },
        exercise: "___ kaufst du?",
        hint: { en: "Thing/object question.", uk: "Питання про річ/додаток." }
    },
    {
        block: "Was für ein Auto",
        meaning: { en: "what kind of car?", uk: "що за авто? / який тип авто?" },
        use: { en: "kind or type", uk: "тип або вид" },
        example: "Was für ein Auto fährt Anna?",
        task: { en: "what kind of car Anna drives", uk: "яке авто / що за авто водить Анна" },
        exercise: "___ fährt Anna?",
        hint: { en: "Was für ein asks about type, not one item from a known list.", uk: "Was für ein питає про тип, а не про вибір із відомого списку." }
    },
    {
        block: "Was für eine Musik",
        meaning: { en: "what kind of music?", uk: "яка музика? / що за музика?" },
        use: { en: "kind or type", uk: "тип або вид" },
        example: "Was für eine Musik hörst du?",
        task: { en: "what kind of music you listen to", uk: "яку музику / що за музику ти слухаєш" },
        exercise: "___ hörst du?",
        hint: { en: "Was für eine because Musik is feminine.", uk: "Was für eine, бо Musik жіночого роду." }
    },
    {
        block: "Was für einen Film",
        meaning: { en: "what kind of film?", uk: "який фільм? / що за фільм?" },
        use: { en: "kind or type in Akkusativ", uk: "тип у Akkusativ" },
        example: "Was für einen Film siehst du?",
        task: { en: "what kind of film you are watching", uk: "який фільм / що за фільм ти дивишся" },
        exercise: "___ siehst du?",
        hint: { en: "Film is masculine; after sehen it is Akkusativ: einen.", uk: "Film чоловічого роду; після sehen це Akkusativ: einen." }
    },
    {
        block: "Welche Sprache",
        meaning: { en: "which language?", uk: "яка мова?" },
        use: { en: "choice from a known set", uk: "вибір із відомого набору" },
        example: "Welche Sprache sprichst du?",
        task: { en: "which language you speak", uk: "якою мовою ти говориш" },
        exercise: "___ sprichst du?",
        hint: { en: "Welche asks which one from a group.", uk: "Welche питає 'який/яка з групи'." }
    },
    {
        block: "Welcher Bus",
        meaning: { en: "which bus?", uk: "який автобус?" },
        use: { en: "masculine Nominativ choice", uk: "вибір, чоловічий рід Nominativ" },
        example: "Welcher Bus fährt nach Berlin?",
        task: { en: "which bus goes to Berlin", uk: "який автобус їде до Берліна" },
        exercise: "___ fährt nach Berlin?",
        hint: { en: "Bus is masculine and the subject: welcher.", uk: "Bus чоловічого роду і є підметом: welcher." }
    },
    {
        block: "Welches Buch",
        meaning: { en: "which book?", uk: "яка книга?" },
        use: { en: "neuter choice", uk: "вибір, середній рід" },
        example: "Welches Buch liest du?",
        task: { en: "which book you are reading", uk: "яку книгу ти читаєш" },
        exercise: "___ liest du?",
        hint: { en: "Buch is neuter: welches.", uk: "Buch середнього роду: welches." }
    },
    {
        block: "Welchen Apfel",
        meaning: { en: "which apple?", uk: "яке яблуко?" },
        use: { en: "masculine Akkusativ choice", uk: "вибір, чоловічий рід Akkusativ" },
        example: "Welchen Apfel nimmst du?",
        task: { en: "which apple you are taking", uk: "яке яблуко ти береш" },
        exercise: "___ nimmst du?",
        hint: { en: "Apfel is masculine; after nehmen it is Akkusativ: welchen.", uk: "Apfel чоловічого роду; після nehmen це Akkusativ: welchen." }
    },
    {
        block: "Welchem Kind",
        meaning: { en: "which child? / to which child?", uk: "якій дитині?" },
        use: { en: "neuter Dativ choice", uk: "вибір, середній рід Dativ" },
        example: "Welchem Kind hilfst du?",
        task: { en: "which child you are helping", uk: "якій дитині ти допомагаєш" },
        exercise: "___ hilfst du?",
        hint: { en: "helfen needs Dativ: welchem Kind.", uk: "helfen вимагає Dativ: welchem Kind." }
    },
    {
        block: "Wo",
        meaning: { en: "where?", uk: "де?" },
        use: { en: "location", uk: "місце" },
        example: "Wo wohnst du?",
        task: { en: "where you live", uk: "де ти живеш" },
        exercise: "___ wohnst du?",
        hint: { en: "Static location: where?", uk: "Статичне місце: де?" }
    },
    {
        block: "Wohin",
        meaning: { en: "where to?", uk: "куди?" },
        use: { en: "direction to a place", uk: "напрямок кудись" },
        example: "Wohin gehst du?",
        task: { en: "where you are going", uk: "куди ти йдеш" },
        exercise: "___ gehst du?",
        hint: { en: "Movement toward a place: where to?", uk: "Рух у напрямку місця: куди?" }
    },
    {
        block: "Woher",
        meaning: { en: "where from?", uk: "звідки?" },
        use: { en: "origin or direction from", uk: "походження або напрямок звідки" },
        example: "Woher kommst du?",
        task: { en: "where you come from", uk: "звідки ти походиш" },
        exercise: "___ kommst du?",
        hint: { en: "Origin/source: from where?", uk: "Походження/джерело: звідки?" }
    },
    {
        block: "Wann",
        meaning: { en: "when?", uk: "коли?" },
        use: { en: "general time", uk: "загальний час" },
        example: "Wann kommst du?",
        task: { en: "when you are coming", uk: "коли ти прийдеш" },
        exercise: "___ kommst du?",
        hint: { en: "General time question.", uk: "Загальне питання про час." }
    },
    {
        block: "Um wie viel Uhr",
        meaning: { en: "at what time?", uk: "о котрій годині?" },
        use: { en: "exact clock time", uk: "точний час на годиннику" },
        example: "Um wie viel Uhr kommst du?",
        task: { en: "at what time you are coming", uk: "о котрій годині ти прийдеш" },
        exercise: "___ kommst du?",
        hint: { en: "Exact clock time. The whole block is position 1.", uk: "Точний час. Увесь блок займає позицію 1." },
        accept: ["Um wieviel Uhr"]
    },
    {
        block: "Wie spät",
        meaning: { en: "how late? / what time?", uk: "котра година?" },
        use: { en: "asking the time", uk: "питання про час на годиннику" },
        example: "Wie spät ist es?",
        task: { en: "what time it is", uk: "котра година" },
        exercise: "___ ist es?",
        hint: { en: "Fixed time question: Wie spät ist es?", uk: "Сталий вираз: Wie spät ist es?" }
    },
    {
        block: "Seit wann",
        meaning: { en: "since when?", uk: "відколи?" },
        use: { en: "start point continuing until now", uk: "початок, який триває до зараз" },
        example: "Seit wann lernst du Deutsch?",
        task: { en: "since when you have been learning German", uk: "відколи ти вчиш німецьку" },
        exercise: "___ lernst du Deutsch?",
        hint: { en: "Start point: since when?", uk: "Точка початку: відколи?" }
    },
    {
        block: "Bis wann",
        meaning: { en: "until when?", uk: "до коли?" },
        use: { en: "end point", uk: "кінцева точка" },
        example: "Bis wann arbeitest du?",
        task: { en: "until when you work", uk: "до коли ти працюєш" },
        exercise: "___ arbeitest du?",
        hint: { en: "End point: until when?", uk: "Кінцева точка: до коли?" }
    },
    {
        block: "Wie lange",
        meaning: { en: "how long?", uk: "як довго?" },
        use: { en: "duration", uk: "тривалість" },
        example: "Wie lange bleibst du?",
        task: { en: "how long you are staying", uk: "як довго ти залишаєшся" },
        exercise: "___ bleibst du?",
        hint: { en: "Duration: how long?", uk: "Тривалість: як довго?" }
    },
    {
        block: "Wie oft",
        meaning: { en: "how often?", uk: "як часто?" },
        use: { en: "frequency", uk: "частота" },
        example: "Wie oft spielst du Fußball?",
        task: { en: "how often you play football", uk: "як часто ти граєш у футбол" },
        exercise: "___ spielst du Fußball?",
        hint: { en: "Frequency: every day, once a week, often.", uk: "Частота: щодня, раз на тиждень, часто." }
    },
    {
        block: "Wie",
        meaning: { en: "how?", uk: "як?" },
        use: { en: "manner, name, state", uk: "спосіб, ім'я, стан" },
        example: "Wie heißt du?",
        task: { en: "what your name is", uk: "як тебе звати" },
        exercise: "___ heißt du?",
        hint: { en: "Use Wie for names and manner: how?", uk: "Wie для імені або способу: як?" }
    },
    {
        block: "Wie viel",
        meaning: { en: "how much?", uk: "скільки? (нераховане)" },
        use: { en: "amount or price", uk: "кількість або ціна" },
        example: "Wie viel kostet das?",
        task: { en: "how much it costs", uk: "скільки це коштує" },
        exercise: "___ kostet das?",
        hint: { en: "Amount/price: how much?", uk: "Кількість/ціна: скільки?" },
        accept: ["Wieviel"]
    },
    {
        block: "Wie viel Geld",
        meaning: { en: "how much money?", uk: "скільки грошей?" },
        use: { en: "uncountable amount", uk: "нерахована кількість" },
        example: "Wie viel Geld brauchst du?",
        task: { en: "how much money you need", uk: "скільки грошей тобі потрібно" },
        exercise: "___ brauchst du?",
        hint: { en: "Geld is used with wie viel, not wie viele.", uk: "Geld вживається з wie viel, не wie viele." },
        accept: ["Wieviel Geld"]
    },
    {
        block: "Wie viele Bücher",
        meaning: { en: "how many books?", uk: "скільки книг?" },
        use: { en: "countable plural", uk: "рахована множина" },
        example: "Wie viele Bücher kaufst du?",
        task: { en: "how many books you are buying", uk: "скільки книг ти купуєш" },
        exercise: "___ kaufst du?",
        hint: { en: "Countable plural: wie viele + plural noun.", uk: "Рахована множина: wie viele + іменник у множині." }
    },
    {
        block: "Wie alt",
        meaning: { en: "how old?", uk: "скільки років?" },
        use: { en: "age", uk: "вік" },
        example: "Wie alt bist du?",
        task: { en: "how old you are", uk: "скільки тобі років" },
        exercise: "___ bist du?",
        hint: { en: "Age: how old?", uk: "Вік: скільки років?" }
    },
    {
        block: "Wie groß",
        meaning: { en: "how tall/big?", uk: "який зріст / наскільки великий?" },
        use: { en: "size or height", uk: "розмір або зріст" },
        example: "Wie groß ist dein Zimmer?",
        task: { en: "how big your room is", uk: "наскільки велика твоя кімната" },
        exercise: "___ ist dein Zimmer?",
        hint: { en: "Size/height: how big/tall?", uk: "Розмір/зріст: який великий?" },
        accept: ["Wie gross"]
    },
    {
        block: "Wie weit",
        meaning: { en: "how far?", uk: "як далеко?" },
        use: { en: "distance", uk: "відстань" },
        example: "Wie weit ist der Bahnhof?",
        task: { en: "how far the train station is", uk: "як далеко вокзал" },
        exercise: "___ ist der Bahnhof?",
        hint: { en: "Distance: how far?", uk: "Відстань: як далеко?" }
    },
    {
        block: "Wie teuer",
        meaning: { en: "how expensive?", uk: "наскільки дорого?" },
        use: { en: "price as quality", uk: "ціна як характеристика" },
        example: "Wie teuer ist die Wohnung?",
        task: { en: "how expensive the apartment is", uk: "наскільки дорога квартира" },
        exercise: "___ ist die Wohnung?",
        hint: { en: "Price/quality: expensive or cheap.", uk: "Ціна/якість: дорого чи дешево." }
    },
    {
        block: "Wie schnell",
        meaning: { en: "how fast?", uk: "як швидко?" },
        use: { en: "speed", uk: "швидкість" },
        example: "Wie schnell fährt der Zug?",
        task: { en: "how fast the train goes", uk: "як швидко їде поїзд" },
        exercise: "___ fährt der Zug?",
        hint: { en: "Speed: how fast?", uk: "Швидкість: як швидко?" }
    },
    {
        block: "Warum",
        meaning: { en: "why?", uk: "чому?" },
        use: { en: "reason", uk: "причина" },
        example: "Warum lernst du Deutsch?",
        task: { en: "why you are learning German", uk: "чому ти вчиш німецьку" },
        exercise: "___ lernst du Deutsch?",
        hint: { en: "Reason: why?", uk: "Причина: чому?" }
    },
    {
        block: "Wieso",
        meaning: { en: "why? / how come?", uk: "чому? / як так?" },
        use: { en: "reason, often conversational", uk: "причина, часто розмовно" },
        example: "Wieso bist du müde?",
        task: { en: "why you are tired", uk: "чому ти втомлений" },
        exercise: "___ bist du müde?",
        hint: { en: "Conversational why/how come.", uk: "Розмовне 'чому / як так'." }
    },
    {
        block: "Weshalb",
        meaning: { en: "why? / for what reason?", uk: "чому? / з якої причини?" },
        use: { en: "reason, more formal", uk: "причина, трохи формальніше" },
        example: "Weshalb kommst du später?",
        task: { en: "for what reason you are coming later", uk: "з якої причини ти прийдеш пізніше" },
        exercise: "___ kommst du später?",
        hint: { en: "More formal reason word.", uk: "Трохи формальніше слово для причини." }
    },
    {
        block: "Wozu",
        meaning: { en: "what for? / for what purpose?", uk: "для чого? / з якою метою?" },
        use: { en: "purpose", uk: "мета" },
        example: "Wozu brauchst du das?",
        task: { en: "what you need it for", uk: "для чого тобі це потрібно" },
        exercise: "___ brauchst du das?",
        hint: { en: "Purpose: what for?", uk: "Мета: для чого?" }
    },
    {
        block: "Wofür",
        meaning: { en: "for what?", uk: "за що? / для чого?" },
        use: { en: "für + thing/event", uk: "für + річ/подія" },
        example: "Wofür bezahlst du?",
        task: { en: "what you are paying for", uk: "за що ти платиш" },
        exercise: "___ bezahlst du?",
        hint: { en: "For things/events use wo- + preposition: wofür.", uk: "Для речей/подій: wo- + прийменник: wofür." }
    },
    {
        block: "Womit",
        meaning: { en: "with what?", uk: "чим? / з чим?" },
        use: { en: "mit + thing/tool", uk: "mit + річ/інструмент" },
        example: "Womit schreibst du?",
        task: { en: "what you write with", uk: "чим ти пишеш" },
        exercise: "___ schreibst du?",
        hint: { en: "For a tool: wo + mit -> womit.", uk: "Для інструмента: wo + mit -> womit." }
    },
    {
        block: "Worauf",
        meaning: { en: "on what? / what for?", uk: "на що? / чого?" },
        use: { en: "auf + thing/event", uk: "auf + річ/подія" },
        example: "Worauf wartest du?",
        task: { en: "what you are waiting for", uk: "чого ти чекаєш" },
        exercise: "___ wartest du?",
        hint: { en: "warten auf + Akk.; for a thing/event use worauf.", uk: "warten auf + Akk.; для речі/події використовуй worauf." }
    },
    {
        block: "Auf wen",
        meaning: { en: "for whom? / on whom?", uk: "на кого? / кого?" },
        use: { en: "auf + person", uk: "auf + людина" },
        example: "Auf wen wartest du?",
        task: { en: "which person you are waiting for", uk: "на кого ти чекаєш" },
        exercise: "___ wartest du?",
        hint: { en: "For a person keep the preposition separate: auf wen.", uk: "Для людини прийменник стоїть окремо: auf wen." }
    },
    {
        block: "Mit wem",
        meaning: { en: "with whom?", uk: "з ким?" },
        use: { en: "mit + person in Dativ", uk: "mit + людина в Dativ" },
        example: "Mit wem sprichst du?",
        task: { en: "whom you are speaking with", uk: "з ким ти говориш" },
        exercise: "___ sprichst du?",
        hint: { en: "mit requires Dativ: mit wem.", uk: "mit вимагає Dativ: mit wem." }
    },
    {
        block: "Über wen",
        meaning: { en: "about whom?", uk: "про кого?" },
        use: { en: "über + person", uk: "über + людина" },
        example: "Über wen sprichst du?",
        task: { en: "which person you are talking about", uk: "про кого ти говориш" },
        exercise: "___ sprichst du?",
        hint: { en: "For a person: über wen.", uk: "Для людини: über wen." }
    },
    {
        block: "Worüber",
        meaning: { en: "about what?", uk: "про що?" },
        use: { en: "über + thing/topic", uk: "über + річ/тема" },
        example: "Worüber sprichst du?",
        task: { en: "what topic you are talking about", uk: "про що ти говориш" },
        exercise: "___ sprichst du?",
        hint: { en: "For a topic/thing: worüber.", uk: "Для теми/речі: worüber." }
    },
    {
        block: "Woran",
        meaning: { en: "on what? / of what?", uk: "про що? / над чим?" },
        use: { en: "an + thing/event", uk: "an + річ/подія" },
        example: "Woran denkst du?",
        task: { en: "what you are thinking of", uk: "про що ти думаєш" },
        exercise: "___ denkst du?",
        hint: { en: "denken an + Akk.; for a thing/event use woran.", uk: "denken an + Akk.; для речі/події використовуй woran." }
    },
    {
        block: "An wen",
        meaning: { en: "to whom? / of whom?", uk: "кому? / про кого?" },
        use: { en: "an + person", uk: "an + людина" },
        example: "An wen denkst du?",
        task: { en: "which person you are thinking of", uk: "про кого ти думаєш" },
        exercise: "___ denkst du?",
        hint: { en: "For a person: an wen.", uk: "Для людини: an wen." }
    },
    {
        block: "Von wem",
        meaning: { en: "from whom?", uk: "від кого?" },
        use: { en: "von + person in Dativ", uk: "von + людина в Dativ" },
        example: "Von wem ist der Brief?",
        task: { en: "whom the letter is from", uk: "від кого лист" },
        exercise: "___ ist der Brief?",
        hint: { en: "von requires Dativ: von wem.", uk: "von вимагає Dativ: von wem." }
    },
    {
        block: "Wovon",
        meaning: { en: "from/about what?", uk: "від чого? / про що?" },
        use: { en: "von + thing/topic", uk: "von + річ/тема" },
        example: "Wovon träumst du?",
        task: { en: "what you dream about", uk: "про що ти мрієш" },
        exercise: "___ träumst du?",
        hint: { en: "For a thing/topic with von: wovon.", uk: "Для речі/теми з von: wovon." }
    },
    {
        block: "Bei wem",
        meaning: { en: "at whose place? / with whom?", uk: "у кого? / при кому?" },
        use: { en: "bei + person in Dativ", uk: "bei + людина в Dativ" },
        example: "Bei wem wohnst du?",
        task: { en: "whose place you live at", uk: "у кого ти живеш" },
        exercise: "___ wohnst du?",
        hint: { en: "bei requires Dativ: bei wem.", uk: "bei вимагає Dativ: bei wem." }
    },
    {
        block: "Wobei",
        meaning: { en: "with what? / during what?", uk: "при чому? / під час чого?" },
        use: { en: "bei + thing/activity", uk: "bei + річ/діяльність" },
        example: "Wobei brauchst du Hilfe?",
        task: { en: "what you need help with", uk: "з чим тобі потрібна допомога" },
        exercise: "___ brauchst du Hilfe?",
        hint: { en: "For an activity/thing with bei: wobei.", uk: "Для дії/речі з bei: wobei." }
    },
    {
        block: "Gegen wen",
        meaning: { en: "against whom?", uk: "проти кого?" },
        use: { en: "gegen + person", uk: "gegen + людина" },
        example: "Gegen wen spielst du?",
        task: { en: "which person you are playing against", uk: "проти кого ти граєш" },
        exercise: "___ spielst du?",
        hint: { en: "For a person: gegen wen.", uk: "Для людини: gegen wen." }
    },
    {
        block: "Wogegen",
        meaning: { en: "against what?", uk: "проти чого?" },
        use: { en: "gegen + thing", uk: "gegen + річ" },
        example: "Wogegen bist du allergisch?",
        task: { en: "what you are allergic to", uk: "на що в тебе алергія" },
        exercise: "___ bist du allergisch?",
        hint: { en: "For a thing with gegen: wogegen.", uk: "Для речі з gegen: wogegen." }
    },
    {
        block: "Woraus",
        meaning: { en: "out of what?", uk: "з чого?" },
        use: { en: "aus + material/thing", uk: "aus + матеріал/річ" },
        example: "Woraus ist der Tisch?",
        task: { en: "what the table is made of", uk: "з чого зроблений стіл" },
        exercise: "___ ist der Tisch?",
        hint: { en: "Material/source with aus: woraus.", uk: "Матеріал/джерело з aus: woraus." }
    },
    {
        block: "Worin",
        meaning: { en: "in what?", uk: "у чому?" },
        use: { en: "in + thing/container", uk: "in + річ/контейнер" },
        example: "Worin liegt der Schlüssel?",
        task: { en: "what the key is in", uk: "у чому лежить ключ" },
        exercise: "___ liegt der Schlüssel?",
        hint: { en: "Inside a thing/container: worin.", uk: "Всередині речі/контейнера: worin." }
    },
    {
        block: "Wonach",
        meaning: { en: "after what? / what for?", uk: "за чим? / після чого?" },
        use: { en: "nach + thing", uk: "nach + річ" },
        example: "Wonach suchst du?",
        task: { en: "what you are looking for", uk: "що ти шукаєш" },
        exercise: "___ suchst du?",
        hint: { en: "suchen nach + Dat.; for a thing use wonach.", uk: "suchen nach + Dat.; для речі використовуй wonach." }
    },
    {
        block: "Nach wem",
        meaning: { en: "after whom? / for whom?", uk: "за ким? / кого?" },
        use: { en: "nach + person", uk: "nach + людина" },
        example: "Nach wem suchst du?",
        task: { en: "which person you are looking for", uk: "кого ти шукаєш" },
        exercise: "___ suchst du?",
        hint: { en: "For a person with nach: nach wem.", uk: "Для людини з nach: nach wem." }
    },
    {
        block: "Worum",
        meaning: { en: "about what?", uk: "про що?" },
        use: { en: "um + topic", uk: "um + тема" },
        example: "Worum geht es?",
        task: { en: "what it is about", uk: "про що йдеться" },
        exercise: "___ geht es?",
        hint: { en: "es geht um ... -> Worum geht es?", uk: "es geht um ... -> Worum geht es?" }
    },
    {
        block: "Um wen",
        meaning: { en: "about whom?", uk: "про кого?" },
        use: { en: "um + person", uk: "um + людина" },
        example: "Um wen geht es?",
        task: { en: "which person it is about", uk: "про кого йдеться" },
        exercise: "___ geht es?",
        hint: { en: "For a person with um: um wen.", uk: "Для людини з um: um wen." }
    },
    {
        block: "Wovor",
        meaning: { en: "before what? / afraid of what?", uk: "перед чим? / чого боїшся?" },
        use: { en: "vor + thing/event", uk: "vor + річ/подія" },
        example: "Wovor hast du Angst?",
        task: { en: "what you are afraid of", uk: "чого ти боїшся" },
        exercise: "___ hast du Angst?",
        hint: { en: "For a thing/event with vor: wovor.", uk: "Для речі/події з vor: wovor." }
    },
    {
        block: "Vor wem",
        meaning: { en: "before whom? / afraid of whom?", uk: "перед ким? / кого боїшся?" },
        use: { en: "vor + person in Dativ", uk: "vor + людина в Dativ" },
        example: "Vor wem hast du Angst?",
        task: { en: "which person you are afraid of", uk: "кого ти боїшся" },
        exercise: "___ hast du Angst?",
        hint: { en: "For a person with vor: vor wem.", uk: "Для людини з vor: vor wem." }
    },
    {
        block: "Zu wem",
        meaning: { en: "to whom?", uk: "до кого?" },
        use: { en: "zu + person/place as person", uk: "zu + людина" },
        example: "Zu wem gehst du?",
        task: { en: "which person you are going to", uk: "до кого ти йдеш" },
        exercise: "___ gehst du?",
        hint: { en: "zu requires Dativ: zu wem.", uk: "zu вимагає Dativ: zu wem." }
    }
];

const ANSWER_POOL = [...new Set(QUESTION_WORDS.map(item => item.block))];

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
    return String(value)
        .trim()
        .toLowerCase()
        .replace(/[?!.,]/g, "")
        .replace(/\s+/g, " ")
        .replace(/fuer/g, "für")
        .replace(/ae/g, "ä")
        .replace(/oe/g, "ö")
        .replace(/ue/g, "ü");
}

function isCorrectAnswer(value, item) {
    const accepted = [item.block, ...(item.accept || [])].map(normalizeAnswer);
    return accepted.includes(normalizeAnswer(value));
}

function getOptionsFor(item) {
    const sameFamily = ANSWER_POOL.filter(answer => {
        if (answer === item.block) return false;
        const first = answer.split(" ")[0];
        const itemFirst = item.block.split(" ")[0];
        return first === itemFirst || answer.includes("wen") || answer.includes("wem") || answer.startsWith("Wo") || answer.startsWith("Wie");
    });
    const candidates = shuffle([...new Set([...sameFamily, ...ANSWER_POOL.filter(answer => answer !== item.block)])]);
    return shuffle([item.block, ...candidates.slice(0, 5)]).slice(0, 6);
}

function buildPracticeQueue() {
    return shuffle(QUESTION_WORDS).slice(0, practiceCount);
}

// ==========================================
// 4. DOM SETUP
// ==========================================
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

const header = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.className = "icon-btn";
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.title = t("question_words", "back_to_menu");
backBtn.onclick = () => window.location.href = "index.html?page=Home";

const headerTitle = document.createElement("div");
headerTitle.style.fontWeight = "800";
headerTitle.style.fontSize = "1.2rem";
headerTitle.textContent = t("question_words", "module_title");

header.appendChild(backBtn);
header.appendChild(headerTitle);
document.body.appendChild(header);

const main = document.createElement("main");
const title = document.createElement("h1");
title.textContent = t("question_words", "module_title");
main.appendChild(title);

const rulesSection = document.createElement("div");
rulesSection.classList.add("rules-container");

const rulesCard = document.createElement("div");
rulesCard.classList.add("rule-card");
rulesCard.innerHTML = `
    <div class="rule-header">💡 ${t("question_words", "rules_title")}</div>
    <div class="rule-desc">${t("question_words", "rules_desc")}</div>

    <div class="rule-subtitle">${t("question_words", "full_list_title")}</div>
    <div class="rule-desc">${t("question_words", "full_list_desc")}</div>
    <table class="question-table">
        <thead>
            <tr>
                <th>${t("question_words", "table_question_block")}</th>
                <th>${t("question_words", "table_meaning")}</th>
                <th>${t("question_words", "table_used_for")}</th>
                <th>${t("question_words", "table_example")}</th>
            </tr>
        </thead>
        <tbody>
            ${QUESTION_WORDS.map(item => `
                <tr>
                    <td>${escapeHtml(item.block)}</td>
                    <td>${escapeHtml(getLocalized(item.meaning))}</td>
                    <td>${escapeHtml(getLocalized(item.use))}</td>
                    <td>${escapeHtml(item.example)}</td>
                </tr>
            `).join("")}
        </tbody>
    </table>

    <div class="rule-subtitle">${t("question_words", "rules_core_title")}</div>
    <ol class="rule-list">
        <li>${t("question_words", "rule_1")}</li>
        <li>${t("question_words", "rule_2")}</li>
        <li>${t("question_words", "rule_3")}</li>
        <li>${t("question_words", "rule_4")}</li>
        <li>${t("question_words", "rule_5")}</li>
        <li>${t("question_words", "rule_6")}</li>
        <li>${t("question_words", "rule_7")}</li>
    </ol>
`;
rulesSection.appendChild(rulesCard);

function createSettingGroup(titleKey, options, activeVal, onSelect) {
    const groupTitle = document.createElement("div");
    groupTitle.classList.add("section-title");
    groupTitle.textContent = t("question_words", titleKey);
    rulesSection.appendChild(groupTitle);

    const group = document.createElement("div");
    group.classList.add("pill-group");
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("pill-btn");
        if (option.val === activeVal) btn.classList.add("active");
        btn.textContent = option.labelKey ? t("question_words", option.labelKey) : option.label;
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
let practiceMode = "ASSISTED";
let currentIndex = 0;
let currentItem = null;
let currentQueue = [];
let selectedAnswer = "";
let attemptsLeft = 2;
let answerLocked = false;
let statsRunId = null;

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
startAssistedBtn.textContent = t("question_words", "start_assisted");
startAssistedBtn.onclick = () => startGame("ASSISTED");

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn-secondary");
startUnassistedBtn.textContent = t("question_words", "start_unassisted");
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
statusLeft.textContent = t("question_words", "module_title");
const statusRight = document.createElement("div");
statusRight.classList.add("progress-counter");
statusBar.appendChild(statusLeft);
statusBar.appendChild(statusRight);

const taskCard = document.createElement("div");
taskCard.classList.add("task-card");
const taskLabel = document.createElement("div");
taskLabel.classList.add("task-label");
taskLabel.textContent = t("question_words", "task_label");
const taskText = document.createElement("div");
taskText.classList.add("task-text");
const sentenceLabel = document.createElement("div");
sentenceLabel.classList.add("task-label");
sentenceLabel.textContent = t("question_words", "sentence_label");
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
typingInput.placeholder = t("question_words", "type_here");
typingArea.appendChild(typingInput);

const feedbackMsg = document.createElement("div");
feedbackMsg.classList.add("feedback-message");

const checkBtn = document.createElement("button");
checkBtn.classList.add("btn-primary");
checkBtn.style.width = "100%";
checkBtn.textContent = t("question_words", "check_btn");
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
        const formatLabels = {
            BLOCKS: t("question_words", "format_blocks"),
            TYPING: t("question_words", "format_typing")
        };
        statsRunId = window.AppStats.startRun({
            moduleId: "QuestionWords",
            moduleName: t("home", "module_1_topic_7"),
            mode,
            params: [
                { label: t("statistics", "questions_param"), value: currentQueue.length },
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
    checkBtn.textContent = t("question_words", "check_btn");
    checkBtn.onclick = verifyAnswer;

    statusRight.textContent = `${currentIndex + 1} / ${practiceCount}`;
    taskText.textContent = `${getLocalized(currentItem.task)}?`;
    sentenceText.innerHTML = sentenceWithBlank(currentItem.exercise);

    if (practiceMode === "ASSISTED") {
        hintBox.style.display = "block";
        hintBox.innerHTML = `<strong>${t("question_words", "hint_label")}:</strong> ${escapeHtml(getLocalized(currentItem.hint))}`;
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
    getOptionsFor(currentItem).forEach(option => {
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
        feedbackMsg.textContent = t("question_words", "incorrect_msg");
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
    feedbackMsg.textContent = t("question_words", "correct_msg");
    feedbackMsg.className = "feedback-message correct";
    typingInput.classList.add("correct");
    Array.from(answerOptions.children).forEach(btn => {
        if (btn.textContent === currentItem.block) btn.classList.add("correct");
    });
    checkBtn.textContent = t("question_words", "next_btn");
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
        feedbackMsg.textContent = `${t("question_words", "incorrect_msg")} (${t("question_words", "tries_left").replace("{count}", attemptsLeft)})`;
        feedbackMsg.className = "feedback-message error";
        return;
    }

    answerLocked = true;
    feedbackMsg.textContent = `${t("question_words", "incorrect_msg")}\n${t("question_words", "correct_answer_was")} ${currentItem.block}`;
    feedbackMsg.className = "feedback-message error";
    Array.from(answerOptions.children).forEach(btn => {
        if (btn.textContent === currentItem.block) btn.classList.add("correct");
    });
    checkBtn.textContent = t("question_words", "next_btn");
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
        <h1 style="margin-bottom: 0.5rem;">${t("question_words", "game_over")}</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${t("question_words", "finish_summary").replace("{count}", practiceCount)}</p>
        <button class="btn-primary" id="questionWordsBackToRules">${t("question_words", "back_to_rules")}</button>
    `;
    document.body.appendChild(finishScreen);
    document.getElementById("questionWordsBackToRules").onclick = () => {
        finishScreen.remove();
        gameSection.style.display = "none";
        rulesSection.style.display = "flex";
    };
}
