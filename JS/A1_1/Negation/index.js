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
        max-width: 900px; width: 100%;
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
    .rule-note {
        background: var(--content-bg); border-left: 3px solid var(--accent-gold);
        padding: 0.85rem 1rem; border-radius: 0.5rem; color: var(--text-primary);
        line-height: 1.5; font-size: 0.95rem; margin-top: 0.5rem;
    }
    .forms-table { width: 100%; min-width: 620px; border-collapse: collapse; font-size: 0.92rem; border-radius: 0.5rem; overflow: hidden; margin-top: 0.5rem; }
    .forms-table th, .forms-table td { padding: 0.75rem; border: 1px solid var(--border-color); text-align: center; }
    .forms-table th { background: rgba(245, 175, 25, 0.08); color: var(--accent-gold); font-weight: 800; }
    .forms-table td:first-child { color: var(--text-secondary); font-weight: 800; }

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
const NEGATION_ITEMS = [
    { answer: "nicht", sentence: "Ich bin ___ müde.", meaning: { en: "I am not tired.", uk: "Я не втомлений / не втомлена." }, hint: { en: "Adjective: nicht goes before the adjective.", uk: "Прикметник: nicht стоїть перед прикметником." } },
    { answer: "nicht", sentence: "Das ist ___ teuer.", meaning: { en: "That is not expensive.", uk: "Це не дорого." }, hint: { en: "Adjective: nicht teuer.", uk: "Прикметник: nicht teuer." } },
    { answer: "nicht", sentence: "Der Kaffee ist ___ kalt.", meaning: { en: "The coffee is not cold.", uk: "Кава не холодна." }, hint: { en: "Adjective after sein: nicht kalt.", uk: "Прикметник після sein: nicht kalt." } },
    { answer: "nicht", sentence: "Sie ist ___ krank.", meaning: { en: "She is not sick.", uk: "Вона не хвора." }, hint: { en: "State/adjective: nicht krank.", uk: "Стан/прикметник: nicht krank." } },
    { answer: "nicht", sentence: "Wir sind ___ fertig.", meaning: { en: "We are not finished.", uk: "Ми не готові / не закінчили." }, hint: { en: "Adjective/state: nicht fertig.", uk: "Прикметник/стан: nicht fertig." } },
    { answer: "nicht", sentence: "Das Zimmer ist ___ groß.", meaning: { en: "The room is not big.", uk: "Кімната не велика." }, hint: { en: "Adjective: nicht groß.", uk: "Прикметник: nicht groß." }, accept: ["nicht"] },
    { answer: "nicht", sentence: "Ich spiele ___ gern Fußball.", meaning: { en: "I do not like playing football.", uk: "Я не люблю грати у футбол." }, hint: { en: "gern is an adverb. Negate it directly: nicht gern.", uk: "gern — прислівник. Заперечуй прямо: nicht gern." } },
    { answer: "nicht", sentence: "Er spricht ___ gut Deutsch.", meaning: { en: "He does not speak German well.", uk: "Він не добре говорить німецькою." }, hint: { en: "Adverb/manner: nicht gut.", uk: "Прислівник/спосіб: nicht gut." } },
    { answer: "nicht", sentence: "Sie kommt ___ oft.", meaning: { en: "She does not come often.", uk: "Вона не часто приходить." }, hint: { en: "Frequency adverb: nicht oft.", uk: "Прислівник частоти: nicht oft." } },
    { answer: "nicht", sentence: "Ich komme heute ___.", meaning: { en: "I am not coming today.", uk: "Я сьогодні не прийду." }, hint: { en: "Whole action: nicht often goes near the end.", uk: "Уся дія: nicht часто стоїть ближче до кінця." } },
    { answer: "nicht", sentence: "Wir arbeiten morgen ___.", meaning: { en: "We are not working tomorrow.", uk: "Ми завтра не працюємо." }, hint: { en: "Whole action with a time block: nicht at the end.", uk: "Уся дія з блоком часу: nicht у кінці." } },
    { answer: "nicht", sentence: "Anna lernt am Abend ___.", meaning: { en: "Anna is not studying in the evening.", uk: "Анна ввечері не вчиться." }, hint: { en: "Whole action: nicht after the time block.", uk: "Уся дія: nicht після блоку часу." } },
    { answer: "nicht", sentence: "Er schläft heute ___.", meaning: { en: "He is not sleeping today.", uk: "Він сьогодні не спить." }, hint: { en: "Whole action: nicht near the end.", uk: "Уся дія: nicht ближче до кінця." } },
    { answer: "nicht", sentence: "Ich verstehe das ___.", meaning: { en: "I do not understand that.", uk: "Я цього не розумію." }, hint: { en: "Definite object das stays. Use nicht, not kein.", uk: "Означений додаток das залишається. Використовуй nicht, не kein." } },
    { answer: "nicht", sentence: "Ich kenne den Mann ___.", meaning: { en: "I do not know the man.", uk: "Я не знаю цього чоловіка." }, hint: { en: "Definite noun phrase den Mann: use nicht.", uk: "Означена група den Mann: використовуй nicht." } },
    { answer: "nicht", sentence: "Ich sehe Anna ___.", meaning: { en: "I do not see Anna.", uk: "Я не бачу Анну." }, hint: { en: "A name is definite. Use nicht.", uk: "Ім'я є означеним. Використовуй nicht." } },
    { answer: "nicht", sentence: "Das ist ___ mein Buch.", meaning: { en: "That is not my book.", uk: "Це не моя книга." }, hint: { en: "Possessive phrase mein Buch: use nicht.", uk: "Присвійна група mein Buch: використовуй nicht." } },
    { answer: "nicht", sentence: "Das ist ___ der Schlüssel.", meaning: { en: "That is not the key.", uk: "Це не ключ." }, hint: { en: "Definite article der: use nicht.", uk: "Означений артикль der: використовуй nicht." } },
    { answer: "nicht", sentence: "Ich wohne ___ in Berlin.", meaning: { en: "I do not live in Berlin.", uk: "Я не живу в Берліні." }, hint: { en: "Negate the place phrase: nicht in Berlin.", uk: "Заперечуємо місце: nicht in Berlin." } },
    { answer: "nicht", sentence: "Er arbeitet ___ im Büro.", meaning: { en: "He does not work in the office.", uk: "Він не працює в офісі." }, hint: { en: "Negate the place phrase: nicht im Büro.", uk: "Заперечуємо місце: nicht im Büro." } },
    { answer: "nicht", sentence: "Wir fahren ___ nach Hause.", meaning: { en: "We are not going home.", uk: "Ми не їдемо додому." }, hint: { en: "Direction phrase: nicht nach Hause.", uk: "Напрямок: nicht nach Hause." } },
    { answer: "nicht", sentence: "Sie kommt ___ aus Polen.", meaning: { en: "She does not come from Poland.", uk: "Вона не з Польщі." }, hint: { en: "Origin phrase: nicht aus Polen.", uk: "Походження: nicht aus Polen." } },
    { answer: "nicht", sentence: "Ich kann heute ___ kommen.", meaning: { en: "I cannot come today.", uk: "Я сьогодні не можу прийти." }, hint: { en: "Modal verb: nicht before the final infinitive.", uk: "Модальне дієслово: nicht перед фінальним інфінітивом." } },
    { answer: "nicht", sentence: "Du musst das ___ machen.", meaning: { en: "You do not have to do that.", uk: "Тобі не треба це робити." }, hint: { en: "With müssen, nicht before the infinitive means 'do not have to'.", uk: "З müssen, nicht перед інфінітивом означає 'не треба'." } },
    { answer: "nicht", sentence: "Wir möchten ___ gehen.", meaning: { en: "We would not like to go.", uk: "Ми не хотіли б іти." }, hint: { en: "Modal-like verb: nicht before the final infinitive.", uk: "Модальне дієслово: nicht перед фінальним інфінітивом." } },
    { answer: "nicht", sentence: "Ich stehe heute ___ auf.", meaning: { en: "I am not getting up today.", uk: "Я сьогодні не встаю." }, hint: { en: "Separable verb: nicht before the final prefix.", uk: "Відокремлюване дієслово: nicht перед фінальним префіксом." } },
    { answer: "nicht", sentence: "Er ruft Anna ___ an.", meaning: { en: "He is not calling Anna.", uk: "Він не дзвонить Анні." }, hint: { en: "Separable verb anrufen: nicht before an.", uk: "Відокремлюване anrufen: nicht перед an." } },
    { answer: "nicht", sentence: "Wir kaufen heute ___ ein.", meaning: { en: "We are not shopping today.", uk: "Ми сьогодні не робимо покупки." }, hint: { en: "Separable verb einkaufen: nicht before ein.", uk: "Відокремлюване einkaufen: nicht перед ein." } },

    { answer: "kein", sentence: "Das ist ___ Tisch.", meaning: { en: "That is not a table.", uk: "Це не стіл." }, hint: { en: "Indefinite masculine noun in Nominativ: kein Tisch.", uk: "Неозначений чоловічий рід у Nominativ: kein Tisch." } },
    { answer: "keine", sentence: "Das ist ___ Lampe.", meaning: { en: "That is not a lamp.", uk: "Це не лампа." }, hint: { en: "Indefinite feminine noun in Nominativ: keine Lampe.", uk: "Неозначений жіночий рід у Nominativ: keine Lampe." } },
    { answer: "kein", sentence: "Das ist ___ Buch.", meaning: { en: "That is not a book.", uk: "Це не книга." }, hint: { en: "Indefinite neuter noun in Nominativ: kein Buch.", uk: "Неозначений середній рід у Nominativ: kein Buch." } },
    { answer: "keine", sentence: "Das sind ___ Kinder.", meaning: { en: "Those are not children.", uk: "Це не діти." }, hint: { en: "Plural with no indefinite article: keine Kinder.", uk: "Множина без неозначеного артикля: keine Kinder." } },
    { answer: "kein", sentence: "Hier ist ___ Arzt.", meaning: { en: "There is no doctor here.", uk: "Тут немає лікаря." }, hint: { en: "Masculine Nominativ: kein Arzt.", uk: "Чоловічий Nominativ: kein Arzt." } },
    { answer: "keine", sentence: "Hier ist ___ Ärztin.", meaning: { en: "There is no female doctor here.", uk: "Тут немає лікарки." }, hint: { en: "Feminine Nominativ: keine Ärztin.", uk: "Жіночий Nominativ: keine Ärztin." } },
    { answer: "kein", sentence: "Das ist ___ Problem.", meaning: { en: "That is not a problem.", uk: "Це не проблема." }, hint: { en: "Problem is neuter: kein Problem.", uk: "Problem середнього роду: kein Problem." } },
    { answer: "keine", sentence: "Das ist ___ Frage.", meaning: { en: "That is not a question.", uk: "Це не питання." }, hint: { en: "Frage is feminine: keine Frage.", uk: "Frage жіночого роду: keine Frage." } },
    { answer: "kein", sentence: "Das ist ___ Auto.", meaning: { en: "That is not a car.", uk: "Це не авто." }, hint: { en: "Auto is neuter: kein Auto.", uk: "Auto середнього роду: kein Auto." } },
    { answer: "keine", sentence: "Das sind ___ Bücher.", meaning: { en: "Those are not books.", uk: "Це не книги." }, hint: { en: "Plural: keine Bücher.", uk: "Множина: keine Bücher." } },
    { answer: "keinen", sentence: "Ich habe ___ Bruder.", meaning: { en: "I do not have a brother.", uk: "У мене немає брата." }, hint: { en: "haben + masculine Akkusativ: keinen Bruder.", uk: "haben + чоловічий Akkusativ: keinen Bruder." } },
    { answer: "keine", sentence: "Ich habe ___ Schwester.", meaning: { en: "I do not have a sister.", uk: "У мене немає сестри." }, hint: { en: "Feminine Akkusativ: keine Schwester.", uk: "Жіночий Akkusativ: keine Schwester." } },
    { answer: "kein", sentence: "Ich habe ___ Kind.", meaning: { en: "I do not have a child.", uk: "У мене немає дитини." }, hint: { en: "Neuter Akkusativ: kein Kind.", uk: "Середній Akkusativ: kein Kind." } },
    { answer: "keine", sentence: "Ich habe ___ Kinder.", meaning: { en: "I do not have children.", uk: "У мене немає дітей." }, hint: { en: "Plural Akkusativ: keine Kinder.", uk: "Множина Akkusativ: keine Kinder." } },
    { answer: "keinen", sentence: "Ich kaufe ___ Kaffee.", meaning: { en: "I am not buying coffee.", uk: "Я не купую каву." }, hint: { en: "Kaffee is masculine Akkusativ: keinen Kaffee.", uk: "Kaffee чоловічого роду в Akkusativ: keinen Kaffee." } },
    { answer: "keine", sentence: "Ich kaufe ___ Milch.", meaning: { en: "I am not buying milk.", uk: "Я не купую молоко." }, hint: { en: "Milch is feminine: keine Milch.", uk: "Milch жіночого роду: keine Milch." } },
    { answer: "kein", sentence: "Ich kaufe ___ Brot.", meaning: { en: "I am not buying bread.", uk: "Я не купую хліб." }, hint: { en: "Brot is neuter: kein Brot.", uk: "Brot середнього роду: kein Brot." } },
    { answer: "keine", sentence: "Ich lese ___ Zeitung.", meaning: { en: "I am not reading a newspaper.", uk: "Я не читаю газету." }, hint: { en: "Zeitung is feminine: keine Zeitung.", uk: "Zeitung жіночого роду: keine Zeitung." } },
    { answer: "kein", sentence: "Ich lese ___ Buch.", meaning: { en: "I am not reading a book.", uk: "Я не читаю книгу." }, hint: { en: "Buch is neuter Akkusativ: kein Buch.", uk: "Buch середнього роду в Akkusativ: kein Buch." } },
    { answer: "keinen", sentence: "Ich sehe ___ Mann.", meaning: { en: "I do not see a man.", uk: "Я не бачу чоловіка." }, hint: { en: "Masculine Akkusativ: keinen Mann.", uk: "Чоловічий Akkusativ: keinen Mann." } },
    { answer: "keinen", sentence: "Wir trinken ___ Tee.", meaning: { en: "We are not drinking tea.", uk: "Ми не п'ємо чай." }, hint: { en: "Tee is masculine Akkusativ: keinen Tee.", uk: "Tee чоловічого роду в Akkusativ: keinen Tee." } },
    { answer: "keine", sentence: "Wir essen ___ Suppe.", meaning: { en: "We are not eating soup.", uk: "Ми не їмо суп." }, hint: { en: "Suppe is feminine: keine Suppe.", uk: "Suppe жіночого роду: keine Suppe." } },
    { answer: "keinen", sentence: "Er braucht ___ Stift.", meaning: { en: "He does not need a pen.", uk: "Йому не потрібна ручка." }, hint: { en: "Stift is masculine Akkusativ: keinen Stift.", uk: "Stift чоловічого роду в Akkusativ: keinen Stift." } },
    { answer: "keine", sentence: "Sie braucht ___ Hilfe.", meaning: { en: "She does not need help.", uk: "Їй не потрібна допомога." }, hint: { en: "Hilfe is feminine: keine Hilfe.", uk: "Hilfe жіночого роду: keine Hilfe." } },
    { answer: "kein", sentence: "Wir brauchen ___ Geld.", meaning: { en: "We do not need money.", uk: "Нам не потрібні гроші." }, hint: { en: "Geld is neuter: kein Geld.", uk: "Geld середнього роду: kein Geld." } },
    { answer: "keine", sentence: "Ich finde ___ Dokumente.", meaning: { en: "I do not find any documents.", uk: "Я не знаходжу документів." }, hint: { en: "Plural Akkusativ: keine Dokumente.", uk: "Множина Akkusativ: keine Dokumente." } },
    { answer: "keinen", sentence: "Ich finde ___ Schlüssel.", meaning: { en: "I do not find a key.", uk: "Я не знаходжу ключа." }, hint: { en: "Singular masculine Akkusativ: keinen Schlüssel.", uk: "Однина чоловічого роду Akkusativ: keinen Schlüssel." } },
    { answer: "keinen", sentence: "Ich trage ___ Mantel.", meaning: { en: "I am not wearing a coat.", uk: "Я не ношу пальто/плащ." }, hint: { en: "Mantel is masculine Akkusativ: keinen Mantel.", uk: "Mantel чоловічого роду в Akkusativ: keinen Mantel." } },
    { answer: "keine", sentence: "Sie trägt ___ Jacke.", meaning: { en: "She is not wearing a jacket.", uk: "Вона не носить куртку." }, hint: { en: "Jacke is feminine: keine Jacke.", uk: "Jacke жіночого роду: keine Jacke." } },
    { answer: "kein", sentence: "Er trägt ___ Hemd.", meaning: { en: "He is not wearing a shirt.", uk: "Він не носить сорочку." }, hint: { en: "Hemd is neuter: kein Hemd.", uk: "Hemd середнього роду: kein Hemd." } },
    { answer: "keinem", sentence: "Ich helfe ___ Mann.", meaning: { en: "I am not helping any man.", uk: "Я не допомагаю жодному чоловіку." }, hint: { en: "helfen + Dativ: keinem Mann.", uk: "helfen + Dativ: keinem Mann." } },
    { answer: "keiner", sentence: "Ich helfe ___ Frau.", meaning: { en: "I am not helping any woman.", uk: "Я не допомагаю жодній жінці." }, hint: { en: "Feminine Dativ: keiner Frau.", uk: "Жіночий Dativ: keiner Frau." } },
    { answer: "keinem", sentence: "Ich helfe ___ Kind.", meaning: { en: "I am not helping any child.", uk: "Я не допомагаю жодній дитині." }, hint: { en: "Neuter Dativ: keinem Kind.", uk: "Середній Dativ: keinem Kind." } },
    { answer: "keinen", sentence: "Ich helfe ___ Kindern.", meaning: { en: "I am not helping any children.", uk: "Я не допомагаю жодним дітям." }, hint: { en: "Dativ plural: keinen Kindern.", uk: "Dativ множини: keinen Kindern." } },
    { answer: "keinem", sentence: "Ich spreche mit ___ Arzt.", meaning: { en: "I am not speaking with any doctor.", uk: "Я не говорю з жодним лікарем." }, hint: { en: "mit + Dativ, masculine: keinem Arzt.", uk: "mit + Dativ, чоловічий рід: keinem Arzt." } },
    { answer: "keiner", sentence: "Ich spreche mit ___ Ärztin.", meaning: { en: "I am not speaking with any female doctor.", uk: "Я не говорю з жодною лікаркою." }, hint: { en: "mit + Dativ, feminine: keiner Ärztin.", uk: "mit + Dativ, жіночий рід: keiner Ärztin." } },
    { answer: "keinem", sentence: "Ich fahre mit ___ Bus.", meaning: { en: "I am not going by any bus.", uk: "Я не їду жодним автобусом." }, hint: { en: "mit + Dativ, masculine: keinem Bus.", uk: "mit + Dativ, чоловічий рід: keinem Bus." } },
    { answer: "keiner", sentence: "Er wohnt in ___ Stadt.", meaning: { en: "He does not live in any city.", uk: "Він не живе в жодному місті." }, hint: { en: "Location with in + Dativ, feminine: keiner Stadt.", uk: "Місце з in + Dativ, жіночий рід: keiner Stadt." } },

    { answer: "nicht", sentence: "Kommst du ___?", meaning: { en: "Aren't you coming?", uk: "Ти не прийдеш?" }, hint: { en: "Yes/no question: verb first. Negation does not change that order.", uk: "Питання так/ні: дієслово перше. Заперечення не змінює цей порядок." } },
    { answer: "nicht", sentence: "Kommst du heute ___?", meaning: { en: "Aren't you coming today?", uk: "Ти сьогодні не прийдеш?" }, hint: { en: "Yes/no question with time: Kommst du heute nicht?", uk: "Питання так/ні з часом: Kommst du heute nicht?" } },
    { answer: "nicht", sentence: "Warum kommst du heute ___?", meaning: { en: "Why aren't you coming today?", uk: "Чому ти сьогодні не прийдеш?" }, hint: { en: "W-question order stays: Warum + verb + subject + rest + nicht.", uk: "Порядок W-питання зберігається: Warum + дієслово + підмет + решта + nicht." } },
    { answer: "nicht", sentence: "Kannst du heute ___ kommen?", meaning: { en: "Can't you come today?", uk: "Ти сьогодні не можеш прийти?" }, hint: { en: "Modal verb: nicht before the final infinitive.", uk: "Модальне дієслово: nicht перед фінальним інфінітивом." } },
    { answer: "nicht", sentence: "Warum kannst du heute ___ kommen?", meaning: { en: "Why can't you come today?", uk: "Чому ти сьогодні не можеш прийти?" }, hint: { en: "W-question plus modal: Warum kannst du heute nicht kommen?", uk: "W-питання з модальним: Warum kannst du heute nicht kommen?" } },
    { answer: "nicht", sentence: "Stehst du heute ___ auf?", meaning: { en: "Aren't you getting up today?", uk: "Ти сьогодні не встаєш?" }, hint: { en: "Separable verb: nicht before the final prefix auf.", uk: "Відокремлюване дієслово: nicht перед фінальним префіксом auf." } },
    { answer: "nicht", sentence: "Warum stehst du heute ___ auf?", meaning: { en: "Why aren't you getting up today?", uk: "Чому ти сьогодні не встаєш?" }, hint: { en: "Question order stays normal; nicht is added before auf.", uk: "Порядок питання звичайний; nicht додається перед auf." } },
    { answer: "nicht", sentence: "Wohnst du ___ in Berlin?", meaning: { en: "Don't you live in Berlin?", uk: "Ти не живеш у Берліні?" }, hint: { en: "Negate the place phrase: nicht in Berlin.", uk: "Заперечуємо місце: nicht in Berlin." } },
    { answer: "nicht", sentence: "Warum wohnst du ___ in Berlin?", meaning: { en: "Why don't you live in Berlin?", uk: "Чому ти не живеш у Берліні?" }, hint: { en: "W-question order remains: Warum wohnst du nicht in Berlin?", uk: "Порядок W-питання зберігається: Warum wohnst du nicht in Berlin?" } },
    { answer: "nicht", sentence: "Arbeitet Anna ___ im Büro?", meaning: { en: "Doesn't Anna work in the office?", uk: "Анна не працює в офісі?" }, hint: { en: "Negate the place phrase: nicht im Büro.", uk: "Заперечуємо місце: nicht im Büro." } },
    { answer: "nicht", sentence: "Ist Anna ___ müde?", meaning: { en: "Isn't Anna tired?", uk: "Анна не втомлена?" }, hint: { en: "Adjective: nicht before müde.", uk: "Прикметник: nicht перед müde." } },
    { answer: "nicht", sentence: "Warum ist Anna ___ müde?", meaning: { en: "Why isn't Anna tired?", uk: "Чому Анна не втомлена?" }, hint: { en: "Question order stays: Warum ist Anna nicht müde?", uk: "Порядок питання зберігається: Warum ist Anna nicht müde?" } },

    { answer: "kein", sentence: "Hast du ___ Auto?", meaning: { en: "Don't you have a car?", uk: "У тебе немає авто?" }, hint: { en: "Auto is neuter Akkusativ: kein Auto. Same form as in a statement.", uk: "Auto середнього роду в Akkusativ: kein Auto. Та сама форма, що й у твердженні." } },
    { answer: "kein", sentence: "Warum hast du ___ Auto?", meaning: { en: "Why don't you have a car?", uk: "Чому в тебе немає авто?" }, hint: { en: "W-question order changes the beginning, but kein stays with Auto.", uk: "W-питання змінює початок, але kein залишається біля Auto." } },
    { answer: "kein", sentence: "Hast du ___ Geld?", meaning: { en: "Don't you have money?", uk: "У тебе немає грошей?" }, hint: { en: "Geld is neuter: kein Geld.", uk: "Geld середнього роду: kein Geld." } },
    { answer: "kein", sentence: "Warum hast du ___ Geld?", meaning: { en: "Why don't you have money?", uk: "Чому в тебе немає грошей?" }, hint: { en: "kein negates the noun Geld; question order stays normal.", uk: "kein заперечує іменник Geld; порядок питання залишається звичайним." } },
    { answer: "keine", sentence: "Hat er ___ Zeit?", meaning: { en: "Doesn't he have time?", uk: "У нього немає часу?" }, hint: { en: "Zeit is feminine: keine Zeit.", uk: "Zeit жіночого роду: keine Zeit." } },
    { answer: "keine", sentence: "Warum hat er ___ Zeit?", meaning: { en: "Why doesn't he have time?", uk: "Чому в нього немає часу?" }, hint: { en: "kein changes by the noun: Zeit -> keine Zeit.", uk: "kein змінюється за іменником: Zeit -> keine Zeit." } },
    { answer: "keine", sentence: "Warum hast du ___ Zeit?", meaning: { en: "Why don't you have time?", uk: "Чому в тебе немає часу?" }, hint: { en: "Zeit is feminine: keine Zeit.", uk: "Zeit жіночого роду: keine Zeit." } },
    { answer: "keine", sentence: "Kaufen sie ___ Bücher?", meaning: { en: "Aren't they buying books?", uk: "Вони не купують книги?" }, hint: { en: "Plural Akkusativ: keine Bücher.", uk: "Множина Akkusativ: keine Bücher." } },
    { answer: "keine", sentence: "Warum kaufen sie ___ Bücher?", meaning: { en: "Why aren't they buying books?", uk: "Чому вони не купують книги?" }, hint: { en: "Plural noun with no article: keine Bücher.", uk: "Множина без артикля: keine Bücher." } },
    { answer: "keinen", sentence: "Hast du ___ Bruder?", meaning: { en: "Don't you have a brother?", uk: "У тебе немає брата?" }, hint: { en: "Bruder is masculine Akkusativ after haben: keinen Bruder.", uk: "Bruder чоловічого роду в Akkusativ після haben: keinen Bruder." } },
    { answer: "keinen", sentence: "Warum hast du ___ Bruder?", meaning: { en: "Why don't you have a brother?", uk: "Чому в тебе немає брата?" }, hint: { en: "Masculine Akkusativ: keinen Bruder.", uk: "Чоловічий Akkusativ: keinen Bruder." } },
    { answer: "keine", sentence: "Brauchst du ___ Hilfe?", meaning: { en: "Don't you need help?", uk: "Тобі не потрібна допомога?" }, hint: { en: "Hilfe is feminine: keine Hilfe.", uk: "Hilfe жіночого роду: keine Hilfe." } },
    { answer: "keine", sentence: "Warum brauchst du ___ Hilfe?", meaning: { en: "Why don't you need help?", uk: "Чому тобі не потрібна допомога?" }, hint: { en: "Feminine noun: keine Hilfe.", uk: "Жіночий іменник: keine Hilfe." } },
    { answer: "keinem", sentence: "Hilfst du ___ Mann?", meaning: { en: "Aren't you helping any man?", uk: "Ти не допомагаєш жодному чоловіку?" }, hint: { en: "helfen + Dativ, masculine: keinem Mann.", uk: "helfen + Dativ, чоловічий рід: keinem Mann." } },
    { answer: "keinem", sentence: "Warum hilfst du ___ Mann?", meaning: { en: "Why aren't you helping any man?", uk: "Чому ти не допомагаєш жодному чоловіку?" }, hint: { en: "The question order changes, but Dativ stays: keinem Mann.", uk: "Порядок питання змінюється, але Dativ залишається: keinem Mann." } },
    { answer: "keiner", sentence: "Sprichst du mit ___ Ärztin?", meaning: { en: "Aren't you speaking with any female doctor?", uk: "Ти не говориш з жодною лікаркою?" }, hint: { en: "mit + Dativ, feminine: keiner Ärztin.", uk: "mit + Dativ, жіночий рід: keiner Ärztin." } },
    { answer: "keiner", sentence: "Warum sprichst du mit ___ Ärztin?", meaning: { en: "Why aren't you speaking with any female doctor?", uk: "Чому ти не говориш з жодною лікаркою?" }, hint: { en: "Preposition and Dativ stay: mit keiner Ärztin.", uk: "Прийменник і Dativ залишаються: mit keiner Ärztin." } },

    { answer: "nicht", sentence: "Spielst du ___ gern Fußball?", meaning: { en: "Don't you like playing football?", uk: "Ти не любиш грати у футбол?" }, hint: { en: "Negate the adverb gern directly: nicht gern.", uk: "Заперечуємо прислівник gern прямо: nicht gern." } },
    { answer: "nicht", sentence: "Warum spielst du ___ gern Fußball?", meaning: { en: "Why don't you like playing football?", uk: "Чому ти не любиш грати у футбол?" }, hint: { en: "W-question order stays; nicht stands before gern.", uk: "Порядок W-питання зберігається; nicht стоїть перед gern." } },
    { answer: "nicht", sentence: "Spricht er ___ gut Deutsch?", meaning: { en: "Doesn't he speak German well?", uk: "Він не добре говорить німецькою?" }, hint: { en: "Negate the manner: nicht gut.", uk: "Заперечуємо спосіб: nicht gut." } },
    { answer: "nicht", sentence: "Warum spricht er ___ gut Deutsch?", meaning: { en: "Why doesn't he speak German well?", uk: "Чому він не добре говорить німецькою?" }, hint: { en: "W-question plus manner: Warum spricht er nicht gut Deutsch?", uk: "W-питання + спосіб: Warum spricht er nicht gut Deutsch?" } },
    { answer: "nicht", sentence: "Kommt sie ___ oft?", meaning: { en: "Doesn't she come often?", uk: "Вона не часто приходить?" }, hint: { en: "Negate the frequency adverb: nicht oft.", uk: "Заперечуємо прислівник частоти: nicht oft." } },
    { answer: "nicht", sentence: "Warum kommt sie ___ oft?", meaning: { en: "Why doesn't she come often?", uk: "Чому вона не часто приходить?" }, hint: { en: "nicht stays before the part it negates: oft.", uk: "nicht стоїть перед частиною, яку заперечує: oft." } },
    { answer: "nicht", sentence: "Verstehst du das ___?", meaning: { en: "Don't you understand that?", uk: "Ти цього не розумієш?" }, hint: { en: "Definite object das stays; use nicht.", uk: "Означений додаток das залишається; використовуй nicht." } },
    { answer: "nicht", sentence: "Warum verstehst du das ___?", meaning: { en: "Why don't you understand that?", uk: "Чому ти цього не розумієш?" }, hint: { en: "Whole action with a definite object: nicht near the end.", uk: "Уся дія з означеним додатком: nicht ближче до кінця." } },
    { answer: "nicht", sentence: "Kennst du den Mann ___?", meaning: { en: "Don't you know the man?", uk: "Ти не знаєш цього чоловіка?" }, hint: { en: "den Mann is definite, so use nicht.", uk: "den Mann — означена група, тому використовуй nicht." } },
    { answer: "nicht", sentence: "Warum kennst du den Mann ___?", meaning: { en: "Why don't you know the man?", uk: "Чому ти не знаєш цього чоловіка?" }, hint: { en: "Definite noun phrase: not kein, but nicht.", uk: "Означена іменникова група: не kein, а nicht." } },
    { answer: "nicht", sentence: "Siehst du Anna ___?", meaning: { en: "Don't you see Anna?", uk: "Ти не бачиш Анну?" }, hint: { en: "A name is definite; use nicht.", uk: "Ім'я є означеним; використовуй nicht." } },
    { answer: "nicht", sentence: "Warum siehst du Anna ___?", meaning: { en: "Why don't you see Anna?", uk: "Чому ти не бачиш Анну?" }, hint: { en: "W-question order stays; nicht negates the whole action.", uk: "Порядок W-питання зберігається; nicht заперечує всю дію." } },
    { answer: "nicht", sentence: "Fährst du ___ nach Hause?", meaning: { en: "Aren't you going home?", uk: "Ти не їдеш додому?" }, hint: { en: "Direction phrase: nicht nach Hause.", uk: "Напрямок: nicht nach Hause." } },
    { answer: "nicht", sentence: "Warum fährst du ___ nach Hause?", meaning: { en: "Why aren't you going home?", uk: "Чому ти не їдеш додому?" }, hint: { en: "nicht stands before the direction phrase.", uk: "nicht стоїть перед напрямком." } },
    { answer: "nicht", sentence: "Möchtest du ___ gehen?", meaning: { en: "Wouldn't you like to go?", uk: "Ти не хотів би / не хотіла б піти?" }, hint: { en: "Modal-like verb: nicht before the final infinitive.", uk: "Модальне дієслово: nicht перед фінальним інфінітивом." } },
    { answer: "nicht", sentence: "Warum möchtest du ___ gehen?", meaning: { en: "Why wouldn't you like to go?", uk: "Чому ти не хотів би / не хотіла б піти?" }, hint: { en: "W-question with a final infinitive: nicht gehen.", uk: "W-питання з фінальним інфінітивом: nicht gehen." } },
    { answer: "nicht", sentence: "Musst du das ___ machen?", meaning: { en: "Don't you have to do that?", uk: "Тобі не треба це робити?" }, hint: { en: "With a modal verb, nicht stands before the final infinitive.", uk: "З модальним дієсловом nicht стоїть перед фінальним інфінітивом." } },
    { answer: "nicht", sentence: "Warum musst du das ___ machen?", meaning: { en: "Why don't you have to do that?", uk: "Чому тобі не треба це робити?" }, hint: { en: "The question order stays; nicht goes before machen.", uk: "Порядок питання зберігається; nicht стоїть перед machen." } },
    { answer: "nicht", sentence: "Rufst du Anna ___ an?", meaning: { en: "Aren't you calling Anna?", uk: "Ти не дзвониш Анні?" }, hint: { en: "Separable verb anrufen: nicht before an.", uk: "Відокремлюване anrufen: nicht перед an." } },
    { answer: "nicht", sentence: "Warum rufst du Anna ___ an?", meaning: { en: "Why aren't you calling Anna?", uk: "Чому ти не дзвониш Анні?" }, hint: { en: "Separable prefix remains at the end; nicht stands before it.", uk: "Відокремлюваний префікс лишається в кінці; nicht стоїть перед ним." } },
    { answer: "nicht", sentence: "Kauft ihr heute ___ ein?", meaning: { en: "Aren't you shopping today?", uk: "Ви сьогодні не робите покупки?" }, hint: { en: "Separable verb einkaufen: nicht before ein.", uk: "Відокремлюване einkaufen: nicht перед ein." } },
    { answer: "nicht", sentence: "Warum kauft ihr heute ___ ein?", meaning: { en: "Why aren't you shopping today?", uk: "Чому ви сьогодні не робите покупки?" }, hint: { en: "Time stays in the question; nicht comes before the final prefix.", uk: "Час залишається в питанні; nicht стоїть перед фінальним префіксом." } },
    { answer: "nicht", sentence: "Ist das ___ teuer?", meaning: { en: "Isn't that expensive?", uk: "Це не дорого?" }, hint: { en: "Adjective after sein: nicht teuer.", uk: "Прикметник після sein: nicht teuer." } },
    { answer: "nicht", sentence: "Warum ist das ___ teuer?", meaning: { en: "Why isn't that expensive?", uk: "Чому це не дорого?" }, hint: { en: "nicht stands before the adjective.", uk: "nicht стоїть перед прикметником." } },
    { answer: "nicht", sentence: "Bist du ___ krank?", meaning: { en: "Aren't you sick?", uk: "Ти не хворий / не хвора?" }, hint: { en: "Adjective/state: nicht krank.", uk: "Прикметник/стан: nicht krank." } },
    { answer: "nicht", sentence: "Warum bist du ___ krank?", meaning: { en: "Why aren't you sick?", uk: "Чому ти не хворий / не хвора?" }, hint: { en: "Question order stays; nicht goes before krank.", uk: "Порядок питання зберігається; nicht стоїть перед krank." } },

    { answer: "kein", sentence: "Ist das ___ Tisch?", meaning: { en: "Is that not a table?", uk: "Це не стіл?" }, hint: { en: "Indefinite masculine noun in Nominativ: kein Tisch.", uk: "Неозначений чоловічий рід у Nominativ: kein Tisch." } },
    { answer: "keine", sentence: "Ist das ___ Lampe?", meaning: { en: "Is that not a lamp?", uk: "Це не лампа?" }, hint: { en: "Feminine Nominativ: keine Lampe.", uk: "Жіночий Nominativ: keine Lampe." } },
    { answer: "kein", sentence: "Ist das ___ Buch?", meaning: { en: "Is that not a book?", uk: "Це не книга?" }, hint: { en: "Neuter Nominativ: kein Buch.", uk: "Середній Nominativ: kein Buch." } },
    { answer: "keine", sentence: "Sind das ___ Kinder?", meaning: { en: "Are those not children?", uk: "Це не діти?" }, hint: { en: "Plural: keine Kinder.", uk: "Множина: keine Kinder." } },
    { answer: "keine", sentence: "Warum sind das ___ Kinder?", meaning: { en: "Why aren't those children?", uk: "Чому це не діти?" }, hint: { en: "Plural Nominativ: keine Kinder.", uk: "Множина Nominativ: keine Kinder." } },
    { answer: "keine", sentence: "Hast du ___ Schwester?", meaning: { en: "Don't you have a sister?", uk: "У тебе немає сестри?" }, hint: { en: "Feminine Akkusativ: keine Schwester.", uk: "Жіночий Akkusativ: keine Schwester." } },
    { answer: "keine", sentence: "Warum hast du ___ Schwester?", meaning: { en: "Why don't you have a sister?", uk: "Чому в тебе немає сестри?" }, hint: { en: "kein changes with the noun: Schwester -> keine.", uk: "kein змінюється за іменником: Schwester -> keine." } },
    { answer: "kein", sentence: "Hast du ___ Kind?", meaning: { en: "Don't you have a child?", uk: "У тебе немає дитини?" }, hint: { en: "Neuter Akkusativ: kein Kind.", uk: "Середній Akkusativ: kein Kind." } },
    { answer: "keine", sentence: "Hast du ___ Kinder?", meaning: { en: "Don't you have children?", uk: "У тебе немає дітей?" }, hint: { en: "Plural Akkusativ: keine Kinder.", uk: "Множина Akkusativ: keine Kinder." } },
    { answer: "keinen", sentence: "Kaufst du ___ Kaffee?", meaning: { en: "Aren't you buying coffee?", uk: "Ти не купуєш каву?" }, hint: { en: "Kaffee is masculine Akkusativ: keinen Kaffee.", uk: "Kaffee чоловічого роду в Akkusativ: keinen Kaffee." } },
    { answer: "keinen", sentence: "Warum kaufst du ___ Kaffee?", meaning: { en: "Why aren't you buying coffee?", uk: "Чому ти не купуєш каву?" }, hint: { en: "Masculine Akkusativ after kaufen: keinen Kaffee.", uk: "Чоловічий Akkusativ після kaufen: keinen Kaffee." } },
    { answer: "keine", sentence: "Kaufst du ___ Milch?", meaning: { en: "Aren't you buying milk?", uk: "Ти не купуєш молоко?" }, hint: { en: "Milch is feminine: keine Milch.", uk: "Milch жіночого роду: keine Milch." } },
    { answer: "keine", sentence: "Warum kaufst du ___ Milch?", meaning: { en: "Why aren't you buying milk?", uk: "Чому ти не купуєш молоко?" }, hint: { en: "Feminine Akkusativ: keine Milch.", uk: "Жіночий Akkusativ: keine Milch." } },
    { answer: "kein", sentence: "Liest du ___ Buch?", meaning: { en: "Aren't you reading a book?", uk: "Ти не читаєш книгу?" }, hint: { en: "Buch is neuter Akkusativ: kein Buch.", uk: "Buch середнього роду в Akkusativ: kein Buch." } },
    { answer: "keine", sentence: "Liest du ___ Zeitung?", meaning: { en: "Aren't you reading a newspaper?", uk: "Ти не читаєш газету?" }, hint: { en: "Zeitung is feminine: keine Zeitung.", uk: "Zeitung жіночого роду: keine Zeitung." } },
    { answer: "keinen", sentence: "Siehst du ___ Mann?", meaning: { en: "Don't you see a man?", uk: "Ти не бачиш чоловіка?" }, hint: { en: "Masculine Akkusativ: keinen Mann.", uk: "Чоловічий Akkusativ: keinen Mann." } },
    { answer: "keinen", sentence: "Warum siehst du ___ Mann?", meaning: { en: "Why don't you see a man?", uk: "Чому ти не бачиш чоловіка?" }, hint: { en: "Masculine Akkusativ stays in the question: keinen Mann.", uk: "Чоловічий Akkusativ залишається в питанні: keinen Mann." } },
    { answer: "keinen", sentence: "Trinkst du ___ Tee?", meaning: { en: "Aren't you drinking tea?", uk: "Ти не п'єш чай?" }, hint: { en: "Tee is masculine Akkusativ: keinen Tee.", uk: "Tee чоловічого роду в Akkusativ: keinen Tee." } },
    { answer: "keine", sentence: "Esst ihr ___ Suppe?", meaning: { en: "Aren't you eating soup?", uk: "Ви не їсте суп?" }, hint: { en: "Suppe is feminine: keine Suppe.", uk: "Suppe жіночого роду: keine Suppe." } },
    { answer: "keinen", sentence: "Findest du ___ Schlüssel?", meaning: { en: "Don't you find a key?", uk: "Ти не знаходиш ключа?" }, hint: { en: "Schlüssel is masculine Akkusativ: keinen Schlüssel.", uk: "Schlüssel чоловічого роду в Akkusativ: keinen Schlüssel." } },
    { answer: "keinen", sentence: "Warum findest du ___ Schlüssel?", meaning: { en: "Why don't you find a key?", uk: "Чому ти не знаходиш ключа?" }, hint: { en: "Masculine Akkusativ after finden: keinen Schlüssel.", uk: "Чоловічий Akkusativ після finden: keinen Schlüssel." } },
    { answer: "keiner", sentence: "Hilfst du ___ Frau?", meaning: { en: "Aren't you helping any woman?", uk: "Ти не допомагаєш жодній жінці?" }, hint: { en: "helfen + Dativ, feminine: keiner Frau.", uk: "helfen + Dativ, жіночий рід: keiner Frau." } },
    { answer: "keiner", sentence: "Warum hilfst du ___ Frau?", meaning: { en: "Why aren't you helping any woman?", uk: "Чому ти не допомагаєш жодній жінці?" }, hint: { en: "Dativ stays because helfen requires Dativ: keiner Frau.", uk: "Dativ залишається, бо helfen вимагає Dativ: keiner Frau." } },
    { answer: "keinem", sentence: "Fährst du mit ___ Bus?", meaning: { en: "Aren't you going by bus?", uk: "Ти не їдеш автобусом?" }, hint: { en: "mit + Dativ, masculine: keinem Bus.", uk: "mit + Dativ, чоловічий рід: keinem Bus." } },
    { answer: "keinem", sentence: "Warum fährst du mit ___ Bus?", meaning: { en: "Why aren't you going by bus?", uk: "Чому ти не їдеш автобусом?" }, hint: { en: "Preposition and Dativ stay together: mit keinem Bus.", uk: "Прийменник і Dativ залишаються разом: mit keinem Bus." } }
];

const ANSWER_OPTIONS = ["nicht", "kein", "keine", "keinen", "keinem", "keiner"];

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
    return String(value).trim().toLowerCase().replace(/[?!.,]/g, "").replace(/\s+/g, " ");
}

function isCorrectAnswer(value, item) {
    return normalizeAnswer(value) === normalizeAnswer(item.answer);
}

function isQuestionItem(item) {
    return item.sentence.trim().endsWith("?");
}

function buildQueueFromItems(items, count) {
    const queue = [];
    const source = items.length ? items : NEGATION_ITEMS;
    while (queue.length < count) {
        queue.push(...shuffle(source));
    }
    return queue.slice(0, count);
}

function buildPracticeQueue() {
    const statements = NEGATION_ITEMS.filter(item => !isQuestionItem(item));
    const questions = NEGATION_ITEMS.filter(isQuestionItem);

    if (practiceSentenceMode === "STATEMENTS") {
        return buildQueueFromItems(statements, practiceCount);
    }

    if (practiceSentenceMode === "QUESTIONS") {
        return buildQueueFromItems(questions, practiceCount);
    }

    if (practiceSentenceMode === "SEPARATE") {
        const statementCount = Math.ceil(practiceCount / 2);
        const questionCount = practiceCount - statementCount;
        return [
            ...buildQueueFromItems(statements, statementCount),
            ...buildQueueFromItems(questions, questionCount)
        ];
    }

    return buildQueueFromItems(NEGATION_ITEMS, practiceCount);
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
backBtn.title = t("negation", "back_to_menu");
backBtn.onclick = () => window.location.href = "index.html?page=Home";

const headerTitle = document.createElement("div");
headerTitle.style.fontWeight = "800";
headerTitle.style.fontSize = "1.2rem";
headerTitle.textContent = t("negation", "module_title");

header.appendChild(backBtn);
header.appendChild(headerTitle);
document.body.appendChild(header);

const main = document.createElement("main");
const title = document.createElement("h1");
title.textContent = t("negation", "module_title");
main.appendChild(title);

const rulesSection = document.createElement("div");
rulesSection.classList.add("rules-container");

const rulesCard = document.createElement("div");
rulesCard.classList.add("rule-card");
rulesCard.innerHTML = `
    <div class="rule-header">💡 ${t("negation", "rules_title")}</div>
    <div class="rule-desc">${t("negation", "rules_desc")}</div>

    <div class="rule-subtitle">${t("negation", "decision_title")}</div>
    <ol class="rule-list">
        <li>${t("negation", "decision_1")}</li>
        <li>${t("negation", "decision_2")}</li>
        <li>${t("negation", "decision_3")}</li>
        <li>${t("negation", "decision_4")}</li>
    </ol>

    <div class="rule-subtitle">${t("negation", "forms_title")}</div>
    <div class="rule-desc">${t("negation", "forms_desc")}</div>
    <table class="forms-table">
        <thead>
            <tr>
                <th>${t("negation", "table_case")}</th>
                <th>${t("negation", "table_m")}</th>
                <th>${t("negation", "table_f")}</th>
                <th>${t("negation", "table_n")}</th>
                <th>${t("negation", "table_pl")}</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Nominativ</td><td>kein</td><td>keine</td><td>kein</td><td>keine</td></tr>
            <tr><td>Akkusativ</td><td>keinen</td><td>keine</td><td>kein</td><td>keine</td></tr>
            <tr><td>Dativ</td><td>keinem</td><td>keiner</td><td>keinem</td><td>keinen</td></tr>
        </tbody>
    </table>

    <div class="rule-subtitle">${t("negation", "position_title")}</div>
    <ol class="rule-list">
        <li>${t("negation", "position_1")}</li>
        <li>${t("negation", "position_2")}</li>
        <li>${t("negation", "position_3")}</li>
    </ol>
    <div class="rule-note">${t("negation", "position_note")}</div>

    <div class="rule-subtitle">${t("negation", "algorithm_title")}</div>
    <ol class="rule-list">
        <li>${t("negation", "algorithm_1")}</li>
        <li>${t("negation", "algorithm_2")}</li>
        <li>${t("negation", "algorithm_3")}</li>
        <li>${t("negation", "algorithm_4")}</li>
    </ol>

    <div class="rule-subtitle">${t("negation", "questions_title")}</div>
    <div class="rule-desc">${t("negation", "questions_desc")}</div>
    <table class="forms-table">
        <thead>
            <tr>
                <th>${t("negation", "table_statement")}</th>
                <th>${t("negation", "table_yes_no_question")}</th>
                <th>${t("negation", "table_w_question")}</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Ich komme heute nicht.</td><td>Kommst du heute nicht?</td><td>Warum kommst du heute nicht?</td></tr>
            <tr><td>Ich habe kein Auto.</td><td>Hast du kein Auto?</td><td>Warum hast du kein Auto?</td></tr>
            <tr><td>Ich kann heute nicht kommen.</td><td>Kannst du heute nicht kommen?</td><td>Warum kannst du heute nicht kommen?</td></tr>
            <tr><td>Er hat keine Zeit.</td><td>Hat er keine Zeit?</td><td>Warum hat er keine Zeit?</td></tr>
            <tr><td>Sie kaufen keine Bücher.</td><td>Kaufen sie keine Bücher?</td><td>Warum kaufen sie keine Bücher?</td></tr>
        </tbody>
    </table>
    <div class="rule-note">${t("negation", "questions_note")}</div>
`;
rulesSection.appendChild(rulesCard);

function createSettingGroup(titleKey, options, activeVal, onSelect) {
    const groupTitle = document.createElement("div");
    groupTitle.classList.add("section-title");
    groupTitle.textContent = t("negation", titleKey);
    rulesSection.appendChild(groupTitle);

    const group = document.createElement("div");
    group.classList.add("pill-group");
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("pill-btn");
        if (option.val === activeVal) btn.classList.add("active");
        btn.textContent = option.labelKey ? t("negation", option.labelKey) : option.label;
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
let practiceSentenceMode = "MIXED";
let practiceMode = "ASSISTED";
let currentIndex = 0;
let currentItem = null;
let currentQueue = [];
let selectedAnswer = "";
let attemptsLeft = 2;
let answerLocked = false;

createSettingGroup("settings_format", [
    { val: "BLOCKS", labelKey: "format_blocks" },
    { val: "TYPING", labelKey: "format_typing" }
], practiceFormat, value => practiceFormat = value);

createSettingGroup("settings_sentence_type", [
    { val: "MIXED", labelKey: "sentence_mode_mixed" },
    { val: "STATEMENTS", labelKey: "sentence_mode_statements" },
    { val: "QUESTIONS", labelKey: "sentence_mode_questions" },
    { val: "SEPARATE", labelKey: "sentence_mode_separate" }
], practiceSentenceMode, value => practiceSentenceMode = value);

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
startAssistedBtn.textContent = t("negation", "start_assisted");
startAssistedBtn.onclick = () => startGame("ASSISTED");

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn-secondary");
startUnassistedBtn.textContent = t("negation", "start_unassisted");
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
statusLeft.textContent = t("negation", "module_title");
const statusRight = document.createElement("div");
statusRight.classList.add("progress-counter");
statusBar.appendChild(statusLeft);
statusBar.appendChild(statusRight);

const taskCard = document.createElement("div");
taskCard.classList.add("task-card");
const taskLabel = document.createElement("div");
taskLabel.classList.add("task-label");
taskLabel.textContent = t("negation", "task_label");
const taskText = document.createElement("div");
taskText.classList.add("task-text");
const sentenceLabel = document.createElement("div");
sentenceLabel.classList.add("task-label");
sentenceLabel.textContent = t("negation", "sentence_label");
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
typingInput.placeholder = t("negation", "type_here");
typingArea.appendChild(typingInput);

const feedbackMsg = document.createElement("div");
feedbackMsg.classList.add("feedback-message");

const checkBtn = document.createElement("button");
checkBtn.classList.add("btn-primary");
checkBtn.style.width = "100%";
checkBtn.textContent = t("negation", "check_btn");
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
    currentIndex = 0;
    currentQueue = buildPracticeQueue();
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
    checkBtn.textContent = t("negation", "check_btn");
    checkBtn.onclick = verifyAnswer;

    statusRight.textContent = `${currentIndex + 1} / ${practiceCount}`;
    taskText.textContent = getLocalized(currentItem.meaning);
    sentenceText.innerHTML = sentenceWithBlank(currentItem.sentence);

    if (practiceMode === "ASSISTED") {
        hintBox.style.display = "block";
        hintBox.innerHTML = `<strong>${t("negation", "hint_label")}:</strong> ${escapeHtml(getLocalized(currentItem.hint))}`;
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
    ANSWER_OPTIONS.forEach(option => {
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
        feedbackMsg.textContent = t("negation", "incorrect_msg");
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
    feedbackMsg.textContent = t("negation", "correct_msg");
    feedbackMsg.className = "feedback-message correct";
    typingInput.classList.add("correct");
    Array.from(answerOptions.children).forEach(btn => {
        if (btn.textContent === currentItem.answer) btn.classList.add("correct");
    });
    checkBtn.textContent = t("negation", "next_btn");
}

function markWrong() {
    typingInput.classList.add("wrong");
    setTimeout(() => typingInput.classList.remove("wrong"), 400);
    Array.from(answerOptions.children).forEach(btn => {
        if (btn.classList.contains("selected")) btn.classList.add("wrong");
    });

    attemptsLeft--;
    if (practiceMode === "UNASSISTED" && attemptsLeft >= 0) {
        feedbackMsg.textContent = `${t("negation", "incorrect_msg")} (${t("negation", "tries_left").replace("{count}", attemptsLeft)})`;
        feedbackMsg.className = "feedback-message error";
        return;
    }

    answerLocked = true;
    feedbackMsg.textContent = `${t("negation", "incorrect_msg")}\n${t("negation", "correct_answer_was")} ${currentItem.answer}`;
    feedbackMsg.className = "feedback-message error";
    Array.from(answerOptions.children).forEach(btn => {
        if (btn.textContent === currentItem.answer) btn.classList.add("correct");
    });
    checkBtn.textContent = t("negation", "next_btn");
}

document.addEventListener("keydown", event => {
    if (gameSection.style.display === "flex" && practiceFormat === "TYPING" && event.key === "Enter") {
        verifyAnswer();
    }
});

function showGameOver() {
    const finishScreen = document.createElement("div");
    finishScreen.classList.add("finish-screen");
    finishScreen.innerHTML = `
        <div class="finish-icon">🎉</div>
        <h1 style="margin-bottom: 0.5rem;">${t("negation", "game_over")}</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${t("negation", "finish_summary").replace("{count}", practiceCount)}</p>
        <button class="btn-primary" id="negationBackToRules">${t("negation", "back_to_rules")}</button>
    `;
    document.body.appendChild(finishScreen);
    document.getElementById("negationBackToRules").onclick = () => {
        finishScreen.remove();
        gameSection.style.display = "none";
        rulesSection.style.display = "flex";
    };
}
