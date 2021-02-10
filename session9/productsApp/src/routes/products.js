const proModel = require('../models/products')
const express = require('express')
const router = new express.Router()

router.post('/addProduct', async(req,res)=>{
    const product = new proModel(req.body)
    try{
        await product.save()
        res.status(200).send({
            status:1,
            data:product,
            message:'product added successfuly'
        })
    }
    catch(e){
        res.status(400).send({
            status:0,
            data: e.message,
            message: 'error inserting data'
        })
    }
})

router.get('/allProducts', async(req,res)=>{
    try{
        const products = await proModel.find()
        res.status(200).send({
            status:1,
            data:products,
            message:'all data retrieved'
        })
    }
    catch(e){
        res.status(400).send({
            status:0,
            data: e.message,
            message: 'error retreive  data'
        })
    }
})

router.get('/product/:id', async(req,res)=>{
    _id = req.params.id
    try{
        product = await proModel.findById(_id)
        res.status(200).send({
            status:1,
            data:product,
            message:'product retrived'
        })
    }
    catch(e){
        res.status(400).send({
            status:0,
            data: e.message,
            message: 'error retrive data'
        })
    }
})

router.patch('/product/:id', async(req,res)=>{
    availableUpdates = ['name', 'price']
    const reqKeys = Object.keys(req.body)
    flag = reqKeys.every(key=> availableUpdates.includes(key))
    try{
        if(!flag) throw new Error('updates not available')
        await proModel.findByIdAndUpdate(req.params.id, req.body, {runValidators:true})
        data = await proModel.findById(req.params.id)
        res.status(200).send({
            status:1,
            data:data,
            message: 'updated'
        })
    }
    catch(e){
        res.status(400).send({
            status:0,
            data: e.message,
            message: 'error update data'
        })
    }
})

router.delete('/product/:id', async(req,res)=>{
    const id = req.params.id
    try{
        await proModel.findByIdAndDelete(id)
        res.status(200).send({
            status:1,
            data:'',
            message:'deleted'
        })
    }
    catch(e){
        res.status(400).send({
            status:0,
            data: e.message,
            message: 'error inserting data'
        })
    }
})
module.exports=router