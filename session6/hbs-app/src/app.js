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
    res.render('home')
})

app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/service', (req, res)=>{
    myServices = data.services
    myarr = [1,2,3,4,5]
    res.render('myServices', {myServices, myarr})
})

app.get('/albums', (req,res)=>{
    data.getAlbums((err, albums)=>{
        if(err) res.send(err)
        else res.send(albums)
    })
})
app.listen(PORT)