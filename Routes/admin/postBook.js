const Router = require('express').Router();
const { handleBookPost, handleBookPatch, showAdminHomePage } = require('../../controllers/admin');
const validateUniqueISBN = require('../../middleware/bookPostMiddleware');

Router.get('/', showAdminHomePage);
Router.post('/', validateUniqueISBN, handleBookPost);
Router.patch('/', handleBookPatch);

module.exports = Router;