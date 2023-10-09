const {
  stateService,
  findBySearchService,
  cityService,
  restaurantService
} = require("../services");

// city list by state wise
const stateWiseCity = async (req, res) => {
  try {
    const stateExists = await stateService.getStateById(req.params.stateId);
    if (!stateExists) {
      throw new Error("State not found.");
    }
    const cityList = await findBySearchService.stateWiseCity(
      req.params.stateId
    );
    res.status(200).json({
      success: true,
      message: "city list by state name got successfully.",
      data: cityList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// restaurant list by city wise
const restaurantByCity = async (req, res) => {
  try {
    const cityExists = await cityService.getCityById(req.params.cityId);
    if (!cityExists) {
      throw new Error("City not found.");
    }
    const restaurantList = await findBySearchService.restaurantByCity(
      req.params.cityId
    );
    console.log(restaurantList);
    res.status(200).json({
      success: true,
      message: "Restaurant list by city name got successfully.",
      data: restaurantList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get restaurant list by category and city
const restaurantByCategoryAndCity = async (req, res) => {
  try {
    const cityExists = await cityService.getCityByName(req.body.city_name);
    if (!cityExists) {
      throw new Error("City not found");
    }
    const restaurantExists =
      await restaurantService.getRestaurantByCategory(
        req.body.restaurant_category
      );
    if (!restaurantExists) {
      throw new Error("Restaurant not found");
    }
    const restaurantList = await findBySearchService.restaurantByCategory(
      req.body.city_name,
      req.body.restaurantCategory
    );
    if (!restaurantList) {
      throw new Error("Something went wrong.");
    }
    res.status(200).json({
      success: true,
      messgae: "Restaurant list by city wise got sucessfully",
      data: restaurantList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get restaurant by name
const getRestaurantByName = async(req,res) =>{
    try {
        const restaurant = await restaurantService.getRestaurantByName(req.params.restaurant_name);
        if(!restaurant) {
            throw new Error("restaurant not found");
        };

        res.status(200).json({
            success:true,
            message:"restaurant found successfully",
            data:restaurant
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
};

module.exports = {
  stateWiseCity,
  restaurantByCity,
  restaurantByCategoryAndCity,
  getRestaurantByName
};
