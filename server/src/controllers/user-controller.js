const UserService = require("../services/user-service")
const {use} = require("passport");
require("dotenv").config()

const {Strategy} = require("passport-oauth2");
class UserController {

    async successAuth(req, res) {
        const user = req
        console.log(user)
    }

}


module.exports = new UserController()