// imports
const express = require('express');
const { handlePublicationPost, getPublication } = require('../../controllers/admin/admin');

// initialization
const Router = express.Router();


// handling requests
Router
    .post('/', handlePublicationPost)
    .get('/', getPublication);


// exports
module.exports = Router;