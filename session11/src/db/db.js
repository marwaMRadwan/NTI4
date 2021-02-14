const mongoose = require('mongoose')
mongoose.connect(process.env.db_conncection,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})