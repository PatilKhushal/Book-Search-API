// imports
const express = require('express');
const postAuthor = require('./postAuthor');
const postPublication = require('./postPublication');
const postCategory = require('./postCategory');
const { handleBookPost, handleBookPatch } = require('../../controllers/admin');
const validateUniqueISBN = require('../../middleware/bookPostMiddleware');


// initalization
const Router = express.Router();


// Routes
Router.use('/author', postAuthor);
Router.use('/publication', postPublication);
Router.use('/category', postCategory);


// handling requests
Router.post('/', validateUniqueISBN, handleBookPost);
Router.patch('/', handleBookPatch);


// exports
module.exports = Router;