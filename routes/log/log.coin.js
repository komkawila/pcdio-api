const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// GET Devices All
route.get('/', async (req, res, next) => {
    await db.query("SELECT * FROM coinlog_tb",
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send({ err: true, status: false, message: err });
            } else {
                const json = { err: false, status: (result.length == 0 ? false : true), message: result };
                res.send(json);
            }
        });
});

module.exports = route;
