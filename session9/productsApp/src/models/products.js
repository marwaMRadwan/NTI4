const mongoose = require('mongoose')
const validator = require('validator')

const Product = new mongoose.model('Product',{
    name:{
        type: String, 
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:500
    },
    discount:{
        type:Number,
        validate(value){
            if(value<0) throw new Error('must be positive')
        }
    },
    quantity:{
        type:Number,
        validate(value){
            if(value<0) throw new Error('must be positive')
        }
    }
})

module.exports=Product