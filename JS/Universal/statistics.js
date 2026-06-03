(() => {
    const RUNS_STORAGE_KEY = "app_practice_stats_runs";
    const VALID_MODE = "UNASSISTED";
    const TIMER_STYLE_ID = "app-practice-timer-style";
    const TIMER_ELEMENT_ID = "app-practice-timer";
    const activeRuns = {};
    let activeTimerRunId = null;
    let timerIntervalId = null;

    function formatTimerDuration(durationMs) {
        const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        }

        return `${minutes}:${String(seconds).padStart(2, "0")}`;
    }

    function getTimerLabel() {
        return typeof t === "function" ? t("statistics", "duration_label") : "Time";
    }

    function ensureTimerStyles() {
        if (document.getElementById(TIMER_STYLE_ID)) return;

        const style = document.createElement("style");
        style.id = TIMER_STYLE_ID;
        style.textContent = `
            .practice-timer {
                position: fixed;
                right: 1rem;
                bottom: 1rem;
                z-index: 2200;
                display: none;
                align-items: center;
                gap: 0.5rem;
                min-width: 7.5rem;
                box-sizing: border-box;
                padding: 0.65rem 0.85rem;
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.18));
                border-radius: 0.75rem;
                background: var(--surface-color, #111827);
                color: var(--text-primary, #ffffff);
                box-shadow: 0 10px 24px var(--shadow-color, rgba(0, 0, 0, 0.28));
                font-family: 'Inter', sans-serif;
                font-weight: 800;
                letter-spacing: 0;
            }

            .practice-timer-label {
                color: var(--text-secondary, #cbd5e1);
                font-size: 0.72rem;
                line-height: 1;
                text-transform: uppercase;
            }

            .practice-timer-value {
                color: var(--accent-gold, #f5af19);
                font-size: 1.05rem;
                line-height: 1;
                font-variant-numeric: tabular-nums;
            }

            @media (max-width: 640px) {
                .practice-timer {
                    right: 0.75rem;
                    bottom: 0.75rem;
                    min-width: 5rem;
                    padding: 0.55rem 0.7rem;
                    justify-content: center;
                }

                .practice-timer-label {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function ensureTimerElement() {
        ensureTimerStyles();

        let timer = document.getElementById(TIMER_ELEMENT_ID);
        if (timer) return timer;

        timer = document.createElement("div");
        timer.id = TIMER_ELEMENT_ID;
        timer.className = "practice-timer";
        timer.setAttribute("role", "timer");
        timer.setAttribute("aria-live", "polite");

        const label = document.createElement("span");
        label.className = "practice-timer-label";

        const value = document.createElement("span");
        value.className = "practice-timer-value";

        timer.appendChild(label);
        timer.appendChild(value);
        document.body.appendChild(timer);
        return timer;
    }

    function updateTimerDisplay() {
        if (!activeTimerRunId || !activeRuns[activeTimerRunId]) return;

        const timer = ensureTimerElement();
        const label = timer.querySelector(".practice-timer-label");
        const value = timer.querySelector(".practice-timer-value");

        if (label) label.textContent = getTimerLabel();
        if (value) value.textContent = formatTimerDuration(Date.now() - activeRuns[activeTimerRunId].startTimestamp);
        timer.style.display = "flex";
    }

    function startTimer(runId) {
        activeTimerRunId = runId;

        if (timerIntervalId) {
            clearInterval(timerIntervalId);
        }

        updateTimerDisplay();
        timerIntervalId = setInterval(updateTimerDisplay, 1000);
    }

    function stopTimer(runId) {
        if (runId && activeTimerRunId && runId !== activeTimerRunId) return;

        if (timerIntervalId) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        }

        activeTimerRunId = null;

        const timer = document.getElementById(TIMER_ELEMENT_ID);
        if (timer) timer.style.display = "none";
    }

    function readRuns() {
        try {
            const parsed = JSON.parse(localStorage.getItem(RUNS_STORAGE_KEY) || "[]");
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    }

    function writeRuns(runs) {
        try {
            localStorage.setItem(RUNS_STORAGE_KEY, JSON.stringify(runs));
            window.dispatchEvent(new CustomEvent("app-stats-updated"));
        } catch (error) {
            // Keep the training usable if storage is blocked.
        }
    }

    function createId() {
        return `run_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    }

    function normalizeParams(params) {
        if (!params) return [];

        if (Array.isArray(params)) {
            return params
                .filter(item => item && item.label && item.value !== undefined && item.value !== null && item.value !== "")
                .map(item => ({ label: String(item.label), value: String(item.value) }));
        }

        return Object.entries(params)
            .filter(([, value]) => value !== undefined && value !== null && value !== "")
            .map(([label, value]) => ({
                label: String(label),
                value: Array.isArray(value) ? value.join(", ") : String(value)
            }));
    }

    function startRun(config) {
        if (!config || config.mode !== VALID_MODE) return null;

        const id = createId();
        activeRuns[id] = {
            id,
            moduleId: config.moduleId || "Unknown",
            moduleName: config.moduleName || config.moduleId || "Unknown",
            mode: VALID_MODE,
            params: normalizeParams(config.params),
            startedAt: new Date().toISOString(),
            startTimestamp: Date.now(),
            mistakeCount: 0,
            pinned: false,
            name: ""
        };

        startTimer(id);
        return id;
    }

    function recordMistake(runId) {
        if (!runId || !activeRuns[runId]) return;
        activeRuns[runId].mistakeCount += 1;
    }

    function finishRun(runId) {
        if (!runId || !activeRuns[runId]) return null;

        const activeRun = activeRuns[runId];
        const finishedAt = new Date().toISOString();
        const savedRun = {
            id: activeRun.id,
            moduleId: activeRun.moduleId,
            moduleName: activeRun.moduleName,
            mode: activeRun.mode,
            params: activeRun.params,
            startedAt: activeRun.startedAt,
            finishedAt,
            durationMs: Math.max(0, Date.now() - activeRun.startTimestamp),
            mistakeCount: activeRun.mistakeCount,
            pinned: false,
            name: ""
        };

        delete activeRuns[runId];
        stopTimer(runId);
        const runs = readRuns();
        runs.push(savedRun);
        writeRuns(runs);
        return savedRun;
    }

    function cancelRun(runId) {
        if (runId && activeRuns[runId]) {
            delete activeRuns[runId];
            stopTimer(runId);
        }
    }

    function updateRun(runId, updates) {
        const runs = readRuns();
        const index = runs.findIndex(run => run.id === runId);
        if (index === -1) return null;

        runs[index] = {
            ...runs[index],
            ...updates,
            name: updates && updates.name !== undefined ? String(updates.name).slice(0, 80) : runs[index].name,
            pinned: updates && updates.pinned !== undefined ? Boolean(updates.pinned) : Boolean(runs[index].pinned)
        };
        writeRuns(runs);
        return runs[index];
    }

    function deleteRun(runId) {
        writeRuns(readRuns().filter(run => run.id !== runId));
    }

    function clearRuns() {
        writeRuns([]);
    }

    window.AppStats = {
        startRun,
        recordMistake,
        finishRun,
        cancelRun,
        getRuns: readRuns,
        updateRun,
        deleteRun,
        clearRuns,
        getActiveTimerRunId: () => activeTimerRunId
    };
})();
