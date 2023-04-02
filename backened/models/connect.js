const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path:"./.env"});

mongoose.connect('mongodb://localhost:27017/zwillo',{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Successful connection....");
}).catch((err)=>{
    console.log(err);
})


