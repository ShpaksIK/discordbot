const {logger} = require("sequelize/lib/utils/logger");
const {cookie} = require("express/lib/response");
const User = require("../models/user-model")
const UserDTO = require("../dto/user-dto");
var DiscordStrategy = require('passport-discord').Strategy;
var scopes = ['identify', 'email', 'guilds'];
require("dotenv").config()

let discord = new DiscordStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.URL_REDIRECT,
        scope: scopes
    },
    async function (accessToken, refreshToken, profile, cb){
        try {
            const user =  UserDTO.getUserDto(profile, refreshToken, accessToken)
            const newUser = await User.create({
                ...user
            })

            return cb(null, newUser)
        } catch (e) {
            console.log(e)
        }

    });

module.exports = discord
