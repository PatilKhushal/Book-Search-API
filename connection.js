// imports
const mongoose = require('mongoose');


// function to connect to MongoDB at specified url
function connectDB(url)
{
    return mongoose.connect(url);
}


// exports
module.exports = connectDB;