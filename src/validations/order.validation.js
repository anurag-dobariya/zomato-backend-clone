const joi = require("joi");

// create order
const createOrder = {
    body: joi.object().keys({
        quantity: joi.number().integer().required(),
        total: joi.number().integer().required(),
        food_item: joi.string().trim().required(),
        user: joi.string().trim().required(),
        restaurant: joi.string().trim().required(),
    })
};

module.exports = {
    createOrder
}
