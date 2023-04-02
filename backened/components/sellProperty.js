const express=require('express');
const mongoose=require('mongoose');
const http=require('http');
const { Server } = require('socket.io');

const router=express.Router();

const server=http.createServer(router);

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        
    }
})

require('../models/connect');

const Schema=new mongoose.Schema({

    id:Number,
    propertyName:String,
    propertyDescription:String,
    price:Number

});

const Model=new mongoose.model('Property',Schema);

router.post('/sellAsset',async(req,res)=>{

    console.log(req.body);
    const {id,name,description,price}=req.body;
    const instance=new Model({id:id,propertyName:name,propertyDescription:description,price:price});
    console.log(await instance.save());
    return res.status(200).json({message:true})
 
 })
module.exports=router;

