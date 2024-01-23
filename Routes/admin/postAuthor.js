// imports
const express = require('express');
const { handleAuthorPost } = require('../../controllers/admin');

// initialization
const Router = express.Router();


// handling requests
Router.post('/', handleAuthorPost);


// exports
module.exports = Router;