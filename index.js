// imports
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./connection');
const clientHome = require('./Routes/client/clientHome');
const adminHome = require('./Routes/admin/adminHome');
const authentication = require('./Routes/authentication');
const logRequest = require('./middleware/logRequest');
const loginResriction = require('./middleware/client/loginRestriction');
const { isAdmin } = require('./middleware/admin/isAdmin');

require('dotenv').config();


// Initialization
const app = express();
const PORT = process.env.PORT || 5500;


// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(logRequest("log.txt"));
app.set('view engine', 'ejs');


// Connection to DB
const DBName = process.env.DBName;
const DB_URL = `${process.env.DB_URL}/${DBName}`;
connectDB(DB_URL)
    .then(() => console.log(`connected to DB at ${DB_URL}`))
    .catch(() => console.log("Error connecting DB"));


// Routes
app.get('/', (request, response) => {
    return response.redirect('/user');
})
app.use('/user', loginResriction, clientHome);
app.use('/admin', isAdmin , adminHome);
app.use('/authentication', authentication);


// Listening
app.listen(PORT, () => console.log(`Listening at ${PORT}`));