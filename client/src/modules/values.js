// User operations
class User {
    constructor(nickName, nickTag, imgUrl) {
        this.nickName = nickName
        this.nickTag = nickTag
        this.imgUrl = imgUrl
        this.isLogin = false
    }
    changeData(nickName, nickTag, imgUrl, isLogin) {
        this.nickName = nickName
        this.nickTag = nickTag
        this.imgUrl = imgUrl
        this.isLogin = isLogin
    }
    removeData(nickName, nickTag, imgUrl, isLogin) {
        this.nickName = nickName
        this.nickTag = nickTag
        this.imgUrl = imgUrl
        this.isLogin = isLogin
    }
}
function createUser(nickName, nickTag, imgUrl) {
    let user = new User(nickName, nickTag, imgUrl)
    return user
}
const userData = createUser("", "", "")
userData.changeData("Shpaks", "shpaks", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png", true)


// Basic values
const botName = "TeamBot"
const serversUsingBot = "2000"
const linkToAuth = "https://discord.com/api/oauth2/authorize?client_id=1197185720020897922&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=identify+guilds+gdm.join+email+guilds.join+connections"
const linkToInvite = "#"

// Exports
export {botName, serversUsingBot, linkToAuth, linkToInvite, userData}