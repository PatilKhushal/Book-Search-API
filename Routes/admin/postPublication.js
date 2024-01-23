// imports
const express = require('express');
const { handlePublicationPost } = require('../../controllers/admin');

// initialization
const Router = express.Router();


// handling requests
Router.post('/', handlePublicationPost);


// exports
module.exports = Router;