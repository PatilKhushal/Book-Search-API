const { userModel } = require("../models/Library");
const bcrypt = require('bcrypt');

async function validateAdminLogin(request, response, next)
{
    let body = request.body;
    let admin = await userModel.findOne({'email':body.email});
    if(admin && admin.role == 'ADMIN')
    {
        if(await bcrypt.compare(body.password, admin.password))
            return next();
        return response.render('admin/adminLogin');
    }
    return response.render('admin/adminLogin');
}

module.exports = validateAdminLogin;