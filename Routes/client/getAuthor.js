// imports
const express = require('express');
const { handleGetAuthor } = require('../../controllers/client/getAuthor');


// initalization
const Router = express.Router();


// handling requests
Router.get('/:author', handleGetAuthor);


// exports
module.exports = Router;