const express = require("express");
const {restaurantValidation} = require("../../validations");
const {restaurantController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const {upload} = require("../../middlewares/upload");

const router = express.Router();

// register restaurant
router.post(
    "/register-restaurant",
    auth(),
    upload.single("restaurant_image"),
    upload.single("shop_license_image"),
    validate(restaurantValidation.registerRestaurant),
    restaurantController.registerRestaurant
);

// restaurant list
router.get(
    "/restaurant-list",
    restaurantController.getRestaurantList
);

// restaurant details by id
router.get(
    "/restaurant-details/:restaurantId",
    restaurantController.getRestaurantList
);

// delete restaurant
router.delete(
    "/delete-restaurant/:restaurantId",
    auth(),
    restaurantController.deleteRestaurant
);

// update restaurant
router.put(
    "/update-restaurant/:restaurantId",
    auth(),
    upload.single("restaurant_image"),
    upload.single("shop_license_image"),
    restaurantController.updateRestaurant
);

// get restaurant image list
router.get(
    "/restaurant-images",
    restaurantController.getRestaurantImages
)

// manage restaurant status
router.put(
    "/manage-status/:restaurantId",
    auth(),
    productController.manageProductStatus
  );

module.exports = router;