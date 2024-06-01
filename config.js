const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://anirban:anirban4735@cluster0.qrptce1.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0');
connect.then(()=>{
    console.log('connect sucessfully');
}).catch(err=>{
    console.log(err);
})

//creating a schema

const loginSchema =({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

// creating  to collection
const collection = new mongoose.model("database",loginSchema);
module.exports = collection;

