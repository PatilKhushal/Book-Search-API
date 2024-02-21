// imports
const express = require('express');
const { handleGetCategory } = require('../../controllers/client/getCategory');


// initalization
const Router = express.Router();


// handling requests
Router.get('/:category', handleGetCategory);


// exports
module.exports = Router;