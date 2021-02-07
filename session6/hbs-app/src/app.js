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

app.listen(PORT)