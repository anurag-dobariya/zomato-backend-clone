const express = require("express");
const {stateValidation} = require("../../validations");
const {stateController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")


const router = express.Router();

// create state
router.post(
    "/cretae-state",
    auth(),
    validate(stateValidation.createState),
    stateController.createState
);

// get state list
router.get(
    "/list",
    stateController.getStateList
);

// delete state
router.delete(
    "/delete-state/:stateId",
    auth(),
    stateController.deleteState
);

//update state details
router.put(
    "update-state/:stateId",
    auth(),
    stateController.updateState
);

module.exports = router;



