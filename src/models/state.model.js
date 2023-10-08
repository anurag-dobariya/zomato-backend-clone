const mongoose = require("mongoose");

// creating state schema for state model
const stateSchema = new mongoose.Schema(
    {
        state_name: {
            type:String,
            trim:true
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

const state = mongoose.model("state",stateSchema);
module.exports = state;
