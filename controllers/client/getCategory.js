const { categoryModel } = require('../../models/category');
const filterQuery = require('./filterQuery');


// handle get book by category to client
async function handleGetCategory(request, response)
{
    try
    {
        let category = request.params.category.toLowerCase();
        let res = await filterQuery(
            categoryModel
                .findOne(
                    {
                        categoryName : category
                    }
                )
                .select(
                    [
                        '-_id', 
                        '-__v'
                    ]
                )
        );
        
        return response    
                .status(200)
                .json(
                    res
                );
    }
    catch(err)
    {
        return response
                .sendStatus(500);
    }
}

module.exports = {
    handleGetCategory,
}