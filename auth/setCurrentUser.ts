import { NextFunction } from "express";
import { User } from "../models/Auth";
import { RequestWithUser } from "./RequestWithUser";

module.exports = function setCurrentUser(req: RequestWithUser, res: Response, next: NextFunction) {
  const token = req.headers.get("authorization");

  if(token){
    // look up the user based on the token
    const user = getUserFromToken(token).then((user :User) => {
        // append the user object the the request object
        req.user = user;

        // call next middleware in the stack
        next();
    });
    } else next();
};

function getUserFromToken(token: string) :Promise<User>{
  return Promise.resolve({
    id: "1",
    name: "John Doe",
    email: ""
  })
}