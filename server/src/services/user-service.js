const User = require("../models/user-model")
class UserService {
    async registration(code) {
        console.log(code)
    }
    async successAuth(user) {

        return user
        //User.create({username: user.username, icon: user.icon, email: user.email, guilds: user.guilds, refreshToken: user.refreshToken})
    }

}

module.exports = new UserService()