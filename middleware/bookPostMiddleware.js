const { bookModel } = require("../models/Library");

async function validateUniqueISBN(request, response, next)
{
    if(await bookModel.findOne({ISBN : request.body.ISBN}))
    {
        return response
                    .status(400)
                    .json(
                        {
                            'error' : 'DuplicateEntry',
                            'msg' : `ISBN ${request.body.ISBN} already exist`
                        }
                    )
    }
    next();
}

module.exports = validateUniqueISBN;