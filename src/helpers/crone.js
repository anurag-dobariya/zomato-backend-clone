const cron = require("cron");
const { start } = require("repl");
const { emailService } = require("../services");

/** It's running on every 5 seconds. */
// new cron(
//   "*/5 * * * * *",
//   function () {
//     console.log("It's running on every 5 seconds.");
//   },
//   null,
//   false,
//   "Asia/Kolkata"
// ).start();


/** Send email */
new cron(
  "50 7 * * *",
  function () {
    emailService.sendMail(
      "anuragdobariya001@gmail.com.com",
      "Test message",
      "Good morning! Have a nice day :)"
    );
  },
  null,
  false,
  "Asia/Kolkata"
).start();