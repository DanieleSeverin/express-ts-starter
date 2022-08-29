"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jwt = require('jsonwebtoken');
function generateAccessToken(uuid) {
    return jwt.sign({ id: uuid }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
}
exports.generateAccessToken = generateAccessToken;
function generateRefreshToken(uuid) {
    return jwt.sign({ id: uuid }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' });
}
exports.generateRefreshToken = generateRefreshToken;
function authenticateToken(req, res, next) {
    const authHeader = req.headers.get('authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err)
            return res.sendStatus(403);
        req.User = user;
        next();
    });
}
exports.authenticateToken = authenticateToken;
