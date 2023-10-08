const express = require("express");
const {countryValidation} = require("../../validations");
const {countryController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")


const router = express.Router();

// create country
router.post(
    "/cretae-country",
    auth(),
    validate(countryValidation.createCountry),
    countryController.createCountry
);

// get country list
router.get(
    "/list",
    countryController.getCountryList
);

// delete country
router.delete(
    "/delete-country/:countryId",
    auth(),
    countryController.deleteCountry
);

//update country details
router.put(
    "update-country/:countryId",
    auth(),
    countryController.updateCountry
);

module.exports = router;



