const {cartService} = require("../services");

/* Create cart */
const createCart = async(req,res) =>{
    try {
        const reqBody = req.body;
        const cart = await cartService.createCart(reqBody);

        if(!cart){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success:true,
            message:"cart created successfully",
            data:cart
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

/* get cart list */
const getCartList = async(req,res) =>{
    try {
       const cartList = await cartService.getCartList(req,res);

       res.status(200).json({
        success:true,
        message:"get cart list successfully",
        data:cartList
       });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* delete cart */
const deleteCart = async(req,res) =>{
    try {
        const cartId = req.params.cartId;

        if(!cartId){
            throw new Error("cart not found");
        }

        await cartService.deleteCart(deleteId);
        res.status(200).json({
            success:true,
            message:"cart deleted successfully",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get cart details by id */
const getCartById = async (req, res) => {
    try {
        const getDetails = await cartService.getCartById(req.params.cartId);
        if (!getDetails) {
            throw new Error("cart not found!");
        }

        res.status(200).json({
            success: true,
            message: "cart details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update cart
const updateCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;
        const cartExists = await cartService.getCartById(cartId);
        if (!cartExists) {
            throw new Error("cart not found!");
        }

        await cartService.updateCart(cartId, req.body);

        res.status(200).json({
            success: true,
            message: "cart details updated successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports ={
    createCart,
    getCartList,
    deleteCart,
    getCartById,
    updateCart
}
