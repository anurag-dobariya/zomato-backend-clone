const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

/** create cart info */
router.post(
  "/create-cart",
  auth(),
  validate(cartValidation.createCart),
  cartController.createCart
);

/** Get cart list */
router.get(
  "/list",
  auth(),
  cartController.getCartList
);

/**  cart details by id */
router.get(
    "/cart-details/:cartId",
    auth(),
    cartController.getCartById
)

/** Delete cart */
router.delete(
  "/delete-cart/:cartId",
  auth(),
  cartController.deleteCart
);

/** update cart */
router.put(
  "/update-cart/:cartId",
  auth(),
  cartController.updateCart
)

module.exports = router;
