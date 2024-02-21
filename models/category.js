// imports
const mongoose = require('mongoose');

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

// exports
module.exports = {
    categoryModel,
};