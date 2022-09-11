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
const uuid_1 = require("uuid");
const getUserByEmail_1 = require("./getUserByEmail");
const addUser_1 = require("./addUser");
const router = express_1.default.Router();
router.post('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Signup Request", req.body);
        const user = {
            id: (0, uuid_1.v4)(),
            email: req.body.email,
            password: req.body.password
        };
        //check if email is already in use
        //if not, create user and return response
        const existingUser = yield (0, getUserByEmail_1.getUserByEmail)(req.body.email);
        if (existingUser) {
            res.status(400).send({ message: "Email already in use." });
            return;
        }
        else {
            yield (0, addUser_1.addUser)(user);
        }
        const response = {
            user: user,
            accessToken: (0, jwt_1.generateAccessToken)(user.id),
            refreshToken: (0, jwt_1.generateRefreshToken)(user.id)
        };
        res.send(response);
    });
});
module.exports = router;
