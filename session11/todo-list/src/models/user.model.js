const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task.model')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required:true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Invalid Email')
        }
    },
    password:{
        type:String,
        minlength:6,
        required:true,
        trim:true,
        match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
        validate(value){
            if(value.includes('marwa')) throw new Error('password cann\'t contain marwa')
        }
    },
    phone:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value,['ar-EG'])) throw new Error('invalid phone number')
        }
    },
    age:{
        type:Number,
        default:21,
        validate(value){
            if(value<21) throw new Error('enta lesa so8yr')
        }
    },
    image:{
        type:String,
        trim:true
    },
    addresses:[
        {
            addr_type:{ type:String }, 
            details:{ type:String }
        }
    ],
    user_type:{
        type:String,
        enum:['Admin', 'provider', 'user'],
        required: true
    },
    status:{
        type:Boolean, 
        default:false
    },
    tokens:[
        {
            token:{type:String}
        }
    ]
    },
    {timestamps:true}
)
//virtual relation
userSchema.virtual('tasks', {
    ref:'Task',
    localField: '_id',
    foreignField:'user_id'
})

//handle json data
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.tokens
    delete user.__v
    return user
}

//encrypt password
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 12)
    }
    next()
})

//remove tasks for user
userSchema.pre('remove', async function(next){
    const user = this
    await Task.deleteMany({user_id: user._id})
    next()
})
//generate token 
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWTKEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
// login
userSchema.statics.findUserByCredentials =  async(email, password)=>{
    try{
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')
    const matched = await bcrypt.compare(password, user.password)
    if(!matched) throw new Error('invalid password')
    return user
    }
    catch(e){
        return e
    }
}
const User = mongoose.model('User', userSchema)
module.exports = User