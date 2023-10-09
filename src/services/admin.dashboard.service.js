const {user ,restaurant , order} = require("../models");

// restaurant count
const getRestaurantCount = async() =>{
    return restaurant.find().count()
};

// user count
const getUserCount = async()=>{
    return user.find().count()
};

// orer count
const getOrderCount = async()=>{
    return order.find().count()
};

module.exports ={
    getRestaurantCount,
    getUserCount,
    getOrderCount
}