const joi = require("joi");

/** create city */
const createCity = {
  body: joi.object().keys({
    city_name: joi.string().trim().required(),
    state: joi.string().trim().required(),
    country: joi.string().trim().required(),
  }),
};

module.exports = {
    createCity
}
