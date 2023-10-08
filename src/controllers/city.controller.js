const { cityService } = require("../services");

// create city
const createCity = async(req,res) => {
    try {
        const reqBody = req.body;
        const cityExists = await cityService.getCityByName(reqBody.city_name);
        if(cityExists){
            throw new Error("City already exists.");
        }

        const city = await cityService.createCity(reqBody);
        if(!city){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"City created successfully.",
            data:city
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// get city list
const getCityList = async(req,res) => {
    try {
        const getList = await cityService.getCityList(req,res);
        if(!getList){
          throw new Error("City not found.");
        }
        res.status(200).json({
          success: true,
          message: "Got city list successfully.",
          data: getList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

// update city
const updateCity = async(req,res) => {
    try {
        const cityId = req.params.cityId;
        const reqBody = req.body;
        const cityExists = await cityService.getCityById(cityId);
        if(!cityExists){
            throw new Error("City not found. ");
        }

        const updateCity = await cityService.updateCity(cityId,reqBody);
        if(!updateCity){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"City updated successfully.",
            data:updateCity
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

// delete city
const deleteCity = async(req,res) => {
    try {
        const cityId = req.params.cityId;
        const cityExists = await cityService.getCityById(cityId);
        if(!cityExists){
            throw new Error("City not found.");
        }
        const deletedCity = await cityService.deleteCity(cityId);
        if(!deletedCity){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"City deleted successfully.",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};



module.exports = {
    createCity,
    getCityList,
    updateCity,
    deleteCity
}
