const express=require('express');
const mongoose=require('mongoose');
const app=express();
const http=require('http');
const server=http.createServer(app);

app.use(express.json())
app.use(require('./components/sellProperty'));

app.get("/",async(req,res)=>{
    res.send("<h1>Hello Server</h1>")
})

server.listen(3030,()=>{
    console.log("Server Created...");
})


