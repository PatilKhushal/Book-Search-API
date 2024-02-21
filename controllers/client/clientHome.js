const jwt = require('jsonwebtoken');
const { bookModel } = require('../../models/books');
require('dotenv').config();

// filter for books
async function filterQueryBooks(query)
{
    let limit = 50;
    return await query
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
                            select : ['publicationName', '-_id']
                            /* select : ['publicationName', 'country', '-_id'] */
                        }
                    ) 
                    .populate(
                        {
                            path : 'author', 
                            /* select : ['authorName', 'dob', 'penName', 'country', '-_id'] */
                            select : ['authorName', '-_id']
                        }
                    )
                    .populate(
                        {
                            path : 'category', 
                            /* select : ['categoryName', '-_id'] */
                            select : ['categoryName', '-_id']
                        }
                    );
}

// handling get all books to client
async function handleGetAllBooksData(request, response)
{
    try
    {
        let books = await filterQueryBooks(
            bookModel
                .find({})
        );
        
        return response    
                    .render('client/clientHome', {
                        books, user : jwt.verify(request.cookies.token, process.env.secret)
                    });
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

module.exports = {
    handleGetAllBooksData, 
    handleGetISBN,
}