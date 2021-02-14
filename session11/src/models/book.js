const mongoose = require('mongoose')
const bookSchems = new mongoose.Schema({
    title:       { type:String },
    description: { type:String },
    issueDate:   { type: Date },
    owner:       { 
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User' 
    }
},
{ timestamps:true}
)
const Book = mongoose.model('Book', bookSchems)
module.exports = Book