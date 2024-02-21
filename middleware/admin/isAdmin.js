async function isAdmin(request, response, next)
{
    let token = request.cookies.token;
    if(token)
        return response.sendStatus(403);
    
    next();
}

module.exports = {
    isAdmin
}