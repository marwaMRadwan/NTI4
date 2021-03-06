const path=require('path')
const express = require('express')
const hbs = require('hbs')
const data = require('./utils/data')

const app = express()
const PORT = 3000

const myPublicFiles = path.join(__dirname, '../public')
const myViewsFiles = path.join(__dirname, '../frontend/views')
const myPartialsFiles = path.join(__dirname, '../frontend/layouts')

app.set('view engine', 'hbs')
app.set('views', myViewsFiles)
hbs.registerPartials(myPartialsFiles)
app.use(express.static(myPublicFiles))

app.get('', (req, res)=>{
    data.getAllPosts((err, response)=>{
        let myRespone
        if(err) myRespone = { error: err, data: false }
        else myRespone = { error: false, data: response}
        res.render('posts', myRespone)
    })
})
app.get('/post/:id', (req,res)=>{
    id = req.params.id
    data.getSinglePost(id, (err, response)=>{
        let myRespone
        if(err) myRespone = {error: err, data:undefined}
        else{
             myRespone = {error:undefined, data:response}
            data.getPostComments(id, myRespone, (e, r)=>{
                if(e) res.send(e)
                else res.send({myRespone, r})
            })
            }
//        res.send( myRespone)
        
    })
})
app.listen(PORT)