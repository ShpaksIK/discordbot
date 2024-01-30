"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
const DiscordStrategy = require('../user-repositories/user-repository');
exports.userRouter.get('/get', (req, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=1197185720020897922&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&scope=identify');
});
exports.userRouter.get('/get/code', (req, res) => { });
