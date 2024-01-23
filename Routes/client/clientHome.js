// imports
const express = require('express');
const { handleGetAllBooksData, handleGetISBN } = require('../../controllers/client');
const getCategory = require('./getCategory')
const getAuthor = require('./getAuthor')
const getPublication = require('./getPublication')


// initalization
const Router = express.Router();


//Routes
Router.use('/category', getCategory);
Router.use('/author', getAuthor);
Router.use('/publication', getPublication);

// handling requests
Router.get('/', handleGetAllBooksData)
Router.get('/:ISBN', handleGetISBN)



// exports
module.exports = Router;