/**
 * УНИВЕРСАЛЬНЫЙ ЛИНКОВЩИК СКРИПТОВ
 */

// Переменная отладки (true - выводить логи, false - скрыть)
const DEBUG = true;

// Внутренняя очередь для последовательной загрузки
let syncQueue = Promise.resolve();

/**
 * Базовая функция загрузки скрипта (возвращает Promise)
 * Разрешается (resolve) в любом случае, чтобы очередь не ломалась из-за ошибок.
 */
function _loadScriptElement(path) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = path + "?t=" + Date.now();

        // Устанавливаем таймаут на 2 минуты (120 000 мс)
        const timeoutId = setTimeout(() => {
            if (DEBUG) console.error(`[Linker] Таймаут (2 мин)! Не удалось загрузить: ${path}. Переходим к следующему.`);
            script.remove(); // Подчищаем DOM
            resolve();       // Продолжаем очередь
        }, 120000);

        // Успешная загрузка
        script.onload = () => {
            clearTimeout(timeoutId);
            if (DEBUG) console.log(`[Linker] Успешно загружен: ${path}`);
            resolve();
        };

        // Ошибка (например, 404 Not Found)
        script.onerror = () => {
            clearTimeout(timeoutId);
            if (DEBUG) console.error(`[Linker] Ошибка (404 или сеть)! Не удалось загрузить: ${path}. Переходим к следующему.`);
            script.remove(); // Подчищаем DOM
            resolve();       // Продолжаем очередь
        };

        // Встраиваем в страницу, начинается реальная загрузка
        document.head.appendChild(script);
    });
}

/**
 * ТИП 1: ПОСЛЕДОВАТЕЛЬНАЯ ЗАГРУЗКА
 * Скрипт ждет, пока загрузятся все предыдущие sync_load
 */
function sync_load(path) {
    if (DEBUG) console.log(`[Linker] Добавлен в синхронную очередь: ${path}`);
    // Привязываем загрузку в конец текущей цепочки очереди
    syncQueue = syncQueue.then(() => _loadScriptElement(path));
}

/**
 * ТИП 2: АСИНХРОННАЯ ЗАГРУЗКА
 * Скрипт начинает грузиться немедленно, никого не дожидаясь
 */
function async_load(path) {
    if (DEBUG) console.log(`[Linker] Начат процесс асинхронной загрузки: ${path}`);
    // Запускаем без привязки к очереди
    _loadScriptElement(path);
}

sync_load('JS/Universal/order.js');
