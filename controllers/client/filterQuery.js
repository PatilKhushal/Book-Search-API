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

module.exports = filterQuery;