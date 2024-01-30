"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_discord_1 = __importDefault(require("passport-discord"));
const DiscordStrategy = passport_discord_1.default.Strategy;
passport_1.default.use(new DiscordStrategy({
    clientID: '1197185720020897922',
    clientSecret: '_8v-y-TupNmLEwER4OcnbDGGEX8GWqDU',
    callbackURL: 'http://localhost:3000/redirect',
    scope: ['indetify', 'guilds'],
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
}));
