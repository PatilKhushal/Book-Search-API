const { userModel } = require("../../models/user");

// function to show login page
async function showLoginPage(request, response)
{
    return response.render('client/loginPage');
}


// function to show signup page
async function showSignupPage(request, response)
{
    return response.render('client/signupPage');
}


// function to show signup page
async function handleUserSignup(request, response)
{
    await userModel.create({...request.body, 'profileImg' : `uploads/client/profile-images/${request.file.filename}`});
    return response.redirect('/authentication');
}


// function to show signup page
async function handleUserLogin(request, response)
{
    return response.redirect('/user');
}


function handleUserLogout(request, response){
    response.clearCookie('token');
    return response.redirect('/');
}

// exports
module.exports = {
    showLoginPage,
    showSignupPage,
    handleUserSignup,
    handleUserLogin,
    handleUserLogout
}