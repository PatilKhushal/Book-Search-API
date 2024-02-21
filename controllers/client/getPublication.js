const { publicationModel } = require('../../models/publication');
const filterQuery = require('./filterQuery');


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


module.exports = {
    handleGetPublication,
}