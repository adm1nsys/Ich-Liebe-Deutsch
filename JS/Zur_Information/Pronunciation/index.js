// ==========================================
// 1. ДОБАВЛЕНИЕ СТИЛЕЙ (CSS)
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
        max-width: 900px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }

    h1 {
        font-size: 2.8rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -1px;
    }

    .pron-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
        padding-bottom: 3rem;
    }

    .pron-card {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        transition: all 0.4s ease;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .pron-card:hover {
        border-color: var(--accent-gold);
        transform: translateY(-5px);
        box-shadow: 0 10px 15px var(--shadow-color);
    }

    .pron-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        width: 100%;
    }

    .pron-combo {
        font-size: 1.8rem;
        font-weight: 800;
        color: var(--text-primary);
    }

    .pron-transcription {
        align-self: flex-start;
        font-size: 1.1rem;
        color: var(--accent-red);
        font-weight: 600;
        background: var(--content-bg);
        border: 1px solid rgba(255, 75, 43, 0.3);
        padding: 0.3rem 0.8rem;
        border-radius: 0.5rem;
    }

    .pron-example {
        font-size: 1rem;
        color: var(--text-secondary);
        font-weight: 400;
        font-style: italic;
    }

    .pron-example span {
        font-weight: 600;
        color: var(--text-primary);
        font-style: normal;
        margin-right: 0.5rem;
    }
`;
document.head.appendChild(styleElement);

// Вспомогательная функция для генерации SVG иконок без innerHTML
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
backBtn.title = t("pronunciation", "back_to_menu");
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener('click', () => {
    window.location.href = "index.html?page=Home";
});

headerElement.appendChild(backBtn);

// ==========================================
// 3. MAIN (Контент)
// ==========================================
const mainElement = document.createElement("main");

const titleH1 = document.createElement("h1");
titleH1.textContent = t("pronunciation", "pronunciation_title");
mainElement.appendChild(titleH1);

const pronGrid = document.createElement("div");
pronGrid.classList.add("pron-grid");

const PRON_RULES = [
    { combo: t("pronunciation", "ei_ai"), pron: t("pronunciation", "ei_ai_pron"), ex: t("pronunciation", "ei_ai_ex") },
    { combo: t("pronunciation", "ie"), pron: t("pronunciation", "ie_pron"), ex: t("pronunciation", "ie_ex") },
    { combo: t("pronunciation", "eu_au"), pron: t("pronunciation", "eu_au_pron"), ex: t("pronunciation", "eu_au_ex") },
    
    { combo: t("pronunciation", "sch"), pron: t("pronunciation", "sch_pron"), ex: t("pronunciation", "sch_ex") },
    { combo: t("pronunciation", "sp"), pron: t("pronunciation", "sp_pron"), ex: t("pronunciation", "sp_ex") },
    { combo: t("pronunciation", "st"), pron: t("pronunciation", "st_pron"), ex: t("pronunciation", "st_ex") },
    { combo: t("pronunciation", "ch_soft"), pron: t("pronunciation", "ch_soft_pron"), ex: t("pronunciation", "ch_soft_ex") },
    { combo: t("pronunciation", "ch_hard"), pron: t("pronunciation", "ch_hard_pron"), ex: t("pronunciation", "ch_hard_ex") },
    { combo: t("pronunciation", "tsch"), pron: t("pronunciation", "tsch_pron"), ex: t("pronunciation", "tsch_ex") },
    { combo: t("pronunciation", "qu"), pron: t("pronunciation", "qu_pron"), ex: t("pronunciation", "qu_ex") },
    { combo: t("pronunciation", "tion"), pron: t("pronunciation", "tion_pron"), ex: t("pronunciation", "tion_ex") },
    { combo: t("pronunciation", "ig"), pron: t("pronunciation", "ig_pron"), ex: t("pronunciation", "ig_ex") },

    { combo: t("pronunciation", "w"), pron: t("pronunciation", "w_pron"), ex: t("pronunciation", "w_ex") },
    { combo: t("pronunciation", "v"), pron: t("pronunciation", "v_pron"), ex: t("pronunciation", "v_ex") },
    { combo: t("pronunciation", "z"), pron: t("pronunciation", "z_pron"), ex: t("pronunciation", "z_ex") },
    { combo: t("pronunciation", "s"), pron: t("pronunciation", "s_pron"), ex: t("pronunciation", "s_ex") },
    { combo: t("pronunciation", "j"), pron: t("pronunciation", "j_pron"), ex: t("pronunciation", "j_ex") },
    { combo: t("pronunciation", "r"), pron: t("pronunciation", "r_pron"), ex: t("pronunciation", "r_ex") }
];

PRON_RULES.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("pron-card");

    const header = document.createElement("div");
    header.classList.add("pron-header");

    const comboSpan = document.createElement("span");
    comboSpan.classList.add("pron-combo");
    comboSpan.textContent = item.combo;

    const pronSpan = document.createElement("span");
    pronSpan.classList.add("pron-transcription");
    pronSpan.textContent = item.pron;

    header.appendChild(comboSpan);
    header.appendChild(pronSpan);

    const exampleSpan = document.createElement("div");
    exampleSpan.classList.add("pron-example");
    // Используем span для жирного выделения
    const exampleLabel = document.createElement("span");
    exampleLabel.textContent = t("pronunciation", "for_example");
    
    exampleSpan.appendChild(exampleLabel);
    exampleSpan.appendChild(document.createTextNode(" " + item.ex));

    card.appendChild(header);
    card.appendChild(exampleSpan);
    pronGrid.appendChild(card);
});

mainElement.appendChild(pronGrid);

// ==========================================
// 4. ВСТРАИВАЕМ ВСЁ В BODY
// ==========================================
document.body.innerHTML = '';
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
