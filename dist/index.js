"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
var login = require('./auth/login');
var signup = require('./auth/signup');
//Parser
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use((0, cors_1.default)());
app.use(jsonParser);
app.use('/api/login', login);
app.use('/api/signup', signup);
app.all('/', (req, res) => {
    res.send('No route match.');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
