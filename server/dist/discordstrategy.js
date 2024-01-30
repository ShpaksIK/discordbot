"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const DiscordStrategy = require('passport-discord').Strategy;
passport_1.default.use(new DiscordStrategy({
    clientId: '1197185720020897922',
    clientSecret: 'dmR4Zs_ZNlOYO4iHtIhYq2AK7UMJ1bJj',
    callbackURL: '/redirect',
    scope: ['indentify', 'guilds'],
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
}));
