const express = require("express");
const {foodItemValidation} = require("../../validations");
const {foodItemController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const {upload} = require("../../middlewares/upload");

const router = express.Router();

// create food-item
router.post(
    "/create-food-item",
    auth(),
    upload.single("food_item_image"),
    validate(foodItemValidation.createFoodItem),
    foodItemController.createFoodItem
);

// food-item list
router.get(
    "/food-item-list",
    foodItemController.getFoodItemList
)

// food-item details
router.get(
    "/food-item-details/:foodItemId",
    foodItemController.getFoodItemById
);

// delete food-item
router.delete(
    "delete-food-item/:foodItemId",
    auth(),
    foodItemController.deleteFoodItem
);

// update food-item
router.put(
    "update-food-item/:foodItemId",
    auth(),
    upload.single("food_item_image"),
    foodItemController.updateFoodItem
);

module.exports= router;