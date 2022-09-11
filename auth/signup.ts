import express from 'express';
import { LoginResponse, User } from '../models/Auth';
import { generateAccessToken, generateRefreshToken } from './jwt';
import { v4 as uuid } from 'uuid';
import { getUserByEmail } from './getUserByEmail';
import { addUser } from './addUser';
const router = express.Router();

router.post('/', async function(req, res) {
    console.log("Signup Request", req.body);

    const user :User = {
        id: uuid(),
        email: req.body.email,
        password: req.body.password
    }

    //check if email is already in use
    //if not, create user and return response
    const existingUser = await getUserByEmail(req.body.email);
    if(existingUser){
        res.status(400).send({message: "Email already in use."});
        return;
    } else {
        await addUser(user);
    }

    const response :LoginResponse = {
        user: user,
        accessToken: generateAccessToken(user.id!),
        refreshToken: generateRefreshToken(user.id!)
    } 
    res.send(response);
});

module.exports = router;