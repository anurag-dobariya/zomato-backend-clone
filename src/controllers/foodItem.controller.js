const { foodItemService } = require("../services");
const auth = require("../middlewares/auth");

// creating controller for create food-item
const createFoodItem = async (req, res) => {
    try {
        await auth(req.headers.token, ['owner']);

        const reqBody = req.body;

        if (req.file) {
            reqBody.food_item_image = req.file.filename;
        } else {
            throw new Error("Food item image required.");
        }

        const foodItem = await foodItemService.createFoodItem(reqBody);
        if (!foodItem) {
            throw new Error("Something went wrong , please try again later..");
        };

        res.status(200).json({
            success: true,
            message: "food item created successfully.",
            data: foodItem
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for get food-item list
const getFoodItemList = async (req, res) => {
    try {
        const getList = await foodItemService.getFoodItemList(req, res);

        res.status(200).json({
            success: true,
            message: "food-item list got successfully.",
            data: getList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for getfood-item details by id
const getFoodItemById = async (req, res) => {
    try {
        const getfoodItem = await foodItemService.getFoodItemById(req.params.foodItemId);

        if (!getfoodItem) {
            throw new Error("food-Item not found");
        }

        res.status(200).json({
            success: true,
            message: "food-item details got successfully.",
            data: getRestaurant
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for delete food-item
const deleteFoodItem = async (req, res) => {
    try {
        await auth(req.headers.token, ['owner']);
        const foodItemId = req.params.foodItemId;
        const foodItemExists = await foodItemService.getFoodItemById(foodItemId);
        if (!foodItemExists) {
            throw new Error("foodItem not found!");
        }

        const deletedFoodItem = await foodItemService.deleteFoodItem(foodItemId);
        if (deletedFoodItem) {
            const filePath = `./public/food_item_images/${imageExists.food_item_image}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "food-item deleted successfully!",
            data: deletedFoodItem,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// creating controller for update food-item
const updateFoodItem = async (req, res) => {
    try {
        await auth(req.headers.token, ['owner']);
        const reqBody = req.body;
        const foodItemId = req.params.foodItemId;
        const foodItemExists = await foodItemService.getFoodItemById(foodItemId);
        if (!foodItemExists) {
            throw new Error("Food-Item not found!");
        }

        if (req.file) {
            reqBody.food_item_image = req.file.filename;
        }

        const updatedFoodItem = await foodItemService.updateFoodItem(
            foodItemId,
            reqBody
        );
        if (updatedFoodItem) {
            if (req.file) {
                const filePath = `./public/food_item_images/${imageExists.food_item_image}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Food-item details updated successfully!",
            data: updatedFoodItem,
        });
    } catch (error) {

    }
}

module.exports = {
    createFoodItem,
    getFoodItemList,
    getFoodItemById,
    deleteFoodItem,
    updateFoodItem
}