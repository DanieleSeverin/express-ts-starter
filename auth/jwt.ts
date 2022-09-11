import { NextFunction, Request, Response } from "express";
import { RequestWithUser } from "./RequestWithUser";

const jwt = require('jsonwebtoken');

export function generateAccessToken(uuid: string) {
    return jwt.sign(
        {id: uuid},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '3600s'});
  }

export function generateRefreshToken(uuid: string) {
    return jwt.sign(
        {id: uuid},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '1h'});
  }

export function authenticateToken(req: RequestWithUser, res: Response, next: NextFunction) {
    const authHeader = req.headers.get('authorization')
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }