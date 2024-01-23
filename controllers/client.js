const { bookModel, categoryModel, authorModel, publicationModel } = require('../models/Library');

// filter for books
async function filterQueryBooks(query)
{
    let limit = 50;
    return await query
                    .where('stock')
                    .gt(0)
                    .limit(limit)  // limit result to ${limit} documents 
                    .select(
                        [
                            '-_id', 
                            '-__v'
                        ]
                    ) // to exclude _id id from result // populate publication withe specified fields in result
                    .populate(
                        {
                            path : 'publication', 
                            select : ['publicationName', 'country', '-_id']
                        }
                    ) 
                    .populate(
                        {
                            path : 'author', 
                            select : ['authorName', 'dob', 'penName', 'country', '-_id']
                        }
                    )
                    .populate(
                        {
                            path : 'category', 
                            select : ['categoryName', '-_id']
                        }
                    );
}

// filter for other then books
async function filterQuery(query)
{
    let limit = 50;
    return await query     
                    .limit(limit)
                    .populate(
                        {
                            path : 'books', 
                            match : {'stock' : {$gt : 0}},
                            select : ['-_id', '-category', '-author', '-__v', '-publication', '-stock'],
                        }
                    )
}



// handling get all books to client
async function handleGetAllBooksData(request, response)
{
    try
    {
        let res = await filterQueryBooks(
            bookModel
                .find(
                    {

                    }
                )
        );
        
        return response    
                .status(200)
                .json(
                    {
                        'total' : res.length, 
                        'data' : [
                            ...res
                        ]
                    }
                );
    }
    catch(err)
    {
        return response
                .sendStatus(500);
    }
}

// handle get book by ISBN to client
async function handleGetISBN(request, response)
{
    try
    {
        let isbn = request.params.ISBN;
        let res = await filterQueryBooks(
            bookModel
                .findOne(
                    {
                        ISBN : isbn
                    }
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

// handle get book by category to client
async function handleGetCategory(request, response)
{
    try
    {
        let category = request.params.category.toLowerCase();
        console.log(category)
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
        
        console.log(res);
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

// handle get book by author to client
async function handleGetAuthor(request, response)
{
    try
    {
        let author = request.params.author.toLowerCase();
        let res = await filterQuery(
            authorModel
                .find(
                    {
                        authorName : author
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
        console.log(err);
        return response
                .sendStatus(500);
    }
}

// handle get book by publication to client
async function handleGetPublication(request, response)
{
    try
    {
        let publication = request.params.publication.toLowerCase();
        let res = await filterQuery(
            publicationModel
                .find(
                    {
                        publicationName : publication
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
        console.log(err);
        return response
                .sendStatus(500);
    }
}


module.exports = { handleGetAllBooksData, handleGetISBN, handleGetCategory, handleGetAuthor, handleGetPublication }