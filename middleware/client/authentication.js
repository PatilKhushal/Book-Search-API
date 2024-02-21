const { userModel } = require("../../models/user");
const fs = require('fs');
const { createToken } = require("../../services/outh");
require('dotenv').config();

async function validateSignup(request, response, next)
{
    let body = request.body;
    let user = await userModel.findOne({email : body.email});
    if(user)
    {   
        fs.unlink(request.file.path, (err) => {
            if(err)
                console.log(err);
        });
        return  response.render('client/signupPage', {
            'duplicateEmail' : 'duplicateEmail'
        });
    }

    next();
}

async function validateLogin(request, response, next)
{
    
    try
    {
        const user = await userModel.isPasswordMatched(request.body.email, request.body.password);
        if(user)
        {
            return createToken(user, response, next);
        }
        return response.render('client/loginPage', {
            'invalidPassword' : 'invalidPassword'
        });
    }
    catch(error)
    {
        return  response.render('client/loginPage', {
            'invalidEmail' : 'invalidEmail'
        });
    }
    
}

module.exports = {
    validateSignup,
    validateLogin
}