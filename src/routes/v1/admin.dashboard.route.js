const express = require("express");
const {adminDashboardController} = require("../../controllers");
const auth = require("../../middlewares/auth")

const router = express.Router();

// count restaurant
router.get(
    "/restaurant-count",
    auth(),
    adminDashboardController.restaurantCount
);

// count user
router.get(
    "/user-count",
    auth(),
    adminDashboardController.userCount
);

// count order
router.get(
    "/order-count",
    auth(),
    adminDashboardController.orderCount
);

module.exports = router;