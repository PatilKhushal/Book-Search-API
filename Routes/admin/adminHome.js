// imports
const express = require('express');
const postAuthor = require('./postAuthor');
const postPublication = require('./postPublication');
const postCategory = require('./postCategory');
const postBook = require('./postBook');
const { showAdminLoginPage, handleAdminPost } = require('../../controllers/admin');
const validateAdminLogin = require('../../middleware/validateAdminLogin');

// initalization
const Router = express.Router();


// Routes
Router.use('/author', postAuthor);
Router.use('/publication', postPublication);
Router.use('/category', postCategory);
Router.use('/book', postBook)

// handling requests
Router
    .get('/', showAdminLoginPage)
    .post('/', validateAdminLogin, handleAdminPost);

// exports
module.exports = Router;