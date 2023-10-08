const mongoose = require("mongoose");

// creating restaurant schema for restaurant model
const restaurantSchema = new mongoose.Schema(
    {
        restaurant_name: {
            type: String,
            trim: true
        },
        restaurant_address: {
            type: String,
            trim: true
        },
        restaurant_category: {
            type: String,
            trim: true
        },
        restaurant_no: {
            type: Number,
            trim: true
        },
        restaurant_email: {
            type: String,
            trim: true
        },
        opening_hours: {
            type: String,
            trim: true
        },
        restaurant_image: {
            type: String,
            trim: true
        },
        shop_license_image: {
            type: String,
            trim: true
        },
        res_owner_name: {
            type: String,
            trim: true
        },
        res_owner_no: {
            type: Number,
            trim: true
        },
        res_owner_email: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false,
        // toJSON:{
        //     transform: function (doc, data) {
        //         if (data?.gallery_image) {
        //             data.gallery_image = `${config.base_url}gallery_images/${data.gallery_image}`;
        //         }
        //     },
        // }
        toJSON: {
            transform: function (doc, data) {
                if (data?.restaurant_image) {
                    data.restaurant_image = `${config.base_url}restaurant_images/${data.restaurant_image}`;
                }
                if (Array.isArray(data.shop_license_image)) {
                    data.shop_license_image = data.shop_license_image.map(
                        (shop_license_image) => `${config.base_url}shop_license_images/${shop_license_image}`
                    );
                }
            },
        },
    }
);

const restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = restaurant;