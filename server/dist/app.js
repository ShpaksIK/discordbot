"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
//import discordstrategy from "./discordstrategy"
const user_router_1 = require("./routes/user-router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/user', user_router_1.userRoute);
app.listen(8080, () => {
    console.log('SERVER is running');
=======
exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./routes/user-route");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(body_parser_1.default.urlencoded({ extended: false }));
exports.app.use(body_parser_1.default.json());
exports.app.use('/user', user_route_1.userRouter);
exports.app.listen(8080, () => {
    console.log('server ok');
>>>>>>> f0cdc09f8700a3f25284c72f3275f981fd5b5a76
});
