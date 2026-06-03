(() => {
    const STYLE_ID = "app-practice-modes-style";
    const TEXT = {
        input_mode: {
            en: "Input mode",
            de: "Eingabemodus",
            cs: "Režim zadávání",
            pl: "Tryb odpowiedzi",
            da: "Input-tilstand",
            uk: "Режим відповіді"
        },
        blocks: {
            en: "Blocks",
            de: "Blöcke",
            cs: "Bloky",
            pl: "Bloki",
            da: "Blokke",
            uk: "Блоки"
        },
        typing: {
            en: "Typing",
            de: "Tippen",
            cs: "Psaní",
            pl: "Pisanie",
            da: "Skrivning",
            uk: "Вводити руками"
        },
        choose_block: {
            en: "Choose the correct block",
            de: "Wähle den richtigen Block",
            cs: "Vyberte správný blok",
            pl: "Wybierz poprawny blok",
            da: "Vælg den rigtige blok",
            uk: "Виберіть правильний блок"
        },
        custom_count: {
            en: "Custom",
            de: "Eigene Zahl",
            cs: "Vlastní",
            pl: "Własna",
            da: "Eget antal",
            uk: "Своє число"
        }
    };

    function text(key) {
        const lang = typeof getLanguage === "function" ? getLanguage() : "en";
        return (TEXT[key] && (TEXT[key][lang] || TEXT[key].en)) || key;
    }

    function ensureStyles() {
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = `
            .legacy-answer-blocks {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 0.65rem;
                width: 100%;
                max-width: 760px;
                margin: 0 0 1rem;
            }

            .legacy-answer-block {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                color: var(--text-primary);
                padding: 0.85rem 1rem;
                border-radius: 0.75rem;
                font-family: 'Inter', sans-serif;
                font-size: 1rem;
                font-weight: 800;
                cursor: pointer;
                transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease;
                box-shadow: 0 3px 6px var(--shadow-color);
                min-width: 5rem;
            }

            .legacy-answer-block:hover {
                border-color: var(--accent-gold);
                transform: translateY(-2px);
            }

            .legacy-answer-block.selected {
                border-color: var(--accent-gold);
                color: var(--accent-gold);
                background: rgba(245, 175, 25, 0.12);
            }

            .legacy-answer-block.correct {
                border-color: var(--accent-green);
                color: var(--accent-green);
                background: rgba(16, 185, 129, 0.14);
            }

            .legacy-answer-block.wrong {
                border-color: var(--accent-red);
                color: var(--accent-red);
                background: rgba(255, 75, 43, 0.12);
            }

            .legacy-answer-block:disabled {
                cursor: default;
            }

            .settings-row {
                display: grid;
                grid-template-columns: minmax(0, 1fr);
                gap: 0.65rem;
                width: 100%;
                margin: 0.85rem 0;
            }

            .settings-row > div:first-child {
                color: var(--text-secondary);
                font-weight: 800;
                line-height: 1.25;
            }

            .pill-group {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 0.55rem;
                width: 100%;
            }

            .pill-btn {
                background: var(--content-bg);
                border: 1px solid var(--border-color);
                color: var(--text-primary);
                padding: 0.68rem 0.95rem;
                border-radius: 999px;
                font-family: 'Inter', sans-serif;
                font-size: 0.95rem;
                font-weight: 800;
                cursor: pointer;
                transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease;
            }

            .pill-btn:hover {
                border-color: var(--accent-gold);
                transform: translateY(-2px);
            }

            .pill-btn.active {
                background: var(--accent-gold);
                border-color: var(--accent-gold);
                color: var(--accent-contrast, #000000);
            }

            .practice-count-control {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 0.6rem;
                width: 100%;
            }

            .practice-count-btn {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                color: var(--text-primary);
                padding: 0.65rem 0.95rem;
                border-radius: 999px;
                font-family: 'Inter', sans-serif;
                font-size: 0.95rem;
                font-weight: 800;
                cursor: pointer;
                transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease;
                min-width: 3.25rem;
            }

            .practice-count-btn:hover {
                border-color: var(--accent-gold);
                transform: translateY(-2px);
            }

            .practice-count-btn.active {
                background: var(--accent-gold);
                color: var(--accent-contrast, #000000);
                border-color: var(--accent-gold);
                box-shadow: 0 4px 10px var(--accent-soft);
            }

            .practice-count-custom {
                width: 7rem;
                min-height: 2.5rem;
                box-sizing: border-box;
                padding: 0.55rem 0.7rem;
                border-radius: 0.65rem;
                border: 1px solid var(--border-color);
                background: var(--surface-color);
                color: var(--text-primary);
                font-family: 'Inter', sans-serif;
                font-size: 0.95rem;
                font-weight: 800;
                text-align: center;
                outline: none;
            }

            .practice-count-custom:focus {
                border-color: var(--accent-gold);
                box-shadow: 0 0 0 2px rgba(245, 175, 25, 0.2);
            }

            @media (max-width: 760px) {
                header {
                    padding: 0.75rem 1rem !important;
                    gap: 0.75rem !important;
                }

                main {
                    margin-top: 64px !important;
                    padding: 1rem !important;
                    max-width: 100% !important;
                    box-sizing: border-box !important;
                }

                h1 {
                    font-size: clamp(1.55rem, 8vw, 2.1rem) !important;
                    line-height: 1.12 !important;
                    overflow-wrap: anywhere !important;
                }

                .rule-card,
                .settings-card,
                .table-card,
                .personal-panel {
                    padding: 1rem !important;
                    border-radius: 0.75rem !important;
                }

                .btn-group {
                    gap: 0.65rem !important;
                    margin-top: 1rem !important;
                }

                .btn {
                    width: 100%;
                    padding: 0.85rem 1rem !important;
                    font-size: 0.95rem !important;
                }

                .pill-group {
                    gap: 0.5rem !important;
                }

                .pill-btn {
                    padding: 0.65rem 0.75rem !important;
                    font-size: 0.9rem !important;
                    line-height: 1.2 !important;
                    overflow-wrap: anywhere !important;
                }

                .game-container,
                .end-container {
                    height: auto !important;
                    min-height: calc(100vh - 96px) !important;
                    justify-content: flex-start !important;
                    padding-top: 1rem !important;
                    box-sizing: border-box !important;
                }

                .game-counters {
                    flex-wrap: wrap !important;
                    gap: 0.75rem !important;
                    margin-bottom: 1rem !important;
                }

                .question-box,
                .prompt-question {
                    font-size: clamp(1.45rem, 7vw, 2.1rem) !important;
                    line-height: 1.2 !important;
                    overflow-wrap: anywhere !important;
                }

                .prompt-verb {
                    font-size: clamp(1.8rem, 8vw, 2.5rem) !important;
                    overflow-wrap: anywhere !important;
                }

                .prompt-pronoun-wrap {
                    font-size: 1.05rem !important;
                }

                .prompt-pronoun {
                    font-size: 1.35rem !important;
                }

                .input-box {
                    min-width: 100% !important;
                    min-height: 3.5rem !important;
                    font-size: clamp(2rem, 10vw, 3rem) !important;
                    overflow-wrap: anywhere !important;
                }

                .accordion-header {
                    padding: 0.9rem 1rem !important;
                    font-size: 1rem !important;
                    line-height: 1.25 !important;
                }

                .word-checkbox {
                    align-items: flex-start !important;
                    gap: 0.75rem !important;
                    font-size: 0.95rem !important;
                }

                .modal-content {
                    width: calc(100% - 2rem) !important;
                    padding: 1.5rem !important;
                }

                .legacy-answer-blocks {
                    gap: 0.5rem;
                }

                .legacy-answer-block {
                    flex: 1 1 calc(50% - 0.5rem);
                    min-width: 0;
                    padding: 0.8rem 0.65rem;
                    font-size: 0.95rem;
                    overflow-wrap: anywhere;
                }

                .legacy-answer-block:hover {
                    transform: none;
                }

                .practice-count-control {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 0.45rem;
                }

                .practice-count-btn {
                    min-width: 0;
                    padding: 0.65rem 0.4rem;
                }

                .practice-count-custom {
                    grid-column: 1 / -1;
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function shuffle(items) {
        const shuffled = [...items];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function normalize(value) {
        return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
    }

    function uniqueAnswers(answers) {
        const seen = new Set();
        return answers.filter(answer => {
            const key = normalize(answer);
            if (!key || seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    function buildAnswerOptions(correctAnswer, pool, count = 6) {
        const correct = String(correctAnswer || "");
        const normalizedCorrect = normalize(correct);
        const distractors = uniqueAnswers(pool || []).filter(answer => normalize(answer) !== normalizedCorrect);
        return shuffle(uniqueAnswers([correct, ...shuffle(distractors).slice(0, Math.max(0, count - 1))]));
    }

    function createFormatSelector(currentValue, onChange) {
        ensureStyles();

        const row = document.createElement("div");
        row.classList.add("settings-row");

        const label = document.createElement("div");
        label.textContent = text("input_mode");

        const group = document.createElement("div");
        group.classList.add("pill-group");

        [
            { value: "BLOCKS", label: text("blocks") },
            { value: "TYPING", label: text("typing") }
        ].forEach(option => {
            const button = document.createElement("button");
            button.type = "button";
            button.classList.add("pill-btn");
            if (option.value === currentValue) button.classList.add("active");
            button.textContent = option.label;
            button.addEventListener("click", () => {
                Array.from(group.children).forEach(child => child.classList.remove("active"));
                button.classList.add("active");
                onChange(option.value);
            });
            group.appendChild(button);
        });

        row.appendChild(label);
        row.appendChild(group);
        return row;
    }

    function renderAnswerBlocks(container, answers, onSelect) {
        ensureStyles();
        container.innerHTML = "";
        uniqueAnswers(answers).forEach(answer => {
            const button = document.createElement("button");
            button.type = "button";
            button.classList.add("legacy-answer-block");
            button.textContent = answer;
            button.addEventListener("click", () => {
                if (button.disabled) return;
                Array.from(container.children).forEach(child => {
                    child.disabled = true;
                    child.classList.remove("selected");
                });
                button.classList.add("selected");
                onSelect(answer, button);
            });
            container.appendChild(button);
        });
    }

    function clampCount(value, fallback = 10) {
        const parsed = parseInt(value, 10);
        if (!Number.isFinite(parsed)) return fallback;
        return Math.max(1, Math.min(999, parsed));
    }

    function createCountSelector(labelText, currentValue, onChange) {
        ensureStyles();

        let currentCount = clampCount(currentValue);
        const row = document.createElement("div");
        row.classList.add("settings-row");

        const label = document.createElement("div");
        label.textContent = labelText;

        const control = document.createElement("div");
        control.classList.add("practice-count-control");

        const buttons = [];
        const customInput = document.createElement("input");
        customInput.classList.add("practice-count-custom");
        customInput.type = "number";
        customInput.min = "1";
        customInput.max = "999";
        customInput.step = "1";
        customInput.placeholder = text("custom_count");
        customInput.value = [5, 10, 20, 50].includes(currentCount) ? "" : currentCount;
        customInput.setAttribute("aria-label", text("custom_count"));

        function syncActive() {
            buttons.forEach(button => {
                button.classList.toggle("active", Number(button.dataset.count) === currentCount && !customInput.value);
            });
        }

        function setCount(value, fromCustom = false) {
            currentCount = clampCount(value, currentCount);
            if (!fromCustom) customInput.value = "";
            onChange(currentCount);
            syncActive();
        }

        [5, 10, 20, 50].forEach(value => {
            const button = document.createElement("button");
            button.type = "button";
            button.classList.add("practice-count-btn");
            button.dataset.count = String(value);
            button.textContent = String(value);
            button.addEventListener("click", () => setCount(value));
            buttons.push(button);
            control.appendChild(button);
        });

        customInput.addEventListener("input", event => {
            if (!event.target.value) {
                syncActive();
                return;
            }
            setCount(event.target.value, true);
        });

        control.appendChild(customInput);
        row.appendChild(label);
        row.appendChild(control);
        syncActive();
        return row;
    }

    window.AppPracticeModes = {
        text,
        shuffle,
        normalize,
        buildAnswerOptions,
        createFormatSelector,
        createCountSelector,
        renderAnswerBlocks
    };
})();
