const { userModel } = require("../models/Library");

// function to show login page
async function showLoginPage(request, response)
{
    return response.render('loginPage');
}


// function to show signup page
async function showSignupPage(request, response)
{
    return response.render('signupPage');
}


// function to show signup page
async function handleUserSignup(request, response)
{
    await userModel.create({...request.body, 'profileImg' : request.file.path});
    return response.redirect('/authentication');
}


// function to show signup page
async function handleUserLogin(request, response)
{
    return response.redirect('/user');
}



// exports
module.exports = {
    showLoginPage,
    showSignupPage,
    handleUserSignup,
    handleUserLogin
}