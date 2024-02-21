// imports
const express = require('express');
const { handleCategoryPost, getCategory } = require('../../controllers/admin/admin');



// initialization
const Router = express.Router();


// handling requests
Router
    .post('/', handleCategoryPost)
    .get('/', getCategory);


// exports
module.exports = Router;