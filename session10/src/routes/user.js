const express= require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/register', async(req, res)=>{
    user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateToken()
        res.send({
            status:1,
            message:'added',
            data: {user, token}
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

router.post('/login', async(req,res)=>{
    try{
        user = await User.findUser(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.send({user, token})
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports = router