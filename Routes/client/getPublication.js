// imports
const express = require('express');
const { handleGetPublication } = require('../../controllers/client/getPublication');


// initalization
const Router = express.Router();


// handling requests
Router.get('/:publication', handleGetPublication);


// exports
module.exports = Router;