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


// Category Schema and Model
const categorySchema = mongoose.Schema(
    {
        categoryName : {
            type : String,
            required : true,
            lowercase : true
        },
        books : [
            {
                type : mongoose.SchemaTypes.ObjectId,
                ref : 'Books'
            }
        ]
    }
);
const categoryModel = mongoose.model('Category', categorySchema);


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
    }
);
const bookModel = mongoose.model('Books', bookSchema);

const userSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },

        email : {
            type : String,
            required : true,
            unique : true
        },

        password : {
            type : String,
            required : true,
        },

        role : {
            type : String,
            required : true,
            enum : ['ADMIN', 'NORMAL'],
            default : "NORMAL"
        },

        profileImg : {
            type : String,
        }
    }
)
const userModel = mongoose.model('Users', userSchema);

// exports
module.exports = {
    bookModel,
    categoryModel,
    publicationModel,
    authorModel,
    userModel
};