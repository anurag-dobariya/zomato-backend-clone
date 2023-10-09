const {adminDashboardService} = require("../services");
const auth = require("../middlewares/auth")

// restaurant count
const restaurantCount = async(req,res)=>{
    try {
        await auth(req.headers.token, ['admin']);

        const count = await adminDashboardService.getRestaurantCount();

        if(!count){
            throw new Error("Something went wrong");
        }

        res.status(200).json({
            success:true,
            messgae:"Restaurant count got successfully.",
            data:count
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            error:message.error
        })
    }
};

// user count
const userCount = async(req,res)=>{
    try {
        await auth(req.headers.token, ['admin']);

        const count = await adminDashboardService.getUserCount();

        if(!count){
            throw new Error("Something went wrong");
        }

        res.status(200).json({
            success:true,
            messgae:"User count got successfully.",
            data:count
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            error:message.error
        })
    }
};

// order count
const orderCount = async(req,res)=>{
    try {
        await auth(req.headers.token, ['admin']);

        const count = await adminDashboardService.getOrderCount();

        if(!count){
            throw new Error("Something went wrong");
        }

        res.status(200).json({
            success:true,
            messgae:"order count got successfully.",
            data:count
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            error:message.error
        })
    }
};

module.exports = {
    restaurantCount,
    userCount,
    orderCount
}