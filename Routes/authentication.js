// importing 
const Router = require('express').Router();
const { showLoginPage, showSignupPage, handleUserSignup, handleUserLogin } = require('../controllers/authentication');
const { validateSignup, validateLogin } = require('../middleware/authentication')
const uploads = require('../middleware/mutlerFileUpload');

// Routes
Router
    .get('/', showLoginPage)
    .post('/', validateLogin, handleUserLogin);

Router
    .get('/signup', showSignupPage)
    .post('/signup', uploads.single('profileImg'), validateSignup, handleUserSignup)

// exports
module.exports = Router;