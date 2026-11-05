// ==========================================
// 1. ADDING STYLES (CSS)
// ==========================================
const styleElement = document.createElement('style');
styleElement.textContent = `
    @import url('fonts/fonts.css');

    :root {
        --bg-color: #0f172a;        
        --surface-color: #1e293b;   
        --text-primary: #f8fafc;    
        --text-secondary: #94a3b8;  
        --accent-red: #ff4b2b;      
        --accent-gold: #f5af19;     
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
        display: flex;
        flex-direction: column;
        transition: background-color 0.4s ease, color 0.4s ease;
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
        transition: background-color 0.4s ease, border-color 0.4s ease;
    }

    .icon-btn {
        background: transparent;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.75rem;
        transition: all 0.4s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-btn:hover {
        background: var(--hover-bg-strong);
        color: var(--accent-gold);
        transform: translateY(-2px);
    }

    main {
        flex: 1;
        margin-top: 80px; 
        padding: 2rem;
        max-width: 600px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }

    h1 {
        font-size: 3rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -1px;
    }

    .settings-block {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 2rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 6px var(--shadow-color);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .settings-label {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
    }

    .settings-sub-label {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-secondary);
    }

    .settings-control-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }

    .theme-extra-controls {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.85rem;
    }

    .theme-color-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.85rem;
    }

    .theme-panel {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.85rem;
    }

    .theme-preset-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.6rem;
    }

    .theme-preset-btn,
    .theme-apply-btn {
        background: var(--content-bg);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        padding: 0.75rem 0.9rem;
        border-radius: 0.75rem;
        font-family: 'Inter', sans-serif;
        font-size: 0.92rem;
        font-weight: 800;
        cursor: pointer;
        transition: transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease;
    }

    .theme-preset-btn:hover,
    .theme-apply-btn:hover {
        background: var(--accent-gold);
        border-color: var(--accent-gold);
        color: var(--accent-contrast, #000000);
        transform: translateY(-2px);
    }

    .theme-code-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }

    .theme-code-input,
    .theme-code-area {
        width: 100%;
        box-sizing: border-box;
        padding: 0.8rem 0.9rem;
        border-radius: 0.75rem;
        border: 1px solid var(--border-color);
        background: var(--content-bg);
        color: var(--text-primary);
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        outline: none;
        transition: border-color 0.4s ease, box-shadow 0.4s ease;
    }

    .theme-code-area {
        min-height: 8rem;
        resize: vertical;
        line-height: 1.45;
    }

    .theme-code-input:focus,
    .theme-code-area:focus {
        border-color: var(--accent-gold);
        box-shadow: 0 0 0 2px var(--accent-soft);
    }

    @media (max-width: 640px) {
        main {
            margin-top: 64px;
            padding: 1rem;
            max-width: 100%;
        }

        h1 {
            font-size: clamp(1.8rem, 8vw, 2.4rem);
            line-height: 1.12;
            margin-bottom: 1.5rem;
            letter-spacing: 0;
        }

        .settings-block {
            padding: 1rem;
            border-radius: 0.75rem;
        }

        .theme-color-grid {
            grid-template-columns: 1fr;
        }

        .theme-preset-grid {
            grid-template-columns: 1fr;
        }
    }

    .custom-select {
        width: 100%;
        padding: 1rem;
        border-radius: 0.75rem;
        border: 1px solid var(--border-color);
        background: var(--content-bg);
        color: var(--text-primary);
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        outline: none;
        transition: border-color 0.4s ease, box-shadow 0.4s ease;
        appearance: none;
        background-image: url('data:image/svg+xml;utf8,<svg fill="%2394a3b8" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
        background-repeat: no-repeat;
        background-position-x: 95%;
        background-position-y: 50%;
    }

    .custom-select:focus {
        border-color: var(--accent-gold);
        box-shadow: 0 0 0 2px var(--accent-soft);
    }

    .custom-color-input {
        width: 100%;
        min-height: 3.4rem;
        padding: 0.45rem;
        border-radius: 0.75rem;
        border: 1px solid var(--border-color);
        background: var(--content-bg);
        cursor: pointer;
        outline: none;
        transition: border-color 0.4s ease, box-shadow 0.4s ease;
    }

    .custom-color-input:focus {
        border-color: var(--accent-gold);
        box-shadow: 0 0 0 2px var(--accent-soft);
    }

    .danger-btn {
        background: rgba(225, 29, 72, 0.1);
        border: 1px solid rgba(225, 29, 72, 0.3);
        color: #fb7185;
        padding: 1rem;
        border-radius: 0.75rem;
        font-size: 1.05rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.4s ease;
        text-align: center;
        margin-top: 1rem;
    }

    .danger-btn:hover {
        background: rgba(225, 29, 72, 0.2);
        border-color: rgba(225, 29, 72, 0.5);
        color: #f43f5e;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(styleElement);

// Helper function to generate SVG icons without innerHTML
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
// 2. HEADER
// ==========================================
const headerElement = document.createElement("header");

const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = t("settings", "back_to_menu");
// Left arrow icon
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener('click', () => {
    // Navigate back to home
    window.location.href = "index.html?page=Home";
});

headerElement.appendChild(backBtn);

// ==========================================
// 3. MAIN (Content)
// ==========================================
const mainElement = document.createElement("main");

const titleH1 = document.createElement("h1");
titleH1.textContent = t("settings", "settings_title");
mainElement.appendChild(titleH1);

const settingsBlock = document.createElement("div");
settingsBlock.classList.add("settings-block");

// --- Language selector ---
const langLabel = document.createElement("label");
langLabel.classList.add("settings-label");
langLabel.textContent = t("settings", "language_label");

const langSelect = document.createElement("select");
langSelect.classList.add("custom-select");

// Languages in alphabetical order
const languages = [
    { code: "cs", name: "Czech (Čeština)" },
    { code: "da", name: "Danish (Dansk)" },
    { code: "en", name: "English (English)" },
    { code: "de", name: "German (Deutsch)" },
    { code: "pl", name: "Polish (Polski)" },
    { code: "uk", name: "Ukrainian (Українська)" }
];

languages.forEach(lang => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = lang.name;
    if (getLanguage() === lang.code) {
        option.selected = true;
    }
    langSelect.appendChild(option);
});

langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

settingsBlock.appendChild(langLabel);
settingsBlock.appendChild(langSelect);

// --- Design selector ---
const themeSettings = window.AppTheme ? window.AppTheme.getSettings() : {
    mode: "oled",
    customColor: "#f5af19",
    colorTheme: {
        bg: "#101827",
        surface: "#172033",
        text: "#f8fafc",
        accent: "#38bdf8"
    },
    customTheme: {
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
    },
    customCss: "",
    customJs: ""
};

const designLabel = document.createElement("label");
designLabel.classList.add("settings-label");
designLabel.textContent = t("settings", "design_label");

const themeModeRow = document.createElement("div");
themeModeRow.classList.add("settings-control-row");

const themeModeLabel = document.createElement("span");
themeModeLabel.classList.add("settings-sub-label");
themeModeLabel.textContent = t("settings", "design_mode_label");

const themeModeSelect = document.createElement("select");
themeModeSelect.id = "themeModeSelect";
themeModeSelect.classList.add("custom-select");

[
    { value: "oled", label: "design_oled" },
    { value: "color", label: "design_color" },
    { value: "reui", label: "design_reui" },
    { value: "custom", label: "design_custom" }
].forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = t("settings", optionData.label);
    if (themeSettings.mode === optionData.value) {
        option.selected = true;
    }
    themeModeSelect.appendChild(option);
});

themeModeRow.appendChild(themeModeLabel);
themeModeRow.appendChild(themeModeSelect);

const themeExtraControls = document.createElement("div");
themeExtraControls.classList.add("theme-extra-controls");

function createPresetGroup(labelKey, presets, onSelect) {
    const panel = document.createElement("div");
    panel.classList.add("settings-control-row");

    const label = document.createElement("span");
    label.classList.add("settings-sub-label");
    label.textContent = t("settings", labelKey);

    const grid = document.createElement("div");
    grid.classList.add("theme-preset-grid");

    Object.entries(presets || {}).forEach(([key, preset]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("theme-preset-btn");
        button.textContent = preset.label || key;
        button.addEventListener("click", () => onSelect(key, preset));
        grid.appendChild(button);
    });

    panel.appendChild(label);
    panel.appendChild(grid);
    return panel;
}

function createColorField(labelKey, value, onInput) {
    const field = document.createElement("label");
    field.classList.add("settings-control-row");

    const fieldLabel = document.createElement("span");
    fieldLabel.classList.add("settings-sub-label");
    fieldLabel.textContent = t("settings", labelKey);

    const input = document.createElement("input");
    input.classList.add("custom-color-input");
    input.type = "color";
    input.value = value;
    input.addEventListener("input", (event) => {
        onInput(event.target.value, input);
    });

    field.appendChild(fieldLabel);
    field.appendChild(input);

    return { field, input };
}

function createCodeField(labelKey, value, onChange, isArea = false) {
    const field = document.createElement("label");
    field.classList.add("settings-control-row");

    const fieldLabel = document.createElement("span");
    fieldLabel.classList.add("settings-sub-label");
    fieldLabel.textContent = t("settings", labelKey);

    const input = isArea ? document.createElement("textarea") : document.createElement("input");
    input.classList.add(isArea ? "theme-code-area" : "theme-code-input");
    if (!isArea) input.type = "text";
    input.value = value || "";
    input.spellcheck = false;
    input.placeholder = isArea ? "" : "#000000 / rgba(...) / linear-gradient(...)";
    input.addEventListener("change", (event) => onChange(event.target.value, input));

    field.appendChild(fieldLabel);
    field.appendChild(input);
    return { field, input };
}

const colorThemeValues = {
    ...(window.AppTheme ? window.AppTheme.defaultColorTheme : themeSettings.colorTheme),
    ...themeSettings.colorTheme
};
const colorPanel = document.createElement("div");
colorPanel.classList.add("theme-panel");
const colorInputs = {};
const colorThemeGrid = document.createElement("div");
colorThemeGrid.classList.add("theme-color-grid");

function setColorThemeValue(key, value) {
    colorThemeValues[key] = value;
    if (window.AppTheme) {
        window.AppTheme.setColorTheme(colorThemeValues);
    }
}

function syncColorInputs() {
    Object.entries(colorInputs).forEach(([key, input]) => {
        input.value = colorThemeValues[key];
    });
}

[
    { key: "bg", label: "color_bg_label" },
    { key: "surface", label: "color_surface_label" },
    { key: "text", label: "color_text_label" },
    { key: "accent", label: "accent_color_label" }
].forEach((item) => {
    const control = createColorField(item.label, colorThemeValues[item.key], (value) => {
        setColorThemeValue(item.key, value);
    });
    colorInputs[item.key] = control.input;
    colorThemeGrid.appendChild(control.field);
});

const colorPresetGroup = createPresetGroup(
    "color_presets_label",
    window.AppTheme ? window.AppTheme.colorPresets : {},
    (key, preset) => {
        Object.assign(colorThemeValues, preset.values);
        syncColorInputs();
        if (window.AppTheme) {
            window.AppTheme.setColorPreset(key);
        }
    }
);

colorPanel.appendChild(colorPresetGroup);
colorPanel.appendChild(colorThemeGrid);

const reUiAccentControl = createColorField("reui_accent_label", themeSettings.customColor, (value) => {
    if (window.AppTheme) {
        window.AppTheme.setCustomColor(value);
    }
});

const customThemeValues = {
    ...(window.AppTheme ? window.AppTheme.defaultCustomTheme : themeSettings.customTheme),
    ...themeSettings.customTheme
};
const customPanel = document.createElement("div");
customPanel.classList.add("theme-panel");
const customInputs = {};
const customThemeGrid = document.createElement("div");
customThemeGrid.classList.add("theme-code-grid");

function setCustomThemeValue(key, value) {
    customThemeValues[key] = value;
    if (window.AppTheme) {
        window.AppTheme.setCustomTheme(customThemeValues);
    }
}

function syncCustomInputs() {
    Object.entries(customInputs).forEach(([key, input]) => {
        input.value = customThemeValues[key];
    });
}

[
    { key: "bg", label: "color_bg_label" },
    { key: "surface", label: "color_surface_label" },
    { key: "text", label: "color_text_label" },
    { key: "secondary", label: "custom_text_secondary_label" },
    { key: "accent", label: "accent_color_label" },
    { key: "accent2", label: "custom_accent2_label" },
    { key: "green", label: "custom_green_label" },
    { key: "border", label: "custom_border_label" },
    { key: "header", label: "custom_header_label" },
    { key: "hover", label: "custom_hover_label" },
    { key: "content", label: "custom_content_label" }
].forEach((item) => {
    const control = createCodeField(item.label, customThemeValues[item.key], (value) => {
        setCustomThemeValue(item.key, value);
    });
    customInputs[item.key] = control.input;
    customThemeGrid.appendChild(control.field);
});

const customPresetGroup = createPresetGroup(
    "custom_presets_label",
    window.AppTheme ? window.AppTheme.customPresets : {},
    (key, preset) => {
        Object.assign(customThemeValues, preset.values);
        syncCustomInputs();
        customCssControl.input.value = preset.css || "";
        customJsControl.input.value = preset.js || "";
        if (window.AppTheme) {
            window.AppTheme.setCustomPreset(key);
        }
    }
);

const customCssControl = createCodeField("custom_css_label", themeSettings.customCss, () => {}, true);
const customJsControl = createCodeField("custom_js_label", themeSettings.customJs, () => {}, true);

const customCodeApplyBtn = document.createElement("button");
customCodeApplyBtn.type = "button";
customCodeApplyBtn.classList.add("theme-apply-btn");
customCodeApplyBtn.textContent = t("settings", "custom_code_apply");
customCodeApplyBtn.addEventListener("click", () => {
    if (window.AppTheme) {
        window.AppTheme.setCustomCode({
            css: customCssControl.input.value,
            js: customJsControl.input.value
        });
    }
});

customPanel.appendChild(customPresetGroup);
customPanel.appendChild(customThemeGrid);
customPanel.appendChild(customCssControl.field);
customPanel.appendChild(customJsControl.field);
customPanel.appendChild(customCodeApplyBtn);

themeExtraControls.appendChild(colorPanel);
themeExtraControls.appendChild(reUiAccentControl.field);
themeExtraControls.appendChild(customPanel);

function updateThemeControls() {
    colorPanel.style.display = themeModeSelect.value === "color" ? "grid" : "none";
    reUiAccentControl.field.style.display = themeModeSelect.value === "reui" ? "grid" : "none";
    customPanel.style.display = themeModeSelect.value === "custom" ? "grid" : "none";
}

themeModeSelect.addEventListener("change", (event) => {
    if (window.AppTheme) {
        window.AppTheme.setMode(event.target.value);
    }
    updateThemeControls();
});

updateThemeControls();

settingsBlock.appendChild(designLabel);
settingsBlock.appendChild(themeModeRow);
settingsBlock.appendChild(themeExtraControls);

// --- Reset data button ---
const clearDataBtn = document.createElement("button");
clearDataBtn.classList.add("danger-btn");
clearDataBtn.textContent = t("settings", "clear_data_btn");

clearDataBtn.addEventListener('click', () => {
    if (confirm(t("settings", "clear_data_confirm"))) {
        localStorage.clear();
        alert(t("settings", "data_cleared"));
        location.reload();
    }
});

settingsBlock.appendChild(clearDataBtn);
mainElement.appendChild(settingsBlock);

// ==========================================
// 4. INSERT EVERYTHING INTO BODY
// ==========================================
document.body.innerHTML = '';
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
