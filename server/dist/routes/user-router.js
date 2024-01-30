"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const url_1 = __importDefault(require("url"));
exports.userRoute = (0, express_1.Router)();
exports.userRoute.get('/login/callback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { code } = req.query;
    console.log(code);
    if (code) {
        const formData = new url_1.default.URLSearchParams({
            client_id: '1197185720020897922',
            client_secret: 'agkPqyQAIH-KX2RIYx6LQKT7oT97bDXo',
            grant_type: 'authorization_code',
            code: code.toString(),
            redirect_uri: 'http://localhost:3000/',
        });
        const output = yield axios_1.default.post('https://discord.com/api/oauth2/token', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        if (output.data) {
            const access = output.data.access_token;
            const userinfo = yield axios_1.default.get('https://discord.com/api/v10/users/@me', {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            });
            //refresh token
            const formData1 = new url_1.default.URLSearchParams({
                client_id: '1197185720020897922',
                client_secret: 'agkPqyQAIH-KX2RIYx6LQKT7oT97bDXo',
                grant_type: 'refresh_token',
                refresh_token: output.data.refresh_token,
            });
            const refresh = yield axios_1.default.post('https://discord.com/api/oauth2/token', formData1, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const getGuilds = yield axios_1.default.get('https://discord.com/users/guilds');
            console.log(output.data, userinfo.data, refresh.data, getGuilds.data);
        }
    }
}));
