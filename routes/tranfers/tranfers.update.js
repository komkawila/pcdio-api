const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/', async (req, res, next) => {
    await db.query("SELECT * FROM device_tb", function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send(result);
        } else {
            res.send(result);
        }
    });
});

module.exports = route;