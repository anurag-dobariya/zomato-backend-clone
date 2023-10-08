const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

// creating schema for env vars
const envVarSchema = joi
  .object({
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().trim().description("Mongodb url"),
    BASE_URL: joi.string().trim().description("Base URL"),
    JWT_SECRET_KEY: joi
      .string()
      .description("Jwt secret key")
      .default("thisisjwtsecretkey"),
  })
  .unknown();

const { value: envVars, error } = envVarSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  console.log("config error: ", error);
  process.exit(1);
}

module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  base_url: envVars.BASE_URL,
  jwt: {
    secret_key: envVars.JWT_SECRET_KEY,
  },
};
