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
    // x = document.querySelector('#chngLang')
    // console.log(x)
    data.getAllPosts(2,(err, response)=>{
        let myRespone
        if(err) myRespone = { error: err, data: false }
        else myRespone = { error: false, data: response}
        res.render('posts',myRespone)
    })
})
app.get('/post/:id', (req,res)=>{
    id = req.params.id
    data.getSinglePost(1,id, (err, response)=>{
        let myRespone
        if(err) myRespone = {error: err, data:undefined}
        else myRespone = {error:undefined, data:response}
        res.send(myRespone)
        
    })
})
app.listen(PORT)