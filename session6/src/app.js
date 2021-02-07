const express= require('express')
const path = require('path')
const hbs = require('hbs')
const PORT = 3000
const app = express()
const publicDir = path.join(__dirname ,'../public')
const viewsDir = path.join(__dirname ,'../myviews')
const layouts = path.join(__dirname ,'../layouts')
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(layouts)
app.use(express.static(publicDir))
app.get('',(req,res)=>{
    let name = "marwa radwan"
    res.render('test', {
        data: name,
        age:36
    })
})
app.get('/a',(req,res)=>res.render('first'))
app.get('/b',(req,res)=>res.render('second'))
app.listen(PORT)






// app.get('', (req, res)=>{
//     res.send('hello')
// })
// app.get('/x',(req,res)=>{
//     res.send('<h2>hello x</h2>')
// })
// app.get('/json',(req, res)=>{
//     res.send({
//         name:'ahmed'
//     })
// })

