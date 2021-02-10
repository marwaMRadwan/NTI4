const express = require('express')
const userModel = require('../models/user')
const router = new express.Router()

router.post('/addUser',(req,res)=>{
    const data = new userModel(req.body)
    data.save()
    .then(()=>{res.send('added')})
    .catch((err)=>{res.send(err.message)})
})

router.post('/addUserA',async(req,res)=>{
    const data = new userModel(req.body)
    try{
        await data.save()
        res.send('added')
    }
    catch(e){
        res.send(e.message)
    }
})


router.get('/test', (req,res)=>{
    res.send({data:'hello from our first api'})
})

router.post('/testadd', (req,res)=>{
    res.send(req.body)
})

router.get('/allUsers', async(req, res)=>{
    try{
        users = await userModel.find()
        res.send(users)
    }
    catch(e){
        res.send(e.message)
    }
})
module.exports=router