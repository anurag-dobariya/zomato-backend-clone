const joi = require("joi");

/** create country */
const createCountry = {
  body: joi.object().keys({
    country_name: joi.string().trim().required(),
  }),
};

module.exports = {
    createCountry
}
