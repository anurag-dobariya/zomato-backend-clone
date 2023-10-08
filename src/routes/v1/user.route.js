const express = require("express");
const {userValidation} = require("../../validations");
const {userController} = require("../../controllers");
const validate = require("../../middlewares/validate");


const router = express.Router();

// register user
router.post(
    "/register",
    validate(userValidation.registerUser),
    userController.registerUser
);

// login user
router.post(
    "/login",
    userController.loginUser
);

// get user list
router.get(
    "/list",
    userController.getAllUser
);

// get user details by id
router.get(
    "get-user/:userId",
    userController.getUserById
);

// delete user
router.delete(
    "/delete-user/:userId",
    userController.deleteUser
);

//update user details
router.put(
    "update-user/:userId",
    userController.updateUser
);

module.exports = router;



