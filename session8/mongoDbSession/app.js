//npm i mongodb
const { MongoClient, ObjectID} = require('mongodb')
//const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
//console.log(new ObjectID())
const myDBUrl = 'mongodb://127.0.0.1:27017'
const dbName = "myNewG4Task"
data = [
    {name:'ahmed', age:25},
    {name:'mohamed', age:7},
    {name:'adam', age:8},
    {name:'mario', age:23},
    {name:'mona', age:50},
    {name:'mazen', age:39},
    {name:'hoda', age:28},
    {name:'nouran', age:25},
    {name:'marwa', age:35},
]
MongoClient.connect(
    myDBUrl,
    {useNewUrlParser:true, useUnifiedTopology:true},
    (error, client)=>{
        if(error) return console.log('db error')
        
        const db = client.db(dbName)
        /*insert data */

        db.collection('newCollection').insert(data, (err, result)=>{
            if(err) return console.log(err)
            console.log(`data inserted succesfully ${result.insertedCount} inserted`)
        })

        //get data
        // db.collection('newCollection').find(
        //     {_id :new ObjectID('602256c155a0b71f7c0a8dc0')})
        //     .toArray((err, data)=>{console.log(data)})

        //         db.collection('newCollection').findOne(
        //     {_id :new ObjectID('602256c155a0b71f7c0a8dc0')},
        //     (err, data)=>{console.log(data)}
        // )
        // db.collection('newCollection').updateMany(
        //     {
        //         name:'mazen'
        //     },
        //     {
        //         $inc:{
        //             age:1
        //         }
        //     }
        // )
// db.collection('newCollection').find({x:{$exists:true}}).toArray((err, data)=>{
//     console.log(data)
// })
// db.collection('newCollection').updateMany(
//     {x:{$exists:true}},
//     {$inc:{x:1}}
//     )
//     .then((res)=>{console.log(res)})
//     .catch((err)=>console.log(err))



// db.collection('newCollection').deleteMany(
//     {x:{$exists:true}})
//     .then((res)=>{console.log(res)})
//     .catch((err)=>console.log(err))

})