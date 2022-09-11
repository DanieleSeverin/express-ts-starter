import express from 'express';
import { LoginResponse } from '../models/Auth';
import { getUserByEmail } from './getUserByEmail';
import { generateAccessToken, generateRefreshToken } from './jwt';
const router = express.Router();

router.post('/', async function(req, res) {
    console.log("Login Request");
    const existingUser = await getUserByEmail(req.body.email);
    if(!existingUser || existingUser.password !== req.body.password){
        console.log("Invalid email or password: ", existingUser, req.body);
        res.status(400).send({message: "Access denied."});
        return;
    }

    const response :LoginResponse = {
        user: {
            id: existingUser.id,
            email: existingUser.email,
            password: existingUser.password
        },
        accessToken: generateAccessToken(existingUser.id!),
        refreshToken: generateRefreshToken(existingUser.id!)
    } 
    res.send(response);
});

module.exports = router;