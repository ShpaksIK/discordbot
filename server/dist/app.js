"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
<<<<<<< HEAD
const user_router_1 = require("./routes/user-router");
=======
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
//import discordstrategy from "./discordstrategy"
>>>>>>> parent of fd34e6f (Получение информации о пользователе)
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(require('dotenv').config);
app.use(express_1.default.json());
app.use((0, body_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: 'some random secret',
    cookie: {
        maxAge: 60000 * 60 * 24,
    },
    saveUninitialized: false,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.get('/', passport_1.default.authenticate('discord'));
app.listen(8080, () => {
    console.log('SERVER is running');
});
