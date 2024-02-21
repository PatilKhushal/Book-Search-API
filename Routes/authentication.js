// importing 
const Router = require('express').Router();
const { showLoginPage, showSignupPage, handleUserSignup, handleUserLogin, handleUserLogout } = require('../controllers/client/authentication');
const { validateSignup, validateLogin } = require('../middleware/client/authentication')
const uploads = require('../middleware/client/mutlerFileUpload');

// Routes
Router
    .get('/', showLoginPage)
    .post('/', validateLogin, handleUserLogin);

Router
    .get('/signup', showSignupPage)
    .post('/signup', uploads.single('profileImg'), validateSignup, handleUserSignup)

Router
    .get('/logout', handleUserLogout)
// exports
module.exports = Router;