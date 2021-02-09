const path=require('path')
const express = require('express')
const hbs = require('hbs')
const { MongoClient, ObjectID} = require('mongodb')
const app = express()
const PORT = 3000
const myPublicFiles = path.join(__dirname, '../public')
const myViewsFiles = path.join(__dirname, '../frontend/views')
const myPartialsFiles = path.join(__dirname, '../frontend/layouts')
app.set('view engine', 'hbs')
app.set('views', myViewsFiles)
hbs.registerPartials(myPartialsFiles)
app.use(express.static(myPublicFiles))
app.use(express.urlencoded())
function testConnect(callback){
    const myDBUrl = 'mongodb://127.0.0.1:27017'
    const dbName = "myNewG4Task"
    MongoClient.connect(
        myDBUrl,
        {useNewUrlParser:true, useUnifiedTopology:true},
        (error, client)=>{
            if(error) return console.log('db error')
            
            const db = client.db(dbName)
            callback(db)
        })
}
app.get('', (req,res)=>{
    res.render('home')
})
app.post('/addData', function(req, res){
   data = req.body
   db = testConnect((db)=>{
    db.collection('users').insert(data, (err, result)=>{
        if(err) return console.log(err)
        console.log(`data inserted succesfully ${result.insertedCount} inserted`)
    })
   })
res.redirect('/showAll')
});
app.get('/addData',(req,res)=>{
res.redirect('/showAll')
})
app.get('/showAll', (req,res)=>{
    db = testConnect((db)=>{
        db.collection('users').find().toArray((err, result)=>{
                if(err) res.render('error')
                else res.render('alldata',{data:result})
            })
        
        })
})


app.listen(PORT)

