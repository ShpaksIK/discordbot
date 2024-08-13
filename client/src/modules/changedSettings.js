// Объект, содержащий все измененные настройки
let listChangedSettings = {}

// Функция, которая считывает поля ввода на измененность
function readFields(key, value) {
    listChangedSettings[key] = value
}

// Будет реализован запрос к файлу, который посылает запрос в
// базу данных для сохранения настроек
function saveChangedSettings(changedSettings) {
    console.log(changedSettings)
}


export { saveChangedSettings }