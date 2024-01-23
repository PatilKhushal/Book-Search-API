// imports
const express = require('express');
const { handleCategoryPost } = require('../../controllers/admin');



// initialization
const Router = express.Router();


// handling requests
Router.post('/', handleCategoryPost);


// exports
module.exports = Router;