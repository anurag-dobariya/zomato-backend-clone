const { cityService, restaurantService } = require("./index");
const { city, restaurant } = require("../models");

// get city list according to state
const stateWiseCity = async (stateId) => {
  return city.find({ $or: [{ state: `${stateId}` }] });
};

// get restaurant list by city
const restaurantByCity = async (cityId) => {
  return restaurant.find({ $or: [{ city: `${cityId}` }] });
};

// get restaurant list by category
const restaurantByCategory = async (city_name, restaurant_category) => {
  const city = await cityService.getCityByName(city_name);
  const restaurantCategory = await restaurantService.getRestaurantByCategory(
    restaurant_category
  );
  return restaurant.find({
    $and: [{ city: city._id }, { restaurant_category: restaurantCategory._id }],
  });
};




module.exports = {
  stateWiseCity,
  restaurantByCity,
  restaurantByCategory,
};
