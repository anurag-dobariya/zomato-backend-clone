const { stateService } = require("../services");

// create state
const createState = async(req,res) => {
    try {
        const reqBody = req.body;
        const stateExists = await stateService.getStateByName(reqBody.state_name);
        if(stateExists){
            throw new Error("state already exists.");
        }

        const state = await stateService.createState(reqBody);
        if(!state){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"state created successfully.",
            data:state
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// get state list
const getStateList = async(req,res) => {
    try {
        const getList = await stateService.getStateList();
        if(!getList){
          throw new Error("state not found.");
        }
        res.status(200).json({
          success: true,
          message: "Got state list successfully.",
          data: getList,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
};

// update state
const updateState = async(req,res) => {
    try {
        const stateId = req.params.stateId;
        const reqBody = req.body;
        const stateExists = await stateService.getStateById(stateId);
        if(!stateExists){
            throw new Error("state not found.");
        }

        const updateState = await stateService.updateState(stateId,reqBody);
        if(!updateState){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"state updated successfully.",
            data:updateState
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};

// delete state
const deleteState = async(req,res) => {
    try {
        const stateId = req.params.stateId;
        const stateExists = await stateService.getStateById(stateId);
        if(!stateExists){
            throw new Error("state not found.");
        }
        const deletedState = await stateService.deleteState(stateId);
        if(!deletedState){
            throw new Error("Something went wrong , please try again later.");
        }
        res.status(200).json({
            succcess:true,
            message:"state deleted successfully.",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
};



module.exports = {
    createState,
    getStateList,
    updateState,
    deleteState
}
