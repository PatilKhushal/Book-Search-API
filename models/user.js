// imports
const mongoose = require('mongoose');
const { createHmac, randomBytes } = require('crypto')

// User Schema and Model
const userSchema = mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true
        },
        
        middleName : {
            type : String,
            required : true
        },
        
        lastName : {
            type : String,
            required : true
        },

        email : {
            type : String,
            required : true,
            unique : true
        },

        salt : {
            type : String
        },

        password : {
            type : String,
            required : true,
        },

        role : {
            type : String,
            required : true,
            enum : ['ADMIN', 'USER'],
            default : "USER"
        },

        profileImg : {
            type : String,
        },
    }
);

userSchema.pre('save', function(next){
    if(!this.isModified('password'))    return;

    this.salt = randomBytes(16).toString();
    this.password = createHmac('sha256', this.salt)
        .update(this.password)
        .digest('hex');
    
    next();
})

userSchema.static('isPasswordMatched', async function(email, password){
    let user = await userModel.findOne({email, role : 'USER'});
    if(!user)
        throw new Error('No User Found');

    const hashedPassword = createHmac('sha256', user.salt)
        .update(password)
        .digest('hex');
    
    if(user.password === hashedPassword)
        return user;
    return null;

})

const userModel = mongoose.model('Users', userSchema);

// exports
module.exports = {
    userModel
};