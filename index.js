// imports
const express = require('express');
const connectDB = require('./connection');
const clientHome = require('./Routes/client/clientHome');
const adminHome = require('./Routes/admin/adminHome');


// Initialization
const app = express();
const PORT = 3000;


// Middlewares
app.use(express.json({extended : false}));
app.use(express.urlencoded({extended : false}));


// Connection to DB
const DBName = "Library";
const DBurl = `mongodb://localhost:27017/${DBName}`;
connectDB(DBurl)
    .then(() => console.log(`connected to DB at ${DBurl}`))
    .catch(() => console.log("Error connecting DB"));


// Routes
app.use('/', clientHome);
app.use('/admin', adminHome);


// Listening
app.listen(PORT, () => console.log(`Listening at ${PORT}`));