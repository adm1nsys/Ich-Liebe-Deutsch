// ==========================================
// 1. ADDING STYLES (CSS)
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
            --accent-green: #059669;
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
    }

    .icon-btn {
        background: transparent;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.75rem;
        transition: all 0.3s ease;
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
        margin-top: 80px;
        padding: 2rem;
        max-width: 1100px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }

    h1 {
        font-size: 3rem;
        font-weight: 800;
        text-align: center;
        margin: 0 0 2rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .summary-grid, .ranking-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .summary-card, .ranking-card, .module-card, .empty-card {
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 1rem;
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .summary-card {
        padding: 1.25rem;
    }

    .summary-label {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .summary-value {
        color: var(--text-primary);
        font-size: 2rem;
        font-weight: 800;
    }

    .section-title {
        margin: 2rem 0 1rem;
        color: var(--text-primary);
        font-size: 1.35rem;
        font-weight: 800;
    }

    .ranking-card {
        padding: 1.25rem;
    }

    .ranking-title {
        color: var(--accent-gold);
        font-weight: 800;
        margin-bottom: 0.85rem;
    }

    .ranking-list {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
    }

    .ranking-item {
        display: grid;
        grid-template-columns: 2rem 1fr;
        gap: 0.75rem;
        align-items: start;
        background: var(--content-bg);
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        padding: 0.75rem;
    }

    .rank-number {
        color: var(--accent-red);
        font-weight: 800;
    }

    .rank-main {
        color: var(--text-primary);
        font-weight: 700;
    }

    .rank-meta, .run-meta, .param-chip {
        color: var(--text-secondary);
        font-size: 0.88rem;
    }

    .module-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .module-card {
        overflow: hidden;
    }

    .module-header {
        width: 100%;
        border: none;
        background: transparent;
        color: var(--text-primary);
        padding: 1.25rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        text-align: left;
        font: inherit;
    }

    .module-title {
        font-weight: 800;
    }

    .module-count {
        color: var(--text-secondary);
        font-size: 0.9rem;
        white-space: nowrap;
    }

    .module-body {
        display: none;
        padding: 0 1.25rem 1.25rem;
        border-top: 1px solid var(--border-color);
        background: var(--content-bg);
    }

    .module-card.open .module-body {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
    }

    .run-card {
        margin-top: 1rem;
        background: var(--surface-color);
        border: 1px solid var(--border-color);
        border-radius: 0.9rem;
        padding: 1rem;
    }

    .run-card.pinned {
        border-color: var(--accent-gold);
    }

    .run-top {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        align-items: center;
    }

    .run-title {
        font-weight: 800;
        color: var(--text-primary);
    }

    .run-name-input {
        width: 100%;
        margin-top: 0.75rem;
        box-sizing: border-box;
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        background: var(--content-bg);
        color: var(--text-primary);
        padding: 0.85rem;
        font: inherit;
        outline: none;
    }

    .run-name-input:focus {
        border-color: var(--accent-gold);
        box-shadow: 0 0 0 2px rgba(245, 175, 25, 0.18);
    }

    .run-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 0.5rem;
    }

    .pin-btn, .delete-run-btn {
        border: 1px solid var(--border-color);
        background: var(--hover-bg);
        color: var(--text-primary);
        padding: 0.7rem 0.9rem;
        border-radius: 0.75rem;
        cursor: pointer;
        font-weight: 700;
    }

    .pin-btn.active {
        border-color: var(--accent-gold);
        color: var(--accent-gold);
    }

    .delete-run-btn {
        color: var(--accent-red);
    }

    .delete-run-btn:hover {
        border-color: var(--accent-red);
        background: rgba(225, 29, 72, 0.12);
    }

    .run-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 0.7rem;
        margin-top: 0.9rem;
    }

    .run-stat {
        background: var(--content-bg);
        border: 1px solid var(--border-color);
        border-radius: 0.75rem;
        padding: 0.75rem;
    }

    .run-stat-label {
        color: var(--text-secondary);
        font-size: 0.8rem;
        margin-bottom: 0.25rem;
    }

    .run-stat-value {
        color: var(--text-primary);
        font-weight: 800;
    }

    .params-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.9rem;
    }

    .param-chip {
        border: 1px solid var(--border-color);
        background: var(--content-bg);
        border-radius: 999px;
        padding: 0.45rem 0.7rem;
    }

    .empty-card {
        padding: 2rem;
        text-align: center;
        color: var(--text-secondary);
    }

    @media (max-width: 640px) {
        main { padding: 1rem; }
        h1 { font-size: 2.2rem; }
        .run-top { grid-template-columns: 1fr; }
        .run-actions { justify-content: flex-start; }
        .module-header { align-items: flex-start; flex-direction: column; }
    }
`;
document.head.appendChild(styleElement);

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

const MODULE_TITLE_KEYS = {
    Vocabulary: "module_0_topic_3",
    Pronouns: "module_1_topic_1",
    VerbConjugation: "module_1_topic_2",
    HabenSein: "module_1_topic_3",
    Articles: "module_1_topic_4",
    AffirmativeSentences: "module_1_topic_5",
    InterrogativeSentences: "module_1_topic_6",
    QuestionWords: "module_1_topic_7",
    Negation: "module_1_topic_8",
    PossessivePronouns: "module_1_topic_15"
};

function getModuleName(run) {
    const titleKey = MODULE_TITLE_KEYS[run.moduleId];
    return titleKey ? t("home", titleKey) : run.moduleName;
}

function formatDate(value) {
    try {
        return new Intl.DateTimeFormat(getLanguage(), {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date(value));
    } catch (error) {
        return value || "";
    }
}

function formatDuration(durationMs) {
    const totalSeconds = Math.max(0, Math.round((durationMs || 0) / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes <= 0) return `${seconds}s`;
    return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
}

function createTextElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
}

function sortedRuns(runs) {
    return [...runs].sort((a, b) => {
        if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
        return new Date(b.finishedAt || b.startedAt) - new Date(a.finishedAt || a.startedAt);
    });
}

function getBestRuns(runs) {
    return [...runs]
        .sort((a, b) => (a.mistakeCount - b.mistakeCount) || ((a.durationMs || 0) - (b.durationMs || 0)))
        .slice(0, 5);
}

function getWorstRuns(runs) {
    return [...runs]
        .sort((a, b) => (b.mistakeCount - a.mistakeCount) || ((b.durationMs || 0) - (a.durationMs || 0)))
        .slice(0, 5);
}

function renderSummary(container, runs) {
    const totalErrors = runs.reduce((sum, run) => sum + (run.mistakeCount || 0), 0);
    const totalTime = runs.reduce((sum, run) => sum + (run.durationMs || 0), 0);
    const averageErrors = runs.length ? (totalErrors / runs.length).toFixed(1) : "0";

    const summaryGrid = document.createElement("div");
    summaryGrid.className = "summary-grid";

    [
        { label: t("statistics", "summary_runs"), value: runs.length },
        { label: t("statistics", "summary_errors"), value: totalErrors },
        { label: t("statistics", "summary_time"), value: formatDuration(totalTime) },
        { label: t("statistics", "summary_average"), value: averageErrors }
    ].forEach(item => {
        const card = document.createElement("div");
        card.className = "summary-card";
        card.appendChild(createTextElement("div", "summary-label", item.label));
        card.appendChild(createTextElement("div", "summary-value", String(item.value)));
        summaryGrid.appendChild(card);
    });

    container.appendChild(summaryGrid);
}

function renderRankingList(container, title, runs) {
    const card = document.createElement("div");
    card.className = "ranking-card";
    card.appendChild(createTextElement("div", "ranking-title", title));

    const list = document.createElement("div");
    list.className = "ranking-list";

    if (!runs.length) {
        list.appendChild(createTextElement("div", "rank-meta", t("statistics", "empty_desc")));
    }

    runs.forEach((run, index) => {
        const item = document.createElement("div");
        item.className = "ranking-item";
        item.appendChild(createTextElement("div", "rank-number", String(index + 1)));

        const body = document.createElement("div");
        const name = run.name ? `${run.name} · ${getModuleName(run)}` : getModuleName(run);
        body.appendChild(createTextElement("div", "rank-main", name));
        body.appendChild(createTextElement(
            "div",
            "rank-meta",
            `${t("statistics", "errors_label")}: ${run.mistakeCount || 0} · ${t("statistics", "duration_label")}: ${formatDuration(run.durationMs)}`
        ));
        item.appendChild(body);
        list.appendChild(item);
    });

    card.appendChild(list);
    container.appendChild(card);
}

function renderRunCard(run) {
    const card = document.createElement("div");
    card.className = `run-card${run.pinned ? " pinned" : ""}`;

    const top = document.createElement("div");
    top.className = "run-top";

    const titleWrap = document.createElement("div");
    const title = run.name ? `${run.name} · ${getModuleName(run)}` : getModuleName(run);
    titleWrap.appendChild(createTextElement("div", "run-title", title));
    titleWrap.appendChild(createTextElement("div", "run-meta", formatDate(run.finishedAt || run.startedAt)));
    top.appendChild(titleWrap);

    const actions = document.createElement("div");
    actions.className = "run-actions";

    const pinBtn = document.createElement("button");
    pinBtn.type = "button";
    pinBtn.className = `pin-btn${run.pinned ? " active" : ""}`;
    pinBtn.textContent = run.pinned ? t("statistics", "unpin_btn") : t("statistics", "pin_btn");
    pinBtn.onclick = () => {
        window.AppStats.updateRun(run.id, { pinned: !run.pinned });
        render();
    };
    actions.appendChild(pinBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-run-btn";
    deleteBtn.textContent = t("statistics", "delete_btn");
    deleteBtn.onclick = () => {
        if (!confirm(t("statistics", "delete_confirm"))) return;
        window.AppStats.deleteRun(run.id);
        render();
    };
    actions.appendChild(deleteBtn);

    top.appendChild(actions);
    card.appendChild(top);

    const nameInput = document.createElement("input");
    nameInput.className = "run-name-input";
    nameInput.type = "text";
    nameInput.value = run.name || "";
    nameInput.placeholder = t("statistics", "name_placeholder");
    nameInput.addEventListener("change", () => {
        window.AppStats.updateRun(run.id, { name: nameInput.value.trim() });
        render();
    });
    card.appendChild(nameInput);

    const stats = document.createElement("div");
    stats.className = "run-stats";
    [
        { label: t("statistics", "date_label"), value: formatDate(run.finishedAt || run.startedAt) },
        { label: t("statistics", "duration_label"), value: formatDuration(run.durationMs) },
        { label: t("statistics", "errors_label"), value: String(run.mistakeCount || 0) }
    ].forEach(item => {
        const stat = document.createElement("div");
        stat.className = "run-stat";
        stat.appendChild(createTextElement("div", "run-stat-label", item.label));
        stat.appendChild(createTextElement("div", "run-stat-value", item.value));
        stats.appendChild(stat);
    });
    card.appendChild(stats);

    const params = document.createElement("div");
    params.className = "params-grid";
    const runParams = Array.isArray(run.params) ? run.params : [];
    if (!runParams.length) {
        params.appendChild(createTextElement("span", "param-chip", t("statistics", "no_params")));
    } else {
        runParams.forEach(param => {
            params.appendChild(createTextElement("span", "param-chip", `${param.label}: ${param.value}`));
        });
    }
    card.appendChild(params);

    return card;
}

function renderModuleList(container, runs) {
    const title = createTextElement("div", "section-title", t("statistics", "runs_by_module"));
    container.appendChild(title);

    const moduleList = document.createElement("div");
    moduleList.className = "module-list";

    const groups = sortedRuns(runs).reduce((map, run) => {
        const key = run.moduleId || run.moduleName;
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(run);
        return map;
    }, new Map());

    Array.from(groups.entries()).forEach(([moduleId, moduleRuns], index) => {
        const card = document.createElement("div");
        card.className = `module-card${index === 0 ? " open" : ""}`;

        const header = document.createElement("button");
        header.type = "button";
        header.className = "module-header";
        header.appendChild(createTextElement("span", "module-title", getModuleName(moduleRuns[0])));
        header.appendChild(createTextElement(
            "span",
            "module-count",
            t("statistics", "runs_count").replace("{count}", moduleRuns.length)
        ));
        header.onclick = () => card.classList.toggle("open");

        const body = document.createElement("div");
        body.className = "module-body";
        sortedRuns(moduleRuns).forEach(run => body.appendChild(renderRunCard(run)));

        card.appendChild(header);
        card.appendChild(body);
        moduleList.appendChild(card);
    });

    container.appendChild(moduleList);
}

const headerElement = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = t("statistics", "back_to_menu");
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener("click", () => {
    window.location.href = "index.html?page=Home";
});
headerElement.appendChild(backBtn);

const mainElement = document.createElement("main");
const title = document.createElement("h1");
title.textContent = t("statistics", "stats_title");
mainElement.appendChild(title);

function render() {
    mainElement.innerHTML = "";
    mainElement.appendChild(title);

    const runs = window.AppStats ? window.AppStats.getRuns() : [];

    if (!runs.length) {
        const empty = document.createElement("div");
        empty.className = "empty-card";
        empty.appendChild(createTextElement("h2", null, t("statistics", "empty_title")));
        empty.appendChild(createTextElement("p", null, t("statistics", "empty_desc")));
        mainElement.appendChild(empty);
        return;
    }

    renderSummary(mainElement, runs);

    const rankingGrid = document.createElement("div");
    rankingGrid.className = "ranking-grid";
    renderRankingList(rankingGrid, t("statistics", "best_title"), getBestRuns(runs));
    renderRankingList(rankingGrid, t("statistics", "worst_title"), getWorstRuns(runs));
    mainElement.appendChild(rankingGrid);

    renderModuleList(mainElement, runs);
}

document.body.innerHTML = "";
document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
render();
