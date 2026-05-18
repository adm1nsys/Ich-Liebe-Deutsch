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
        max-width: 800px;
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

    .alphabet-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 1.5rem;
        padding-bottom: 3rem;
    }

    .letter-card {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .letter-card:hover {
        border-color: var(--accent-gold);
        transform: translateY(-5px);
        box-shadow: 0 10px 15px var(--shadow-color);
    }

    .letter-main {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 0.8rem;
    }

    .letter-pronunciation {
        font-size: 1.1rem;
        color: var(--accent-red);
        font-weight: 600;
        background: var(--content-bg);
        border: 1px solid rgba(255, 75, 43, 0.3);
        padding: 0.3rem 0.8rem;
        border-radius: 0.5rem;
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
backBtn.title = t("alphabet", "back_to_menu");
// Иконка стрелки влево
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener('click', () => {
    // Возвращаемся на главную
    window.location.href = "index.html?page=Home";
});

headerElement.appendChild(backBtn);

// ==========================================
// 3. MAIN (Контент)
// ==========================================
const mainElement = document.createElement("main");

const titleH1 = document.createElement("h1");
titleH1.textContent = t("alphabet", "alphabet_title");
mainElement.appendChild(titleH1);

const alphabetGrid = document.createElement("div");
alphabetGrid.classList.add("alphabet-grid");

const ALPHABET = [
    { letter: "A a", pron: t("alphabet", "a_pron") },
    { letter: "B b", pron: t("alphabet", "b_pron") },
    { letter: "C c", pron: t("alphabet", "c_pron") },
    { letter: "D d", pron: t("alphabet", "d_pron") },
    { letter: "E e", pron: t("alphabet", "e_pron") },
    { letter: "F f", pron: t("alphabet", "f_pron") },
    { letter: "G g", pron: t("alphabet", "g_pron") },
    { letter: "H h", pron: t("alphabet", "h_pron") },
    { letter: "I i", pron: t("alphabet", "i_pron") },
    { letter: "J j", pron: t("alphabet", "j_pron") },
    { letter: "K k", pron: t("alphabet", "k_pron") },
    { letter: "L l", pron: t("alphabet", "l_pron") },
    { letter: "M m", pron: t("alphabet", "m_pron") },
    { letter: "N n", pron: t("alphabet", "n_pron") },
    { letter: "O o", pron: t("alphabet", "o_pron") },
    { letter: "P p", pron: t("alphabet", "p_pron") },
    { letter: "Q q", pron: t("alphabet", "q_pron") },
    { letter: "R r", pron: t("alphabet", "r_pron") },
    { letter: "S s", pron: t("alphabet", "s_pron") },
    { letter: "T t", pron: t("alphabet", "t_pron") },
    { letter: "U u", pron: t("alphabet", "u_pron") },
    { letter: "V v", pron: t("alphabet", "v_pron") },
    { letter: "W w", pron: t("alphabet", "w_pron") },
    { letter: "X x", pron: t("alphabet", "x_pron") },
    { letter: "Y y", pron: t("alphabet", "y_pron") },
    { letter: "Z z", pron: t("alphabet", "z_pron") },
    { letter: "Ä ä", pron: t("alphabet", "ae_pron") },
    { letter: "Ö ö", pron: t("alphabet", "oe_pron") },
    { letter: "Ü ü", pron: t("alphabet", "ue_pron") },
    { letter: "ß", pron: t("alphabet", "ss_pron") }
];

ALPHABET.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("letter-card");

    const letterSpan = document.createElement("span");
    letterSpan.classList.add("letter-main");
    letterSpan.textContent = item.letter;

    const pronSpan = document.createElement("span");
    pronSpan.classList.add("letter-pronunciation");
    pronSpan.textContent = item.pron;

    card.appendChild(letterSpan);
    card.appendChild(pronSpan);
    alphabetGrid.appendChild(card);
});

mainElement.appendChild(alphabetGrid);

// ==========================================
// 4. ВСТРАИВАЕМ ВСЁ В BODY
// ==========================================
document.body.innerHTML = '';
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
