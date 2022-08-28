"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function setCurrentUser(req, res, next) {
    const token = req.headers.get("authorization");
    if (token) {
        // look up the user based on the token
        const user = getUserFromToken(token).then((user) => {
            // append the user object the the request object
            req.User = user;
            // call next middleware in the stack
            next();
        });
    }
    else
        next();
};
function getUserFromToken(token) {
    return Promise.resolve({
        id: 1,
        name: "John Doe",
        email: ""
    });
}
