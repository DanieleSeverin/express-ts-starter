import express from 'express';
import { LoginResponse } from '../models/Auth';
import { generateAccessToken, generateRefreshToken } from './jwt';
import { v4 as uuid } from 'uuid';
const router = express.Router();

router.post('/', async function(req, res) {
    console.log("Signup Request");
    const id: string = uuid();
    const response :LoginResponse = {
        User: {
            id: id,
            name: "John Doe",
            email: "boh"
        },
        AccessToken: generateAccessToken(id),
        RefreshToken: generateRefreshToken(id)
    } 
    res.send(response);
});

module.exports = router;