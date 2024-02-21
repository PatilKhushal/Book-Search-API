// imports
const mongoose = require('mongoose');

// Publication Schema and Model
const publicationSchema = mongoose.Schema(
    {
        publicationName : {
            type : String,
            required : true,
            lowercase : true
        },

        country : {
            type : String,
            required : true
        },

        books : [
            {
                type : mongoose.SchemaTypes.ObjectId, 
                ref : 'Books'
            }
        ]
    }
);
const publicationModel = mongoose.model('Publication', publicationSchema);

// exports
module.exports = {
    publicationModel
};