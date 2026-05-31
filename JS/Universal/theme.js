(() => {
    const THEME_STORAGE_KEY = "app_design_theme";
    const ACCENT_STORAGE_KEY = "app_design_accent";
    const CUSTOM_COLOR_STORAGE_KEY = "app_design_custom_color";
    const OVERRIDE_STYLE_ID = "app-theme-override";
    const DEFAULT_CUSTOM_COLOR = "#f5af19";

    const ACCENT_PALETTES = {
        current: { gold: "#f5af19", red: "#ff4b2b", green: "#10b981" },
        blue: { gold: "#38bdf8", red: "#2563eb", green: "#10b981" },
        green: { gold: "#34d399", red: "#059669", green: "#22c55e" },
        purple: { gold: "#c084fc", red: "#7c3aed", green: "#22c55e" },
        rose: { gold: "#fb7185", red: "#e11d48", green: "#10b981" },
        cyan: { gold: "#22d3ee", red: "#0891b2", green: "#22c55e" }
    };

    const VALID_THEMES = ["classic", "mono", "accent", "custom"];

    function isValidHexColor(value) {
        return /^#[0-9a-f]{6}$/i.test(value || "");
    }

    function hexToRgb(hex) {
        const normalized = isValidHexColor(hex) ? hex.slice(1) : DEFAULT_CUSTOM_COLOR.slice(1);
        return {
            r: parseInt(normalized.slice(0, 2), 16),
            g: parseInt(normalized.slice(2, 4), 16),
            b: parseInt(normalized.slice(4, 6), 16)
        };
    }

    function componentToHex(value) {
        return Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0");
    }

    function rgbToHex({ r, g, b }) {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }

    function adjustHexColor(hex, percent) {
        const rgb = hexToRgb(hex);
        const factor = percent / 100;
        const adjust = (value) => factor >= 0
            ? value + (255 - value) * factor
            : value * (1 + factor);

        return rgbToHex({
            r: adjust(rgb.r),
            g: adjust(rgb.g),
            b: adjust(rgb.b)
        });
    }

    function alpha(hex, opacity) {
        const rgb = hexToRgb(hex);
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    }

    function getStoredValue(key, fallback) {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (error) {
            return fallback;
        }
    }

    function setStoredValue(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            // Private browsing or blocked storage: keep the current page usable.
        }
    }

    function getSettings() {
        const mode = getStoredValue(THEME_STORAGE_KEY, "classic");
        const accent = getStoredValue(ACCENT_STORAGE_KEY, "current");
        const customColor = getStoredValue(CUSTOM_COLOR_STORAGE_KEY, DEFAULT_CUSTOM_COLOR);

        return {
            mode: VALID_THEMES.includes(mode) ? mode : "classic",
            accent: ACCENT_PALETTES[accent] ? accent : "current",
            customColor: isValidHexColor(customColor) ? customColor : DEFAULT_CUSTOM_COLOR
        };
    }

    function buildAccentCss(palette) {
        return `
            :root {
                --accent-gold: ${palette.gold};
                --accent-red: ${palette.red};
                --accent-green: ${palette.green};
            }

            .custom-select:focus,
            .typing-input:focus,
            .modal-input:focus,
            .search-input:focus {
                box-shadow: 0 0 0 2px ${alpha(palette.gold, 0.22)};
            }
        `;
    }

    function buildCustomPalette(color) {
        return {
            gold: color,
            red: adjustHexColor(color, -28),
            green: adjustHexColor(color, 26)
        };
    }

    function buildThemeCss() {
        const settings = getSettings();

        if (settings.mode === "classic") {
            return "";
        }

        if (settings.mode === "mono") {
            return `
                :root {
                    --bg-color: #050505;
                    --surface-color: #101010;
                    --text-primary: #f7f7f7;
                    --text-secondary: #cfcfcf;
                    --accent-gold: #f5f5f5;
                    --accent-red: #d0d0d0;
                    --accent-green: #ffffff;
                    --border-color: rgba(255, 255, 255, 0.24);
                    --header-bg: rgba(5, 5, 5, 0.88);
                    --hover-bg: rgba(255, 255, 255, 0.075);
                    --hover-bg-strong: rgba(255, 255, 255, 0.14);
                    --content-bg: rgba(255, 255, 255, 0.075);
                    --shadow-color: rgba(0, 0, 0, 0.35);
                }

                h1 {
                    background: linear-gradient(135deg, #ffffff, #a8a8a8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                html body,
                html body main,
                body,
                main,
                footer,
                .accordion,
                .accordion-header,
                .settings-block,
                .rule-card,
                .rules-container,
                .game-container,
                .prompt-container,
                .task-card,
                .module-card,
                .module-header,
                .summary-card,
                .ranking-card,
                .empty-card,
                .run-card {
                    color: #f7f7f7;
                }

                .accordion-header::after {
                    color: #ffffff;
                }

                .btn.primary,
                .btn-primary,
                .pill-btn.active {
                    background: linear-gradient(135deg, #ffffff, #bdbdbd);
                    color: #050505;
                    border-color: transparent;
                    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.16);
                }

                .btn.primary:hover,
                .btn-primary:hover,
                .pill-btn.active:hover {
                    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.24);
                }

                .btn-secondary:hover,
                .pill-btn:hover,
                .answer-block:hover,
                .word-block:hover,
                .topic-btn:hover,
                .ref-block:hover,
                .mini-action:hover,
                .chip-remove:hover {
                    border-color: #ffffff;
                    color: #ffffff;
                }

                .rule-note,
                .hint-box,
                .prompt-container,
                .task-card,
                .sentence-builder-area.active,
                .input-box {
                    background: rgba(255, 255, 255, 0.085);
                    border-color: rgba(255, 255, 255, 0.32);
                }

                .prompt-text span,
                .hint-box strong,
                .rule-header,
                .rule-subtitle,
                .variant-name,
                .progress-counter,
                .blank,
                .word-de,
                .personal-title {
                    color: #ffffff !important;
                }

                .prompt-text span {
                    display: inline-block;
                    padding: 0.55rem 0.8rem;
                    border: 1px solid rgba(255, 255, 255, 0.24);
                    border-radius: 0.75rem;
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
                }

                .example-table th,
                .forms-table th,
                .question-table th {
                    background: rgba(255, 255, 255, 0.12);
                    color: #ffffff;
                }

                .word-block,
                .answer-block {
                    background: #121212;
                    border-color: rgba(255, 255, 255, 0.26);
                }

                .word-block.helper,
                .answer-block.selected {
                    background: #191919;
                    border-color: #ffffff;
                    color: #ffffff;
                    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.18);
                }

                .word-block.helper .helper-number {
                    background: #ffffff;
                    color: #050505;
                    border: 1px solid #050505;
                    box-shadow: 0 0 0 2px #ffffff;
                }

                .answer-block.correct,
                .typing-input.correct,
                .input-box.correct,
                .feedback-message.correct {
                    border-color: #ffffff;
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.13);
                    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
                }

                .answer-block.wrong,
                .typing-input.wrong,
                .input-box.wrong,
                .feedback-message.error,
                .modal-title,
                .bad-example,
                .teka-verb,
                .pos-2,
                .prompt-phase {
                    border-color: #ffffff;
                    color: #ffffff !important;
                }

                .answer-block.wrong,
                .typing-input.wrong,
                .input-box.wrong {
                    background: repeating-linear-gradient(
                        135deg,
                        rgba(255, 255, 255, 0.15) 0,
                        rgba(255, 255, 255, 0.15) 6px,
                        rgba(255, 255, 255, 0.06) 6px,
                        rgba(255, 255, 255, 0.06) 12px
                    );
                }

                .modal-card,
                .modal-content,
                .finish-screen {
                    border-color: rgba(255, 255, 255, 0.28);
                }
            `;
        }

        if (settings.mode === "custom") {
            return buildAccentCss(buildCustomPalette(settings.customColor));
        }

        return buildAccentCss(ACCENT_PALETTES[settings.accent] || ACCENT_PALETTES.current);
    }

    function applyTheme() {
        if (!document.head) return;

        const css = buildThemeCss();
        const existingStyle = document.getElementById(OVERRIDE_STYLE_ID);

        if (!css) {
            if (existingStyle) existingStyle.remove();
            return;
        }

        const styleElement = existingStyle || document.createElement("style");
        styleElement.id = OVERRIDE_STYLE_ID;
        styleElement.textContent = css;
        document.head.appendChild(styleElement);
    }

    function setMode(mode) {
        setStoredValue(THEME_STORAGE_KEY, VALID_THEMES.includes(mode) ? mode : "classic");
        applyTheme();
    }

    function setAccent(accent) {
        setStoredValue(ACCENT_STORAGE_KEY, ACCENT_PALETTES[accent] ? accent : "current");
        applyTheme();
    }

    function setCustomColor(color) {
        setStoredValue(CUSTOM_COLOR_STORAGE_KEY, isValidHexColor(color) ? color : DEFAULT_CUSTOM_COLOR);
        applyTheme();
    }

    function keepThemeStyleLast() {
        if (!document.head || window.__appThemeHeadObserver) return;

        const observer = new MutationObserver(() => {
            const styleElement = document.getElementById(OVERRIDE_STYLE_ID);
            if (styleElement && styleElement !== document.head.lastElementChild) {
                document.head.appendChild(styleElement);
            }
        });

        observer.observe(document.head, { childList: true });
        window.__appThemeHeadObserver = observer;
    }

    window.AppTheme = {
        palettes: ACCENT_PALETTES,
        defaultCustomColor: DEFAULT_CUSTOM_COLOR,
        getSettings,
        setMode,
        setAccent,
        setCustomColor,
        applyTheme
    };

    applyTheme();
    keepThemeStyleLast();
    document.addEventListener("DOMContentLoaded", () => {
        applyTheme();
        keepThemeStyleLast();
    });
    window.addEventListener("load", applyTheme);
})();
