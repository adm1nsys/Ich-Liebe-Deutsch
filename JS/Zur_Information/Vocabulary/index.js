// ==========================================
// 1. STYLES (CSS)
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
        margin: 0; padding: 0; font-family: 'Inter', sans-serif;
        background-color: var(--bg-color); color: var(--text-primary);
        min-height: 100vh; display: flex; flex-direction: column;
        transition: background-color 0.4s ease, color 0.4s ease; overflow-x: hidden;
    }

    header {
        position: fixed; top: 0; left: 0; width: 100%; padding: 1rem 2rem; box-sizing: border-box;
        display: flex; align-items: center; gap: 1.5rem; background: var(--header-bg);
        backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-color); z-index: 1000;
    }

    .icon-btn {
        background: transparent; border: none; color: var(--text-secondary); cursor: pointer;
        padding: 0.5rem; border-radius: 0.75rem; transition: all 0.4s ease; display: flex; align-items: center; justify-content: center;
    }
    .icon-btn:hover { background: var(--hover-bg-strong); color: var(--accent-gold); transform: translateY(-2px); }

    main {
        flex: 1; margin-top: 80px; padding: 2rem; max-width: 800px; width: 100%;
        margin-left: auto; margin-right: auto; box-sizing: border-box;
        display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
    }

    h1 {
        font-size: 2.5rem; font-weight: 800; text-align: center; margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--accent-gold), var(--accent-red));
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    /* --- RULES UI (SELECTION) --- */
    .rules-container { width: 100%; display: flex; flex-direction: column; margin-bottom: 2rem; }
    
    .search-container { width: 100%; margin-bottom: 1.5rem; }
    .search-input { width: 100%; padding: 1rem 1.5rem; border-radius: 1rem; border: 1px solid var(--border-color); background: var(--surface-color); color: var(--text-primary); font-size: 1.1rem; font-family: 'Inter', sans-serif; box-sizing: border-box; transition: border-color 0.3s; outline: none; box-shadow: 0 4px 6px var(--shadow-color); }
    .search-input:focus { border-color: var(--accent-gold); }

    .select-actions { display: flex; gap: 1rem; margin-bottom: 1rem; justify-content: flex-end; width: 100%; }
    .btn.small { padding: 0.5rem 1rem; font-size: 0.9rem; border-radius: 0.5rem; }

    .accordion { margin-bottom: 1rem; width: 100%; border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; background: var(--surface-color); box-shadow: 0 4px 6px var(--shadow-color); transition: border-color 0.3s; }
    .accordion-header { padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: var(--hover-bg); font-weight: 600; font-size: 1.2rem; transition: background 0.3s; }
    .accordion-header:hover { background: var(--hover-bg-strong); }
    .accordion-content { display: none; padding: 1rem 1.5rem; flex-direction: column; gap: 0.8rem; border-top: 1px solid var(--border-color); }
    .accordion.open .accordion-content { display: flex; }
    .accordion.open { border-color: var(--accent-gold); }
    
    .word-checkbox { display: flex; align-items: center; gap: 1rem; cursor: pointer; font-size: 1.1rem; padding: 0.5rem; border-radius: 0.5rem; transition: background 0.2s; }
    .word-checkbox:hover { background: var(--hover-bg); }
    .word-checkbox input { width: 1.2rem; height: 1.2rem; cursor: pointer; accent-color: var(--accent-gold); }
    .word-label { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem; }
    .word-de { color: var(--accent-gold); font-weight: 600; }
    .word-native { color: var(--text-secondary); font-size: 1rem; }
    .word-row-tools { margin-left: auto; display: flex; align-items: center; gap: 0.5rem; }

    .personal-panel {
        width: 100%; background: var(--surface-color); border: 1px solid var(--border-color);
        border-radius: 1rem; padding: 1.25rem; box-sizing: border-box;
        box-shadow: 0 4px 6px var(--shadow-color); margin-bottom: 1.25rem;
        display: flex; flex-direction: column; gap: 1rem;
    }
    .personal-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }
    .personal-title { font-size: 1.15rem; font-weight: 800; color: var(--accent-gold); }
    .personal-desc { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.45; margin-top: 0.25rem; }
    .personal-count { color: var(--text-secondary); font-weight: 800; white-space: nowrap; }
    .personal-toolbar { display: grid; grid-template-columns: minmax(180px, 1fr) repeat(4, auto); gap: 0.75rem; align-items: end; }
    .field-label { display: flex; flex-direction: column; gap: 0.35rem; color: var(--text-secondary); font-size: 0.85rem; font-weight: 800; }
    .list-words { display: flex; flex-wrap: wrap; gap: 0.5rem; min-height: 2.25rem; align-items: center; }
    .list-chip {
        display: inline-flex; align-items: center; gap: 0.45rem; max-width: 100%;
        background: var(--content-bg); border: 1px solid var(--border-color);
        border-radius: 999px; padding: 0.45rem 0.65rem 0.45rem 0.8rem;
        color: var(--text-primary); font-size: 0.92rem;
    }
    .chip-remove, .mini-action {
        border: 1px solid var(--border-color); background: var(--surface-color); color: var(--text-primary);
        cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; justify-content: center;
    }
    .chip-remove { width: 1.45rem; height: 1.45rem; border-radius: 999px; font-weight: 800; }
    .mini-action { width: 2rem; height: 2rem; border-radius: 0.5rem; font-size: 1.1rem; font-weight: 800; flex-shrink: 0; }
    .chip-remove:hover, .mini-action:hover { border-color: var(--accent-gold); color: var(--accent-gold); transform: translateY(-1px); }
    .empty-list-note { color: var(--text-secondary); font-size: 0.95rem; }
    .modal-desc { color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.45; }
    .modal-form { display: flex; flex-direction: column; gap: 1rem; text-align: left; margin: 1rem 0 1.5rem; }
    .modal-input {
        width: 100%; padding: 0.85rem 1rem; border-radius: 0.75rem; border: 1px solid var(--border-color);
        background: var(--bg-color); color: var(--text-primary); font: inherit; box-sizing: border-box; outline: none;
    }
    .modal-input:focus { border-color: var(--accent-gold); }

    .settings-row { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; margin-top: 1rem; color: var(--text-secondary); font-size: 0.95rem; text-align: center; }
    .custom-select { background: var(--bg-color); color: var(--text-primary); border: 1px solid var(--border-color); padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 1rem; font-family: 'Inter', sans-serif; outline: none; cursor: pointer; transition: border-color 0.3s; }
    .custom-select:focus { border-color: var(--accent-gold); }

    .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; width: 100%; margin-top: 2rem; }
    .btn { padding: 1rem 2rem; font-size: 1.1rem; font-weight: 600; cursor: pointer; border-radius: 0.75rem; border: none; transition: all 0.4s ease; background: var(--surface-color); color: var(--text-primary); border: 1px solid var(--border-color); box-shadow: 0 4px 6px var(--shadow-color); }
    .btn:hover { border-color: var(--accent-gold); transform: translateY(-3px); box-shadow: 0 10px 15px var(--shadow-color); }
    .btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none; box-shadow: 0 4px 6px var(--shadow-color); }
    .btn:disabled:hover { border-color: var(--border-color); transform: none; }
    .btn.primary { background: linear-gradient(135deg, var(--accent-gold), var(--accent-red)); color: white; border: none; }
    .btn.primary:hover { filter: brightness(1.1); }
    .btn.danger, .mini-action.danger { border-color: rgba(225, 29, 72, 0.45); color: var(--accent-red); }
    .btn.danger:hover, .mini-action.danger:hover { border-color: var(--accent-red); color: var(--accent-red); }

    /* --- GAME UI --- */
    .game-container { display: none; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 60vh; text-align: center; }
    
    .game-counters { display: flex; gap: 2rem; justify-content: center; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem; }
    .game-counters b { color: var(--text-primary); }

    .attempts-badge { background: rgba(225, 29, 72, 0.1); color: var(--accent-red); padding: 0.3rem 0.8rem; border-radius: 1rem; font-weight: 600; margin-bottom: 1rem; display: none; }
    
    .question-box { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; color: var(--text-secondary); }
    .question-box span.de-hint { color: var(--text-primary); }
    
    .input-box {
        font-size: 4rem; font-weight: 800; color: var(--accent-gold); min-height: 5rem; border-bottom: 4px solid var(--border-color); min-width: 50%; text-align: center; margin-bottom: 1rem; transition: border-color 0.3s ease, color 0.3s ease; display: flex; align-items: center; justify-content: center;
    }
    .input-box.correct { border-color: var(--accent-green); color: var(--accent-green); }
    .input-box.wrong { border-color: var(--accent-red); color: var(--accent-red); animation: shake 0.4s ease; }
    .input-box:empty::before { content: attr(data-placeholder); color: var(--text-secondary); opacity: 0.3; font-size: 2rem; font-weight: 600; }

    .game-hints { font-size: 1rem; color: var(--text-secondary); opacity: 0.7; }

    /* --- MODALS --- */
    .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 2000; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
    .modal-overlay.active { opacity: 1; pointer-events: auto; }
    .modal-content { background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 1.5rem; padding: 2.5rem; text-align: center; max-width: 400px; box-shadow: 0 20px 25px rgba(0,0,0,0.3); transform: scale(0.9); transition: transform 0.3s ease; }
    .modal-overlay.active .modal-content { transform: scale(1); }
    .modal-content h2 { margin-top: 0; color: var(--text-primary); font-size: 1.8rem; }
    .modal-content p { color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; }
    .modal-content .btn-group { flex-direction: column; }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        75% { transform: translateX(-10px); }
    }

    @media (max-width: 760px) {
        .personal-toolbar { grid-template-columns: 1fr; }
        .personal-header { flex-direction: column; }
        .word-checkbox { align-items: flex-start; }
        .word-row-tools { margin-left: 0; width: 100%; justify-content: flex-end; }
    }
`;
document.head.appendChild(styleElement);

function createSVGIcon(pathData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24"); svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24"); svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor"); svg.setAttribute("stroke-width", "2.5");
    svg.setAttribute("stroke-linecap", "round"); svg.setAttribute("stroke-linejoin", "round");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData); svg.appendChild(path);
    return svg;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// ==========================================
// 2. DATA AND STATE
// ==========================================
const VOCABULARY = [
    { catKey: "cat_greetings", words: [
        { de: "die Begrüßung",      key: "word_begruessung" },
        { de: "Hallo",              key: "word_hallo" },
        { de: "Hi",                 key: "word_hi" },
        { de: "Guten Morgen",       key: "word_guten_morgen" },
        { de: "Guten Tag",          key: "word_guten_tag" },
        { de: "Guten Abend",        key: "word_guten_abend" },
        { de: "Gute Nacht",         key: "word_gute_nacht" },
        { de: "Servus",             key: "word_servus" },
        { de: "Moin",               key: "word_moin" },
        { de: "der Abschied",       key: "word_abschied" },
        { de: "Tschüss",            key: "word_tschuess" },
        { de: "Auf Wiedersehen",    key: "word_auf_wiedersehen" },
        { de: "Auf Wiederhören",    key: "word_auf_wiederhoeren" },
        { de: "Ciao",               key: "word_ciao" },
        { de: "Bis bald",           key: "word_bis_bald" },
        { de: "Bis später",         key: "word_bis_spaeter" },
        { de: "Bis morgen",         key: "word_bis_morgen" },
        { de: "Bis dann",           key: "word_bis_dann" },
        { de: "Bis gleich",         key: "word_bis_gleich" },
        { de: "Mach's gut",         key: "word_machs_gut" },
        { de: "Alles Gute",         key: "word_alles_gute" },
        { de: "Bitte",              key: "word_bitte" },
        { de: "Danke",              key: "word_danke" },
        { de: "Danke schön",        key: "word_danke_schoen" },
        { de: "Vielen Dank",        key: "word_vielen_dank" },
        { de: "Herzlichen Dank",    key: "word_herzlichen_dank" },
        { de: "Bitte schön",        key: "word_bitte_schoen" },
        { de: "Gerne",              key: "word_gerne" },
        { de: "Entschuldigung",     key: "word_entschuldigung" },
        { de: "Es tut mir leid",    key: "word_es_tut_mir_leid" },
        { de: "Kein Problem",       key: "word_kein_problem" },
        { de: "Nichts zu danken",   key: "word_nichts_zu_danken" },
        { de: "Viel Glück",         key: "word_viel_glueck" },
        { de: "Viel Spaß",          key: "word_viel_spass" },
        { de: "Wie heißen Sie?",    key: "word_wie_heissen_sie" },
        { de: "Wie heißt du?",      key: "word_wie_heisst_du" },
        { de: "Ich heiße...",       key: "word_ich_heisse" },
        { de: "Mein Name ist...",   key: "word_mein_name_ist" },
        { de: "Wie geht es Ihnen?", key: "word_wie_geht_es" },
        { de: "Wie geht's?",        key: "word_wie_gehts" },
        { de: "Mir geht es gut",    key: "word_mir_geht_es_gut" },
        { de: "Freut mich!",        key: "word_freut_mich" },
        { de: "Sehr erfreut",       key: "word_sehr_erfreut" }
    ] },
    { catKey: "cat_family", words: [
        { de: "die Familie",            key: "word_familie" },
        { de: "die Mutter",             key: "word_mutter" },
        { de: "die Mama",               key: "word_mama" },
        { de: "der Vater",              key: "word_vater" },
        { de: "der Papa",               key: "word_papa" },
        { de: "die Eltern",             key: "word_eltern" },
        { de: "das Kind",               key: "word_kind" },
        { de: "das Baby",               key: "word_baby" },
        { de: "das Kleinkind",          key: "word_kleinkind" },
        { de: "der Sohn",               key: "word_sohn" },
        { de: "die Tochter",            key: "word_tochter" },
        { de: "der Bruder",             key: "word_bruder" },
        { de: "die Schwester",          key: "word_schwester" },
        { de: "die Geschwister",        key: "word_geschwister" },
        { de: "die Großmutter",         key: "word_grossmutter" },
        { de: "die Oma",                key: "word_oma" },
        { de: "der Großvater",          key: "word_grossvater" },
        { de: "der Opa",                key: "word_opa" },
        { de: "die Großeltern",         key: "word_grosseltern" },
        { de: "der Enkel",              key: "word_enkel" },
        { de: "die Enkelin",            key: "word_enkelin" },
        { de: "die Enkelkinder",        key: "word_enkelkinder" },
        { de: "der Onkel",              key: "word_onkel" },
        { de: "die Tante",              key: "word_tante" },
        { de: "der Cousin",             key: "word_cousin" },
        { de: "die Cousine",            key: "word_cousine" },
        { de: "der Neffe",              key: "word_neffe" },
        { de: "die Nichte",             key: "word_nichte" },
        { de: "der Ehemann",            key: "word_ehemann" },
        { de: "die Ehefrau",            key: "word_ehefrau" },
        { de: "der Partner",            key: "word_partner" },
        { de: "die Partnerin",          key: "word_partnerin" },
        { de: "der Verlobte",           key: "word_verlobter" },
        { de: "die Verlobte",           key: "word_verlobte" },
        { de: "der Freund",             key: "word_freund_m" },
        { de: "die Freundin",           key: "word_freundin_f" },
        { de: "der Schwiegervater",     key: "word_schwiegervater" },
        { de: "die Schwiegermutter",    key: "word_schwiegermutter" },
        { de: "der Schwiegersohn",      key: "word_schwiegersohn" },
        { de: "die Schwiegertochter",   key: "word_schwiegertochter" },
        { de: "der Schwager",           key: "word_schwager" },
        { de: "die Schwägerin",         key: "word_schwaegerin" },
        { de: "der Stiefvater",         key: "word_stiefvater" },
        { de: "die Stiefmutter",        key: "word_stiefmutter" },
        { de: "der Stiefsohn",          key: "word_stiefsohn" },
        { de: "die Stieftochter",       key: "word_stieftochter" },
        { de: "der Pate",               key: "word_pate" },
        { de: "die Patin",              key: "word_patin" },
        { de: "das Einzelkind",         key: "word_einzelkind" },
        { de: "die Zwillinge",          key: "word_zwillinge" },
        { de: "die Verwandten",         key: "word_verwandten" },
        { de: "der Haushalt",           key: "word_haushalt" },
        { de: "heiraten",               key: "word_heiraten" },
        { de: "die Hochzeit",           key: "word_hochzeit" },
        { de: "die Scheidung",          key: "word_scheidung" },
        { de: "verheiratet",            key: "word_verheiratet" },
        { de: "ledig",                  key: "word_ledig" },
        { de: "geschieden",             key: "word_geschieden" },
        { de: "verwitwet",              key: "word_verwitwet" }
    ] },
    { catKey: "cat_questions", words: [
        { de: "wer",            key: "word_wer" },
        { de: "was",            key: "word_was_q" },
        { de: "wo",             key: "word_wo" },
        { de: "wohin",          key: "word_wohin" },
        { de: "woher",          key: "word_woher" },
        { de: "wann",           key: "word_wann" },
        { de: "warum",          key: "word_warum" },
        { de: "weshalb",        key: "word_weshalb" },
        { de: "wie",            key: "word_wie_q" },
        { de: "wie viel",       key: "word_wie_viel" },
        { de: "wie viele",      key: "word_wie_viele" },
        { de: "welcher",        key: "word_welcher" },
        { de: "welche",         key: "word_welche" },
        { de: "welches",        key: "word_welches" },
        { de: "wessen",         key: "word_wessen" },
        { de: "wie lange",      key: "word_wie_lange" },
        { de: "wie oft",        key: "word_wie_oft" },
        { de: "wie weit",       key: "word_wie_weit" },
        { de: "wie alt",        key: "word_wie_alt" },
        { de: "wie groß",       key: "word_wie_gross" },
        { de: "womit",          key: "word_womit" },
        { de: "wofür",          key: "word_wofuer" },
        { de: "worüber",        key: "word_worueber" },
        { de: "worin",          key: "word_worin" },
        { de: "worauf",         key: "word_worauf" },
        { de: "wozu",           key: "word_wozu" },
        { de: "inwiefern",      key: "word_inwiefern" }
    ] },
    { catKey: "cat_people", words: [
        // Люди
        { de: "der Mann",               key: "word_mann" },
        { de: "die Frau",               key: "word_frau_p" },
        { de: "der Mensch",             key: "word_mensch" },
        { de: "die Person",             key: "word_person" },
        { de: "der Junge",              key: "word_junge" },
        { de: "das Mädchen",            key: "word_maedchen" },
        { de: "der/die Jugendliche",    key: "word_jugendliche" },
        { de: "der/die Erwachsene",     key: "word_erwachsene" },
        { de: "der Herr",               key: "word_herr" },
        { de: "die Dame",               key: "word_dame" },
        { de: "der Nachbar",            key: "word_nachbar" },
        { de: "der Gast",               key: "word_gast" },
        { de: "der Fremde",             key: "word_fremde" },
        { de: "der Bürger",             key: "word_buerger" },
        { de: "der Einwohner",          key: "word_einwohner" },
        // Professions
        { de: "der Arzt",               key: "word_arzt" },
        { de: "die Ärztin",             key: "word_aerztin" },
        { de: "der Lehrer",             key: "word_lehrer" },
        { de: "die Lehrerin",           key: "word_lehrerin" },
        { de: "der Schüler",            key: "word_schueler" },
        { de: "der Student",            key: "word_student" },
        { de: "die Studentin",          key: "word_studentin" },
        { de: "der Koch",               key: "word_koch" },
        { de: "die Köchin",             key: "word_koechin" },
        { de: "der Kellner",            key: "word_kellner" },
        { de: "die Kellnerin",          key: "word_kellnerin" },
        { de: "der Verkäufer",          key: "word_verkäufer" },
        { de: "der Polizist",           key: "word_polizist" },
        { de: "der Feuerwehrmann",      key: "word_feuerwehrmann" },
        { de: "der Pilot",              key: "word_pilot" },
        { de: "der Ingenieur",          key: "word_ingenieur" },
        { de: "der Architekt",          key: "word_architekt" },
        { de: "der Anwalt",             key: "word_anwalt" },
        { de: "der Richter",            key: "word_richter" },
        { de: "der Journalist",         key: "word_journalist" },
        { de: "der Musiker",            key: "word_musiker" },
        { de: "der Künstler",           key: "word_kuenstler" },
        { de: "der Schauspieler",       key: "word_schauspieler" },
        { de: "der Sänger",             key: "word_saenger" },
        { de: "der Sportler",           key: "word_sportler" },
        { de: "der Bauer",              key: "word_bauer" },
        { de: "der Soldat",             key: "word_soldat" },
        { de: "der Beamte",             key: "word_beamte" },
        { de: "der Chef",               key: "word_chef" },
        { de: "der Kollege",            key: "word_kollege" },
        { de: "die Kollegin",           key: "word_kollegin" },
        { de: "der Mechaniker",         key: "word_mechaniker" },
        { de: "der Friseur",            key: "word_friseur" },
        { de: "der Bäcker",             key: "word_baecker" },
        { de: "der Apotheker",          key: "word_apotheker" },
        { de: "der Zahnarzt",           key: "word_zahnarzt" },
        { de: "der Krankenpfleger",     key: "word_krankenpfleger" },
        { de: "die Krankenschwester",   key: "word_krankenschwester" },
        { de: "der Professor",          key: "word_professor" },
        { de: "der Programmierer",      key: "word_programmierer" },
        { de: "der Übersetzer",         key: "word_uebersetzer" },
        { de: "der Buchhalter",         key: "word_buchhalter" },
        { de: "der Politiker",          key: "word_politiker" },
        { de: "der Wissenschaftler",    key: "word_wissenschaftler" },
        { de: "der Sozialarbeiter",     key: "word_sozialarbeiter" },
        { de: "der Psychologe",         key: "word_psychologe" },
        // Связанные слова
        { de: "der Beruf",              key: "word_beruf" },
        { de: "die Ausbildung",         key: "word_ausbildung" },
        { de: "das Praktikum",          key: "word_praktikum" },
        { de: "die Erfahrung",          key: "word_erfahrung" }
    ] },
    { catKey: "cat_numbers", words: [
        // 0-20
        { de: "null",               key: "word_null" },
        { de: "eins",               key: "word_eins" },
        { de: "zwei",               key: "word_zwei" },
        { de: "drei",               key: "word_drei" },
        { de: "vier",               key: "word_vier" },
        { de: "fünf",               key: "word_fuenf" },
        { de: "sechs",              key: "word_sechs" },
        { de: "sieben",             key: "word_sieben" },
        { de: "acht",               key: "word_acht" },
        { de: "neun",               key: "word_neun" },
        { de: "zehn",               key: "word_zehn" },
        { de: "elf",                key: "word_elf" },
        { de: "zwölf",              key: "word_zwoelf" },
        { de: "dreizehn",           key: "word_dreizehn" },
        { de: "vierzehn",           key: "word_vierzehn" },
        { de: "fünfzehn",           key: "word_fuenfzehn" },
        { de: "sechzehn",           key: "word_sechzehn" },
        { de: "siebzehn",           key: "word_siebzehn" },
        { de: "achtzehn",           key: "word_achtzehn" },
        { de: "neunzehn",           key: "word_neunzehn" },
        // Tens and large numbers
        { de: "zwanzig",            key: "word_zwanzig" },
        { de: "dreißig",            key: "word_dreissig" },
        { de: "vierzig",            key: "word_vierzig" },
        { de: "fünfzig",            key: "word_fuenfzig" },
        { de: "sechzig",            key: "word_sechzig" },
        { de: "siebzig",            key: "word_siebzig" },
        { de: "achtzig",            key: "word_achtzig" },
        { de: "neunzig",            key: "word_neunzig" },
        { de: "hundert",            key: "word_hundert" },
        { de: "tausend",            key: "word_tausend" },
        { de: "eine Million",       key: "word_million" },
        { de: "eine Milliarde",     key: "word_milliarde" },
        // Ordinals
        { de: "erste(r/s)",         key: "word_erste" },
        { de: "zweite(r/s)",        key: "word_zweite" },
        { de: "dritte(r/s)",        key: "word_dritte" },
        { de: "vierte(r/s)",        key: "word_vierte" },
        { de: "fünfte(r/s)",        key: "word_fuenfte" },
        { de: "letzte(r/s)",        key: "word_letzte" },
        // Fractions
        { de: "ein Halb",           key: "word_ein_halb" },
        { de: "ein Drittel",        key: "word_ein_drittel" },
        { de: "ein Viertel",        key: "word_ein_viertel" },
        { de: "drei Viertel",       key: "word_drei_viertel" },
        // Mathematics
        { de: "plus",               key: "word_plus" },
        { de: "minus",              key: "word_minus" },
        { de: "mal",                key: "word_mal_math" },
        { de: "geteilt durch",      key: "word_geteilt_durch" },
        { de: "gleich",             key: "word_gleich" },
        // Related
        { de: "die Zahl",           key: "word_zahl" },
        { de: "die Nummer",         key: "word_nummer" },
        { de: "die Ziffer",         key: "word_ziffer" },
        { de: "gerade",             key: "word_gerade_zahl" },
        { de: "ungerade",           key: "word_ungerade_zahl" },
        { de: "beide",              key: "word_beide" },
        { de: "doppelt",            key: "word_doppelt" },
        { de: "das Dutzend",        key: "word_dutzend" },
        { de: "das Mal",            key: "word_mal_n" }
    ] },
    { catKey: "cat_time", words: [
        // Дни недели
        { de: "der Montag",         key: "word_montag" },
        { de: "der Dienstag",       key: "word_dienstag" },
        { de: "der Mittwoch",       key: "word_mittwoch" },
        { de: "der Donnerstag",     key: "word_donnerstag" },
        { de: "der Freitag",        key: "word_freitag" },
        { de: "der Samstag",        key: "word_samstag" },
        { de: "der Sonntag",        key: "word_sonntag" },
        // Месяцы
        { de: "der Januar",         key: "word_januar" },
        { de: "der Februar",        key: "word_februar" },
        { de: "der März",           key: "word_maerz" },
        { de: "der April",          key: "word_april" },
        { de: "der Mai",            key: "word_mai" },
        { de: "der Juni",           key: "word_juni" },
        { de: "der Juli",           key: "word_juli" },
        { de: "der August",         key: "word_august" },
        { de: "der September",      key: "word_september" },
        { de: "der Oktober",        key: "word_oktober" },
        { de: "der November",       key: "word_november" },
        { de: "der Dezember",       key: "word_dezember" },
        // Времена года
        { de: "der Frühling",       key: "word_fruehling" },
        { de: "der Sommer",         key: "word_sommer" },
        { de: "der Herbst",         key: "word_herbst" },
        { de: "der Winter",         key: "word_winter" },
        // Части дня
        { de: "der Morgen",         key: "word_morgen_t" },
        { de: "der Vormittag",      key: "word_vormittag" },
        { de: "der Mittag",         key: "word_mittag" },
        { de: "der Nachmittag",     key: "word_nachmittag" },
        { de: "der Abend",          key: "word_abend_t" },
        { de: "die Nacht",          key: "word_nacht_t" },
        { de: "die Mitternacht",    key: "word_mitternacht" },
        // Единицы времени
        { de: "die Sekunde",        key: "word_sekunde" },
        { de: "die Minute",         key: "word_minute" },
        { de: "die Stunde",         key: "word_stunde" },
        { de: "der Tag",            key: "word_tag" },
        { de: "die Woche",          key: "word_woche" },
        { de: "das Wochenende",     key: "word_wochenende" },
        { de: "der Monat",          key: "word_monat" },
        { de: "das Jahr",           key: "word_jahr" },
        { de: "das Jahrzehnt",      key: "word_jahrzehnt" },
        { de: "das Jahrhundert",    key: "word_jahrhundert" },
        // Adverbs
        { de: "heute",              key: "word_heute" },
        { de: "gestern",            key: "word_gestern" },
        { de: "morgen",             key: "word_morgen_adv" },
        { de: "übermorgen",         key: "word_uebermorgen" },
        { de: "vorgestern",         key: "word_vorgestern" },
        { de: "jetzt",              key: "word_jetzt" },
        { de: "bald",               key: "word_bald" },
        { de: "später",             key: "word_spaeter" },
        { de: "früh",               key: "word_frueh" },
        { de: "spät",               key: "word_spaet" },
        { de: "immer",              key: "word_immer" },
        { de: "manchmal",           key: "word_manchmal" },
        { de: "oft",                key: "word_oft" },
        { de: "selten",             key: "word_selten" },
        { de: "nie",                key: "word_nie" },
        { de: "täglich",            key: "word_taeglich" },
        { de: "wöchentlich",        key: "word_woechentlich" },
        { de: "monatlich",          key: "word_monatlich" },
        { de: "jährlich",           key: "word_jaehrlich" },
        // Calendar
        { de: "der Kalender",       key: "word_kalender" },
        { de: "das Datum",          key: "word_datum" },
        { de: "der Geburtstag",     key: "word_geburtstag" },
        { de: "der Feiertag",       key: "word_feiertag" },
        { de: "der Urlaub",         key: "word_urlaub" },
        { de: "Weihnachten",        key: "word_weihnachten" },
        { de: "Ostern",             key: "word_ostern" },
        { de: "Silvester",          key: "word_silvester" },
        { de: "Neujahr",            key: "word_neujahr" },
        // Clock
        { de: "die Uhr",            key: "word_uhr" },
        { de: "Viertel nach",       key: "word_viertel_nach" },
        { de: "halb",               key: "word_halb" },
        { de: "Viertel vor",        key: "word_viertel_vor" }
    ] },
    { catKey: "cat_colors", words: [
        // Basic colors
        { de: "rot",                    key: "word_rot" },
        { de: "orange",                 key: "word_orange" },
        { de: "gelb",                   key: "word_gelb" },
        { de: "grün",                   key: "word_gruen" },
        { de: "blau",                   key: "word_blau" },
        { de: "lila / violett",         key: "word_lila" },
        { de: "rosa",                   key: "word_rosa" },
        { de: "weiß",                   key: "word_weiss" },
        { de: "schwarz",                key: "word_schwarz" },
        { de: "grau",                   key: "word_grau" },
        { de: "braun",                  key: "word_braun" },
        { de: "beige",                  key: "word_beige" },
        // Shades
        { de: "dunkelblau",             key: "word_dunkelblau" },
        { de: "hellblau",               key: "word_hellblau" },
        { de: "dunkelgrün",             key: "word_dunkelgruen" },
        { de: "hellgrün",               key: "word_hellgruen" },
        { de: "marineblau",             key: "word_marineblau" },
        { de: "türkis",                 key: "word_tuerkis" },
        { de: "mintgrün",               key: "word_mintgruen" },
        { de: "olivgrün",               key: "word_olivgruen" },
        { de: "magenta",                key: "word_magenta" },
        { de: "lachs",                  key: "word_lachs" },
        { de: "koralle",                key: "word_koralle" },
        { de: "himmelblau",             key: "word_himmelblau" },
        { de: "golden / goldfarben",    key: "word_goldfarben" },
        { de: "silbern / silberfarben", key: "word_silberfarben" },
        { de: "bordeaux(rot)",          key: "word_bordeaux" },
        { de: "khaki",                  key: "word_khaki" },
        { de: "cremeweiß",              key: "word_cremeweis" },
        // Descriptive adjectives
        { de: "bunt",                   key: "word_bunt" },
        { de: "einfarbig",              key: "word_einfarbig" },
        { de: "gestreift",              key: "word_gestreift" },
        { de: "kariert",                key: "word_kariert" },
        { de: "gepunktet",              key: "word_gepunktet" },
        { de: "hell",                   key: "word_hell" },
        { de: "dunkel",                 key: "word_dunkel" },
        { de: "kräftig",                key: "word_kraeftig" },
        { de: "matt",                   key: "word_matt" },
        { de: "glänzend",               key: "word_glaenzend" },
        // Nouns
        { de: "die Farbe",              key: "word_farbe" },
        { de: "der Farbton",            key: "word_farbton" }
    ] },
    { catKey: "cat_food", words: [
        // Bread and pastries
        { de: "das Brot",               key: "word_brot" },
        { de: "das Brötchen",           key: "word_broetchen" },
        { de: "der Kuchen",             key: "word_kuchen" },
        { de: "der Keks",               key: "word_keks" },
        // Dairy
        { de: "die Milch",              key: "word_milch" },
        { de: "der Käse",               key: "word_kaese" },
        { de: "der Joghurt",            key: "word_joghurt" },
        { de: "die Butter",             key: "word_butter" },
        { de: "das Ei",                 key: "word_ei" },
        { de: "die Sahne",              key: "word_sahne" },
        // Meat and fish
        { de: "das Fleisch",            key: "word_fleisch" },
        { de: "das Hähnchen",           key: "word_haehnchen" },
        { de: "das Rindfleisch",        key: "word_rindfleisch" },
        { de: "das Schweinefleisch",    key: "word_schweinefleisch" },
        { de: "die Wurst",              key: "word_wurst" },
        { de: "der Schinken",           key: "word_schinken" },
        { de: "der Fisch",              key: "word_fisch" },
        { de: "der Lachs",              key: "word_lachs_f" },
        { de: "der Thunfisch",          key: "word_thunfisch" },
        // Vegetables
        { de: "das Gemüse",             key: "word_gemuese" },
        { de: "die Kartoffel",          key: "word_kartoffel" },
        { de: "die Tomate",             key: "word_tomate" },
        { de: "die Gurke",              key: "word_gurke" },
        { de: "der Paprika",            key: "word_paprika_g" },
        { de: "die Zwiebel",            key: "word_zwiebel" },
        { de: "der Knoblauch",          key: "word_knoblauch" },
        { de: "der Salat",              key: "word_salat_g" },
        { de: "die Karotte",            key: "word_karotte" },
        { de: "der Spinat",             key: "word_spinat" },
        { de: "der Brokkoli",           key: "word_brokkoli" },
        { de: "die Erbsen",             key: "word_erbsen" },
        // Fruits
        { de: "das Obst",               key: "word_obst" },
        { de: "der Apfel",              key: "word_apfel" },
        { de: "die Birne",              key: "word_birne" },
        { de: "die Orange",             key: "word_orange_f" },
        { de: "die Zitrone",            key: "word_zitrone" },
        { de: "die Banane",             key: "word_banane" },
        { de: "die Erdbeere",           key: "word_erdbeere" },
        { de: "die Kirsche",            key: "word_kirsche" },
        { de: "die Traube",             key: "word_traube" },
        { de: "die Wassermelone",       key: "word_wassermelone" },
        { de: "die Ananas",             key: "word_ananas" },
        { de: "der Pfirsich",           key: "word_pfirsich" },
        // Drinks
        { de: "das Wasser",             key: "word_wasser" },
        { de: "das Mineralwasser",      key: "word_mineralwasser" },
        { de: "der Saft",               key: "word_saft" },
        { de: "der Tee",                key: "word_tee" },
        { de: "der Kaffee",             key: "word_kaffee" },
        { de: "der Kakao",              key: "word_kakao" },
        { de: "die Limonade",           key: "word_limonade" },
        { de: "das Bier",               key: "word_bier" },
        { de: "der Wein",               key: "word_wein" },
        { de: "der Rotwein",            key: "word_rotwein" },
        { de: "der Weißwein",           key: "word_weisswein" },
        { de: "der Sekt",               key: "word_sekt" },
        // Spices and ingredients
        { de: "das Salz",               key: "word_salz" },
        { de: "der Pfeffer",            key: "word_pfeffer" },
        { de: "der Zucker",             key: "word_zucker" },
        { de: "das Mehl",               key: "word_mehl" },
        { de: "das Öl",                 key: "word_oel" },
        { de: "der Essig",              key: "word_essig" },
        { de: "der Senf",               key: "word_senf" },
        { de: "der Reis",               key: "word_reis" },
        { de: "die Nudeln",             key: "word_nudeln" },
        // Dishes
        { de: "die Suppe",              key: "word_suppe" },
        { de: "das Sandwich",           key: "word_sandwich" },
        { de: "die Pizza",              key: "word_pizza" },
        { de: "die Vorspeise",          key: "word_vorspeise" },
        { de: "das Hauptgericht",       key: "word_hauptgericht" },
        { de: "das Dessert",            key: "word_dessert" },
        // Actions
        { de: "essen",                  key: "word_essen" },
        { de: "trinken",                key: "word_trinken" },
        { de: "kochen",                 key: "word_kochen" },
        { de: "backen",                 key: "word_backen" },
        { de: "braten",                 key: "word_braten" },
        { de: "probieren",              key: "word_probieren" },
        { de: "bestellen",              key: "word_bestellen" },
        // Related
        { de: "der Hunger",             key: "word_hunger" },
        { de: "der Durst",              key: "word_durst" },
        { de: "die Mahlzeit",           key: "word_mahlzeit" },
        { de: "das Rezept",             key: "word_rezept" }
    ] },
    { catKey: "cat_home", words: [
        // Buildings and housing types
        { de: "das Haus",               key: "word_haus" },
        { de: "die Wohnung",            key: "word_wohnung" },
        { de: "das Gebäude",            key: "word_gebaeude" },
        { de: "das Stockwerk",          key: "word_stockwerk" },
        { de: "das Erdgeschoss",        key: "word_erdgeschoss" },
        { de: "der Keller",             key: "word_keller" },
        { de: "der Dachboden",          key: "word_dachboden" },
        { de: "das Dach",               key: "word_dach" },
        { de: "die Garage",             key: "word_garage" },
        { de: "der Balkon",             key: "word_balkon" },
        { de: "die Terrasse",           key: "word_terrasse" },
        { de: "der Garten",             key: "word_garten" },
        // Rooms
        { de: "das Zimmer",             key: "word_zimmer" },
        { de: "das Wohnzimmer",         key: "word_wohnzimmer" },
        { de: "das Schlafzimmer",       key: "word_schlafzimmer" },
        { de: "die Küche",              key: "word_kueche" },
        { de: "das Badezimmer",         key: "word_badezimmer" },
        { de: "die Toilette / das WC",  key: "word_toilette" },
        { de: "das Esszimmer",          key: "word_esszimmer" },
        { de: "das Arbeitszimmer",      key: "word_arbeitszimmer" },
        { de: "der Flur",               key: "word_flur" },
        // Structural elements
        { de: "die Tür",                key: "word_tuer" },
        { de: "das Fenster",            key: "word_fenster" },
        { de: "die Wand",               key: "word_wand" },
        { de: "die Decke",              key: "word_decke_b" },
        { de: "der Boden",              key: "word_boden_b" },
        { de: "die Treppe",             key: "word_treppe" },
        { de: "der Aufzug",             key: "word_aufzug" },
        // Furniture
        { de: "die Möbel",              key: "word_moebel" },
        { de: "das Sofa",               key: "word_sofa" },
        { de: "der Sessel",             key: "word_sessel" },
        { de: "der Tisch",              key: "word_tisch" },
        { de: "der Stuhl",              key: "word_stuhl" },
        { de: "das Regal",              key: "word_regal" },
        { de: "der Schrank",            key: "word_schrank" },
        { de: "der Fernseher",          key: "word_fernseher" },
        { de: "die Lampe",              key: "word_lampe" },
        { de: "der Teppich",            key: "word_teppich" },
        { de: "der Vorhang",            key: "word_vorhang" },
        { de: "das Bild",               key: "word_bild_w" },
        // Kitchen appliances
        { de: "der Kühlschrank",        key: "word_kuehlschrank" },
        { de: "der Herd",               key: "word_herd" },
        { de: "die Spülmaschine",       key: "word_spuelmaschine" },
        { de: "die Mikrowelle",         key: "word_mikrowelle" },
        { de: "der Ofen",               key: "word_ofen" },
        { de: "der Wasserkocher",       key: "word_wasserkocher" },
        { de: "der Toaster",            key: "word_toaster" },
        // Bedroom
        { de: "das Bett",               key: "word_bett" },
        { de: "das Kopfkissen",         key: "word_kopfkissen" },
        { de: "die Bettdecke",          key: "word_bettdecke" },
        { de: "der Spiegel",            key: "word_spiegel" },
        { de: "der Wecker",             key: "word_wecker" },
        // Bathroom
        { de: "die Dusche",             key: "word_dusche" },
        { de: "die Badewanne",          key: "word_badewanne" },
        { de: "das Waschbecken",        key: "word_waschbecken" },
        { de: "die Waschmaschine",      key: "word_waschmaschine" },
        { de: "das Handtuch",           key: "word_handtuch" },
        // Verbs and related
        { de: "wohnen",                 key: "word_wohnen" },
        { de: "mieten",                 key: "word_mieten" },
        { de: "umziehen",               key: "word_umziehen" },
        { de: "aufräumen",              key: "word_aufraeumen" },
        { de: "putzen",                 key: "word_putzen" },
        { de: "die Miete",              key: "word_miete" },
        { de: "die Adresse",            key: "word_adresse" },
        { de: "einrichten",             key: "word_einrichten" }
    ] },
    { catKey: "cat_places", words: [
        // Types of settlements
        { de: "die Stadt",              key: "word_stadt" },
        { de: "das Dorf",               key: "word_dorf" },
        { de: "die Hauptstadt",         key: "word_hauptstadt" },
        { de: "das Land",               key: "word_land_n" },
        { de: "die Region",             key: "word_region" },
        { de: "die Grenze",             key: "word_grenze" },
        // Public places
        { de: "der Marktplatz",         key: "word_marktplatz" },
        { de: "der Park",               key: "word_park" },
        { de: "das Krankenhaus",        key: "word_krankenhaus" },
        { de: "die Schule",             key: "word_schule_p" },
        { de: "die Universität",        key: "word_universitaet" },
        { de: "das Rathaus",            key: "word_rathaus" },
        { de: "die Post",               key: "word_post" },
        { de: "die Bank",               key: "word_bank_p" },
        { de: "der Supermarkt",         key: "word_supermarkt" },
        { de: "das Kaufhaus",           key: "word_kaufhaus" },
        { de: "der Laden",              key: "word_laden" },
        { de: "die Apotheke",           key: "word_apotheke_p" },
        { de: "die Bäckerei",           key: "word_baeckerei" },
        { de: "das Restaurant",         key: "word_restaurant" },
        { de: "das Café",               key: "word_cafe" },
        { de: "das Hotel",              key: "word_hotel" },
        { de: "das Kino",               key: "word_kino" },
        { de: "das Theater",            key: "word_theater" },
        { de: "das Museum",             key: "word_museum" },
        { de: "die Bibliothek",         key: "word_bibliothek" },
        { de: "die Kirche",             key: "word_kirche" },
        { de: "das Stadion",            key: "word_stadion" },
        { de: "der Zoo",                key: "word_zoo" },
        // Transport hubs
        { de: "der Flughafen",          key: "word_flughafen" },
        { de: "der Bahnhof",            key: "word_bahnhof" },
        { de: "der Hafen",              key: "word_hafen" },
        // Natural places
        { de: "der Berg",               key: "word_berg" },
        { de: "das Meer",               key: "word_meer" },
        { de: "der See",                key: "word_see_n" },
        { de: "der Fluss",              key: "word_fluss" },
        { de: "der Strand",             key: "word_strand" },
        { de: "die Insel",              key: "word_insel" },
        { de: "der Wald",               key: "word_wald" },
        { de: "das Gebirge",            key: "word_gebirge" },
        { de: "die Wüste",              key: "word_wueste" },
        // Travel
        { de: "die Reise",              key: "word_reise" },
        { de: "das Reiseziel",          key: "word_reiseziel" },
        { de: "der Koffer",             key: "word_koffer" },
        { de: "der Rucksack",           key: "word_rucksack" },
        { de: "die Fahrkarte",          key: "word_fahrkarte" },
        { de: "der Reisepass",          key: "word_reisepass" },
        { de: "das Visum",              key: "word_visum" },
        { de: "die Unterkunft",         key: "word_unterkunft" },
        { de: "die Jugendherberge",     key: "word_jugendherberge" },
        // Navigation
        { de: "die Straße",             key: "word_strasse" },
        { de: "die Kreuzung",           key: "word_kreuzung" },
        { de: "die Brücke",             key: "word_bruecke" },
        { de: "der Weg",                key: "word_weg" },
        { de: "die Richtung",           key: "word_richtung" },
        { de: "die Karte",              key: "word_karte_n" },
        { de: "links",                  key: "word_links" },
        { de: "rechts",                 key: "word_rechts" },
        { de: "geradeaus",              key: "word_geradeaus" },
        { de: "die Entfernung",         key: "word_entfernung" },
        // Verbs
        { de: "reisen",                 key: "word_reisen" },
        { de: "ankommen",               key: "word_ankommen" },
        { de: "abreisen",               key: "word_abreisen" },
        { de: "buchen",                 key: "word_buchen" },
        { de: "packen",                 key: "word_packen" },
        { de: "einchecken",             key: "word_einchecken" },
        { de: "besichtigen",            key: "word_besichtigen" }
    ] },
    { catKey: "cat_transport", words: [
        // Транспортные средства
        { de: "der Bus",                key: "word_bus" },
        { de: "das Auto",               key: "word_auto" },
        { de: "das Motorrad",           key: "word_motorrad" },
        { de: "das Fahrrad",            key: "word_fahrrad" },
        { de: "der Roller",             key: "word_roller" },
        { de: "der Zug",                key: "word_zug" },
        { de: "die U-Bahn",             key: "word_ubahn" },
        { de: "die Straßenbahn",        key: "word_strassenbahn" },
        { de: "das Taxi",               key: "word_taxi" },
        { de: "das Flugzeug",           key: "word_flugzeug" },
        { de: "das Schiff",             key: "word_schiff" },
        { de: "die Fähre",              key: "word_faehre" },
        { de: "das Boot",               key: "word_boot" },
        { de: "der Hubschrauber",       key: "word_hubschrauber" },
        { de: "der LKW",                key: "word_lkw" },
        { de: "das Wohnmobil",          key: "word_wohnmobil" },
        // Дороги и инфраструктура
        { de: "die Autobahn",           key: "word_autobahn" },
        { de: "der Parkplatz",          key: "word_parkplatz" },
        { de: "die Haltestelle",        key: "word_haltestelle" },
        { de: "der Bahnsteig",          key: "word_bahnsteig" },
        { de: "die Ampel",              key: "word_ampel" },
        { de: "der Zebrastreifen",      key: "word_zebrastreifen" },
        // Поездка и маршруты
        { de: "der Fahrplan",           key: "word_fahrplan" },
        { de: "die Linie",              key: "word_linie" },
        { de: "die Ankunft",            key: "word_ankunft" },
        { de: "die Abfahrt",            key: "word_abfahrt" },
        { de: "der Anschluss",          key: "word_anschluss" },
        { de: "der Sitzplatz",          key: "word_sitzplatz" },
        { de: "die Hin- und Rückfahrt", key: "word_hin_rueckfahrt" },
        // Вождение
        { de: "der Führerschein",       key: "word_fuehrerschein" },
        { de: "das Benzin",             key: "word_benzin" },
        { de: "der Diesel",             key: "word_diesel" },
        { de: "der Stau",               key: "word_stau" },
        { de: "der Unfall",             key: "word_unfall" },
        { de: "die Panne",              key: "word_panne" },
        { de: "die Versicherung",       key: "word_versicherung" },
        // Глаголы
        { de: "fahren",                 key: "word_fahren" },
        { de: "fliegen",                key: "word_fliegen" },
        { de: "parken",                 key: "word_parken" },
        { de: "tanken",                 key: "word_tanken" },
        { de: "umsteigen",              key: "word_umsteigen" },
        { de: "einsteigen",             key: "word_einsteigen" },
        { de: "aussteigen",             key: "word_aussteigen" }
    ] },
    { catKey: "cat_clothes", words: [
        // Основная одежда
        { de: "die Kleidung",           key: "word_kleidung" },
        { de: "die Hose",               key: "word_hose" },
        { de: "die Jeans",              key: "word_jeans" },
        { de: "der Rock",               key: "word_rock" },
        { de: "das Kleid",              key: "word_kleid" },
        { de: "der Anzug",              key: "word_anzug" },
        { de: "der Pullover",           key: "word_pullover" },
        { de: "der Hoodie",             key: "word_hoodie" },
        { de: "die Bluse",              key: "word_bluse" },
        { de: "das Hemd",               key: "word_hemd" },
        { de: "das T-Shirt",            key: "word_tshirt" },
        { de: "die Jacke",              key: "word_jacke" },
        { de: "der Mantel",             key: "word_mantel" },
        { de: "der Regenmantel",        key: "word_regenmantel" },
        { de: "die Weste",              key: "word_weste" },
        { de: "die Shorts",             key: "word_shorts" },
        // Нижнее бельё
        { de: "die Unterwäsche",        key: "word_unterwasche" },
        { de: "der Schlafanzug",        key: "word_schlafanzug" },
        // Обувь
        { de: "der Schuh",              key: "word_schuh" },
        { de: "der Stiefel",            key: "word_stiefel" },
        { de: "der Turnschuh",          key: "word_turnschuh" },
        { de: "die Sandale",            key: "word_sandale" },
        { de: "die Socke",              key: "word_socke" },
        { de: "die Strumpfhose",        key: "word_strumpfhose" },
        { de: "der Hausschuh",          key: "word_hausschuh" },
        // Аксессуары
        { de: "der Hut",                key: "word_hut" },
        { de: "die Mütze",              key: "word_muetze" },
        { de: "die Kappe",              key: "word_kappe" },
        { de: "der Schal",              key: "word_schal" },
        { de: "die Handschuhe",         key: "word_handschuhe" },
        { de: "der Gürtel",             key: "word_guertel" },
        { de: "die Krawatte",           key: "word_krawatte" },
        { de: "die Tasche",             key: "word_tasche_k" },
        { de: "der Regenschirm",        key: "word_regenschirm" },
        // Украшения
        { de: "der Schmuck",            key: "word_schmuck" },
        { de: "das Armband",            key: "word_armband" },
        { de: "die Halskette",          key: "word_halskette" },
        { de: "der Ring",               key: "word_ring" },
        { de: "die Ohrringe",           key: "word_ohrringe" },
        { de: "die Brille",             key: "word_brille" },
        // Материалы
        { de: "die Baumwolle",          key: "word_baumwolle" },
        { de: "die Wolle",              key: "word_wolle" },
        { de: "das Leder",              key: "word_leder" },
        { de: "die Seide",              key: "word_seide" },
        { de: "das Leinen",             key: "word_leinen" },
        // Прилагательные и связанные
        { de: "die Größe",              key: "word_groesse" },
        { de: "die Mode",               key: "word_mode" },
        { de: "modisch",                key: "word_modisch" },
        { de: "eng",                    key: "word_eng" },
        { de: "weit",                   key: "word_weit_k" },
        // Глаголы
        { de: "tragen",                 key: "word_tragen" },
        { de: "anziehen",               key: "word_anziehen" },
        { de: "ausziehen",              key: "word_ausziehen_k" },
        { de: "passen",                 key: "word_passen" },
        { de: "stehen",                 key: "word_stehen_k" }
    ] },
    { catKey: "cat_body", words: [
        // Части тела (голова и лицо)
        { de: "der Kopf",               key: "word_kopf" },
        { de: "das Gesicht",            key: "word_gesicht" },
        { de: "das Haar",               key: "word_haar" },
        { de: "das Auge",               key: "word_auge" },
        { de: "das Ohr",                key: "word_ohr" },
        { de: "die Nase",               key: "word_nase" },
        { de: "der Mund",               key: "word_mund" },
        { de: "der Zahn",               key: "word_zahn" },
        { de: "die Lippe",              key: "word_lippe" },
        { de: "die Zunge",              key: "word_zunge" },
        { de: "der Hals",               key: "word_hals" },
        // Части тела (туловище и конечности)
        { de: "der Körper",             key: "word_koerper" },
        { de: "die Schulter",           key: "word_schulter" },
        { de: "der Arm",                key: "word_arm" },
        { de: "die Hand",               key: "word_hand" },
        { de: "der Finger",             key: "word_finger" },
        { de: "die Brust",              key: "word_brust" },
        { de: "der Bauch",              key: "word_bauch" },
        { de: "der Rücken",             key: "word_ruecken" },
        { de: "das Bein",               key: "word_bein" },
        { de: "das Knie",               key: "word_knie" },
        { de: "der Fuß",                key: "word_fuss" },
        { de: "der Zeh",                key: "word_zeh" },
        // Внутренние органы и жидкости
        { de: "das Herz",               key: "word_herz" },
        { de: "das Blut",               key: "word_blut" },
        { de: "der Magen",              key: "word_magen" },
        { de: "die Lunge",              key: "word_lunge" },
        { de: "das Gehirn",             key: "word_gehirn" },
        // Здоровье и медицина
        { de: "die Gesundheit",         key: "word_gesundheit" },
        { de: "die Krankheit",          key: "word_krankheit" },
        { de: "der Arzt",               key: "word_arzt" },
        { de: "der Patient",            key: "word_patient" },
        { de: "die Medizin",            key: "word_medizin" },
        { de: "das Medikament",         key: "word_medikament" },
        { de: "die Pille",              key: "word_pille" },
        { de: "die Apotheke",           key: "word_apotheke_h" },
        { de: "das Rezept",             key: "word_rezept_m" },
        { de: "der Schmerz",            key: "word_schmerz" },
        { de: "das Fieber",             key: "word_fieber" },
        { de: "der Husten",             key: "word_husten" },
        { de: "der Schnupfen",          key: "word_schnupfen" },
        { de: "die Verletzung",         key: "word_verletzung" },
        { de: "die Wunde",              key: "word_wunde" },
        { de: "das Pflaster",           key: "word_pflaster" },
        { de: "der Verband",            key: "word_verband" },
        { de: "die Spritze",            key: "word_spritze" },
        { de: "der Notfall",            key: "word_notfall" },
        // Прилагательные
        { de: "gesund",                 key: "word_gesund" },
        { de: "krank",                  key: "word_krank" },
        { de: "schwach",                key: "word_schwach" },
        { de: "stark",                  key: "word_stark" },
        { de: "müde",                   key: "word_muede" },
        // Глаголы
        { de: "wehtun",                 key: "word_wehtun" },
        { de: "fühlen",                 key: "word_fühlen" },
        { de: "untersuchen",            key: "word_untersuchen" },
        { de: "behandeln",              key: "word_behandeln" },
        { de: "heilen",                 key: "word_heilen" },
        { de: "bluten",                 key: "word_bluten" },
        { de: "atmen",                  key: "word_atmen" },
        { de: "operieren",              key: "word_operieren" }
    ] },
    { catKey: "cat_animals", words: [
        // Домашние и сельскохозяйственные животные
        { de: "das Tier",               key: "word_tier" },
        { de: "der Hund",               key: "word_hund" },
        { de: "die Katze",              key: "word_katze" },
        { de: "die Maus",               key: "word_maus" },
        { de: "das Pferd",              key: "word_pferd" },
        { de: "die Kuh",                key: "word_kuh" },
        { de: "das Schwein",            key: "word_schwein" },
        { de: "das Schaf",              key: "word_schaf" },
        { de: "die Ziege",              key: "word_ziege" },
        { de: "das Huhn",               key: "word_huhn" },
        // Дикие животные
        { de: "der Bär",                key: "word_baer" },
        { de: "der Wolf",               key: "word_wolf" },
        { de: "der Fuchs",              key: "word_fuchs" },
        { de: "der Hirsch",             key: "word_hirsch" },
        { de: "der Hase",               key: "word_hase" },
        { de: "der Löwe",               key: "word_loewe" },
        { de: "der Tiger",              key: "word_tiger" },
        { de: "der Elefant",            key: "word_elefant" },
        { de: "der Affe",               key: "word_affe" },
        { de: "die Schlange",           key: "word_schlange" },
        { de: "das Krokodil",           key: "word_krokodil" },
        // Птицы, рыбы, насекомые
        { de: "der Vogel",              key: "word_vogel" },
        { de: "die Ente",               key: "word_ente" },
        { de: "der Fisch",              key: "word_fisch_tier" },
        { de: "der Frosch",             key: "word_frosch" },
        { de: "das Insekt",             key: "word_insekt" },
        { de: "die Biene",              key: "word_biene" },
        { de: "die Fliege",             key: "word_fliege" },
        { de: "die Spinne",             key: "word_spinne" },
        { de: "der Schmetterling",      key: "word_schmetterling" },
        // Природа (растения)
        { de: "die Natur",              key: "word_natur" },
        { de: "der Baum",               key: "word_baum" },
        { de: "die Pflanze",            key: "word_pflanze" },
        { de: "die Blume",              key: "word_blume" },
        { de: "das Gras",               key: "word_gras" },
        { de: "das Blatt",              key: "word_blatt" },
        { de: "die Wurzel",             key: "word_wurzel" },
        // Ландшафт и элементы природы
        { de: "der Himmel",             key: "word_himmel" },
        { de: "die Erde",               key: "word_erde" },
        { de: "der Stein",              key: "word_stein" },
        { de: "der Sand",               key: "word_sand" },
        { de: "das Feuer",              key: "word_feuer" },
        { de: "die Luft",               key: "word_luft" },
        { de: "das Tal",                key: "word_tal" },
        // Космос
        { de: "die Sonne",              key: "word_sonne" },
        { de: "der Mond",               key: "word_mond" },
        { de: "der Stern",              key: "word_stern" },
        // Глаголы
        { de: "wachsen",                key: "word_wachsen" },
        { de: "blühen",                 key: "word_bluehen" },
        { de: "füttern",                key: "word_fuettern" }
    ] },
    { catKey: "cat_weather", words: [
        // Основные понятия
        { de: "das Wetter",             key: "word_wetter" },
        { de: "das Klima",              key: "word_klima" },
        { de: "die Temperatur",         key: "word_temperatur" },
        { de: "der Grad",               key: "word_grad" },
        // Осадки и явления
        { de: "der Regen",              key: "word_regen" },
        { de: "der Schnee",             key: "word_schnee" },
        { de: "die Wolke",              key: "word_wolke" },
        { de: "der Wind",               key: "word_wind" },
        { de: "der Sturm",              key: "word_sturm" },
        { de: "das Gewitter",           key: "word_gewitter" },
        { de: "der Blitz",              key: "word_blitz" },
        { de: "der Donner",             key: "word_donner" },
        { de: "der Nebel",              key: "word_nebel" },
        { de: "das Eis",                key: "word_eis" },
        { de: "der Frost",              key: "word_frost" },
        { de: "der Hagel",              key: "word_hagel" },
        { de: "der Regenbogen",         key: "word_regenbogen" },
        // Прилагательные (состояние погоды)
        { de: "sonnig",                 key: "word_sonnig" },
        { de: "wolkig",                 key: "word_wolkig" },
        { de: "windig",                 key: "word_windig" },
        { de: "regnerisch",             key: "word_regnerisch" },
        { de: "neblig",                 key: "word_neblig" },
        { de: "heiß",                   key: "word_heiss" },
        { de: "warm",                   key: "word_warm" },
        { de: "kalt",                   key: "word_kalt" },
        { de: "kühl",                   key: "word_kuehl" },
        { de: "trocken",                key: "word_trocken" },
        { de: "nass",                   key: "word_nass" },
        { de: "feucht",                 key: "word_feucht" },
        // Глаголы
        { de: "regnen",                 key: "word_regnen" },
        { de: "schneien",               key: "word_schneien" },
        { de: "scheinen",               key: "word_scheinen" },
        { de: "wehen",                  key: "word_wehen" },
        { de: "frieren",                key: "word_frieren" }
    ] },
    { catKey: "cat_school", words: [
        // Учреждения и люди
        { de: "die Schule",             key: "word_schule" },
        { de: "der Kindergarten",       key: "word_kindergarten" },
        { de: "die Grundschule",        key: "word_grundschule" },
        { de: "das Gymnasium",          key: "word_gymnasium" },
        { de: "die Universität",        key: "word_universitaet_edu" },
        { de: "der Schüler",            key: "word_schueler" },
        { de: "der Student",            key: "word_student" },
        { de: "der Lehrer",             key: "word_lehrer" },
        { de: "die Lehrerin",           key: "word_lehrerin" },
        { de: "der Professor",          key: "word_professor" },
        { de: "die Klasse",             key: "word_klasse" },
        // Предметы и оборудование
        { de: "das Buch",               key: "word_buch" },
        { de: "das Heft",               key: "word_heft" },
        { de: "der Stift",              key: "word_stift" },
        { de: "der Kugelschreiber",     key: "word_kugelschreiber" },
        { de: "der Bleistift",          key: "word_bleistift" },
        { de: "der Radiergummi",        key: "word_radiergummi" },
        { de: "das Lineal",             key: "word_lineal" },
        { de: "der Taschenrechner",     key: "word_taschenrechner" },
        { de: "die Schultasche",        key: "word_schultasche" },
        { de: "der Rucksack",           key: "word_rucksack_edu" },
        { de: "die Tafel",              key: "word_tafel" },
        { de: "der Schreibtisch",       key: "word_tisch_edu" },
        // Процесс обучения
        { de: "der Unterricht",         key: "word_unterricht" },
        { de: "die Stunde",             key: "word_stunde" },
        { de: "die Pause",              key: "word_pause" },
        { de: "die Hausaufgabe",        key: "word_hausaufgabe" },
        { de: "die Prüfung",            key: "word_pruefung" },
        { de: "der Test",               key: "word_test" },
        { de: "die Note",               key: "word_note" },
        { de: "das Zeugnis",            key: "word_zeugnis" },
        { de: "das Fach",               key: "word_fach" },
        { de: "die Sprache",            key: "word_sprache" },
        { de: "das Wörterbuch",         key: "word_woerterbuch" },
        { de: "der Kurs",               key: "word_kurs" },
        // Глаголы
        { de: "lernen",                 key: "word_lernen" },
        { de: "studieren",              key: "word_studieren" },
        { de: "lehren",                 key: "word_lehren" },
        { de: "lesen",                  key: "word_lesen" },
        { de: "schreiben",              key: "word_schreiben" },
        { de: "rechnen",                key: "word_rechnen" },
        { de: "fragen",                 key: "word_fragen" },
        { de: "antworten",              key: "word_antworten" },
        { de: "verstehen",              key: "word_verstehen" },
        { de: "erklären",               key: "word_erklaeren" },
        { de: "übersetzen",             key: "word_uebersetzen" }
    ] },
    { catKey: "cat_shopping", words: [
        // Деньги и финансы
        { de: "das Geld",               key: "word_geld" },
        { de: "die Münze",              key: "word_muenze" },
        { de: "der Geldschein",         key: "word_geldschein" },
        { de: "das Bargeld",            key: "word_bargeld" },
        { de: "die Kreditkarte",        key: "word_kreditkarte" },
        { de: "die Bank",               key: "word_bank" },
        { de: "das Konto",              key: "word_konto" },
        { de: "der Preis",              key: "word_preis" },
        { de: "der Rabatt",             key: "word_rabatt" },
        { de: "das Angebot",            key: "word_angebot" },
        { de: "die Quittung",           key: "word_quittung" },
        { de: "die Schlange",           key: "word_schlange" },
        // Магазины и места покупок
        { de: "das Geschäft",           key: "word_geschaeft" },
        { de: "der Supermarkt",         key: "word_supermarkt" },
        { de: "der Markt",              key: "word_markt" },
        { de: "die Bäckerei",           key: "word_baeckerei" },
        { de: "die Metzgerei",          key: "word_metzgerei" },
        { de: "die Apotheke",           key: "word_apotheke_shop" },
        { de: "das Kaufhaus",           key: "word_kaufhaus" },
        { de: "die Kasse",              key: "word_kasse" },
        // Процесс и объекты покупок
        { de: "der Einkauf",            key: "word_einkauf" },
        { de: "der Einkaufswagen",      key: "word_einkaufswagen" },
        { de: "die Tasche",             key: "word_tasche_shop" },
        { de: "der Kunde",              key: "word_kunde" },
        { de: "der Verkäufer",          key: "word_verkaeufer" },
        { de: "die Auswahl",            key: "word_auswahl" },
        // Прилагательные
        { de: "teuer",                  key: "word_teuer" },
        { de: "billig",                 key: "word_billig" },
        { de: "günstig",                key: "word_guenstig" },
        { de: "kostenlos",              key: "word_kostenlos" },
        // Глаголы
        { de: "kaufen",                 key: "word_kaufen" },
        { de: "verkaufen",              key: "word_verkaufen" },
        { de: "bezahlen",               key: "word_bezahlen" },
        { de: "kosten",                 key: "word_kosten" },
        { de: "sparen",                 key: "word_sparen" },
        { de: "ausgeben",               key: "word_ausgeben" },
        { de: "brauchen",               key: "word_brauchen" },
        { de: "nehmen",                 key: "word_nehmen" }
    ] },
    { catKey: "cat_sports", words: [
        // Виды спорта (с мячом)
        { de: "der Sport",              key: "word_sport" },
        { de: "der Fußball",            key: "word_fussball" },
        { de: "der Basketball",         key: "word_basketball" },
        { de: "der Volleyball",         key: "word_volleyball" },
        { de: "das Tennis",             key: "word_tennis" },
        { de: "das Tischtennis",        key: "word_tischtennis" },
        { de: "der Handball",           key: "word_handball" },
        // Другие виды спорта
        { de: "das Schwimmen",          key: "word_schwimmen_n" },
        { de: "das Laufen",             key: "word_laufen_n" },
        { de: "das Radfahren",          key: "word_radfahren" },
        { de: "die Leichtathletik",     key: "word_leichtathletik" },
        { de: "das Turnen",             key: "word_turnen" },
        { de: "das Skifahren",          key: "word_skifahren" },
        { de: "das Eishockey",          key: "word_eishockey" },
        { de: "das Boxen",              key: "word_boxen" },
        { de: "das Tanzen",             key: "word_tanzen_n" },
        { de: "das Yoga",               key: "word_yoga" },
        // Спортивный инвентарь и места
        { de: "der Ball",               key: "word_ball" },
        { de: "der Schläger",           key: "word_schlaeger" },
        { de: "das Netz",               key: "word_netz" },
        { de: "das Stadion",            key: "word_stadion" },
        { de: "die Sporthalle",         key: "word_sporthalle" },
        { de: "das Fitnessstudio",      key: "word_fitnessstudio" },
        { de: "das Schwimmbad",         key: "word_schwimmbad" },
        { de: "das Spielfeld",          key: "word_spielfeld" },
        // Люди и соревнования
        { de: "der Spieler",            key: "word_spieler" },
        { de: "die Mannschaft",         key: "word_mannschaft" },
        { de: "der Trainer",            key: "word_trainer" },
        { de: "der Schiedsrichter",     key: "word_schiedsrichter" },
        { de: "der Wettkampf",          key: "word_wettkampf" },
        { de: "das Spiel",              key: "word_spiel" },
        { de: "der Sieg",               key: "word_sieg" },
        { de: "die Medaille",           key: "word_medaille" },
        // Хобби и досуг (общие)
        { de: "das Hobby",              key: "word_hobby" },
        { de: "die Musik",              key: "word_musik" },
        { de: "das Instrument",         key: "word_instrument" },
        { de: "das Lesen",              key: "word_lesen_n" },
        { de: "das Malen",              key: "word_malen_n" },
        { de: "die Fotografie",         key: "word_fotografie" },
        { de: "das Kochen",             key: "word_kochen_n" },
        { de: "das Backen",             key: "word_backen_n" },
        { de: "das Gärtnern",           key: "word_gärtnern_n" },
        { de: "das Singen",             key: "word_singen_n" },
        // Глаголы
        { de: "spielen",                key: "word_spielen" },
        { de: "gewinnen",               key: "word_gewinnen" },
        { de: "verlieren",              key: "word_verlieren" },
        { de: "trainieren",             key: "word_trainieren" },
        { de: "werfen",                 key: "word_werfen" },
        { de: "fangen",                 key: "word_fangen" },
        { de: "sammeln",                key: "word_sammeln" }
    ] },
    { catKey: "cat_emotions", words: [
        // Основные эмоции (существительные)
        { de: "das Gefühl",             key: "word_gefuehl" },
        { de: "die Freude",             key: "word_freude" },
        { de: "die Traurigkeit",        key: "word_traurigkeit" },
        { de: "die Angst",              key: "word_angst" },
        { de: "die Wut",                key: "word_wut" },
        { de: "die Liebe",              key: "word_liebe" },
        { de: "der Hass",               key: "word_hass" },
        { de: "die Überraschung",       key: "word_ueberraschung" },
        { de: "die Hoffnung",           key: "word_hoffnung" },
        { de: "das Mitleid",            key: "word_mitleid" },
        { de: "der Stolz",              key: "word_stolz_n" },
        { de: "die Scham",              key: "word_scham" },
        // Прилагательные (позитивные)
        { de: "glücklich",              key: "word_gluecklich" },
        { de: "froh",                   key: "word_froh" },
        { de: "zufrieden",              key: "word_zufrieden" },
        { de: "begeistert",             key: "word_begeistert" },
        { de: "entspannt",              key: "word_entspannt" },
        { de: "mutig",                  key: "word_mutig" },
        { de: "ruhig",                  key: "word_ruhig" },
        // Прилагательные (негативные)
        { de: "traurig",                key: "word_traurig" },
        { de: "wütend",                 key: "word_wütend" },
        { de: "nervös",                 key: "word_nervoes" },
        { de: "besorgt",                key: "word_besorgt" },
        { de: "enttäuscht",             key: "word_enttaeuscht" },
        { de: "eifersüchtig",           key: "word_eifersuechtig" },
        { de: "einsam",                 key: "word_einsam" },
        { de: "gestresst",              key: "word_gestresst" },
        { de: "verwirrt",               key: "word_verwirrt" },
        // Глаголы
        { de: "lachen",                 key: "word_lachen" },
        { de: "weinen",                 key: "word_weinen" },
        { de: "lächeln",                key: "word_laecheln" },
        { de: "schreien",               key: "word_schreien" },
        { de: "lieben",                 key: "word_lieben" },
        { de: "hassen",                 key: "word_hassen" },
        { de: "hoffen",                 key: "word_hoffen" },
        { de: "sich freuen",            key: "word_sich_freuen" },
        { de: "sich ärgern",            key: "word_sich_aergern" },
        { de: "sich sorgen",            key: "word_sich_sorgen" }
    ] },
    { catKey: "cat_countries", words: [
        // Страны
        { de: "Deutschland",            key: "word_deutschland" },
        { de: "Österreich",             key: "word_oesterreich" },
        { de: "die Schweiz",            key: "word_schweiz" },
        { de: "Frankreich",             key: "word_frankreich" },
        { de: "Italien",                key: "word_italien" },
        { de: "Spanien",                key: "word_spanien" },
        { de: "Großbritannien",         key: "word_grossbritannien" },
        { de: "die USA",                key: "word_usa" },
        { de: "Russland",               key: "word_russland" },
        { de: "die Ukraine",            key: "word_ukraine" },
        { de: "Polen",                  key: "word_polen" },
        { de: "Tschechien",             key: "word_tschechien" },
        { de: "Dänemark",               key: "word_daenemark" },
        { de: "Schweden",               key: "word_schweden" },
        { de: "Norwegen",               key: "word_norwegen" },
        { de: "die Türkei",             key: "word_tuerkei" },
        { de: "China",                  key: "word_china" },
        { de: "Japan",                  key: "word_japan" },
        // Континенты
        { de: "Europa",                 key: "word_europa" },
        { de: "Asien",                  key: "word_asien" },
        { de: "Afrika",                 key: "word_afrika" },
        { de: "Amerika",                key: "word_amerika" },
        { de: "Australien",             key: "word_australien" },
        // Языки
        { de: "Deutsch",                key: "word_deutsch_lang" },
        { de: "Englisch",               key: "word_englisch_lang" },
        { de: "Französisch",            key: "word_franzoesisch" },
        { de: "Spanisch",               key: "word_spanisch_lang" },
        { de: "Italienisch",            key: "word_italienisch" },
        { de: "Russisch",               key: "word_russisch" },
        { de: "Ukrainisch",             key: "word_ukrainisch" },
        { de: "Polnisch",               key: "word_polnisch" },
        { de: "Tschechisch",            key: "word_tschechisch" },
        { de: "Dänisch",                key: "word_daenisch" },
        // Связанные понятия
        { de: "das Land",               key: "word_land" },
        { de: "die Hauptstadt",         key: "word_hauptstadt" },
        { de: "die Sprache",            key: "word_sprache_k" },
        { de: "das Ausland",            key: "word_ausland" },
        { de: "der Ausländer",          key: "word_auslaender" },
        { de: "die Grenze",             key: "word_grenze" },
        { de: "die Nationalität",       key: "word_nationalitaet" },
        { de: "die Muttersprache",      key: "word_muttersprache" },
        // Глаголы
        { de: "sprechen",               key: "word_sprechen" },
        { de: "verstehen",              key: "word_verstehen_k" }
    ] },
    { catKey: "cat_work", words: [
        // Основные понятия
        { de: "die Arbeit",             key: "word_arbeit" },
        { de: "der Beruf",              key: "word_beruf" },
        { de: "der Job",                key: "word_job" },
        { de: "das Unternehmen",        key: "word_unternehmen" },
        { de: "die Firma",              key: "word_firma" },
        { de: "das Büro",               key: "word_buero" },
        { de: "der Chef",               key: "word_chef" },
        { de: "die Chefin",             key: "word_chefin" },
        { de: "der Mitarbeiter",        key: "word_mitarbeiter" },
        { de: "der Kollege",            key: "word_kollege" },
        { de: "die Kollegin",           key: "word_kollegin" },
        { de: "das Gehalt",             key: "word_gehalt" },
        // Профессии
        { de: "der Arzt",               key: "word_arzt" },
        { de: "die Ärztin",             key: "word_aerztin" },
        { de: "der Lehrer",             key: "word_lehrer_w" },
        { de: "die Lehrerin",           key: "word_lehrerin_w" },
        { de: "der Ingenieur",          key: "word_ingenieur" },
        { de: "der Informatiker",       key: "word_informatiker" },
        { de: "der Kellner",            key: "word_kellner" },
        { de: "die Kellnerin",          key: "word_kellnerin" },
        { de: "der Verkäufer",          key: "word_verkaeufer_w" },
        { de: "der Polizist",           key: "word_polizist" },
        // Процесс работы
        { de: "der Arbeitsplatz",       key: "word_arbeitsplatz" },
        { de: "die Bewerbung",          key: "word_bewerbung" },
        { de: "der Lebenslauf",         key: "word_lebenslauf" },
        { de: "der Vertrag",            key: "word_vertrag" },
        { de: "der Feierabend",         key: "word_feierabend" },
        { de: "der Urlaub",             key: "word_urlaub" },
        // Глаголы
        { de: "arbeiten",               key: "word_arbeiten" },
        { de: "verdienen",              key: "word_verdienen" },
        { de: "kündigen",               key: "word_kuendigen" },
        { de: "leiten",                 key: "word_leiten" },
        { de: "organisieren",           key: "word_organisieren" }
    ] },
    { catKey: "cat_technology", words: [
        // Общее понятие
        { de: "die Technologie",         key: "word_technologie" },
        // Устройства
        { de: "der Computer",           key: "word_computer" },
        { de: "der Laptop",             key: "word_laptop" },
        { de: "das Handy",              key: "word_handy" },
        { de: "das Smartphone",         key: "word_smartphone" },
        { de: "das Tablet",             key: "word_tablet" },
        { de: "der Fernseher",          key: "word_fernseher" },
        { de: "die Kamera",             key: "word_kamera" },
        { de: "der Drucker",            key: "word_drucker" },
        { de: "der Bildschirm",         key: "word_bildschirm" },
        { de: "die Tastatur",           key: "word_tastatur" },
        { de: "die Maus",               key: "word_maus" },
        { de: "die Kopfhörer",          key: "word_kopfhoerer" },
        { de: "der Akku",               key: "word_akku" },
        { de: "das Kabel",              key: "word_kabel" },
        // Интернет и программы
        { de: "das Internet",           key: "word_internet" },
        { de: "das WLAN",               key: "word_wlan" },
        { de: "die Webseite",           key: "word_website" },
        { de: "der Link",               key: "word_link" },
        { de: "das Passwort",           key: "word_passwort" },
        { de: "die App",                key: "word_app" },
        { de: "das Programm",           key: "word_programm" },
        { de: "die Datei",              key: "word_datei" },
        { de: "der Ordner",             key: "word_ordner" },
        { de: "das Netzwerk",           key: "word_netzwerk" },
        // Медиа и коммуникации
        { de: "die Medien",             key: "word_medien" },
        { de: "die Nachricht",          key: "word_nachricht" },
        { de: "die Zeitung",            key: "word_zeitung" },
        { de: "das Radio",              key: "word_radio" },
        { de: "der Film",               key: "word_film" },
        { de: "das Video",              key: "word_video" },
        { de: "das Foto",               key: "word_foto" },
        // Глаголы
        { de: "anrufen",                key: "word_anrufen" },
        { de: "schicken",               key: "word_schicken" },
        { de: "empfangen",              key: "word_empfangen" },
        { de: "einschalten",            key: "word_einschalten" },
        { de: "ausschalten",            key: "word_ausschalten" },
        { de: "speichern",              key: "word_speichern" },
        { de: "löschen",                key: "word_loeschen" },
        { de: "klicken",                key: "word_klicken" },
        { de: "suchen",                 key: "word_suchen" },
        { de: "hochladen",              key: "word_hochladen" },
        { de: "herunterladen",          key: "word_herunterladen" }
    ] },
    { catKey: "cat_art", words: [
        // Искусство (общие понятия)
        { de: "die Kunst",              key: "word_kunst" },
        { de: "die Kultur",             key: "word_kultur" },
        { de: "das Werk",               key: "word_werk" },
        { de: "der Künstler",           key: "word_kuenstler" },
        { de: "die Künstlerin",         key: "word_kuenstlerin" },
        // Изобразительное искусство
        { de: "das Bild",               key: "word_bild" },
        { de: "das Gemälde",            key: "word_gemaelde" },
        { de: "die Zeichnung",          key: "word_zeichnung" },
        { de: "die Skulptur",           key: "word_skulptur" },
        { de: "die Ausstellung",        key: "word_ausstellung" },
        { de: "das Museum",             key: "word_museum" },
        { de: "die Galerie",            key: "word_galerie" },
        // Сценическое искусство и литература
        { de: "das Theater",            key: "word_theater" },
        { de: "der Schauspieler",       key: "word_schauspieler" },
        { de: "die Schauspielerin",     key: "word_schauspielerin" },
        { de: "die Bühne",              key: "word_buehne" },
        { de: "das Konzert",            key: "word_konzert" },
        { de: "die Oper",               key: "word_oper" },
        { de: "die Literatur",          key: "word_literatur" },
        { de: "das Gedicht",            key: "word_gedicht" },
        { de: "der Roman",              key: "word_roman" },
        { de: "der Autor",              key: "word_autor" },
        { de: "die Geschichte",         key: "word_geschichte" },
        // Музыка
        { de: "das Lied",               key: "word_lied" },
        { de: "der Sänger",             key: "word_saenger" },
        { de: "die Sängerin",           key: "word_saengerin" },
        { de: "die Band",               key: "word_band" },
        { de: "das Orchester",          key: "word_orchester" },
        // Глаголы
        { de: "zeichnen",               key: "word_zeichnen" },
        { de: "malen",                  key: "word_malen" },
        { de: "singen",                 key: "word_singen" },
        { de: "auftreten",              key: "word_auftreten" },
        { de: "besichtigen",            key: "word_besichtigen" }
    ] },
    { catKey: "cat_environment", words: [
        // Природа и экология (общие)
        { de: "die Umwelt",             key: "word_umwelt" },
        { de: "die Natur",              key: "word_natur_env" },
        { de: "die Ökologie",           key: "word_oekologie" },
        { de: "das Klima",              key: "word_klima_env" },
        { de: "der Klimawandel",        key: "word_klimawandel" },
        { de: "die Erde",               key: "word_erde_env" },
        // Проблемы и загрязнение
        { de: "die Verschmutzung",      key: "word_verschmutzung" },
        { de: "die Luftverschmutzung",  key: "word_luftverschmutzung" },
        { de: "der Abfall",             key: "word_abfall" },
        { de: "das Plastik",            key: "word_plastik" },
        { de: "das Abgas",              key: "word_abgas" },
        { de: "das Gift",               key: "word_gift" },
        { de: "die Katastrophe",        key: "word_katastrophe" },
        // Защита и решения
        { de: "der Umweltschutz",       key: "word_umweltschutz" },
        { de: "das Recycling",          key: "word_recycling" },
        { de: "die Energie",            key: "word_energie" },
        { de: "der Strom",              key: "word_strom" },
        { de: "erneuerbar",             key: "word_erneuerbar" },
        { de: "nachhaltig",             key: "word_nachhaltig" },
        // Глаголы
        { de: "schützen",               key: "word_schuetzen" },
        { de: "verschmutzen",           key: "word_verschmutzen" },
        { de: "recyceln",               key: "word_recyceln" },
        { de: "trennen",                key: "word_trennen" },
        { de: "sparen",                 key: "word_sparen_env" },
        { de: "zerstören",              key: "word_zerstoeren" },
        { de: "retten",                 key: "word_retten" }
    ] },
    { catKey: "cat_politics", words: [
        // Политика и государство
        { de: "die Politik",            key: "word_politik" },
        { de: "der Staat",              key: "word_staat" },
        { de: "die Regierung",          key: "word_regierung" },
        { de: "der Präsident",          key: "word_praesident" },
        { de: "der Kanzler",            key: "word_kanzler" },
        { de: "der Minister",           key: "word_minister" },
        { de: "die Partei",             key: "word_partei" },
        { de: "die Wahl",               key: "word_wahl" },
        { de: "das Gesetz",             key: "word_gesetz_pol" },
        { de: "die Demokratie",         key: "word_demokratie" },
        // Общество и люди
        { de: "die Gesellschaft",       key: "word_gesellschaft" },
        { de: "der Bürger",             key: "word_buerger" },
        { de: "das Volk",               key: "word_volk" },
        { de: "die Bevölkerung",        key: "word_bevoelkerung" },
        { de: "das Recht",              key: "word_recht" },
        { de: "die Pflicht",            key: "word_pflicht" },
        // Социальные явления
        { de: "der Frieden",            key: "word_frieden" },
        { de: "der Krieg",              key: "word_krieg" },
        { de: "die Freiheit",           key: "word_freiheit" },
        { de: "die Gerechtigkeit",      key: "word_gerechtigkeit" },
        { de: "die Krise",              key: "word_krise" },
        { de: "der Protest",            key: "word_protest" },
        // Глаголы
        { de: "wählen",                 key: "word_waehlen" },
        { de: "regieren",               key: "word_regieren" },
        { de: "protestieren",           key: "word_protestieren" },
        { de: "unterstützen",           key: "word_unterstuetzen" },
        { de: "kämpfen",                key: "word_kaempfen" },
        { de: "fordern",                key: "word_fordern" }
    ] },
    { catKey: "cat_science", words: [
        // Общие понятия
        { de: "die Wissenschaft",       key: "word_wissenschaft" },
        { de: "die Forschung",          key: "word_forschung" },
        { de: "die Entdeckung",         key: "word_entdeckung" },
        { de: "die Erfindung",          key: "word_erfindung" },
        { de: "das Experiment",         key: "word_experiment" },
        { de: "die Theorie",            key: "word_theorie" },
        { de: "die Methode",            key: "word_methode" },
        { de: "das Labor",              key: "word_labor" },
        { de: "das Ergebnis",           key: "word_ergebnis" },
        { de: "der Beweis",             key: "word_beweis" },
        // Люди науки
        { de: "der Wissenschaftler",    key: "word_wissenschaftler" },
        { de: "der Forscher",           key: "word_forscher" },
        { de: "der Experte",            key: "word_experte" },
        // Дисциплины (Науки)
        { de: "die Mathematik",         key: "word_mathematik" },
        { de: "die Physik",             key: "word_physik" },
        { de: "die Chemie",             key: "word_chemie" },
        { de: "die Biologie",           key: "word_biologie" },
        { de: "die Medizin",            key: "word_medizin" },
        { de: "die Astronomie",         key: "word_astronomie" },
        { de: "die Philosophie",        key: "word_philosophie" },
        // Глаголы
        { de: "forschen",               key: "word_forschen" },
        { de: "entdecken",              key: "word_entdecken" },
        { de: "erfinden",               key: "word_erfinden" },
        { de: "beweisen",               key: "word_beweisen" },
        { de: "analysieren",            key: "word_analysieren" },
        { de: "beobachten",             key: "word_beobachten" },
        { de: "vergleichen",            key: "word_vergleichen" },
        { de: "entwickeln",             key: "word_entwickeln" }
    ] },
    { catKey: "cat_law", words: [
        // Система и понятия
        { de: "das Rechtssystem",       key: "word_rechtssystem" },
        { de: "das Gesetz",             key: "word_gesetz" },
        { de: "die Regel",              key: "word_regel" },
        { de: "das Gericht",            key: "word_gericht" },
        { de: "der Prozess",            key: "word_prozess" },
        { de: "das Urteil",             key: "word_urteil" },
        { de: "die Strafe",             key: "word_strafe" },
        { de: "das Gefängnis",          key: "word_gefaengnis" },
        // Люди в праве
        { de: "der Richter",            key: "word_richter" },
        { de: "der Anwalt",             key: "word_anwalt" },
        { de: "die Polizei",            key: "word_polizei" },
        { de: "der Täter",              key: "word_taeter" },
        { de: "das Opfer",              key: "word_opfer" },
        { de: "der Zeuge",              key: "word_zeuge" },
        // Преступления
        { de: "das Verbrechen",         key: "word_verbrechen" },
        { de: "der Mord",               key: "word_mord" },
        { de: "der Diebstahl",          key: "word_diebstahl" },
        { de: "der Betrug",             key: "word_betrug" },
        { de: "die Geschwindigkeitsüberschreitung", key: "word_geschwindigkeitsueberschreitung" },
        { de: "die Grundstücksverkehrsgenehmigungszuständigkeitsübertragungsverordnung", key: "word_grundstuecksverkehrsverordnung" },
        // Глаголы
        { de: "verbieten",              key: "word_verbieten" },
        { de: "erlauben",               key: "word_erlauben" },
        { de: "bestrafen",              key: "word_bestrafen" },
        { de: "verhaften",              key: "word_verhaften" },
        { de: "stehlen",                key: "word_stehlen" },
        { de: "ermitteln",              key: "word_ermitteln" },
        { de: "verteidigen",            key: "word_verteidigen" }
    ] },
    { catKey: "cat_adjectives", words: [
        // Общее понятие
        { de: "das Adjektiv",           key: "word_adjektiv" },
        // Качество
        { de: "gut",                    key: "word_gut" },
        { de: "schlecht",               key: "word_schlecht" },
        { de: "richtig",                key: "word_richtig" },
        { de: "falsch",                 key: "word_falsch" },
        { de: "wichtig",                key: "word_wichtig" },
        // Размер и форма
        { de: "groß",                   key: "word_gross" },
        { de: "klein",                  key: "word_klein" },
        { de: "lang",                   key: "word_lang" },
        { de: "kurz",                   key: "word_kurz" },
        { de: "hoch",                   key: "word_hoch" },
        { de: "niedrig",                key: "word_niedrig" },
        { de: "breit",                  key: "word_breit" },
        { de: "schmal",                 key: "word_schmal" },
        { de: "dick",                   key: "word_dick" },
        { de: "dünn",                   key: "word_duenn" },
        // Возраст и новизна
        { de: "neu",                    key: "word_neu" },
        { de: "alt",                    key: "word_alt" },
        { de: "jung",                   key: "word_jung" },
        { de: "modern",                 key: "word_modern" },
        // Стоимость
        { de: "teuer",                  key: "word_teuer" },
        { de: "billig",                 key: "word_billig" },
        { de: "kostenlos",              key: "word_kostenlos" },
        // Температура и свет
        { de: "heiß",                   key: "word_heiss" },
        { de: "warm",                   key: "word_warm" },
        { de: "kalt",                   key: "word_kalt" },
        { de: "hell",                   key: "word_hell" },
        { de: "dunkel",                 key: "word_dunkel" },
        // Сложность и скорость
        { de: "schnell",                key: "word_schnell" },
        { de: "langsam",                key: "word_langsam" },
        { de: "einfach",                key: "word_einfach" },
        { de: "schwer",                 key: "word_schwer" },
        { de: "leicht",                 key: "word_leicht" },
        // Эмоции и состояния
        { de: "glücklich",              key: "word_gluecklich" },
        { de: "traurig",                key: "word_traurig" },
        { de: "müde",                   key: "word_muede" },
        { de: "krank",                  key: "word_krank" },
        { de: "gesund",                 key: "word_gesund" },
        { de: "scheißegal",             key: "word_scheissegal" },
        { de: "verrückt",               key: "word_verrueckt" },
        { de: "voll",                   key: "word_full" }
    ] },
    { catKey: "cat_adverbs", words: [
        // Общее понятие
        { de: "das Adverb",             key: "word_adverb" },
        // Время
        { de: "heute",                  key: "word_heute" },
        { de: "gestern",                key: "word_gestern" },
        { de: "morgen",                 key: "word_morgen_adv" },
        { de: "jetzt",                  key: "word_jetzt" },
        { de: "gleich",                 key: "word_gleich" },
        { de: "später",                 key: "word_spaeter" },
        { de: "früh",                   key: "word_frueh" },
        { de: "spät",                   key: "word_spaet" },
        { de: "schon",                  key: "word_schon" },
        { de: "noch",                   key: "word_noch" },
        // Место
        { de: "hier",                   key: "word_hier" },
        { de: "dort",                   key: "word_dort" },
        { de: "da",                     key: "word_da" },
        { de: "oben",                   key: "word_oben" },
        { de: "unten",                  key: "word_unten" },
        { de: "vorn",                   key: "word_vorn" },
        { de: "hinten",                 key: "word_hinten" },
        { de: "links",                  key: "word_links_adv" },
        { de: "rechts",                 key: "word_rechts_adv" },
        { de: "überall",                key: "word_ueberall" },
        // Частота
        { de: "immer",                  key: "word_immer" },
        { de: "oft",                    key: "word_oft" },
        { de: "manchmal",               key: "word_manchmal" },
        { de: "selten",                 key: "word_selten" },
        { de: "nie",                    key: "word_nie" },
        // Степень и Образ действия
        { de: "sehr",                   key: "word_sehr" },
        { de: "zu",                     key: "word_zu_adv" },
        { de: "etwas",                  key: "word_etwas_adv" },
        { de: "viel",                   key: "word_viel_adv" },
        { de: "wenig",                  key: "word_wenig_adv" },
        { de: "gern",                   key: "word_gern" },
        { de: "genau",                  key: "word_genau" },
        { de: "vielleicht",             key: "word_vielleicht" },
        { de: "sicher",                 key: "word_sicher" },
        { de: "natürlich",              key: "word_natuerlich" },
        { de: "dabei",                  key: "word_dabei" },
        { de: "vorbei",                 key: "word_vorbei" },
        { de: "übrigens",               key: "word_uebrigens" },
        { de: "deinetwegen",            key: "word_deinetwegen" },
        { de: "überwiegend",            key: "word_ueberwiegend" },
        { de: "eher nicht",             key: "word_eher_nicht" },
        { de: "gleichfalls",            key: "word_gleichfalls" },
        { de: "ebenso",                 key: "word_ebenso" }
    ] },
    { catKey: "cat_verbs", words: [
        // Общее понятие
        { de: "das Verb",               key: "word_verb_general" },
        // Бытие и обладание
        { de: "sein",                   key: "word_sein" },
        { de: "haben",                  key: "word_haben" },
        { de: "werden",                 key: "word_werden" },
        // Общие действия
        { de: "machen",                 key: "word_machen" },
        { de: "tun",                    key: "word_tun" },
        { de: "geben",                  key: "word_geben" },
        { de: "nehmen",                 key: "word_nehmen" },
        { de: "bringen",                key: "word_bringen" },
        { de: "brauchen",               key: "word_brauchen" },
        { de: "lassen",                 key: "word_lassen" },
        // Движение и позиция
        { de: "gehen",                  key: "word_gehen" },
        { de: "kommen",                 key: "word_kommen" },
        { de: "fahren",                 key: "word_fahren" },
        { de: "bleiben",                key: "word_bleiben" },
        { de: "stehen",                 key: "word_stehen" },
        { de: "liegen",                 key: "word_liegen" },
        { de: "sitzen",                 key: "word_sitzen" },
        { de: "fallen",                 key: "word_fallen" },
        // Коммуникация и восприятие
        { de: "sagen",                  key: "word_sagen" },
        { de: "fragen",                 key: "word_fragen" },
        { de: "erzählen",               key: "word_erzaehlen" },
        { de: "antworten",              key: "word_antworten" },
        { de: "sehen",                  key: "word_sehen" },
        { de: "hören",                  key: "word_hoeren" },
        { de: "finden",                 key: "word_finden" },
        { de: "suchen",                 key: "word_suchen_v" },
        // Когнитивные процессы
        { de: "wissen",                 key: "word_wissen" },
        { de: "kennen",                 key: "word_kennen" },
        { de: "denken",                 key: "word_denken" },
        { de: "glauben",                key: "word_glauben" },
        { de: "lernen",                 key: "word_lernen_v" },
        { de: "hinzufügen",             key: "word_add" },
        { de: "nennen",                 key: "word_nennen" }
    ] },
    { catKey: "cat_modal_verbs", words: [
        { de: "das Modalverb",          key: "word_modalverb" },
        { de: "können",                 key: "word_koennen" },
        { de: "müssen",                 key: "word_muessen" },
        { de: "dürfen",                 key: "word_duerfen" },
        { de: "wollen",                 key: "word_wollen" },
        { de: "sollen",                 key: "word_sollen" },
        { de: "mögen",                  key: "word_moegen" },
        { de: "möchten",                key: "word_moechten" },
        { de: "werden (Futur) / wollen", key: "word_will" }
    ] },
    { catKey: "cat_sep_verbs", words: [
        // Повседневная рутина
        { de: "aufstehen",              key: "word_aufstehen" },
        { de: "aufwachen",              key: "word_aufwachen" },
        { de: "einschlafen",            key: "word_einschlafen" },
        { de: "anziehen",               key: "word_anziehen" },
        { de: "ausziehen",              key: "word_ausziehen" },
        { de: "umziehen",               key: "word_umziehen" },
        { de: "(du) umziehst",          key: "word_umziehst" },
        // Покупки и действия
        { de: "einkaufen",              key: "word_einkaufen" },
        { de: "ausgeben",               key: "word_ausgeben" },
        { de: "einladen",               key: "word_einladen" },
        { de: "mitbringen",             key: "word_mitbringen" },
        // Начало, Конец и Продолжение
        { de: "anfangen",               key: "word_anfangen" },
        { de: "aufhören",               key: "word_aufhoeren" },
        { de: "mitmachen",              key: "word_mitmachen" },
        // Коммуникация и устройства
        { de: "anrufen",                key: "word_anrufen_sep" },
        { de: "zuhören",                key: "word_zuhoren" },
        { de: "aufmachen",              key: "word_aufmachen" },
        { de: "zumachen",               key: "word_zumachen" },
        { de: "einschalten",            key: "word_einschalten_sep" },
        { de: "ausschalten",            key: "word_ausschalten_sep" },
        // Движение
        { de: "abfahren",               key: "word_abfahren" },
        { de: "ankommen",               key: "word_ankommen" },
        { de: "einsteigen",             key: "word_einsteigen" },
        { de: "aussteigen",             key: "word_aussteigen" },
        { de: "umsteigen",              key: "word_umsteigen" }
    ] },
    { catKey: "cat_prepositions", words: [
        // Общее понятие
        { de: "die Präposition",        key: "word_praeposition" },
        // С Dativ (Всегда)
        { de: "aus",                    key: "word_aus" },
        { de: "bei",                    key: "word_bei" },
        { de: "bei ...",                key: "word_bei_ellipsis" },
        { de: "mit",                    key: "word_mit" },
        { de: "nach",                   key: "word_nach" },
        { de: "seit",                   key: "word_seit" },
        { de: "von",                    key: "word_von" },
        { de: "zu",                     key: "word_zu_prep" },
        // С Akkusativ (Всегда)
        { de: "bis",                    key: "word_bis" },
        { de: "durch",                  key: "word_durch" },
        { de: "für",                    key: "word_fuer" },
        { de: "gegen",                  key: "word_gegen" },
        { de: "ohne",                   key: "word_ohne" },
        { de: "um",                     key: "word_um" },
        // Wechselpräpositionen (Dat = Где? / Akk = Куда?)
        { de: "an",                     key: "word_an" },
        { de: "auf",                    key: "word_auf" },
        { de: "hinter",                 key: "word_hinter" },
        { de: "in",                     key: "word_in" },
        { de: "neben",                  key: "word_neben" },
        { de: "über",                   key: "word_ueber" },
        { de: "unter",                  key: "word_unter" },
        { de: "vor",                    key: "word_vor" },
        { de: "zwischen",               key: "word_zwischen" }
    ] },
    { catKey: "cat_conjunctions", words: [
        // Общее понятие
        { de: "die Konjunktion",        key: "word_konjunktion" },
        // Сочиняющие (Прямой порядок)
        { de: "aber",                   key: "word_aber" },
        { de: "denn",                   key: "word_denn" },
        { de: "und",                    key: "word_und" },
        { de: "und zwar",               key: "word_und_zwar" },
        { de: "sondern",                key: "word_sondern" },
        { de: "oder",                   key: "word_oder" },
        // Подчиняющие (Глагол в конец)
        { de: "weil",                   key: "word_weil" },
        { de: "dass",                   key: "word_dass" },
        { de: "wenn",                   key: "word_wenn" },
        { de: "als",                    key: "word_als_conj" },
        { de: "ob",                     key: "word_ob" },
        { de: "obwohl",                 key: "word_obwohl" },
        { de: "damit",                  key: "word_damit" },
        // Парные
        { de: "sowohl ... als auch",    key: "word_sowohl_als_auch" },
        { de: "entweder ... oder",      key: "word_entweder_oder" },
        { de: "weder ... noch",         key: "word_weder_noch" },
        { de: "nicht nur ... sondern",  key: "word_nicht_nur" }
    ] },
    { catKey: "cat_language", words: [
        { de: "der Stamm",              key: "word_stamm" },
        { de: "die Endung",             key: "word_endung" },
        { de: "das Präteritum",         key: "word_praeteritum" },
        { de: "der Punkt",              key: "word_punkt" },
        { de: "das Fragezeichen",       key: "word_fragezeichen" },
        { de: "der Wortschatz",         key: "word_vocabulary" },
        { de: "die Liste",              key: "word_list" },
        { de: "der Eierschalensollbruchstellenverursacher", key: "word_eierschalensollbruchstellenverursacher" }
    ] },
    { catKey: "cat_idioms", words: [
        // Общее понятие
        { de: "das Idiom",                          key: "word_idiom_term" },
        // Повседневные и полезные идиомы
        { de: "Ich verstehe nur Bahnhof",           key: "word_idiom_bahnhof" },
        { de: "Jemandem die Daumen drücken",        key: "word_idiom_daumen" },
        { de: "Schwein haben",                      key: "word_idiom_schwein" },
        { de: "Das ist mir Wurst",                  key: "word_idiom_wurst" },
        { de: "Wenn man vom Teufel spricht",        key: "word_idiom_teufel" },
        { de: "Auf dem Holzweg sein",               key: "word_idiom_holzweg" },
        { de: "Seinen Senf dazugeben",              key: "word_idiom_senf" },
        { de: "Blau machen",                        key: "word_idiom_blau" },
        { de: "Die Decke fällt auf den Kopf",       key: "word_idiom_decke" },
        { de: "Auf den Keks gehen",                 key: "word_idiom_keks" },
        // Общие устойчивые выражения (Функциональные)
        { de: "Ab und zu",                          key: "word_idiom_ab_und_zu" },
        { de: "Hin und wieder",                     key: "word_idiom_hin_und_wieder" },
        { de: "Auf jeden Fall",                     key: "word_idiom_auf_jeden_fall" },
        { de: "Auf keinen Fall",                    key: "word_idiom_auf_keinen_fall" },
        { de: "Im Großen und Ganzen",               key: "word_idiom_im_grossen_und_ganzen" },
        { de: "ich stelle mich vor",                key: "word_ich_stelle_mich_vor" },
        { de: "ich stelle mir vor",                 key: "word_ich_stelle_mir_vor" },
        { de: "ich auch",                           key: "word_ich_auch" },
        { de: "es geht um ...",                     key: "word_es_geht_um" },
        { de: "Ich habe das nicht verstanden",      key: "word_ich_habe_das_nicht_verstanden" },
        { de: "es fällt mir leicht/schwer, ... zu VERB", key: "word_es_faellt_mir_leicht_schwer" },
        { de: "ich bin krank",                      key: "word_ich_bin_krank" },
        { de: "ich bin krank geworden",             key: "word_ich_bin_krank_geworden" },
        { de: "ich werde krank",                    key: "word_ich_werde_krank" },
        { de: "Scheiß drauf!",                      key: "word_scheiss_drauf" }
    ] }
];

const PERSONAL_VOCABULARY_STORAGE_KEY = "vocabulary_personal_state_v1";
const DEFAULT_PERSONAL_LISTS = [
    { id: "to_learn", type: "default", titleKey: "list_to_learn", wordKeys: [] },
    { id: "learned", type: "default", titleKey: "list_learned", wordKeys: [] }
];

function uniqueValues(values) {
    return [...new Set((values || []).filter(Boolean))];
}

function loadPersonalState() {
    let parsed = {};
    try {
        parsed = JSON.parse(localStorage.getItem(PERSONAL_VOCABULARY_STORAGE_KEY) || "{}");
    } catch (error) {
        parsed = {};
    }

    const savedLists = Array.isArray(parsed.lists) ? parsed.lists : [];
    const lists = DEFAULT_PERSONAL_LISTS.map(defaultList => {
        const saved = savedLists.find(list => list.id === defaultList.id);
        return {
            ...defaultList,
            wordKeys: uniqueValues(saved ? saved.wordKeys : [])
        };
    });

    savedLists
        .filter(list => list && list.type === "custom" && list.id && list.name)
        .forEach(list => {
            if (!lists.some(existing => existing.id === list.id)) {
                lists.push({
                    id: list.id,
                    type: "custom",
                    name: String(list.name).trim(),
                    wordKeys: uniqueValues(list.wordKeys)
                });
            }
        });

    const customWords = Array.isArray(parsed.customWords)
        ? parsed.customWords
            .filter(word => word && word.key && word.de && word.native)
            .map(word => ({
                key: String(word.key),
                de: String(word.de).trim(),
                native: String(word.native).trim()
            }))
        : [];

    return { lists, customWords };
}

function savePersonalState() {
    localStorage.setItem(PERSONAL_VOCABULARY_STORAGE_KEY, JSON.stringify(personalState));
}

function getCustomVocabularyGroup() {
    if (personalState.customWords.length === 0) return null;
    return {
        catKey: "cat_custom_words",
        words: personalState.customWords.map(word => ({ ...word, isCustom: true }))
    };
}

function getVocabularyGroups() {
    const customGroup = getCustomVocabularyGroup();
    return customGroup ? [...VOCABULARY, customGroup] : VOCABULARY;
}

function getAllWords() {
    return getVocabularyGroups().flatMap(category => category.words);
}

function getWordByKey(key) {
    return getAllWords().find(word => word.key === key);
}

function getWordNative(wordOrKey) {
    const word = typeof wordOrKey === "string" ? getWordByKey(wordOrKey) : wordOrKey;
    if (!word) return "";
    return word.native || t("vocabulary", word.key);
}

function getPersonalListLabel(list) {
    return list.titleKey ? t("vocabulary", list.titleKey) : list.name;
}

function getActivePersonalList() {
    return personalState.lists.find(list => list.id === activePersonalListId) || personalState.lists[0];
}

function createCustomId(prefix) {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

let personalState = loadPersonalState();
let activePersonalListId = personalState.lists[0].id;

let gameState = 'RULES'; 
let mode = 'ASSISTED'; 
let queue = [];
let currentIndex = 0;
let currentInputStr = "";
let attemptsLeft = 2;
let isAnimating = false;
let repeatCount = 10;
let currentPhase = 1; 
let statsRunId = null;

// ==========================================
// 3. UI ЭЛЕМЕНТЫ
// ==========================================
const headerElement = document.createElement("header");
const backBtn = document.createElement("button");
backBtn.classList.add("icon-btn");
backBtn.title = t("vocabulary", "back_to_menu");
backBtn.appendChild(createSVGIcon("M19 12H5M12 19l-7-7 7-7"));
backBtn.addEventListener('click', () => { window.location.href = "index.html?page=Home"; });
headerElement.appendChild(backBtn);

const mainElement = document.createElement("main");

// --- RULES UI (SELECTION) ---
const rulesSection = document.createElement("div");
rulesSection.style.width = "100%";
rulesSection.style.display = "flex";
rulesSection.style.flexDirection = "column";

const rulesTitle = document.createElement("h1");
rulesTitle.textContent = t("vocabulary", "vocabulary_title");
rulesSection.appendChild(rulesTitle);

// Search Bar
const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.classList.add("search-input");
searchInput.placeholder = t("vocabulary", "search_placeholder");
searchContainer.appendChild(searchInput);
rulesSection.appendChild(searchContainer);

const personalPanel = document.createElement("div");
personalPanel.classList.add("personal-panel");

const personalHeader = document.createElement("div");
personalHeader.classList.add("personal-header");
const personalHeaderText = document.createElement("div");
const personalTitle = document.createElement("div");
personalTitle.classList.add("personal-title");
personalTitle.textContent = t("vocabulary", "personal_lists_title");
const personalDesc = document.createElement("div");
personalDesc.classList.add("personal-desc");
personalDesc.textContent = t("vocabulary", "personal_lists_desc");
personalHeaderText.appendChild(personalTitle);
personalHeaderText.appendChild(personalDesc);
const personalListCount = document.createElement("div");
personalListCount.classList.add("personal-count");
personalHeader.appendChild(personalHeaderText);
personalHeader.appendChild(personalListCount);

const personalToolbar = document.createElement("div");
personalToolbar.classList.add("personal-toolbar");
const personalListLabel = document.createElement("label");
personalListLabel.classList.add("field-label");
const personalListLabelText = document.createElement("span");
personalListLabelText.textContent = t("vocabulary", "active_list");
const personalListSelect = document.createElement("select");
personalListSelect.classList.add("custom-select");
personalListSelect.addEventListener("change", event => {
    activePersonalListId = event.target.value;
    renderPersonalListsUI();
});
personalListLabel.appendChild(personalListLabelText);
personalListLabel.appendChild(personalListSelect);

const createListBtn = document.createElement("button");
createListBtn.classList.add("btn", "small");
createListBtn.textContent = t("vocabulary", "new_list");
createListBtn.addEventListener("click", () => showCreateListModal());

const addCustomWordBtn = document.createElement("button");
addCustomWordBtn.classList.add("btn", "small");
addCustomWordBtn.textContent = t("vocabulary", "add_custom_word");
addCustomWordBtn.addEventListener("click", () => showAddCustomWordModal());

const selectListWordsBtn = document.createElement("button");
selectListWordsBtn.classList.add("btn", "small");
selectListWordsBtn.textContent = t("vocabulary", "select_list_words");
selectListWordsBtn.addEventListener("click", () => selectActiveListWords());

const deleteListBtn = document.createElement("button");
deleteListBtn.classList.add("btn", "small", "danger");
deleteListBtn.textContent = t("vocabulary", "delete_list");
deleteListBtn.addEventListener("click", () => confirmDeleteActiveList());

personalToolbar.appendChild(personalListLabel);
personalToolbar.appendChild(createListBtn);
personalToolbar.appendChild(addCustomWordBtn);
personalToolbar.appendChild(selectListWordsBtn);
personalToolbar.appendChild(deleteListBtn);

const personalListWords = document.createElement("div");
personalListWords.classList.add("list-words");

personalPanel.appendChild(personalHeader);
personalPanel.appendChild(personalToolbar);
personalPanel.appendChild(personalListWords);
rulesSection.appendChild(personalPanel);

const rulesContainer = document.createElement("div");
rulesContainer.classList.add("rules-container");

// Select Actions (Select All / Deselect All)
const selectActions = document.createElement("div");
selectActions.classList.add("select-actions");
const selectAllBtn = document.createElement("button");
selectAllBtn.classList.add("btn", "small"); selectAllBtn.textContent = t("vocabulary", "select_all");
selectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.word-checkbox input').forEach(cb => cb.checked = true);
});
const deselectAllBtn = document.createElement("button");
deselectAllBtn.classList.add("btn", "small"); deselectAllBtn.textContent = t("vocabulary", "deselect_all");
deselectAllBtn.addEventListener('click', () => {
    document.querySelectorAll('.word-checkbox input').forEach(cb => cb.checked = false);
});
selectActions.appendChild(selectAllBtn);
selectActions.appendChild(deselectAllBtn);
rulesContainer.appendChild(selectActions);

// Accordions and Search Logic structure
const categoryDOMNodes = [];

getVocabularyGroups().forEach(cat => {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");

    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.innerHTML = `<span>${t("vocabulary", cat.catKey)}</span> <span class="arrow">▼</span>`;
    header.addEventListener('click', () => {
        accordion.classList.toggle('open');
        const arrow = header.querySelector('.arrow');
        arrow.textContent = accordion.classList.contains('open') ? '▲' : '▼';
    });

    const content = document.createElement("div");
    content.classList.add("accordion-content");

    const wordDOMNodes = [];

    cat.words.forEach(w => {
        const nativeWordText = getWordNative(w);
        const label = document.createElement("label");
        label.classList.add("word-checkbox");
        label.dataset.wordKey = w.key;
        
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.value = w.key;
        cb.checked = true; // default checked
        cb.dataset.de = w.de;
        cb.dataset.native = nativeWordText;
        
        const wordInfo = document.createElement("div");
        wordInfo.classList.add("word-label");
        wordInfo.innerHTML = `<span class="word-de">${escapeHtml(w.de)}</span> <span class="word-native">— ${escapeHtml(nativeWordText)}</span>`;

        const wordTools = document.createElement("div");
        wordTools.classList.add("word-row-tools");
        const addToListBtn = document.createElement("button");
        addToListBtn.type = "button";
        addToListBtn.classList.add("mini-action");
        addToListBtn.textContent = "+";
        addToListBtn.title = t("vocabulary", "add_to_selected_list");
        addToListBtn.setAttribute("aria-label", t("vocabulary", "add_to_selected_list"));
        addToListBtn.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();
            addWordToActiveList(w.key);
        });
        wordTools.appendChild(addToListBtn);

        if (w.isCustom) {
            const deleteCustomWordBtn = document.createElement("button");
            deleteCustomWordBtn.type = "button";
            deleteCustomWordBtn.classList.add("mini-action", "danger");
            deleteCustomWordBtn.textContent = "×";
            deleteCustomWordBtn.title = t("vocabulary", "delete_custom_word");
            deleteCustomWordBtn.setAttribute("aria-label", t("vocabulary", "delete_custom_word"));
            deleteCustomWordBtn.addEventListener("click", event => {
                event.preventDefault();
                event.stopPropagation();
                confirmDeleteCustomWord(w.key);
            });
            wordTools.appendChild(deleteCustomWordBtn);
        }
        
        label.appendChild(cb);
        label.appendChild(wordInfo);
        label.appendChild(wordTools);
        content.appendChild(label);

        wordDOMNodes.push({
            deText: w.de.toLowerCase(),
            nativeText: nativeWordText.toLowerCase(),
            domElement: label
        });
    });

    accordion.appendChild(header);
    accordion.appendChild(content);
    rulesContainer.appendChild(accordion);

    categoryDOMNodes.push({
        domElement: accordion,
        headerElement: header,
        words: wordDOMNodes
    });
});

rulesSection.appendChild(rulesContainer);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    
    categoryDOMNodes.forEach(cat => {
        let hasVisibleWord = false;
        
        cat.words.forEach(w => {
            if (term === '' || w.deText.includes(term) || w.nativeText.includes(term)) {
                w.domElement.style.display = "flex";
                hasVisibleWord = true;
            } else {
                w.domElement.style.display = "none";
            }
        });
        
        if (hasVisibleWord) {
            cat.domElement.style.display = "block";
            // Auto-expand if searching, collapse if empty
            if (term !== '') {
                cat.domElement.classList.add('open');
                cat.headerElement.querySelector('.arrow').textContent = '▲';
            } else {
                cat.domElement.classList.remove('open');
                cat.headerElement.querySelector('.arrow').textContent = '▼';
            }
        } else {
            cat.domElement.style.display = "none";
        }
    });
});

// Settings (Repeat count)
const settingsRow = document.createElement("div");
settingsRow.classList.add("settings-row");
const repeatInfo = document.createElement("div");
repeatInfo.textContent = t("vocabulary", "repeat_info");
const repeatSelect = document.createElement("select");
repeatSelect.classList.add("custom-select");
[5, 10, 15, 20].forEach(val => {
    const opt = document.createElement("option");
    opt.value = val; opt.textContent = val;
    if (val === 10) opt.selected = true;
    repeatSelect.appendChild(opt);
});
repeatSelect.addEventListener('change', (e) => {
    repeatCount = parseInt(e.target.value);
});
settingsRow.appendChild(repeatInfo);
settingsRow.appendChild(repeatSelect);
rulesSection.appendChild(settingsRow);

// Play Buttons
const rulesBtnGroup = document.createElement("div");
rulesBtnGroup.classList.add("btn-group");

const startLearningBtn = document.createElement("button");
startLearningBtn.classList.add("btn", "primary"); 
startLearningBtn.textContent = t("vocabulary", "start_learning");
startLearningBtn.addEventListener('click', () => startFullCourse());

const startUnassistedBtn = document.createElement("button");
startUnassistedBtn.classList.add("btn"); 
startUnassistedBtn.textContent = t("vocabulary", "start_unassisted");
startUnassistedBtn.addEventListener('click', () => {
    if (!prepareQueue()) return;
    currentPhase = 2;
    startGame('UNASSISTED');
});

rulesBtnGroup.appendChild(startLearningBtn);
rulesBtnGroup.appendChild(startUnassistedBtn);
rulesSection.appendChild(rulesBtnGroup);

// --- GAME UI ---
const gameSection = document.createElement("div");
gameSection.classList.add("game-container");
const gameCounters = document.createElement("div");
gameCounters.classList.add("game-counters");
const attemptsBadge = document.createElement("div");
attemptsBadge.classList.add("attempts-badge");
const questionBox = document.createElement("div");
questionBox.classList.add("question-box");
const inputBox = document.createElement("div");
inputBox.classList.add("input-box");
inputBox.dataset.placeholder = t("vocabulary", "type_here");
const gameHints = document.createElement("div");
gameHints.classList.add("game-hints");
gameHints.textContent = t("vocabulary", "press_enter");

gameSection.appendChild(gameCounters);
gameSection.appendChild(attemptsBadge);
gameSection.appendChild(questionBox);
gameSection.appendChild(inputBox);
gameSection.appendChild(gameHints);

// --- END UI ---
const endSection = document.createElement("div");
endSection.classList.add("game-container"); 
const endTitle = document.createElement("h1");
endTitle.textContent = t("vocabulary", "game_over_title");
const endBtnGroup = document.createElement("div");
endBtnGroup.classList.add("btn-group");
const playAgainRulesBtn = document.createElement("button");
playAgainRulesBtn.classList.add("btn"); playAgainRulesBtn.textContent = t("vocabulary", "back_to_selection");
playAgainRulesBtn.addEventListener('click', () => showRules());
const menuBtn = document.createElement("button");
menuBtn.classList.add("btn"); menuBtn.textContent = t("vocabulary", "back_to_menu");
menuBtn.addEventListener('click', () => { window.location.href = "index.html?page=Home"; });
endBtnGroup.appendChild(playAgainRulesBtn);
endBtnGroup.appendChild(menuBtn);
endSection.appendChild(endTitle);
endSection.appendChild(endBtnGroup);

// --- MODALS ---
const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
const modalTitle = document.createElement("h2");
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
const modalBtnGroup = document.createElement("div");
modalBtnGroup.classList.add("btn-group");

modalContent.appendChild(modalTitle);
modalContent.appendChild(modalDesc);
modalContent.appendChild(modalBtnGroup);
modalOverlay.appendChild(modalContent);

mainElement.appendChild(rulesSection);
mainElement.appendChild(gameSection);
mainElement.appendChild(endSection);

document.body.appendChild(headerElement);
document.body.appendChild(mainElement);
document.body.appendChild(modalOverlay);

// ==========================================
// 4. ЛОГИКА
// ==========================================

function showRules() {
    gameState = 'RULES';
    rulesSection.style.display = "flex";
    gameSection.style.display = "none";
    endSection.style.display = "none";
    modalOverlay.classList.remove("active");
}

function showModal(title, desc, btns) {
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalBtnGroup.innerHTML = '';
    btns.forEach(b => {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        if (b.primary) btn.classList.add("primary");
        if (b.danger) btn.classList.add("danger");
        btn.textContent = b.text;
        btn.addEventListener('click', b.action);
        modalBtnGroup.appendChild(btn);
    });
    modalOverlay.classList.add("active");
}

function hideModal() {
    modalOverlay.classList.remove("active");
}

function showFormModal(title, fields, onSubmit) {
    modalTitle.textContent = title;
    modalDesc.innerHTML = "";
    modalBtnGroup.innerHTML = "";

    const form = document.createElement("form");
    form.classList.add("modal-form");
    const inputs = {};

    fields.forEach(field => {
        const label = document.createElement("label");
        label.classList.add("field-label");
        const labelText = document.createElement("span");
        labelText.textContent = field.label;
        const input = document.createElement("input");
        input.classList.add("modal-input");
        input.type = "text";
        input.placeholder = field.placeholder || "";
        input.autocomplete = "off";
        label.appendChild(labelText);
        label.appendChild(input);
        form.appendChild(label);
        inputs[field.id] = input;
    });

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("btn", "primary");
    submitBtn.type = "button";
    submitBtn.textContent = t("vocabulary", "save");
    submitBtn.addEventListener("click", () => form.requestSubmit());

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("btn");
    cancelBtn.type = "button";
    cancelBtn.textContent = t("vocabulary", "cancel");
    cancelBtn.addEventListener("click", hideModal);

    form.addEventListener("submit", event => {
        event.preventDefault();
        const values = {};
        Object.keys(inputs).forEach(id => values[id] = inputs[id].value.trim());
        onSubmit(values);
    });

    modalDesc.appendChild(form);
    modalBtnGroup.appendChild(submitBtn);
    modalBtnGroup.appendChild(cancelBtn);
    modalOverlay.classList.add("active");
    fields[0] && inputs[fields[0].id].focus();
}

function renderPersonalListsUI() {
    personalListSelect.innerHTML = "";
    personalState.lists.forEach(list => {
        const option = document.createElement("option");
        option.value = list.id;
        option.textContent = getPersonalListLabel(list);
        if (list.id === activePersonalListId) option.selected = true;
        personalListSelect.appendChild(option);
    });

    const activeList = getActivePersonalList();
    activePersonalListId = activeList.id;
    const knownKeys = new Set(getAllWords().map(word => word.key));
    activeList.wordKeys = activeList.wordKeys.filter(key => knownKeys.has(key));
    personalListCount.textContent = `${activeList.wordKeys.length}`;
    deleteListBtn.disabled = activeList.type !== "custom";
    deleteListBtn.title = activeList.type === "custom"
        ? t("vocabulary", "delete_list")
        : t("vocabulary", "delete_default_list_disabled");
    personalListWords.innerHTML = "";

    if (activeList.wordKeys.length === 0) {
        const emptyNote = document.createElement("div");
        emptyNote.classList.add("empty-list-note");
        emptyNote.textContent = t("vocabulary", "no_list_words");
        personalListWords.appendChild(emptyNote);
        savePersonalState();
        return;
    }

    activeList.wordKeys.forEach(key => {
        const word = getWordByKey(key);
        if (!word) return;

        const chip = document.createElement("span");
        chip.classList.add("list-chip");
        chip.dataset.wordKey = key;
        const chipText = document.createElement("span");
        chipText.textContent = `${word.de} — ${getWordNative(word)}`;
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.classList.add("chip-remove");
        removeBtn.textContent = "×";
        removeBtn.title = t("vocabulary", "remove_from_list");
        removeBtn.setAttribute("aria-label", t("vocabulary", "remove_from_list"));
        removeBtn.addEventListener("click", () => removeWordFromActiveList(key));
        chip.appendChild(chipText);
        chip.appendChild(removeBtn);
        personalListWords.appendChild(chip);
    });

    savePersonalState();
}

function addWordToActiveList(wordKey) {
    const activeList = getActivePersonalList();
    if (!activeList.wordKeys.includes(wordKey)) {
        activeList.wordKeys.push(wordKey);
        savePersonalState();
    }
    renderPersonalListsUI();
}

function removeWordFromActiveList(wordKey) {
    const activeList = getActivePersonalList();
    activeList.wordKeys = activeList.wordKeys.filter(key => key !== wordKey);
    savePersonalState();
    renderPersonalListsUI();
}

function selectActiveListWords() {
    const activeList = getActivePersonalList();
    const keys = new Set(activeList.wordKeys);
    document.querySelectorAll(".word-checkbox input").forEach(cb => {
        cb.checked = keys.has(cb.value);
    });
}

function showCreateListModal() {
    showFormModal(
        t("vocabulary", "new_list"),
        [{ id: "name", label: t("vocabulary", "custom_list_name"), placeholder: t("vocabulary", "custom_list_name") }],
        values => {
            const name = values.name;
            if (!name) return;
            const exists = personalState.lists.some(list => getPersonalListLabel(list).toLowerCase() === name.toLowerCase());
            if (exists) {
                showModal(t("vocabulary", "new_list"), t("vocabulary", "list_exists"), [{ text: "OK", primary: true, action: hideModal }]);
                return;
            }
            const newList = { id: createCustomId("list"), type: "custom", name, wordKeys: [] };
            personalState.lists.push(newList);
            activePersonalListId = newList.id;
            savePersonalState();
            renderPersonalListsUI();
            hideModal();
        }
    );
}

function confirmDeleteActiveList() {
    const activeList = getActivePersonalList();
    if (activeList.type !== "custom") return;

    showModal(
        t("vocabulary", "delete_list"),
        t("vocabulary", "delete_list_confirm").replace("{list}", getPersonalListLabel(activeList)),
        [
            {
                text: t("vocabulary", "delete"),
                danger: true,
                action: () => {
                    personalState.lists = personalState.lists.filter(list => list.id !== activeList.id);
                    activePersonalListId = personalState.lists[0].id;
                    savePersonalState();
                    renderPersonalListsUI();
                    hideModal();
                }
            },
            { text: t("vocabulary", "cancel"), action: hideModal }
        ]
    );
}

function showAddCustomWordModal() {
    showFormModal(
        t("vocabulary", "add_custom_word"),
        [
            { id: "de", label: t("vocabulary", "german_word"), placeholder: "der Termin" },
            { id: "native", label: t("vocabulary", "translation"), placeholder: t("vocabulary", "translation") }
        ],
        values => {
            const de = values.de;
            const native = values.native;
            if (!de || !native) return;
            const exists = getAllWords().some(word => word.de.toLowerCase() === de.toLowerCase());
            if (exists) {
                showModal(t("vocabulary", "add_custom_word"), t("vocabulary", "word_exists"), [{ text: "OK", primary: true, action: hideModal }]);
                return;
            }
            personalState.customWords.push({
                key: createCustomId("custom_word"),
                de,
                native
            });
            savePersonalState();
            location.reload();
        }
    );
}

function confirmDeleteCustomWord(wordKey) {
    const word = personalState.customWords.find(item => item.key === wordKey);
    if (!word) return;

    showModal(
        t("vocabulary", "delete_custom_word"),
        t("vocabulary", "delete_custom_word_confirm").replace("{word}", word.de),
        [
            {
                text: t("vocabulary", "delete"),
                danger: true,
                action: () => {
                    personalState.customWords = personalState.customWords.filter(item => item.key !== wordKey);
                    personalState.lists.forEach(list => {
                        list.wordKeys = list.wordKeys.filter(key => key !== wordKey);
                    });
                    savePersonalState();
                    location.reload();
                }
            },
            { text: t("vocabulary", "cancel"), action: hideModal }
        ]
    );
}

let selectedWords = [];

function prepareQueue() {
    selectedWords = [];
    document.querySelectorAll('.word-checkbox input:checked').forEach(cb => {
        selectedWords.push({ key: cb.value, de: cb.dataset.de, native: cb.dataset.native });
    });

    if (selectedWords.length === 0) {
        showModal(
            "Oops!", 
            t("vocabulary", "no_words_selected"), 
            [{ text: "OK", primary: true, action: () => modalOverlay.classList.remove("active") }]
        );
        return false;
    }
    return true;
}

function startFullCourse() {
    if (!prepareQueue()) return;
    currentPhase = 1;
    startGame('ASSISTED');
}

function nextPhase() {
    if (currentPhase === 1) {
        currentPhase = 2;
        startGame('UNASSISTED');
    } else {
        showEndScreen();
    }
}

function startGame(selectedMode) {
    mode = selectedMode;
    if (statsRunId && window.AppStats) {
        window.AppStats.cancelRun(statsRunId);
        statsRunId = null;
    }
    gameState = 'PLAYING';
    queue = [];
    
    for (let i = 0; i < repeatCount; i++) {
        selectedWords.forEach(w => queue.push(w));
    }
    queue.sort(() => Math.random() - 0.5);

    if (selectedMode === 'UNASSISTED' && window.AppStats) {
        statsRunId = window.AppStats.startRun({
            moduleId: "Vocabulary",
            moduleName: t("home", "module_0_topic_3"),
            mode: selectedMode,
            params: [
                { label: t("statistics", "questions_param"), value: queue.length },
                { label: t("statistics", "words_param"), value: selectedWords.length },
                { label: t("statistics", "repeats_param"), value: repeatCount }
            ]
        });
    }
    
    currentIndex = 0;
    attemptsLeft = 2;
    currentInputStr = "";
    isAnimating = false;

    rulesSection.style.display = "none";
    gameSection.style.display = "flex";
    endSection.style.display = "none";
    modalOverlay.classList.remove("active");

    renderQuestion();
}

function renderQuestion() {
    if (currentIndex >= queue.length) {
        nextPhase();
        return;
    }
    currentInputStr = "";
    updateInputDisplay();
    inputBox.className = "input-box"; 

    const currentW = queue[currentIndex];
    
    let totalLeft = queue.length - currentIndex;
    let thisWordLeft = queue.slice(currentIndex).filter(w => w.key === currentW.key).length;
    gameCounters.innerHTML = `
        <div>${t("vocabulary", "total_left")} <b>${totalLeft}</b></div>
        <div>${t("vocabulary", "word_left")} <b>${thisWordLeft}</b></div>
    `;

    const nativeText = currentW.native || getWordNative(currentW.key);

    if (mode === 'ASSISTED') {
        attemptsBadge.style.display = "none";
        questionBox.innerHTML = `${nativeText} - <span class="de-hint">${currentW.de}</span>`;
    } else {
        attemptsBadge.style.display = "block";
        attemptsBadge.textContent = t("vocabulary", "attempts_left") + attemptsLeft;
        questionBox.innerHTML = nativeText;
    }
}

function updateInputDisplay() {
    inputBox.textContent = currentInputStr;
}

function showEndScreen() {
    if (statsRunId && window.AppStats) {
        window.AppStats.finishRun(statsRunId);
        statsRunId = null;
    }
    gameState = 'END';
    rulesSection.style.display = "none";
    gameSection.style.display = "none";
    endSection.style.display = "flex";
}

function checkAnswer() {
    if (currentInputStr === "") return;
    isAnimating = true;

    const currentW = queue[currentIndex];
    if (currentInputStr.trim() === currentW.de) {
        // Correct
        inputBox.classList.add("correct");
        setTimeout(() => {
            currentIndex++;
            attemptsLeft = 2; 
            isAnimating = false;
            renderQuestion();
        }, 500);
    } else {
        // Incorrect
        inputBox.classList.add("wrong");
        setTimeout(() => {
            inputBox.classList.remove("wrong");
            isAnimating = false;
            
            if (mode === 'ASSISTED') {
                showModal(
                    "Ой-ой!",
                    t("vocabulary", "incorrect_assisted"),
                    [{ text: t("vocabulary", "back_to_selection"), primary: true, action: showRules }]
                );
            } else {
                if (window.AppStats) window.AppStats.recordMistake(statsRunId);
                attemptsLeft--;
                if (attemptsLeft < 0) {
                    if (statsRunId && window.AppStats) {
                        window.AppStats.cancelRun(statsRunId);
                        statsRunId = null;
                    }
                    showModal(
                        "Ой-ой!",
                        t("vocabulary", "failed_unassisted") + " " + t("vocabulary", "choose_action"),
                        [
                            { text: t("vocabulary", "back_to_selection"), primary: true, action: showRules }
                        ]
                    );
                } else {
                    currentInputStr = "";
                    renderQuestion();
                }
            }
        }, 400);
    }
}

// Global Keyboard Listener
document.addEventListener('keydown', (e) => {
    if (gameState !== 'PLAYING' || isAnimating || modalOverlay.classList.contains("active")) return;

    if (e.key === 'Backspace') {
        currentInputStr = currentInputStr.slice(0, -1);
        updateInputDisplay();
    } else if (e.key === 'Enter') {
        checkAnswer();
    } else if (e.key.length === 1) {
        currentInputStr += e.key;
        updateInputDisplay();
    }
});

// Init
renderPersonalListsUI();
showRules();
