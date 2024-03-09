const UserService = require("../services/user-service")
const {use} = require("passport");
require("dotenv").config()
const axios = require("axios")
const {Strategy} = require("passport-oauth2");
const {maxAge, httpOnly} = require("express-session/session/cookie");
class UserController {

    async successAuth(req, res) {
        const user = await UserService.successAuth(req.user)

        res.cookie("accessToken", user.accessToken, {maxAge: 24 * 3600 * 1000}, {httpOnly: true})
        res.redirect("http://localhost:3000/")
    }
    async getData(req, res) {
        console.log(req.user)
        const config = {
            headers: {
                Authorization: `Bearer ${req.user.accessToken}`
            }
        };
        const data = await axios.get("https://discord.com/oauth2/applications/@me", config)
        res.send(data)
    }
}


module.exports = new UserController()