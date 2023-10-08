const {cart} = require("../models");

// create cart
const createCart = async(reqBody) =>{
    return cart.create(reqBody)
};

// get cart list
const getCartList = async(req,res) =>{
    return cart.find().populate("user").populate("order").populate("food_item")
};

// get cart details by id
const getCartById = async(cartId) =>{
    return cart.findById(cartId)
};

// delete cart
const deleteCart = async(cartId) =>{
    return cart.findByIdAndDelete(cartId)
};

// update cart
const updateCart = async(cartId , updateBody) =>{
    return cart.findByIdAndUpdate(cartId , {$set : updateBody})
};

module.exports = {
    createCart,
    getCartList,
    getCartById,
    deleteCart,
    updateCart
}