const express= require('express')
const router = new express.Router()
const User = require('../models/user')
const mymiddleware = require('../middleware/mymiddleware')
const authMe = require('../middleware/auth')
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

router.get('/x', mymiddleware, async(req,res)=>{
    res.send('ay 7aga')
})
router.post('/logout',authMe,async(req,res)=>{
try{ 
    req.user.tokens = req.user.tokens.filter(single=>{
        console.log(single.token)
        return single.token != req.token
    })
    await req.user.save()
    res.send('logged out')
}
catch(e){
res.send('error')
}
})
router.post('/logoutAll', async(req,res)=>{
    try{
        req.user.tokens=[]
        await req.user.save()
        res.send('loged out all')
    }
    catch(e){
        res.send(e)
    }
})
router.get('/profile', authMe, async(req,res)=>{
    res.send(req.user)
})
module.exports = router