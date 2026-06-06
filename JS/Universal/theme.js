(() => {
    const THEME_STORAGE_KEY = "app_design_theme";
    const CUSTOM_COLOR_STORAGE_KEY = "app_design_custom_color";
    const COLOR_BG_STORAGE_KEY = "app_design_color_bg";
    const COLOR_SURFACE_STORAGE_KEY = "app_design_color_surface";
    const COLOR_TEXT_STORAGE_KEY = "app_design_color_text";
    const COLOR_ACCENT_STORAGE_KEY = "app_design_color_accent";
    const CUSTOM_THEME_STORAGE_KEY = "app_design_custom_theme";
    const CUSTOM_CSS_STORAGE_KEY = "app_design_custom_css";
    const CUSTOM_JS_STORAGE_KEY = "app_design_custom_js";
    const OVERRIDE_STYLE_ID = "app-theme-override";

    const DEFAULT_CUSTOM_COLOR = "#f5af19";
    const VALID_THEMES = ["oled", "color", "reui", "custom"];

    const COLOR_PRESETS = {
        midnight: {
            label: "Midnight",
            values: { bg: "#101827", surface: "#172033", text: "#f8fafc", accent: "#38bdf8" }
        },
        graphite: {
            label: "Graphite",
            values: { bg: "#111111", surface: "#1b1b1b", text: "#f5f5f5", accent: "#a3e635" }
        },
        forest: {
            label: "Forest",
            values: { bg: "#071512", surface: "#0d241d", text: "#ecfdf5", accent: "#34d399" }
        },
        berry: {
            label: "Berry",
            values: { bg: "#1b1020", surface: "#2a1731", text: "#fff7ed", accent: "#fb7185" }
        },
        daylight: {
            label: "Daylight",
            values: { bg: "#f7f8fb", surface: "#ffffff", text: "#111827", accent: "#2563eb" }
        },
        ocean: {
            label: "Deep Ocean",
            values: { bg: "#061826", surface: "#0b2536", text: "#e0f2fe", accent: "#0ea5e9" }
        },
        amber: {
            label: "Warm Amber",
            values: { bg: "#1a1207", surface: "#2a1a0b", text: "#fff7ed", accent: "#f59e0b" }
        },
        plum: {
            label: "Plum",
            values: { bg: "#16091f", surface: "#251032", text: "#fdf4ff", accent: "#d946ef" }
        },
        arctic: {
            label: "Arctic",
            values: { bg: "#edf7fb", surface: "#ffffff", text: "#123142", accent: "#0891b2" }
        },
        moss: {
            label: "Moss",
            values: { bg: "#101407", surface: "#1d2610", text: "#f7fee7", accent: "#84cc16" }
        },
        lava: {
            label: "Lava",
            values: { bg: "#170b0b", surface: "#2a1111", text: "#fff1f2", accent: "#ef4444" }
        },
        indigo: {
            label: "Indigo",
            values: { bg: "#0e1028", surface: "#181b3d", text: "#eef2ff", accent: "#818cf8" }
        },
        rosePaper: {
            label: "Rose Paper",
            values: { bg: "#fff1f2", surface: "#ffffff", text: "#3f1723", accent: "#e11d48" }
        }
    };

    const LIQUID_GLASS_CSS = `
/* Liquid Glass preset. Engine switch: CSS / SVG / WebGL. */
:root {
    --liquid-radius: 18px;
    --liquid-highlight: rgba(255, 255, 255, 0.42);
    --liquid-tint: rgba(255, 255, 255, 0.10);
    --liquid-edge: rgba(255, 255, 255, 0.24);
    --liquid-shadow: rgba(6, 11, 25, 0.36);
}

html[data-glass-engine] body {
    background: var(--bg-color) !important;
    overflow-x: hidden;
}

html[data-glass-engine] body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
        radial-gradient(circle at 12% 18%, rgba(125, 211, 252, 0.30), transparent 31%),
        radial-gradient(circle at 78% 12%, rgba(216, 180, 254, 0.26), transparent 28%),
        radial-gradient(circle at 72% 78%, rgba(45, 212, 191, 0.22), transparent 34%);
    filter: blur(10px) saturate(1.18);
}

html[data-glass-engine] header,
html[data-glass-engine] main,
html[data-glass-engine] footer {
    position: relative;
    z-index: 1;
}

html[data-glass-engine] .settings-block,
html[data-glass-engine] .accordion,
html[data-glass-engine] .rule-card,
html[data-glass-engine] .table-card,
html[data-glass-engine] .settings-card,
html[data-glass-engine] .personal-panel,
html[data-glass-engine] .module-card,
html[data-glass-engine] .summary-card,
html[data-glass-engine] .ranking-card,
html[data-glass-engine] .empty-card,
html[data-glass-engine] .run-card,
html[data-glass-engine] .modal-content,
html[data-glass-engine] .modal-card,
html[data-glass-engine] .task-card {
    background:
        linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.055)),
        rgba(255,255,255,0.070) !important;
    border: 1px solid var(--liquid-edge) !important;
    border-radius: var(--liquid-radius) !important;
    box-shadow:
        inset 0 1px 0 var(--liquid-highlight),
        inset 0 -1px 0 rgba(255,255,255,0.07),
        0 22px 54px var(--liquid-shadow) !important;
    backdrop-filter: blur(20px) saturate(1.34);
    -webkit-backdrop-filter: blur(20px) saturate(1.34);
}

html[data-glass-engine] header {
    background: rgba(9, 13, 24, 0.48) !important;
    backdrop-filter: blur(18px) saturate(1.28);
    -webkit-backdrop-filter: blur(18px) saturate(1.28);
}

html[data-glass-engine] h1 {
    background:
        linear-gradient(106deg, rgba(255,255,255,0), rgba(255,255,255,0.72) 45%, rgba(255,255,255,0.08) 74%, rgba(255,255,255,0)),
        linear-gradient(135deg, #ffffff, #a7f3d0, #bfdbfe) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    filter: drop-shadow(0 12px 34px rgba(125,211,252,0.20));
}

html[data-glass-engine="svg"] .settings-block,
html[data-glass-engine="svg"] .accordion,
html[data-glass-engine="svg"] .rule-card,
html[data-glass-engine="svg"] .table-card,
html[data-glass-engine="svg"] .settings-card,
html[data-glass-engine="svg"] .personal-panel,
html[data-glass-engine="svg"] .module-card,
html[data-glass-engine="svg"] .summary-card,
html[data-glass-engine="svg"] .ranking-card,
html[data-glass-engine="svg"] .empty-card,
html[data-glass-engine="svg"] .run-card,
html[data-glass-engine="svg"] .modal-content,
html[data-glass-engine="svg"] .modal-card,
html[data-glass-engine="svg"] .task-card {
    filter: url(#liquid-glass-filter) saturate(1.08);
}

.liquid-webgl-canvas {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease;
}

html[data-glass-engine="webgl"] .liquid-webgl-canvas {
    opacity: 0.64;
}

.liquid-engine-switch {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 9999;
    display: flex;
    gap: 0.35rem;
    padding: 0.4rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.22);
    background: rgba(8, 13, 24, 0.62);
    backdrop-filter: blur(18px) saturate(1.28);
    -webkit-backdrop-filter: blur(18px) saturate(1.28);
    box-shadow: 0 16px 36px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.18);
}

.liquid-engine-switch button {
    border: 0;
    border-radius: 999px;
    padding: 0.48rem 0.7rem;
    background: transparent;
    color: rgba(255,255,255,0.72);
    font-family: Inter, sans-serif;
    font-weight: 800;
    font-size: 0.76rem;
    cursor: pointer;
}

.liquid-engine-switch button.active {
    background: rgba(255,255,255,0.90);
    color: #04111f;
}

@media (max-width: 640px) {
    .liquid-engine-switch {
        right: 0.75rem;
        bottom: 0.75rem;
    }

    .liquid-engine-switch button {
        padding: 0.42rem 0.52rem;
        font-size: 0.72rem;
    }
}`;

    const LIQUID_GLASS_JS = `
(function () {
    var root = document.documentElement;
    var engines = ["css", "svg", "webgl"];
    var storageKey = "liquidGlassEngine";

    function ensureSvgFilter() {
        if (document.getElementById("liquid-glass-svg")) return;
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = "liquid-glass-svg";
        svg.setAttribute("data-theme-artifact", "liquid-glass");
        svg.setAttribute("width", "0");
        svg.setAttribute("height", "0");
        svg.style.position = "fixed";
        svg.style.pointerEvents = "none";
        svg.innerHTML = '<filter id="liquid-glass-filter" x="-12%" y="-12%" width="124%" height="124%"><feTurbulence type="fractalNoise" baseFrequency="0.008 0.014" numOctaves="2" seed="7" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/></filter>';
        document.body.appendChild(svg);
    }

    function createShader(gl, type, source) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }

    function initWebgl(canvas) {
        var gl = canvas.getContext("webgl");
        if (!gl) return;

        var vertex = createShader(gl, gl.VERTEX_SHADER, "attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}");
        var fragment = createShader(gl, gl.FRAGMENT_SHADER, "precision mediump float;uniform vec2 r;uniform float t;void main(){vec2 uv=gl_FragCoord.xy/r.xy;float a=sin((uv.x+t*.035)*8.0)+cos((uv.y-t*.028)*9.0);float b=sin((uv.x+uv.y+t*.018)*12.0);vec3 c=mix(vec3(.05,.12,.22),vec3(.16,.75,.92),smoothstep(-1.2,1.4,a+b));c=mix(c,vec3(.72,.48,1.0),smoothstep(.25,1.8,b));gl_FragColor=vec4(c,.30);}");
        var program = gl.createProgram();
        gl.attachShader(program, vertex);
        gl.attachShader(program, fragment);
        gl.linkProgram(program);
        gl.useProgram(program);

        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
        var position = gl.getAttribLocation(program, "p");
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

        var resolution = gl.getUniformLocation(program, "r");
        var time = gl.getUniformLocation(program, "t");

        function resize() {
            var ratio = window.devicePixelRatio || 1;
            canvas.width = Math.max(1, Math.floor(window.innerWidth * ratio));
            canvas.height = Math.max(1, Math.floor(window.innerHeight * ratio));
            gl.viewport(0, 0, canvas.width, canvas.height);
        }

        function draw(now) {
            resize();
            gl.uniform2f(resolution, canvas.width, canvas.height);
            gl.uniform1f(time, now * 0.001);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);
    }

    function ensureWebglCanvas() {
        if (document.querySelector(".liquid-webgl-canvas")) return;
        var canvas = document.createElement("canvas");
        canvas.className = "liquid-webgl-canvas";
        canvas.setAttribute("data-theme-artifact", "liquid-glass");
        document.body.insertBefore(canvas, document.body.firstChild);
        initWebgl(canvas);
    }

    function ensureSwitcher() {
        if (document.querySelector(".liquid-engine-switch")) return;
        var panel = document.createElement("div");
        panel.className = "liquid-engine-switch";
        panel.setAttribute("data-theme-artifact", "liquid-glass");

        engines.forEach(function (engine) {
            var button = document.createElement("button");
            button.type = "button";
            button.dataset.engine = engine;
            button.textContent = engine.toUpperCase();
            button.addEventListener("click", function () {
                setEngine(engine);
            });
            panel.appendChild(button);
        });

        document.body.appendChild(panel);
    }

    function setEngine(engine) {
        if (engines.indexOf(engine) === -1) engine = "css";
        root.dataset.glassEngine = engine;
        try { localStorage.setItem(storageKey, engine); } catch (error) {}
        ensureSvgFilter();
        ensureWebglCanvas();
        var canvas = document.querySelector(".liquid-webgl-canvas");
        if (canvas) canvas.style.opacity = engine === "webgl" ? "0.64" : "0";
        Array.prototype.forEach.call(document.querySelectorAll(".liquid-engine-switch button"), function (button) {
            button.classList.toggle("active", button.dataset.engine === engine);
        });
    }

    ensureSwitcher();
    ensureSvgFilter();
    ensureWebglCanvas();
    var saved = "css";
    try { saved = localStorage.getItem(storageKey) || "css"; } catch (error) {}
    setEngine(saved);
})();`;

    const CUSTOM_PRESETS = {
        oled: {
            label: "Oled White",
            values: {
                bg: "#000000",
                surface: "#080808",
                text: "#ffffff",
                secondary: "#d4d4d4",
                accent: "#ffffff",
                accent2: "#cfcfcf",
                green: "#f5f5f5",
                border: "rgba(255, 255, 255, 0.26)",
                header: "rgba(0, 0, 0, 0.92)",
                hover: "rgba(255, 255, 255, 0.12)",
                content: "rgba(255, 255, 255, 0.055)"
            }
        },
        graphite: {
            label: "Soft Graphite",
            values: {
                bg: "#101010",
                surface: "#181818",
                text: "#f4f4f5",
                secondary: "#b8b8bd",
                accent: "#e5e7eb",
                accent2: "#a1a1aa",
                green: "#d4d4d8",
                border: "rgba(255, 255, 255, 0.18)",
                header: "rgba(12, 12, 12, 0.88)",
                hover: "rgba(255, 255, 255, 0.09)",
                content: "rgba(255, 255, 255, 0.045)"
            }
        },
        paper: {
            label: "Paper",
            values: {
                bg: "#f8fafc",
                surface: "#ffffff",
                text: "#111827",
                secondary: "#4b5563",
                accent: "#111827",
                accent2: "#475569",
                green: "#047857",
                border: "rgba(17, 24, 39, 0.16)",
                header: "rgba(255, 255, 255, 0.9)",
                hover: "rgba(17, 24, 39, 0.07)",
                content: "rgba(17, 24, 39, 0.035)"
            }
        },
        neon: {
            label: "Neon Code",
            values: {
                bg: "radial-gradient(circle at 20% 0%, rgba(34, 211, 238, 0.18), transparent 32%), #050505",
                surface: "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))",
                text: "#f8fafc",
                secondary: "#cbd5e1",
                accent: "#22d3ee",
                accent2: "#a78bfa",
                green: "#34d399",
                border: "rgba(34, 211, 238, 0.28)",
                header: "linear-gradient(90deg, rgba(5,5,5,0.92), rgba(15,23,42,0.82))",
                hover: "rgba(34, 211, 238, 0.12)",
                content: "rgba(255, 255, 255, 0.055)"
            }
        },
        aurora: {
            label: "Aurora",
            values: {
                bg: "radial-gradient(circle at 15% 15%, rgba(45,212,191,0.28), transparent 32%), radial-gradient(circle at 85% 10%, rgba(129,140,248,0.30), transparent 30%), #060a12",
                surface: "linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
                text: "#f8fafc",
                secondary: "#cbd5e1",
                accent: "#5eead4",
                accent2: "#818cf8",
                green: "#86efac",
                border: "rgba(125, 211, 252, 0.25)",
                header: "rgba(6, 10, 18, 0.82)",
                hover: "rgba(94, 234, 212, 0.13)",
                content: "rgba(255, 255, 255, 0.055)"
            }
        },
        sunset: {
            label: "Sunset",
            values: {
                bg: "linear-gradient(135deg, #2a1018 0%, #251032 45%, #0c1228 100%)",
                surface: "linear-gradient(135deg, rgba(255,255,255,0.085), rgba(255,255,255,0.028))",
                text: "#fff7ed",
                secondary: "#fed7aa",
                accent: "#fb923c",
                accent2: "#f472b6",
                green: "#facc15",
                border: "rgba(251, 146, 60, 0.28)",
                header: "rgba(42, 16, 24, 0.84)",
                hover: "rgba(251, 146, 60, 0.14)",
                content: "rgba(255, 247, 237, 0.055)"
            }
        },
        nord: {
            label: "Nord Frost",
            values: {
                bg: "#0b1220",
                surface: "linear-gradient(135deg, rgba(148,163,184,0.16), rgba(15,23,42,0.82))",
                text: "#e5eef9",
                secondary: "#a8b7c8",
                accent: "#93c5fd",
                accent2: "#c4b5fd",
                green: "#a7f3d0",
                border: "rgba(147, 197, 253, 0.24)",
                header: "rgba(11, 18, 32, 0.88)",
                hover: "rgba(147, 197, 253, 0.12)",
                content: "rgba(148, 163, 184, 0.08)"
            }
        },
        candy: {
            label: "Candy Light",
            values: {
                bg: "linear-gradient(135deg, #fff1f8, #eef6ff)",
                surface: "rgba(255, 255, 255, 0.78)",
                text: "#371326",
                secondary: "#6b3f55",
                accent: "#ec4899",
                accent2: "#38bdf8",
                green: "#14b8a6",
                border: "rgba(236, 72, 153, 0.22)",
                header: "rgba(255, 255, 255, 0.72)",
                hover: "rgba(236, 72, 153, 0.10)",
                content: "rgba(255, 255, 255, 0.52)"
            }
        },
        liquidGlass: {
            label: "Liquid Glass",
            values: {
                bg: "radial-gradient(circle at 15% 10%, rgba(125,211,252,0.22), transparent 32%), radial-gradient(circle at 82% 16%, rgba(216,180,254,0.20), transparent 30%), linear-gradient(135deg, #07111f, #101827 45%, #061826)",
                surface: "rgba(255, 255, 255, 0.075)",
                text: "#f8fafc",
                secondary: "#cbd5e1",
                accent: "#ffffff",
                accent2: "#7dd3fc",
                green: "#a7f3d0",
                border: "rgba(255, 255, 255, 0.24)",
                header: "rgba(8, 13, 24, 0.58)",
                hover: "rgba(255, 255, 255, 0.13)",
                content: "rgba(255, 255, 255, 0.060)"
            },
            css: LIQUID_GLASS_CSS,
            js: LIQUID_GLASS_JS
        }
    };

    const DEFAULT_COLOR_THEME = { ...COLOR_PRESETS.midnight.values };
    const DEFAULT_CUSTOM_THEME = { ...CUSTOM_PRESETS.oled.values };

    function isValidHexColor(value) {
        return /^#[0-9a-f]{6}$/i.test(value || "");
    }

    function isGradient(value) {
        return /\b(linear|radial|conic)-gradient\s*\(/i.test(String(value || ""));
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

    function contrastFor(hex) {
        const rgb = hexToRgb(hex);
        const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        return brightness > 150 ? "#000000" : "#ffffff";
    }

    function cleanCssValue(value, fallback) {
        const text = typeof value === "string" ? value.trim() : "";
        return text || fallback;
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
            // Keep the page usable when storage is blocked.
        }
    }

    function getStoredColor(key, fallback) {
        const value = getStoredValue(key, fallback);
        return isValidHexColor(value) ? value : fallback;
    }

    function readCustomTheme() {
        try {
            const parsed = JSON.parse(localStorage.getItem(CUSTOM_THEME_STORAGE_KEY) || "{}");
            return Object.fromEntries(
                Object.entries(DEFAULT_CUSTOM_THEME).map(([key, fallback]) => [
                    key,
                    cleanCssValue(parsed[key], fallback)
                ])
            );
        } catch (error) {
            return { ...DEFAULT_CUSTOM_THEME };
        }
    }

    function writeCustomTheme(values) {
        const next = { ...readCustomTheme() };
        Object.keys(DEFAULT_CUSTOM_THEME).forEach((key) => {
            if (typeof values?.[key] === "string" && values[key].trim()) {
                next[key] = values[key].trim();
            }
        });
        setStoredValue(CUSTOM_THEME_STORAGE_KEY, JSON.stringify(next));
        applyTheme();
    }

    function normalizeMode(mode) {
        if (VALID_THEMES.includes(mode)) return mode;
        if (mode === "accent") return "color";
        if (mode === "mono" || mode === "classic" || mode === "oledAccent") return "oled";
        return "oled";
    }

    function getSettings() {
        const mode = normalizeMode(getStoredValue(THEME_STORAGE_KEY, "oled"));
        const customColor = getStoredColor(CUSTOM_COLOR_STORAGE_KEY, DEFAULT_CUSTOM_COLOR);

        return {
            mode,
            customColor,
            colorTheme: {
                bg: getStoredColor(COLOR_BG_STORAGE_KEY, DEFAULT_COLOR_THEME.bg),
                surface: getStoredColor(COLOR_SURFACE_STORAGE_KEY, DEFAULT_COLOR_THEME.surface),
                text: getStoredColor(COLOR_TEXT_STORAGE_KEY, DEFAULT_COLOR_THEME.text),
                accent: getStoredColor(COLOR_ACCENT_STORAGE_KEY, DEFAULT_COLOR_THEME.accent)
            },
            customTheme: readCustomTheme(),
            customCss: getStoredValue(CUSTOM_CSS_STORAGE_KEY, ""),
            customJs: getStoredValue(CUSTOM_JS_STORAGE_KEY, "")
        };
    }

    function buildOledVars() {
        return `
            --bg-color: #000000;
            --surface-color: #070707;
            --text-primary: #ffffff;
            --text-secondary: #d4d4d4;
            --accent-gold: #ffffff;
            --accent-red: #d7d7d7;
            --accent-green: #f5f5f5;
            --accent-soft: rgba(255, 255, 255, 0.16);
            --accent-contrast: #000000;
            --border-color: rgba(255, 255, 255, 0.26);
            --header-bg: rgba(0, 0, 0, 0.92);
            --hover-bg: rgba(255, 255, 255, 0.075);
            --hover-bg-strong: rgba(255, 255, 255, 0.14);
            --content-bg: rgba(255, 255, 255, 0.055);
            --shadow-color: rgba(0, 0, 0, 0.44);
        `;
    }

    function buildColorVars(colorTheme) {
        const accent = colorTheme.accent;
        return `
            --bg-color: ${colorTheme.bg};
            --surface-color: ${colorTheme.surface};
            --text-primary: ${colorTheme.text};
            --text-secondary: ${adjustHexColor(colorTheme.text, -28)};
            --accent-gold: ${accent};
            --accent-red: ${adjustHexColor(accent, -30)};
            --accent-green: ${adjustHexColor(accent, 24)};
            --accent-soft: ${alpha(accent, 0.20)};
            --accent-contrast: ${contrastFor(accent)};
            --border-color: ${alpha(adjustHexColor(colorTheme.text, -8), 0.22)};
            --header-bg: ${alpha(colorTheme.bg, 0.88)};
            --hover-bg: ${alpha(accent, 0.08)};
            --hover-bg-strong: ${alpha(accent, 0.16)};
            --content-bg: ${alpha(colorTheme.surface, 0.55)};
            --shadow-color: rgba(0, 0, 0, 0.24);
        `;
    }

    function buildCustomVars(customTheme) {
        const accentColor = isValidHexColor(customTheme.accent) ? customTheme.accent : "#ffffff";
        const textValue = isGradient(customTheme.text) ? DEFAULT_CUSTOM_THEME.text : customTheme.text;

        return `
            :root {
                --bg-color: ${customTheme.bg};
                --surface-color: ${customTheme.surface};
                --text-primary: ${textValue};
                --text-secondary: ${customTheme.secondary};
                --accent-gold: ${customTheme.accent};
                --accent-red: ${customTheme.accent2};
                --accent-green: ${customTheme.green};
                --accent-soft: ${alpha(accentColor, 0.18)};
                --accent-contrast: ${contrastFor(accentColor)};
                --border-color: ${customTheme.border};
                --header-bg: ${customTheme.header};
                --hover-bg: ${customTheme.hover};
                --hover-bg-strong: ${customTheme.hover};
                --content-bg: ${customTheme.content};
                --shadow-color: rgba(0, 0, 0, 0.34);
            }

            body {
                background: ${customTheme.bg} !important;
                color: ${textValue} !important;
            }

            header {
                background: ${customTheme.header} !important;
            }

            .settings-block,
            .accordion,
            .rule-card,
            .table-card,
            .settings-card,
            .personal-panel,
            .module-card,
            .summary-card,
            .ranking-card,
            .empty-card,
            .run-card,
            .modal-content,
            .modal-card {
                background: ${customTheme.surface} !important;
            }

            ${isGradient(customTheme.text) ? `
            h1 {
                background: ${customTheme.text} !important;
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
            }
            ` : ""}
        `;
    }

    function buildGlobalFixCss() {
        return `
            html,
            body {
                background: var(--bg-color) !important;
            }

            body {
                color: var(--text-primary) !important;
            }

            .rule-note,
            .hint-box,
            .prompt-container,
            .task-card,
            .sentence-builder-area.active,
            .input-box {
                background: transparent !important;
            }

            .comparison-table th {
                background: var(--accent-soft) !important;
            }

            .btn-primary,
            .btn.primary,
            .pill-btn.active,
            .practice-count-btn.active,
            .topic-btn.active,
            .mode-btn.active {
                color: var(--accent-contrast) !important;
            }

            .pill-btn.active,
            .practice-count-btn.active,
            .topic-btn.active,
            .mode-btn.active {
                background: var(--accent-gold) !important;
                border-color: var(--accent-gold) !important;
            }

            .btn-secondary:hover,
            .pill-btn:hover,
            .answer-block:hover,
            .legacy-answer-block:hover,
            .word-block:hover,
            .topic-btn:hover,
            .ref-block:hover,
            .mini-action:hover,
            .chip-remove:hover {
                background: var(--accent-gold) !important;
                border-color: var(--accent-gold) !important;
                color: var(--accent-contrast) !important;
            }

            .btn-secondary:hover *,
            .pill-btn:hover *,
            .answer-block:hover *,
            .legacy-answer-block:hover *,
            .word-block:hover *,
            .topic-btn:hover *,
            .ref-block:hover *,
            .mini-action:hover *,
            .chip-remove:hover * {
                color: var(--accent-contrast) !important;
            }

            .attempts-badge {
                background: rgba(196, 63, 67, 0.4) !important;
            }

            .custom-select:focus,
            .typing-input:focus,
            .modal-input:focus,
            .search-input:focus,
            .practice-count-custom:focus {
                
            }
        `;
    }

    function buildReUiCss(settings) {
        const rim = settings.customColor;
        const rim2 = adjustHexColor(rim, -32);
        const darkAccent = "#090b12";
        const darkAccent2 = "#171a24";
        return `
            :root {
                --bg-color:
                    radial-gradient(circle at 14% 10%, ${alpha(rim, 0.18)}, transparent 30%),
                    radial-gradient(circle at 86% 12%, rgba(255, 255, 255, 0.055), transparent 28%),
                    linear-gradient(145deg, #05060a 0%, #0b0d13 46%, #11131a 100%);
                --surface-color: #11131a;
                --text-primary: #f4f7fb;
                --text-secondary: #aeb6c4;
                --accent-gold: ${darkAccent};
                --accent-red: ${darkAccent2};
                --accent-green: #151b24;
                --accent-soft: rgba(255, 255, 255, 0.13);
                --accent-contrast: #f6f8fb;
                --border-color: rgba(255, 255, 255, 0.14);
                --header-bg: rgba(6, 7, 11, 0.82);
                --hover-bg: rgba(255, 255, 255, 0.055);
                --hover-bg-strong: rgba(255, 255, 255, 0.105);
                --content-bg: rgba(255, 255, 255, 0.044);
                --shadow-color: rgba(0, 0, 0, 0.42);
                --reui-rim: ${rim};
                --reui-rim-2: ${rim2};
                --reui-dark: ${darkAccent};
                --reui-dark-2: ${darkAccent2};
            }

            html,
            body {
                background: var(--bg-color) !important;
            }

            body::before {
                content: "";
                position: fixed;
                inset: 0;
                pointer-events: none;
                z-index: 0;
                background:
                    linear-gradient(115deg, rgba(255,255,255,0.055), transparent 26%, rgba(255,255,255,0.026) 58%, transparent 78%),
                    radial-gradient(circle at 50% -10%, ${alpha(rim, 0.10)}, transparent 36%);
                opacity: 0.9;
            }

            header,
            main,
            footer,
            .modal-overlay,
            .modal {
                position: relative;
                z-index: 1;
            }

            h1 {
                background:
                    linear-gradient(106deg, rgba(255, 255, 255, 0), rgba(242, 242, 242, 0.0784313725490196) 22.69%, rgba(255, 255, 255, 0.64) 42.86%, rgba(255, 255, 255, 0.09803921568627451) 73.95%, rgba(255, 255, 255, 0) 97.9%),
                    linear-gradient(135deg, #ffffff, #d7deea 38%, ${alpha(rim, 0.88)});
                -webkit-background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
                filter: drop-shadow(0 14px 26px rgba(0,0,0,0.38));
            }

            .settings-block,
            .accordion,
            .rule-card,
            .table-card,
            .settings-card,
            .personal-panel,
            .module-card,
            .summary-card,
            .ranking-card,
            .empty-card,
            .run-card,
            .modal-content,
            .modal-card,
            .task-card {
                position: relative;
                overflow: hidden;
                background: transparent !important;
                border: 1px solid transparent !important;
                border-image: linear-gradient(128deg, rgba(255,255,255,0.38), ${alpha(rim, 0.40)} 30%, rgba(255,255,255,0.055) 58%, ${alpha(rim2, 0.30)} 82%, rgba(255,255,255,0.14)) 1 !important;
                box-shadow: none !important;
            }

            .settings-block::after,
            .accordion::after,
            .rule-card::after,
            .table-card::after,
            .settings-card::after,
            .personal-panel::after,
            .module-card::after,
            .summary-card::after,
            .ranking-card::after,
            .empty-card::after,
            .run-card::after,
            .modal-content::after,
            .modal-card::after,
            .task-card::after {
                display: none !important;
            }

            header {
                background: none;
                border-bottom: 1px solid transparent !important;
                border-image: linear-gradient(90deg, rgba(255,255,255,0.08), ${alpha(rim, 0.25)}, rgba(255,255,255,0.05)) 1 !important;
                box-shadow: none !important;
                backdrop-filter: blur(18px) saturate(1.18);
                -webkit-backdrop-filter: blur(18px) saturate(1.18);
            }

            .icon-btn {
                position: relative;
                isolation: isolate;
                color: rgba(255, 255, 255, 0.72) !important;
                border: none !important;
                background: none;
                box-shadow: none !important;
            }

            .icon-btn:hover {
                color: rgba(255, 255, 255, 0.92) !important;
                background: none;
                box-shadow: none !important;
            }

            .icon-btn svg,
            header svg,
            .search-box svg {
                stroke: url(#reui-icon-gradient) !important;
                stroke-width: 2.65px;
                filter: none !important;
                opacity: 0.92;
            }

            .icon-btn svg *,
            header svg *,
            .search-box svg * {
                stroke: url(#reui-icon-gradient) !important;
            }

            .btn-primary,
            .btn.primary,
            .danger-btn,
            .btn-secondary,
            .pill-btn,
            .practice-count-btn,
            .topic-btn,
            .answer-block,
            .legacy-answer-block,
            .word-block,
            .ref-block,
            .mini-action,
            .custom-select,
            .theme-preset-btn,
            .theme-apply-btn,
            .search-box,
            .search-clear,
            .custom-color-input,
            .theme-code-input,
            .theme-code-area,
            .typing-input,
            .modal-input,
            .search-input {
                border: 1px solid transparent !important;
                border-image: linear-gradient(130deg, rgba(255,255,255,0.26), ${alpha(rim, 0.22)}, rgba(255,255,255,0.055)) 1 !important;
                background: transparent !important;
                box-shadow: none !important;
            }

            .accordion-content {
                background: transparent !important;
            }

            .btn-primary,
            .btn.primary,
            .pill-btn.active,
            .practice-count-btn.active,
            .topic-btn.active,
            .mode-btn.active {
                background: ${darkAccent} !important;
                border: 1px solid transparent !important;
                border-image: linear-gradient(135deg, rgba(255,255,255,0.34), ${alpha(rim, 0.50)}, rgba(255,255,255,0.10)) 1 !important;
                color: #f8fafc !important;
                box-shadow: none !important;
            }

            .btn-secondary:hover,
            .pill-btn:hover,
            .answer-block:hover,
            .legacy-answer-block:hover,
            .word-block:hover,
            .topic-btn:hover,
            .ref-block:hover,
            .mini-action:hover,
            .theme-preset-btn:hover,
            .theme-apply-btn:hover {
                background: rgba(255, 255, 255, 0.055) !important;
                border-image: linear-gradient(135deg, rgba(255,255,255,0.34), ${alpha(rim, 0.48)}, rgba(255,255,255,0.08)) 1 !important;
                color: #f8fafc !important;
                box-shadow: none !important;
                transform: none !important;
            }

            .comparison-table th {
                background: transparent !important;
                border: 1px solid transparent !important;
                border-image: linear-gradient(130deg, rgba(255,255,255,0.26), ${alpha(rim, 0.22)}, rgba(255,255,255,0.055)) 1 !important;
                box-shadow: none !important;
            }

            .custom-select,
            .custom-color-input,
            .theme-code-input,
            .theme-code-area,
            .typing-input,
            .modal-input,
            .search-input,
            input,
            textarea,
            select {
                border: none !important;
                box-shadow: none !important;
                outline: none !important;
                background: transparent !important;
            }

            .input-box,
            .sentence-builder-area.active,
            .hint-box,
            .rule-note,
            .prompt-container {
                background: transparent !important;
            }

            .module-card:hover,
            .accordion:hover,
            .rule-card:hover,
            .settings-card:hover,
            .table-card:hover {
                border-color: transparent !important;
                box-shadow: none !important;
            }
        `;
    }

    function buildThemeCss(settings = getSettings()) {
        let modeCss = "";

        if (settings.mode === "oled") {
            modeCss = `:root { ${buildOledVars()} }`;
        } else if (settings.mode === "color") {
            modeCss = `:root { ${buildColorVars(settings.colorTheme)} }`;
        } else if (settings.mode === "reui") {
            modeCss = buildReUiCss(settings);
        } else if (settings.mode === "custom") {
            modeCss = buildCustomVars(settings.customTheme);
        }

        const customCss = settings.mode === "custom" && settings.customCss.trim()
            ? `\n/* User custom CSS */\n${settings.customCss}\n`
            : "";

        return `${modeCss}\n${buildGlobalFixCss()}\n${customCss}`;
    }

    function cleanupCustomThemeArtifacts() {
        document.querySelectorAll("[data-theme-artifact]").forEach((element) => {
            element.remove();
        });
        document.documentElement.removeAttribute("data-glass-engine");
    }

    function ensureReUiIconGradient() {
        if (!document.body || document.getElementById("reui-icon-gradient-svg")) return;

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = "reui-icon-gradient-svg";
        svg.setAttribute("data-theme-artifact", "reui");
        svg.setAttribute("width", "0");
        svg.setAttribute("height", "0");
        svg.style.position = "fixed";
        svg.style.pointerEvents = "none";
        svg.innerHTML = `
            <defs>
                <linearGradient id="reui-icon-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.72)" />
                    <stop offset="52%" stop-color="rgba(255,255,255,0.22)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0.04)" />
                </linearGradient>
            </defs>
        `;
        document.body.appendChild(svg);
    }

    function runCustomJs(settings) {
        const code = settings.mode === "custom" ? settings.customJs.trim() : "";
        if (!code) {
            cleanupCustomThemeArtifacts();
            window.__appThemeCustomJsSignature = "";
            return;
        }

        const signature = `${location.pathname}${location.search}::${code}`;
        if (window.__appThemeCustomJsSignature === signature) return;
        cleanupCustomThemeArtifacts();
        window.__appThemeCustomJsSignature = signature;

        try {
            new Function("AppTheme", code)(window.AppTheme || null);
        } catch (error) {
            console.warn("Custom theme JS error:", error);
        }
    }

    function applyTheme() {
        if (!document.head) return;

        const settings = getSettings();
        const styleElement = document.getElementById(OVERRIDE_STYLE_ID) || document.createElement("style");
        styleElement.id = OVERRIDE_STYLE_ID;
        styleElement.textContent = buildThemeCss(settings);
        document.head.appendChild(styleElement);
        runCustomJs(settings);
        if (settings.mode === "reui") {
            ensureReUiIconGradient();
        }
    }

    function setMode(mode) {
        setStoredValue(THEME_STORAGE_KEY, normalizeMode(mode));
        applyTheme();
        setTimeout(applyTheme, 0);
    }

    function setCustomColor(color) {
        setStoredValue(CUSTOM_COLOR_STORAGE_KEY, isValidHexColor(color) ? color : DEFAULT_CUSTOM_COLOR);
        applyTheme();
    }

    function setColorTheme(values) {
        if (!values) return;
        if (isValidHexColor(values.bg)) setStoredValue(COLOR_BG_STORAGE_KEY, values.bg);
        if (isValidHexColor(values.surface)) setStoredValue(COLOR_SURFACE_STORAGE_KEY, values.surface);
        if (isValidHexColor(values.text)) setStoredValue(COLOR_TEXT_STORAGE_KEY, values.text);
        if (isValidHexColor(values.accent)) setStoredValue(COLOR_ACCENT_STORAGE_KEY, values.accent);
        applyTheme();
    }

    function setColorPreset(presetKey) {
        const preset = COLOR_PRESETS[presetKey];
        if (preset) setColorTheme(preset.values);
    }

    function setCustomTheme(values) {
        writeCustomTheme(values);
    }

    function setCustomPreset(presetKey) {
        const preset = CUSTOM_PRESETS[presetKey];
        if (!preset) return;

        const next = { ...readCustomTheme(), ...preset.values };
        setStoredValue(CUSTOM_THEME_STORAGE_KEY, JSON.stringify(next));
        setStoredValue(CUSTOM_CSS_STORAGE_KEY, typeof preset.css === "string" ? preset.css : "");
        setStoredValue(CUSTOM_JS_STORAGE_KEY, typeof preset.js === "string" ? preset.js : "");
        applyTheme();
    }

    function setCustomCode(values) {
        if (typeof values?.css === "string") setStoredValue(CUSTOM_CSS_STORAGE_KEY, values.css);
        if (typeof values?.js === "string") setStoredValue(CUSTOM_JS_STORAGE_KEY, values.js);
        applyTheme();
    }

    function setCustomCss(css) {
        setCustomCode({ css });
    }

    function setCustomJs(js) {
        setCustomCode({ js });
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
        colorPresets: COLOR_PRESETS,
        customPresets: CUSTOM_PRESETS,
        defaultCustomColor: DEFAULT_CUSTOM_COLOR,
        defaultColorTheme: DEFAULT_COLOR_THEME,
        defaultCustomTheme: DEFAULT_CUSTOM_THEME,
        getSettings,
        setMode,
        setCustomColor,
        setColorTheme,
        setColorPreset,
        setCustomTheme,
        setCustomPreset,
        setCustomCode,
        setCustomCss,
        setCustomJs,
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
