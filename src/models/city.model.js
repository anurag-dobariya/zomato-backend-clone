const mongoose = require("mongoose");

// creating city schema for city model
const city_Schema = new mongoose.Schema(
    {
        city_name: {
            type:String,
            trim:true
        },
        state: {
            type:mongoose.Types.ObjectId,
            ref:"state"
        },
        country: {
            type:mongoose.Types.ObjectId,
            ref:"country"
        },
        is_active:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const city = mongoose.model("city",city_Schema);
module.exports = city;
