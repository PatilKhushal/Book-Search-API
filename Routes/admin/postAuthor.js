// imports
const express = require('express');
const { handleAuthorPost, getAuthor } = require('../../controllers/admin');

// initialization
const Router = express.Router();


// handling requests
Router
    .get('/', getAuthor)
    .post('/', handleAuthorPost);


// exports
module.exports = Router;