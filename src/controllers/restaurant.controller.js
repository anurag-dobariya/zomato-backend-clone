const { restaurantService } = require("../services");
const auth = require("../middlewares/auth");

// creating controller for restaurant register
const registerRestaurant = async (req, res) => {
    try {
        await auth(req.headers.token, ['owner']);

        const reqBody = req.body;

        if (req.file) {
            reqBody.restaurant_image = req.file.filename;
            reqBody.shop_license_image = req.file.filename;
        } else {
            throw new Error("restaurant image and shop license image is required!");
        }

        const restaurant = await restaurantService.registerRestaurant(reqBody);
        if (!restaurant) {
            throw new Error("Something went wrong , please try again later..");
        };

        res.status(200).json({
            success: true,
            message: "restaurant registration successfully.",
            data: restaurant
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for get restaurant list
const getRestaurantList = async (req, res) => {
    try {
        const getList = await restaurantService.getRestaurantList(req, res);

        res.status(200).json({
            success: true,
            message: "Restaurant list got successfully.",
            data: getList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for get restaurant details by id
const getRestaurantById = async (req, res) => {
    try {
        const getRestaurant = await restaurantService.getRestaurantById(req.params.restaurantId);

        if (!getRestaurant) {
            throw new Error("Restaurant not found");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant details got successfully.",
            data: getRestaurant
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for delete restaurant
const deleteRestaurant = async (req, res) => {
    try {
        await auth(req.headers.token, ['owner']);
        const restaurantId = req.params.restaurantId;
        const restaurantExists = await galleryService.getRestaurantById(restaurantId);
        if (!restaurantExists) {
            throw new Error("Restaurant not found!");
        }

        const deletedRestaurant = await galleryService.deleteRestaurant(restaurantId);
        if (deletedRestaurant) {
            const filePathOne = `./public/restaurant_images/${imageExists.restaurant_image}`;
            const filePathTwo = `./public/shop_license_images/${imageExists.shop_license_image}`;
            if (fs.existsSync(filePathOne) && fs.existsSync(filePathTwo)) {
                fs.unlinkSync(filePathOne);
                fs.unlinkSync(filePathTwo)
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant deleted successfully!",
            data: deletedRestaurant,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for update restaurant
const updateRestaurant = async (req, res) => {
    try {
        await auth(req.headers.token, ['owner']);
        const reqBody = req.body;
        const restaurantId = req.params.restaurantId;
        const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
        if (!restaurantExists) {
            throw new Error("Restaurant not found!");
        }

        if (req.file) {
            reqBody.restaurant_image = req.file.filename;
            reqBody.shop_license_image = req.file.filename;
        }

        const updatedRestaurant = await restaurantService.updateRestaurant(
            restaurantId,
            reqBody
        );
        if (updatedRestaurant) {
            if (req.file) {
                const filePathOne = `./public/restaurant_images/${imageExists.restaurant_image}`;
                const filePathTwo = `./public/shop_license_images/${imageExists.shop_license_image}`;
                if (fs.existsSync(filePathOne) && fs.existsSync(filePathTwo)) {
                    fs.unlinkSync(filePathOne);
                    fs.unlinkSync(filePathTwo)
                }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Restaurant details updated successfully!",
            data: updatedRestaurant,
        });
    } catch (error) {

    }
}


module.exports = {
    registerRestaurant,
    getRestaurantList,
    getRestaurantById,
    deleteRestaurant,
    updateRestaurant
}