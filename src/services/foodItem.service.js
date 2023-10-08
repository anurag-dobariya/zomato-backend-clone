const {foodItem} = require("../models");

// create foodItem
const createFoodItem = async(reqBody) =>{
    return foodItem.create(reqBody)
};

// get foodItem list
const getFoodItemList = async(req,res) =>{
    return foodItem.find().populate("restaurant")
};

// get foodItem details by id
const getFoodItemById = async(foodItemId) =>{
    return foodItem.findById(foodItemId)
};

// delete foodItem
const deleteFoodItem = async(foodItemId) =>{
    return foodItem.findByIdAndDelete(foodItemId)
};

// update foodItem
const updateFoodItem = async(foodItemId , updateBody) =>{
    return foodItem.findByIdAndUpdate(foodItemId , {$set : updateBody})
};

module.exports = {
    createFoodItem,
    getFoodItemList,
    getFoodItemById,
    deleteFoodItem,
    updateFoodItem
}