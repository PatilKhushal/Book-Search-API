const { bookModel, authorModel, publicationModel, categoryModel } = require('../models/Library');

async function handlePublicationUpdate(bookId, publicationId)
{
    return await publicationModel.findByIdAndUpdate(
        publicationId,
        {
            $push : {
                'books' : bookId
            }
        }
    );
}

async function handleAuthorUpdate(bookId, authorData)
{
    let res = [];
    for (const authorID of authorData) 
    {
        res.push(
            await authorModel.findByIdAndUpdate(
                authorID,
                {
                    $push : {
                        'books' : bookId
                    }
                }
            )
        );
    }

    return res;
}

async function handleCategoryUpdate(bookId, categoryData)
{
    let res = [];
    for (const categoryID of categoryData) 
    {
        res.push(
            await categoryModel.findByIdAndUpdate(
                categoryID,
                {
                    $push : {
                        'books' : bookId
                    }
                }
            )
        );
    }

    return res;
}

// handling book post by admin
async function handleBookPost(request, response)
{
    try
    {
        const bookData = request.body;
        // handling book entry
        let res = await bookModel.create(bookData);
        let bookId = res._id;


        // adding ref of book to author
        handleAuthorUpdate(bookId, res.author);


        // adding ref of book to publication
        handlePublicationUpdate(bookId, res.publication);


        // adding ref of book to category
        handleCategoryUpdate(bookId, res.category);

        return response
                .status(201)
                .json(res);
    }
    catch(err)
    {
        // if client sends wrong data
        if(err.name == 'ValidationError')
        return response
                .status(400)
                .json(
                    {
                        'error' : "InvalidData", 
                        'message' : `${err.message}`, 
                        'dataformat' : {
                            "ISBN": 'String',
                            "title": 'String',
                            "pages": 'Number',
                            "publishDate": 'Date',
                            "language": 'String',
                            "publication": 'Array[String]',
                            "author": 'Array[AuthorID]',
                            "category": 'Array[CategoryID]'
                        }
                    }
                );
                    
        // if server problem
        return response.sendStatus(500);
    }
}

// handling book patch by admin
async function handleBookPatch(request, response)
{
    try
    {
        const isbn = request.body.ISBN;
        // handling book entry
        let res = await bookModel
                            .findOneAndUpdate(
                                {
                                    ISBN : isbn
                                },
                                request.body
                            );

        return response
                .status(201)
                .json(res);
    }
    catch(err)
    {
        // if client sends wrong data
        if(err.name == 'ValidationError')
        return response
                .status(400)
                .json(
                    {
                        'error' : "InvalidData", 
                        'message' : `${err.message}`, 
                        'dataformat' : {
                            "ISBN": 'String',
                        }
                    }
                );
                    
        // if server problem
        return response.sendStatus(500);
    }
}

// handling author post by admin
async function handleAuthorPost (request, response)
{
    try
    {
        const authorData = request.body;
        let data = [];
        let res;

        // handling single author entry
        if(typeof (authorData.authorName) != typeof [])
            res = await authorModel.create(authorData);

        // handling multiple author entries
        else
        {
            for(let i = 0; i < authorData.authorName.length; i++)
            {
                data.push(
                    {
                        'authorName' : authorData.authorName[i],
                        'dob' : authorData.dob[i],
                        'penName' : authorData.penName[i],
                        'country' : authorData.country[i],
                    }
                );
            }

            res = await authorModel.insertMany(data)
        }
        
        return response
                .status(201)
                .json(res); 
    }
    catch(err)
    {
        // if client sends wrong data
        if(err.name == 'ValidationError')
        return response
                .status(400)
                .json(
                    {
                        'error' : "InvalidData", 
                        'message' : `${err.message}`, 
                        'dataformat' : {
                            'authorName' : 'String', 
                            'dob' : 'Date',
                            'penName' : 'String',
                            'country' : 'String'
                        }
                    }
                );
                    
        // if server problem
        return response.sendStatus(500);
    }
}

// handling publication post by admin
async function handlePublicationPost (request, response)
{
    try
    {
        let res = await publicationModel.create(request.body);

        return response
                .status(201)
                .json(res); 
    }
    catch(err)
    {
        // if client sends wrong data
        if(err.name == 'ValidationError')
        return response
                .status(400)
                .json(
                    {
                        'error' : "InvalidData", 
                        'message' : `${err.message}`, 
                        'dataformat' : {
                            'publicationName' : 'String', 
                            'country' : 'String'
                        }
                    }
                );
                    
        // if server problem
        return response.sendStatus(500);
    }
}

// handling category post by admin
async function handleCategoryPost (request, response)
{
    try
    {
        const categoryData = request.body;
        let data = [];
        let res;

        // handling single category entry
        if(typeof (categoryData.categoryName) != typeof [])
            res = await categoryModel.create(categoryData);

        // handling multiple category entries
        else
        {
            for (let i = 0; i < categoryData.categoryName.length; i++) 
            {
                data.push(
                    {
                        'categoryName' : categoryData.categoryName[i]
                    }
                );
            }

            res = await categoryModel.insertMany(data);
        }
        
        return response
                .status(201)
                .json(res);
    }
    catch(err)
    {
        // if client sends wrong data
        if(err.name == 'ValidationError')
        return response
                .status(400)
                .json(
                    {
                        'error' : "InvalidData", 
                        'message' : `${err.message}`, 
                        'dataformat' : {
                            'categoryName' : 'String',
                        }
                    }
                );
                    
        // if server problem
        return response.sendStatus(500);
    }
}

module.exports = {
    handleBookPost,
    handleAuthorPost,
    handlePublicationPost,
    handleCategoryPost,
    handleBookPatch
};