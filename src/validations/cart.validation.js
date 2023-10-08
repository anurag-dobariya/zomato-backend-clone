const joi = require("joi");

// create validation for cart
const createCart = {
    body: joi.object().keys({
        quantity: joi.number().integer().required(),
        order_status: joi.string().valid('approved', 'rejected', 'inprocess' , 'delivered').default('inprocess').required(),
        total: joi.number().integer().required(),
        food_item: joi.string().trim().required(),
        user: joi.string().trim().required(),
        restaurant: joi.string().trim().required(),
    })
};

module.exports = {
    createCart
}