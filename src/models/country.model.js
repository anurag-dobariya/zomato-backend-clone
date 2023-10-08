const mongoose = require("mongoose");

// creating country schema for country model
const countrySchema = new mongoose.Schema(
    {
        country_name: {
            type:String,
            trim:true
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

const country = mongoose.model("country",countrySchema);
module.exports = country;