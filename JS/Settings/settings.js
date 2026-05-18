// ==========================================
// 1. ADDING STYLES (CSS)
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
        box-shadow: 0 0 0 2px rgba(245, 175, 25, 0.2);
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
