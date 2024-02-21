require('dotenv').config();
const jwt = require('jsonwebtoken');

function createToken(user, response, next)
{
    user = {...user._doc, password : undefined, salt : undefined};
    response.cookie('token', jwt.sign(user, process.env.secret), {
        httpOnly : true,
        sameSite : true,
        maxAge : 1000 * 60 * 60 * 24 * 14 
    });
    return next();
}

module.exports = {
    createToken
}