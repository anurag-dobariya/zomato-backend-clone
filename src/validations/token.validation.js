const joi = require("joi");

// create token
const createToken = {
    body : joi.object().keys({
        user: joi.string().required().trim()
    })
};

module.exports= {
    createToken
}
