const joi = require("joi");

// register user
const registerUser = {
    body: joi.object().keys({
        first_name: joi.string().required().trim(),
        last_name: joi.string().required().trim(),
        email: joi.string().required().trim(),
        password: joi.string().required().trim(),
        role: joi.string().valid('user', 'owner' , 'admin').default('user').required()
    })
};

module.exports ={
    registerUser
}