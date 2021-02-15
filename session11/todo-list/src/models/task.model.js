const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
user_id:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
},
title:{
    type:String,
    required:true,
    trim:true
},
description:{
    type:String,
    required:true,
    trim:true
},
status:{
    type:Boolean,
    default: false
},
endDate:{
    type:Date,
    required:true
}
    },
    {timestamps:true}
)

const Task = mongoose.model('Task', taskSchema)
module.exports = Task