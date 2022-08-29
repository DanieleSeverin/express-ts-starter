import express from 'express';
import { LoginResponse } from '../models/Auth';
import { generateAccessToken, generateRefreshToken } from './jwt';
const router = express.Router();

router.post('/', async function(req, res) {
    console.log("Login Request");
    const response :LoginResponse = {
        User: {
            id: "1",
            name: "John Doe",
            email: "boh"
        },
        AccessToken: generateAccessToken("1"),
        RefreshToken: generateRefreshToken("1")
    } 
    res.send(response);
});

module.exports = router;