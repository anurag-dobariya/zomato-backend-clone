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

// get restaurant by category
const getRestaurantByCategory = async(restaurant_category) =>{
    return restaurant.find({$or :[{restaurant_category}]});
};

// get restaurant images list
const getRestaurantImages = async(restaurant_image) =>{
    return restaurant.find({$or :[{restaurant_image}]});
};

// get restaurant by name
const getRestaurantByName = async(restaurant_name) => {
    return State.findOne({restaurant_name})
}

module.exports = {
    registerRestaurant,
    getRestaurantList,
    getRestaurantById,
    deleteRestaurant,
    updateRestaurant,
    getRestaurantByCategory,
    getRestaurantImages,
    getRestaurantByName
}

