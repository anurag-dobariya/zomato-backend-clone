const { countryService } = require("../services");

// create country
const createCountry = async(req,res) => {
    try {
        const reqBody = req.body;
        const countryExists = await countryService.getCountryByName(reqBody.country_name);
        if(countryExists){
            throw new Error("Country already exists.");
        }

        const country = await countryService.createCountry(reqBody);
        if(!country){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"Country created successfully.",
            data:country
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// get country list
const getCountryList = async(req,res) => {
    try {
        const getList = await countryService.getCountryList();
        if(!getList){
          throw new Error("Country not found.");
        }
        res.status(200).json({
          success: true,
          message: "Got country list successfully.",
          data: getList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

// update country
const updateCountry = async(req,res) => {
    try {
        const countryId = req.params.countryId;
        const reqBody = req.body;
        const countryExists = await countryService.getCountryById(countryId);
        if(!countryExists){
            throw new Error("Country not found. ");
        }

        const updateCountry = await countryService.updateCountry(countryId,reqBody);
        if(!updateCountry){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"Country updated successfully.",
            data:updateCountry
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

// delete country
const deleteCountry = async(req,res) => {
    try {
        const countryId = req.params.countryId;
        const countryExists = await countryService.getCountryById(countryId);
        if(!countryExists){
            throw new Error("Country not found.");
        }
        const deletedCountry = await countryService.deleteCountry(countryId);
        if(!deletedCountry){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"Country deleted successfully.",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};



module.exports = {
    createCountry,
    getCountryList,
    updateCountry,
    deleteCountry
}
