const mongoose = require("mongoose");

// creating food item schema for restaurant model
const foodItemSchema = new mongoose.Schema(
    {
        food_item_name: {
            type: String,
            trim: true
        },
        food_item_category: {
            type: String,
            trim: true
        },
        food_item_price: {
            type: Number,
            trim: true
        },
        food_item_image: {
            type: String,
            trim: true
        },
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.food_item_image) {
                    data.food_item_image = `${config.base_url}food_item_images/${data.food_item_image}`;
                }
            },
        }
    }
);

const foodItem = mongoose.model("foodItem", foodItemSchema);
module.exports = foodItem;
