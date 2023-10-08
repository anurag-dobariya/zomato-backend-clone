const joi = require("joi")

// create food item
const createFoodItem = {
    body:joi.object().keys({
        food_item_name: joi.string().trim().required(),
        food_item_category: joi.string().trim().required(),
        food_item_price: joi.number().integer().required(),
        food_item_image: joi.string().allow("").required(),
        restaurant: joi.string().trim().required()
    })
};

module.exports = {
    createFoodItem
}
