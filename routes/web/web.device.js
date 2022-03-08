const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// GET Devices
route.get('/:user_username', async (req, res, next) => {
    const user_username = req.params.user_username;
    await db.query("SELECT * FROM device_tb WHERE user_username = ?",
        [user_username], function (err, result, fields) {
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