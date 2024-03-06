const {logger} = require("sequelize/lib/utils/logger");
const {cookie} = require("express/lib/response");
const User = require("../models/user-model")
var DiscordStrategy = require('passport-discord').Strategy;
var scopes = ['identify', 'email', 'guilds'];
require("dotenv").config()

let discord = new DiscordStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.URL_REDIRECT,
        scope: scopes
    },
    function(accessToken, refreshToken, profile, cb) {

        return cb(null, profile)
    });

module.exports = discord
