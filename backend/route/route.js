const express = require('express')
const router = express.Router()
const modelDB = require('../model/model')

router.get('/getall', async(req, res)=>{
    try{
        //code
        const getall = await modelDB.find({})
        res.send(getall)
    }catch(err){
        console.log(err)
    }
})

router.post('/create', async(req, res)=>{
    try{
        //cocde
        const postdt = await modelDB(req.body).save()
        res.send(postdt)
    }catch(err){
        console.log(err)
    }
})

router.get('/getid/:id', async(req, res)=>{
    try{
        //code
        const id = req.params.id
        const getid = await modelDB.findOne({_id:id})
        res.send(getid)
    }catch(err){
        console.log(err)
    }
})

router.put('/update/:id', async(req, res)=>{
    try{
        //code
        const id = req.params.id
        const putdt = await modelDB.findOneAndUpdate({_id:id},(req.body),{new:true})
        res.send(putdt)
    }catch(err){
        console.log(err)
    }
})

router.delete('/delete/:id', async(req, res)=>{
    try{
        //code
        const id = req.params.id
        const del = await modelDB.findOneAndDelete({_id:id})
        res.send(del)
    }catch(err){
        console.log(err)
    }
})

module.exports = router