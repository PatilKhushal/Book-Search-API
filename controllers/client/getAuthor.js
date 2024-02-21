const { authorModel } = require('../../models/author');
const filterQuery = require('./filterQuery');

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


module.exports = {
    handleGetAuthor,
}