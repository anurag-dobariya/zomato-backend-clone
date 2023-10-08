const mongoose = require("mongoose");

// creating order schema for restaurant model
const orderSchema = new mongoose.Schema(
    {
        quantity:{
            type:Number,
            trim:true
        },
        total:{
            type:Number,
            trim:true
        },
        food_item:{
            type:mongoose.Types.ObjectId,
            ref:"foodItem"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const order = mongoose.model("order" , orderSchema);
module.exports = order;
