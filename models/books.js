// imports
const mongoose = require('mongoose');

// Books Schema and Model
const bookSchema = mongoose.Schema(
    {
        ISBN : {
            type : String,
            required : true,
            lowercase : true,
            unique : true,
        },

        title : {
            type : String,
            required : true,
            lowercase : true,
        },

        pages : {
            type : Number,
        },

        publishDate : {
            type : Date,
            required : true
        },

        language : [
            {
                type : String, 
                required : true
            }
        ],

        publication : {
            type : mongoose.SchemaTypes.ObjectId,
            ref : 'Publication'
        },

        author : [
            {
                type : mongoose.SchemaTypes.ObjectId,
                ref : 'Author'
            }
        ],
        
        category : [
            {
                type : mongoose.SchemaTypes.ObjectId,
                ref : 'Category'
            }
        ],

        stock : {
            type : Number,
        },

        link : {
            type : String,
        },

        image : {
            type : String,
            required : true,
            default : '/uploads/admin/books/defaultImage.jpg'
        }
    }
);
const bookModel = mongoose.model('Books', bookSchema);

// exports
module.exports = {
    bookModel,
};