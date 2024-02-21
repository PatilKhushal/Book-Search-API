// imports
const mongoose = require('mongoose');

// Author Schema and Model
const authorSchema = mongoose.Schema(
    {
        authorName : {
            type : String,
            required : true,
            lowercase : true
        },

        dob : {
            type : Date
        },

        penName : {
            type : String,
            lowercase : true
        },

        country : {
            type : String,
            required : true
        },

        books : [
            {
                type : mongoose.SchemaTypes.ObjectId, 
                ref : 'Books',
            }
        ],
    }
)
const authorModel = mongoose.model('Author', authorSchema);

// exports
module.exports = {
    authorModel,
};