const express= require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/register', async(req, res)=>{
    user = new User(req.body)
    try{
        await user.save()
        res.send({
            status:1,
            message:'added',
            data: user
        })
    }
    catch(e){
        res.send({
            status:0,
            message:e.message,
            data:''
        })
    }
})

module.exports = router