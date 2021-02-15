const express = require('express')
const User = require('../models/user.model')
const auth = require('../middleware/auth')
const multer = require('multer')
const router = new express.Router()

router.post('/user', async(req, res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateToken()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {user, token}
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: 'unauthorized user'
        })

    }
})
router.post('/user/login', async(req, res)=>{
    try{
        const user = await User.findUserByCredentials(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {user, token}
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: 'unauthorized user'
        })
    }
})
router.post('/user/logout',auth, async(req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((singleToken)=>{
            return singleToken.token != req.token
        })
        await req.user.save()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: 'logged out successfully'
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: error.message
        })
    }

})
router.post('/user/logoutAll',auth, async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: 'logged out successfully'
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: error.message
        })
    }

})
router.get('/user/me',auth, async(req,res)=>{
    res.status(200).send({
        error: null,
        apiStatus:true,
        data: {user:req.user}
    })
})
router.post('/user/add_address', auth, async(req, res)=>{
    try{
    address = {
        addr_type:req.body.addr_type,
        details: req.body.details
    }
    req.user.addresses = req.user.addresses.concat({address})
    await req.user.save()
}
catch(e){

}
})
router.post('/user/changeStatus',auth, async(req, res)=>{
    try{
    req.user.status = !req.user.status
    await req.user.save()
}catch(e){

}
})
router.post('/user/imgChange', auth, async(req, res)=>{

})
router.post('/user/changePassword', auth, async(req, res)=>{
    try{
        const matched = await bcrypt.compare(req.body.old_pass, req.user.password)
        if(!matched) throw new Error('invalid user old password')
        req.user.password = req.body.new_pass
        await req.user.save()
        res.send('done')
    }
    catch(e){

    }
})
router.patch('/user/me', auth, async(req, res)=>{
    const allowedUpdates =['name', 'phone', 'age']
    const updates = Object.keys(req.body)
    const validateEdits = updates.every(update=> allowedUpdates.includes(update))
    if(!validateEdits) return res.status(400).send({
        apiStatus:false,
        message:'unavailable updates',
        error:true
    })
    try{
        updates.forEach(update=>req.user[update] = req.body[update])
        await req.user.save()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {user: req.user}
        })
    }
    catch(error){
        res.status(400).send({
            error: error.message,
            apiStatus:false,
            data: 'unable to update'
        })
    }
})

module.exports=router