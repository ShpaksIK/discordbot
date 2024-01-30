"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const DiscordStrategy = require('passport-discord').Strategy;
passport_1.default.use(new DiscordStrategy({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['indentify'],
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
}));
