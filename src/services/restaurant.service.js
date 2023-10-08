const {restaurant} = require("../models");

// create restaurant
const registerRestaurant = async(reqBody) =>{
    return restaurant.create(reqBody)
};

// get restaurant list
const getRestaurantList = async(req,res) =>{
    return restaurant.find()
};

// get restaurant details by id
const getRestaurantById = async(restaurantId) =>{
    return restaurant.findById(restaurantId)
};

// delete restaurant
const deleteRestaurant = async(restaurantId) =>{
    return restaurant.findByIdAndDelete(restaurantId)
};

// update restaurant
const updateRestaurant = async(restaurantId , updateBody) =>{
    return restaurant.findByIdAndUpdate(restaurantId , {$set : updateBody})
};


module.exports = {
    registerRestaurant,
    getRestaurantList,
    getRestaurantById,
    deleteRestaurant,
    updateRestaurant
}