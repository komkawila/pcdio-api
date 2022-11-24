const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// GET Devices All
route.get('/', async (req, res, next) => {
    var query = "";
    if (
        typeof req.query.username === "undefined" &&
        typeof req.query.deviceid === "undefined"
    ) {
        query = `SELECT * FROM onlinelog_tb`;
    } else if (
        typeof req.query.username !== "undefined" &&
        typeof req.query.deviceid === "undefined"
    ) {
        query = `SELECT * FROM onlinelog_tb WHERE user_username = '${req.query.username}';`;
    } else if (
        typeof req.query.username === "undefined" &&
        typeof req.query.deviceid !== "undefined"
    ) {
        query = `SELECT * FROM onlinelog_tb WHERE deviceid = '${req.query.deviceid}';`;
    } else {
        query = `SELECT * FROM onlinelog_tb`;
    }
    await db.query(query, function (err, result, fields) {
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

