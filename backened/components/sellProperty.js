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
    propertyAddress:String,
    price:Number,
    isHouse:Boolean,
    image:String

});

const Model=new mongoose.model('Property',Schema);

router.post('/sellProperty',async(req,res)=>{

    console.log(req.body);

    const {propertyDetail,numItems}=req.body;
    //console.log(propertyDetails,id)
    const instance=new Model({
        id:numItems,
        propertyName:propertyDetail.name,
        propertyAddress:propertyDetail.address,
        price:propertyDetail.sellPrice,
        isHouse:propertyDetail.isHouse,
        image:propertyDetail.image
    });
    console.log(await instance.save()); 
    return res.status(200).json({message:true})
 
 })

router.get('/getHouse',async(req,res)=>{
    
    
    const getProperty=await Model.find({isHouse:true});
    console.log(getProperty);
    return res.status(200).json({message:true,body:getProperty});

})

router.get('/getFlat',async(req,res)=>{
    
    console.log("Entry");
    const getProperty=await Model.find({isHouse:false});
    console.log(getProperty);
    return res.status(200).json({message:true,body:getProperty});
    
})
router.get('/getProperty',async(req,res)=>{
    
    console.log("Entry");
    const {id}=await req.params;
    console.log(req.query,id);
    const getProperty=await Model.findOne({id:12,isHouse:false});
    console.log(getProperty);
    return res.status(200).json({message:true,body:getProperty});
    
})
router.get("/getProperties",async(req,res)=>{

    const getProperties=await Model.find().sort( [['_id', -1]]).limit(5);
    console.log(getProperties);
    return res.status(200).json({message:true,body:getProperties});

})
module.exports=router;

