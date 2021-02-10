const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/g4Apitest', {
    useCreateIndex:true, useFindAndModify:true,
    useNewUrlParser:true, useUnifiedTopology:true
})

// const data = new User(
    // {
    //     userName:'marwa',
    //     password:'123456789', 
    //     email:'marwa@a.com', 
    //     age:35,
    //     comments:[
    //         {title:'c1', content:'cc1'},
    //         {title:'c2', content:'cc2'},
    //         {title:'c3', content:'cc3'},
    //     ]
    // })
// data.save()
// .then(data=>console.log(data))
// .catch((err)=>console.log(err.message))