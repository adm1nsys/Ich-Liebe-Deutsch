(() => {
    const RUNS_STORAGE_KEY = "app_practice_stats_runs";
    const VALID_MODE = "UNASSISTED";
    const activeRuns = {};

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
        const runs = readRuns();
        runs.push(savedRun);
        writeRuns(runs);
        return savedRun;
    }

    function cancelRun(runId) {
        if (runId && activeRuns[runId]) {
            delete activeRuns[runId];
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
        clearRuns
    };
})();
