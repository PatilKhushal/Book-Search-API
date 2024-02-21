const jwt = require("jsonwebtoken");

async function loginResriction(request, response, next)
{
    let token = request.cookies.token;
    if(token)
    {
        try
        {
            jwt.verify(token, process.env.secret);
            next();
        }
        catch(err)
        {
            console.log(err);
            return response.redirect('/authentication');
        }
    }
    else
        return response.redirect('/authentication');
}

module.exports = loginResriction;