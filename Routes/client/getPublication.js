// imports
const express = require('express');
const { handleGetPublication } = require('../../controllers/client');


// initalization
const Router = express.Router();


// handling requests
Router.get('/:publication', handleGetPublication);


// exports
module.exports = Router;