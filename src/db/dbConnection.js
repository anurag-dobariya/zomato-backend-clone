const mongoose = require("mongoose");
const config= require("../config/config");

// creating module for  database connection
const connectDB = async()=>{
    mongoose.connect(config.mongodb.url,config.mongodb.options)
    .then((data)=>{
        console.log("database connected successfully");
    })
    .catch((error)=>{
        console.log("database connection error:", error);
    });
};

module.exports= {connectDB}