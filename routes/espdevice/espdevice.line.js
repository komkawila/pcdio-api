const express = require("express");
const route = express.Router();

route.get("/:linetoken/:message", async (req, res, next) => {
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
