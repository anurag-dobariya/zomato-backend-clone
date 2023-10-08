const {order} = require("../models");

// create order
const createOrder = async(reqBody) =>{
    return order.create(reqBody)
};

// get order list
const getOrderList = async(req,res) =>{
    return order.find().populate("user").populate("restaurant").populate("food_item")
};

// get order details by id
const getOrderById = async(orderId) =>{
    return order.findById(orderId)
};

// delete order
const deleteOrder = async(orderId) =>{
    return order.findByIdAndDelete(orderId)
};

// update order
const updateOrder = async(orderId , updateBody) =>{
    return order.findByIdAndUpdate(orderId , {$set : updateBody})
};

module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    deleteOrder,
    updateOrder
}