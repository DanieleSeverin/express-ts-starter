import express, { Express, Request, Response } from 'express';
import { generateAccessToken } from './jwt';
const router = express.Router();

router.post('/', async function(req, res) {
    console.log("Login Request");
    const response = {
        User: {
            id: 1,
            name: "John Doe",
            email: "boh"
        },
        AccessToken: generateAccessToken("1"),
        RefreshToken: ""
    } 
    res.send(response);
});

module.exports = router;