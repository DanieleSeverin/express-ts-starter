import express from 'express';
import { LoginResponse } from '../models/Auth';
import { generateAccessToken, generateRefreshToken } from './jwt';
const router = express.Router();

router.post('/', async function(req, res) {
    console.log("Login Request");
    const response :LoginResponse = {
        user: {
            id: "1",
            name: "John Doe",
            email: "boh"
        },
        accessToken: generateAccessToken("1"),
        refreshToken: generateRefreshToken("1")
    } 
    res.send(response);
});

module.exports = router;