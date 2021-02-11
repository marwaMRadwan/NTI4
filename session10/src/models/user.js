const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        minLength:[5,'minmum length'],
        maxLength:25,
        trim:true
    },
    lname:{
        type:String,
        minLength:[5,'minmum length'],
        maxLength:25,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    age:{
        type:Number
    }
},{
    timestamps:true
})
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    return user
}

userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 12)
    next()
})
const User = mongoose.model('User', userSchema)
module.exports =User