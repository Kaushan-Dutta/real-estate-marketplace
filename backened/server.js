const express=require('express');
const mongoose=require('mongoose');
const app=express();
const http=require('http');
const cors=require('cors');

const server=http.createServer(app);

app.use(express.json())
const corsOptions={
    origin:true,
    credentials:true
}
app.use(cors(corsOptions));
app.use(require('./components/sellProperty'));

app.get("/",async(req,res)=>{
    res.send("<h1>Hello Server</h1>")
})

server.listen(3030,()=>{
    console.log("Server Created...");
})


