const {user} = require("../models");

// register user
const registerUser = async(reqBody) =>{
    return user.create(reqBody)
};

// get user list
const getUserList = async(req,res) =>{
    return user.find()
};

// get user details by id
const getUserById = async(userId) =>{
    return user.findById(userId)
};

// get user details by email
const findUserByEmail = async (email) => {
    return user.findOne(email);
  };

//   find user and update
  const findUserAndUpdate = async (_id, token) => {
    return await user.findByIdAndUpdate(
      { _id },
      {
        $set: { token },
      },
      { new: true }
    );
  };

//   get user by role
  const getAllUser = async (role) => {
    return await user.find(role);
  };

// delete user
const deleteUser = async(userId) =>{
    return user.findByIdAndDelete(userId)
};

// update user
const updateUser = async(userId , updateBody) =>{
    return user.findByIdAndUpdate(userId , {$set : updateBody})
};

// get user by email
const getUserByEmail = async (email) => {
  return user.findOne({ email });
};

// delete user by email
const deleteUserByEmail = async (email) => {
  return user.findOneAndDelete({ email: email });
};

module.exports = {
    registerUser,
    getUserList,
    getUserById,
    deleteUser,
    updateUser,
    findUserByEmail,
    findUserAndUpdate,
    getAllUser,
    getUserByEmail,
    deleteUserByEmail
}