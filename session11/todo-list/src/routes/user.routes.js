const express = require('express')
const User = require('../models/user.model')
const auth = require('../middleware/auth')
const multer = require('multer')
const bcrypt = require('bcryptjs')
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
    address = {
        addr_type:req.body.addr_type,
        details: req.body.details
    }
    try{
        if(!req.body.addr_type || !req.body.details) throw new Error('missing address details')
    req.user.addresses = req.user.addresses.concat(address)
    await req.user.save()
    res.status(200).send({
        error:null,
        apiStatus:true,
        data:{user: req.user},
        message:'address added'
    })
}
catch(e){
res.status(400).send({
    error:e.message,
    apiStatus:false,
    data:'',
    message:'address add problem'
})
}
})
router.post('/user/me/changeStatus',auth, async(req, res)=>{
    try{
    req.user.status = !req.user.status
    await req.user.save()
    res.status(200).send({
        error:null,
        apiStatus:true,
        data:{user: req.user},
        message:'address added'
    })
}
catch(e){
res.status(400).send({
    error:e.message,
    apiStatus:false,
    data:'',
    message:'address add problem'
})
}
})
router.post('/user/changePassword', auth, async(req, res)=>{
    try{
        if(!req.body.old_pass || !req.body.new_pass) throw new Error('invalid data')
        const matched = await bcrypt.compare(req.body.old_pass, req.user.password)
        if(!matched) throw new Error('invalid user old password')
        req.user.password = req.body.new_pass
        await req.user.save()
        res.status(200).send({
            error:null,
            apiStatus:true,
            data:{user: req.user},
            message:'address added'
        })
    }
    catch(e){
    res.status(400).send({
        error:e.message,
        apiStatus:false,
        data:'',
        message:'address add problem'
    })
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
router.delete('/user/me', auth, async(req, res)=>{
    try{
        await req.user.remove()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: 'deleted'
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
let storage = multer.diskStorage({
    destination:function(req, file, cb) { cb(null, 'images')},
    limits:{fileSize:1},
    filename:function(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|png)$/)){
            return cb(new Error('error'))
        }
      cb(null, Date.now()+'.'+file.originalname.split('.').pop())
    }
    
})
let upload = multer({ storage })
router.post('/user/imgChange', auth, upload.single('profile'), async(req, res)=>{
    req.user.image = `${req.file.destination}/${req.file.filename}`
    await req.user.save()
try{res.send({
    user:req.user
})
}catch(e){res.send(e.message)}
})
module.exports=router


//upload as buffer
// const upload = multer({
//     limits:{
//         fileSize: 100000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(jpg|png)$/)){
//             return cb(new Error('image Error'))
//         }
//         cb(undefined, true)
//     }
// })
// //inside route
// buffer = req.file.buffer
//     req.user.image=buffer