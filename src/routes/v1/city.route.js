const express = require("express");
const {cityValidation} = require("../../validations");
const {cityController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")


const router = express.Router();

// create city
router.post(
    "/cretae-city",
    auth(),
    validate(cityValidation.createCity),
    cityController.createCity
);

// get city list
router.get(
    "/list",
    cityController.getCityList
);

// delete city
router.delete(
    "/delete-city/:cityId",
    auth(),
    cityController.deleteCity
);

//update city details
router.put(
    "update-city/:cityId",
    auth(),
    cityController.updateCity
);

module.exports = router;



