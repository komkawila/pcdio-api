const express = require("express");
const db = require("../../util/db.config");
const route = express.Router();

route.get(
  "/addlog/:device_id/:user_username/:headers/:value",
  async (req, res, next) => {
    console.log("32");
    const device_id = req.params.device_id;
    const user_username = req.params.user_username;
    const headers = req.params.headers;
    const value = req.params.value;
    await db.query(
      `INSERT INTO logs_tb(device_id, user_username, headers, value) VALUES ("${device_id}", "${user_username}", "${headers}", "${value}")`,
      function (err, result, fields) {
        if (err) {
          console.log(err);
          res.send(result);
        } else {
          res.send(result);
        }
      }
    );
  }
);

route.get("/sendline/:linetoken/:message", async (req, res, next) => {
  const linetoken = req.params.linetoken;
  const message = req.params.message;
  const lineNotify = require("line-notify-nodejs")(linetoken);
  lineNotify
    .notify({
      message: message,
    })
    .then(() => {
      console.log("send completed!");
      res.send("OK");
    });
});

module.exports = route;
