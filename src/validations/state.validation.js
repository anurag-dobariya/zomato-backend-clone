const joi = require("joi");

/** create state */
const createState = {
  body: joi.object().keys({
    state_name: joi.string().trim().required(),
    country: joi.string().trim().required(),
  }),
};

module.exports = {
    createState
}
