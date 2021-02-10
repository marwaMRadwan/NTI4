const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    userName:{
        type:String,
        maxLength:15,
        default:'new user'
    },
    password:{
        type:String,
        required:true,
        trim: true,
        lowercase:true,
        //uppercase:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is invalid')
            }
        }
    },
    age:{
        type:Number,
        validate(value){
            if(value<16) throw new Error('invalid age')
        }
    },
    comments:[
        {
            title:{type:String},
            content:{type:String}
        }
    ]
})

module.exports = User