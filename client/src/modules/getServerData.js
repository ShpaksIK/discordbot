export default function getServerData(serverId) {
    // В будующем:
    //
    // Функция будет принимать ещё один параметр (данные пользователя).
    // Функция будет проверять пользователя на владельца или администратора сервера.
    // Если данные не сошлись, то выдавать ошибку.

    const settingsData = {
        "prefix": "!",
        "mainColor": "#ffffff",
        "adminRoles": [],
        "greetUser": true,
        "greetAssignedRole": [],
        "greetWelcomeText": "Hello, user",
        "greetSendToChannel": true,
        "greetSendToLs": false,
        "messagesMentionUser": false
    }
    const testData = {
        "title": "Server Test Name",
        "id": serverId,
        "online": 2024,
        "settings": settingsData
    }

    return testData
}