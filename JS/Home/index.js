// Constants with themes and lessons (Easy to edit)
const COURSE_MODULES = [
    {
        level: t("home", "module_0_title"),
        topics: [
            t("home", "module_0_topic_1"),
            t("home", "module_0_topic_2"),
            t("home", "module_0_topic_3")
        ]
    },
    {
        level: t("home", "module_1_title"),
        topics: [
            t("home", "module_1_topic_1"),
            t("home", "module_1_topic_2"),
            t("home", "module_1_topic_3"),
            t("home", "module_1_topic_4"),
            t("home", "module_1_topic_5"),
            t("home", "module_1_topic_6"),
            t("home", "module_1_topic_7"),
            t("home", "module_1_topic_8"),
            t("home", "module_1_topic_12"),
            t("home", "module_1_topic_13"),
            t("home", "module_1_topic_14"),
            t("home", "module_1_topic_15"),
            t("home", "module_1_topic_16"),
            t("home", "module_1_topic_17"),
            t("home", "module_1_topic_18"),
            t("home", "module_1_topic_19"),
            t("home", "module_1_topic_20")
        ]
    }
];

// ==========================================
// 1. ADDING STYLES (CSS)
// ==========================================
const styleElement = document.createElement('style');
styleElement.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

    :root {
        /* DARK THEME (Default) */
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
            /* LIGHT THEME (Activates automatically) */
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
        font-size: 3.5rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 3rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -1px;
    }

    .accordion {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        margin-bottom: 1.2rem;
        overflow: hidden;
        transition: all 0.4s ease;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .accordion:hover {
        border-color: var(--text-secondary);
        box-shadow: 0 10px 15px var(--shadow-color);
    }

    .accordion-header {
        padding: 1.5rem;
        font-size: 1.25rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.4s ease, background-color 0.4s ease;
    }

    .accordion-header::after {
        content: '+';
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--text-secondary);
        transition: transform 0.4s ease, color 0.4s ease;
    }

    .accordion.open .accordion-header::after {
        transform: rotate(45deg); 
        color: var(--accent-red);
    }

    .accordion.open .accordion-header {
        border-bottom-color: var(--border-color);
    }

    .accordion-content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.4s ease;
        background: var(--content-bg);
    }

    .accordion.open .accordion-content {
        grid-template-rows: 1fr;
    }

    .topic-list {
        overflow: hidden;
    }

    .topic-list-inner {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .topic-btn {
        background: var(--hover-bg);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        padding: 1.2rem;
        border-radius: 0.75rem;
        font-size: 1.05rem;
        font-weight: 500;
        text-align: left;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
    }

    .topic-btn::before {
        content: '';
        width: 8px;
        height: 8px;
        background: var(--text-secondary);
        border-radius: 50%;
        margin-right: 1rem;
        transition: background 0.4s ease;
    }

    .topic-btn:hover {
        background: var(--hover-bg-strong);
        border-color: var(--accent-gold);
        transform: translateX(8px); 
    }

    .topic-btn:hover::before {
        background: var(--accent-gold);
    }

    footer {
        padding: 2.5rem 2rem;
        text-align: center;
        border-top: 1px solid var(--border-color);
        background: var(--surface-color);
        margin-top: 4rem;
        transition: background-color 0.4s ease, border-color 0.4s ease;
    }

    .footer-note {
        font-weight: 600;
        color: var(--accent-red);
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    .footer-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .footer-links a {
        color: var(--text-secondary);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.4s ease;
    }

    .footer-links a:hover {
        color: var(--text-primary);
    }
`;
document.head.appendChild(styleElement);

// Helper function to generate SVG icons without innerHTML
function createSVGIcon(pathData, isSettings = false) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    if (isSettings) {
        svg.setAttribute("stroke-width", "2");
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "12");
        circle.setAttribute("cy", "12");
        circle.setAttribute("r", "3");
        svg.appendChild(circle);
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);

    return svg;
}

// ==========================================
// 2. HEADER
// ==========================================
const headerElement = document.createElement("header");

const statBtn = document.createElement("button");
statBtn.classList.add("icon-btn");
statBtn.title = t("home", "stat_btn");
statBtn.appendChild(createSVGIcon("M18 20V10M12 20V4M6 20v-6"));
statBtn.addEventListener('click', () => {
    window.location.href = "index.html?page=Statistics";
});

const settingsBtn = document.createElement("button");
settingsBtn.classList.add("icon-btn");
settingsBtn.title = t("home", "settings_btn");
settingsBtn.appendChild(createSVGIcon("M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z", true));

settingsBtn.addEventListener('click', () => {
    window.location.href = "index.html?page=Settings";
});

headerElement.appendChild(statBtn);
headerElement.appendChild(settingsBtn);

// ==========================================
// 3. MAIN (Content)
// ==========================================
const mainElement = document.createElement("main");

const titleH1 = document.createElement("h1");
titleH1.textContent = "Ich Liebe Deutsch";
mainElement.appendChild(titleH1);

// Loop over our constant to create lists
COURSE_MODULES.forEach(module => {
    const accordionDiv = document.createElement("div");
    accordionDiv.classList.add("accordion");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("accordion-header");
    headerDiv.textContent = module.level;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("accordion-content");

    const topicListDiv = document.createElement("div");
    topicListDiv.classList.add("topic-list");

    const topicListInnerDiv = document.createElement("div");
    topicListInnerDiv.classList.add("topic-list-inner");

    module.topics.forEach(topicText => {
        const btn = document.createElement("button");
        btn.classList.add("topic-btn");
        btn.textContent = topicText;

        // Bind click for Alphabet topic
        if (topicText === t("home", "module_0_topic_1")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=Alphabet";
            });
        }

        // Bind click for Pronunciation topic
        if (topicText === t("home", "module_0_topic_2")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=Pronunciation";
            });
        }

        // Bind click for Full word list topic
        if (topicText === t("home", "module_0_topic_3")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=Vocabulary";
            });
        }

        // Bind click for topic 1. Pronouns
        if (topicText === t("home", "module_1_topic_1")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=Pronouns";
            });
        }

        // Bind click for topic 2. Verb Conjugation
        if (topicText === t("home", "module_1_topic_2")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=VerbConjugation";
            });
        }

        // Bind click for topic 3. Verbs haben & sein
        if (topicText === t("home", "module_1_topic_3")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=HabenSein";
            });
        }

        // Bind click for topic 4. Articles
        if (topicText === t("home", "module_1_topic_4")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=Articles";
            });
        }

        // Bind click for topic 5. Affirmative Sentences
        if (topicText === t("home", "module_1_topic_5")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=AffirmativeSentences";
            });
        }
        
        if (topicText === t("home", "module_1_topic_6")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=InterrogativeSentences";
            });
        }

        if (topicText === t("home", "module_1_topic_7")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=QuestionWords";
            });
        }

        if (topicText === t("home", "module_1_topic_8")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=Negation";
            });
        }

        if (topicText === t("home", "module_1_topic_15")) {
            btn.addEventListener('click', () => {
                window.location.href = "index.html?page=PossessivePronouns";
            });
        }

        topicListInnerDiv.appendChild(btn);
    });

    topicListDiv.appendChild(topicListInnerDiv);
    contentDiv.appendChild(topicListDiv);
    accordionDiv.appendChild(headerDiv);
    accordionDiv.appendChild(contentDiv);

    // Add smooth expand logic (toggle open class)
    headerDiv.addEventListener('click', () => {
        accordionDiv.classList.toggle('open');
    });

    mainElement.appendChild(accordionDiv);
});

// ==========================================
// 4. FOOTER
// ==========================================
const footerElement = document.createElement("footer");

const noteDiv = document.createElement("div");
noteDiv.classList.add("footer-note");
noteDiv.textContent = t("home", "footer_note");
footerElement.appendChild(noteDiv);

const linksDiv = document.createElement("div");
linksDiv.classList.add("footer-links");

const SOCIAL_LINKS = [
    { text: "GitHub", url: "https://github.com/adm1nsys" },
    { text: "Instagram", url: "https://www.instagram.com/_george_.jpg/" },
    { text: t("home", "other_languages"), url: "#" }
];

SOCIAL_LINKS.forEach(linkInfo => {
    const aTag = document.createElement("a");
    aTag.href = linkInfo.url;
    aTag.target = "_blank";
    aTag.textContent = linkInfo.text;
    linksDiv.appendChild(aTag);
});

footerElement.appendChild(linksDiv);

// ==========================================
// 5. INSERT EVERYTHING INTO BODY
// ==========================================
// Clear body before insertion (in case of script reload)
document.body.innerHTML = '';
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
document.body.appendChild(footerElement);
