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
      SMTP_HOST: joi.string().description("server that will send the emails"),
      SMTP_PORT: joi.number().description("port to connect to the email server"),
      SMTP_USERNAME: joi.string().description("username for email server"),
      SMTP_PASSWORD: joi.string().description("password for email server"),
      EMAIL_FROM: joi.string().description(
        "the from field in the emails sent by the app"
      ),
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
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
};
