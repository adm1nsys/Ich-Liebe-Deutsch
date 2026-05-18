// Universal Order
sync_load('JS/Universal/pages.js');
sync_load('JS/Translate/Dict_Home.js');
sync_load('JS/Translate/Dict_Settings.js');
sync_load('JS/Translate/Dict_Alphabet.js');
sync_load('JS/Translate/Dict_Pronunciation.js');
sync_load('JS/Translate/Dict_Pronouns.js');
sync_load('JS/Translate/Dict_Vocabulary.js');
sync_load('JS/Translate/Dict_VerbConjugation.js');
sync_load('JS/Translate/Dict_HabenSein.js');
sync_load('JS/Translate/Translate.js');

// Load Page
switch (PAGE_NAME) {
    case "Home":
        sync_load('JS/Home/index.js');
        break;
    case "Settings":
        sync_load('JS/Settings/settings.js');
        break;
    case "Alphabet":
        sync_load('JS/Zur_Information/Alphabet/index.js');
        break;
    case "Pronunciation":
        sync_load('JS/Zur_Information/Pronunciation/index.js');
        break;
    case "Vocabulary":
        sync_load('JS/Zur_Information/Vocabulary/index.js');
        break;
    case "Pronouns":
        sync_load('JS/A1_1/Pronouns/index.js');
        break;
    case "VerbConjugation":
        sync_load('JS/A1_1/VerbConjugation/index.js');
        break;
    case "HabenSein":
        sync_load('JS/A1_1/HabenSein/index.js');
        break;
    default:
        sync_load('JS/Home/index.js');
        break;
}