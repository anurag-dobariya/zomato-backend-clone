const { city } = require("../models");

// create city
const createCity = async(reqbody) => {
    return city.create(reqbody);
}

// get city list
const getCityList = async() => {
    return city.find().populate("state").populate("country");
}

// get city details by id
const getCityById = async(cityId) => {
    return city.findById(cityId);
}

// delete city
const deleteCity = async(cityId) => {
    return city.findByIdAndDelete(cityId);
};

// update City
const updateCity = async(cityId,reqbody) => {
    return city.findByIdAndUpdate(cityId,{$set:reqbody});
};

// get city details by name
const getCityByName = async(city_name) => {
    return city.findOne({city_name})
}


module.exports = {
    createCity,
    getCityList,
    getCityById,
    updateCity,
    deleteCity,
    getCityByName
}
