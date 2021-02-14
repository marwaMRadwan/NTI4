const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})