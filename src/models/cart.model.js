const mongoose = require("mongoose");

// creating cart schema for restaurant model
const cartSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            trim: true
        },
        order_status: {
            // type: [{ approverd: Boolean, rejected: Boolean, inprocess: Boolean, delivered: Boolean }],
            type: String,
            enum: ['approved', 'rejected', 'inprocess' , 'delivered'],
            default: 'inprocess'
        },
        total: {
            type: Number,
            trim: true
        },
        food_item: {
            type: mongoose.Types.ObjectId,
            ref: "foodItem"
        },
        order: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
