const express = require('express')
const Task = require('../models/task.model')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/task/add',auth, async(req,res)=>{
    const task = new Task({
        ...req.body,
        user_id: req.user._id
    })
    try{
        await task.save()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {task}
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
/*
/tasks?limit=10&page=2
?sortBy=title:ASC  => sort={'title':-1}
*/
router.get('/tasks',auth, async(req,res)=>{
    const myConditions = { } 
    const sort ={}
    if(req.query.status) myConditions.status = req.query.status==='true' 
    if(req.query.sortBy){
        const x = req.query.sortBy.split(':') //a:b:c =>[a,b,c]
        console.log(x)
        sort[x[0]] = x[1]==='ASC'?1:-1
    }
    try{
        await req.user.populate({
            path:'tasks',
            myConditions,
            options:{
                limit:parseInt(req.query.limit),
                skip:(parseInt(req.query.limit)*parseInt(req.query.page)),
                sort
            }
        }).execPopulate()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: req.user.tasks
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

router.get('/task/:id', auth, async(req,res)=>{
    const _id=req.params.id
    try{
        const task = await Task.findOne({_id, user_id:req.user._id})
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {task}
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
router.post('/task/:id/changeStatus', auth, async(req,res)=>{
    const _id=req.params.id
    try{
        const task = await Task.findOne({_id, user_id:req.user._id})
        task.status=!task.status
        task.save()
        res.status(200).send({
            error: null,
            apiStatus:true,
            data: {task}
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
module.exports=router