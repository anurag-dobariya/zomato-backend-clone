const express = require("express");

const userRoute = require("./user.route");
const tokenRoute = require("./token.route");
const restaurantRoute = require("./restaurant.route");
const foodItemRoute = require("./foodItem.route");
const orderRoute = require("./order.route");
const cartRoute = require("./cart.route");
const countryRoute = require("./country.route.js");
const stateRoute = require("./state.route.js");
const cityRoute = require("./city.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/token", tokenRoute);
router.use("/restaurant", restaurantRoute);
router.use("/foodItem", foodItemRoute);
router.use("/order", orderRoute);
router.use("/cart", cartRoute);
router.use("/country", countryRoute);
router.use("/state", stateRoute);
router.use("/city", cityRoute);

module.exports = router;