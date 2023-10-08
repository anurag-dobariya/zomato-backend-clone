const { country } = require("../models");


// create country
const createCountry = async(reqbody) => {
    return country.create(reqbody);
}

// get list
const getCountryList = async(req,res) => {
    return country.find();
}

// get country details by id
const getCountryById = async(countryId) => {
    return country.findById(countryId);
}

// delete country
const deleteCountry = async(countryId) => {
    return country.findByIdAndDelete(countryId);
}

// update country
const updateCountry = async(countryId,reqbody) => {
    return country.findByIdAndUpdate(countryId,{$set:reqbody});
}

// get country by name
const getCountryByName = async(country_name) => {
    return country.findOne({country_name})
}

module.exports = {
    createCountry,
    getCountryList,
    getCountryById,
    deleteCountry,
    updateCountry,
    getCountryByName
}
