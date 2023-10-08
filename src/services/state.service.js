const { state } = require("../models");

// create state
const createState = async(reqbody) => {
    return state.create(reqbody);
}

// state list
const getStateList = async() => {
    return state.find().populate("country");
}

// get state details by id
const getStateById = async(stateId) => {
    return state.findById(stateId);
}

// delete state
const deleteState = async(stateId) => {
    return state.findByIdAndDelete(stateId);
}

// update state
const updateState = async(stateId,reqbody) => {
    return state.findByIdAndUpdate(stateId,{$set:reqbody});
}

// get state details by name
const getStateByName = async(state_name) => {
    return state.findOne({state_name})
}

module.exports = {
    createState,
    getStateList,
    getStateById,
    deleteState,
    updateState,
    getStateByName
}
