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
const express_1 = __importDefault(require("express"));
const jwt_1 = require("./jwt");
const router = express_1.default.Router();
router.post('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Login Request");
        const response = {
            User: {
                id: "1",
                name: "John Doe",
                email: "boh"
            },
            AccessToken: (0, jwt_1.generateAccessToken)("1"),
            RefreshToken: (0, jwt_1.generateRefreshToken)("1")
        };
        res.send(response);
    });
});
module.exports = router;
