const fs = require("fs");

function logRequest(filename)
{
    return (request, response, next) => {
        fs.appendFile(
            filename, 
            `${request.ip} -> ${new Date()} -> ${request.method} -> ${request.url} -> ${JSON.stringify(request.params)} -> ${JSON.stringify(request.body)} \n`, 
            (err) => {
                {
                    if(err)
                        console.log(err);
                }
            }
        );

        next();
    }
}

module.exports = logRequest;