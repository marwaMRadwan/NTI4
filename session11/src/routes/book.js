const express= require('express')
const router = new express.Router()
const Book = require('../models/book')
const authMe = require('../middleware/auth')

router.post('/addBook',authMe, async(req,res)=>{
    const book = new Book({
        ...req.body,
        owner: req.user._id
    })
    try{
        await book.save()
        res.send('added')
    }
    catch(e){
        res.send(e)
    }
})

router.get('/myBooks', authMe, async(req, res)=>{
    try{
        await req.user.populate({  path:'userBooks' }).execPopulate()
        res.send({books:req.user.userBooks, user: req.user})
    }
    catch(e){
        res.send(e)
    }
})
module.exports = router