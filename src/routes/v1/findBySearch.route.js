const express = require("express");
const {findBySearchController} = require("../../controllers");

const router = express.Router();

// get City list state wise
router.get(
    "/city-list/:stateId",
    findBySearchController.stateWiseCity
);

// restaurant list City wise
router.get(
    "/restaurantlist-by-city/:ctiyId",
    findBySearchController.restaurantByCity
);

// restaurantByCategoryAndCity
router.get(
    "/restaurant-by-category-and-city",
    findBySearchController.restaurantByCategoryAndCity
)

// get restaurant by name
router.get(
    "/retsaurant_name/:restaurant_name",
    findBySearchController.getRestaurantByName
)

module.exports = router;