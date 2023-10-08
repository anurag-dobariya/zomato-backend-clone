const mongoose = require("mongoose");

// creating token schema for token model
const tokenSchema = new mongoose.Schema(
    {
        token:{
            type:String
        },
        expire_time:{
            type:Date,
            default:null
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const token = mongoose.model("token" , tokenSchema);
module.exports = token;

