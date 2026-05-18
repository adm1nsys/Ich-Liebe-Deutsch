// Словари подгружаются из файлов Dict_Home.js, Dict_Settings.js, Dict_Alphabet.js, Dict_Pronunciation.js, Dict_Pronouns.js, Dict_Vocabulary.js

const TRANSLATIONS = {
    home: TRANSLATIONS_HOME,
    settings: TRANSLATIONS_SETTINGS,
    alphabet: TRANSLATIONS_ALPHABET,
    pronunciation: TRANSLATIONS_PRONUNCIATION,
    pronouns: TRANSLATIONS_PRONOUNS,
    vocabulary: TRANSLATIONS_VOCABULARY
};

// Функция для получения текущего языка из памяти
function getLanguage() {
    return localStorage.getItem("app_lang") || "en";
}

// Функция для изменения языка
function setLanguage(lang) {
    localStorage.setItem("app_lang", lang);
    location.reload(); // Перезагружаем страницу, чтобы изменения вступили в силу
}

// Универсальная функция перевода с поддержкой модулей (home, settings)
function t(module, key) {
    const lang = getLanguage();
    if (TRANSLATIONS[module] && TRANSLATIONS[module][key]) {
        if (TRANSLATIONS[module][key][lang]) {
            return TRANSLATIONS[module][key][lang];
        }
        // Фолбэк на английский
        if (TRANSLATIONS[module][key]["en"]) {
            return TRANSLATIONS[module][key]["en"];
        }
    }
    // Если ключа нет, выводим сам ключ
    return key;
}
