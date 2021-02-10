const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/g4Apitest', {
    useCreateIndex:true, useFindAndModify:true,
    useNewUrlParser:true, useUnifiedTopology:true
})
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
const data = new User(
    {
        userName:'marwa',
        password:'123456789', 
        email:'marwa@a.com', 
        age:35,
        comments:[
            {title:'c1', content:'cc1'},
            {title:'c2', content:'cc2'},
            {title:'c3', content:'cc3'},
        ]
    })
data.save()
.then(data=>console.log(data))
.catch((err)=>console.log(err.message))