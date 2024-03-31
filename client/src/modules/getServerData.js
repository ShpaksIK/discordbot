export default function getServerData(serverId) {
    const settingsData = {
        "prefix": "!",
        "mainColor": "#fff",
    }
    const testData = {
        "title": "Server Test Name",
        "id": serverId,
        "online": 2024,
        "settings": settingsData
    }

    return testData
}