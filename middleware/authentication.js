const { userModel } = require("../models/Library");
const bcrypt = require('bcrypt')
const fs = require('fs');
const jwt = require('jsonwebtoken')
require('dotenv').config();

async function validateSignup(request, response, next)
{
    let body = request.body;
    console.log(request.file);
    let user = await userModel.findOne({email : body.email});
    if(user)
    {   
        fs.unlink(request.file.path, (err) => {
            if(err)
                console.log(err);
        });
        return  response.render('signupPage', {
            'duplicateEmail' : 'duplicateEmail'
        });
    }
    
    request.body.password = await bcrypt.hash(body.password, 10);
    next();
}

async function validateLogin(request, response, next)
{
    let user = await userModel.findOne({'email' : request.body.email});
    if(user)
    {
        if(await bcrypt.compare(request.body.password, user.password))
        {
            response.cookie('token', jwt.sign(user._id.toString(), process.env.secret), {
                httpOnly : true,
                sameSite : true,
                maxAge : 1000 * 60 * 60 * 24 * 14 
            })
            return next();
        }
        return response.render('loginPage', {
            'invalidPassword' : 'invalidPassword'
        });
    }

    return  response.render('loginPage', {
        'invalidEmail' : 'invalidEmail'
    });
}

module.exports = {
    validateSignup,
    validateLogin
}