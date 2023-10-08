const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

/** create order info */
router.post(
    "/create-order",
    auth(),
    validate(orderValidation.createOrder),
    orderController.createOrder
);

/** Get order list */
router.get(
    "/list",
    auth(),
    orderController.getOrderList
);

// order details by id
router.get(
    "/order-details/:orderId",
    auth(),
    orderController.getOrderById
);

/** Delete order */
router.delete(
    "/delete-order/:orderId",
    auth(),
    orderController.deleteOrder
);

/** update order */
router.put(
    "/update-order/:orderId",
    auth(),
    orderController.updateOrder
);

module.exports = router;
