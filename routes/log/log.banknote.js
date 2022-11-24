const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// GET Devices All
route.get('/', async (req, res, next) => {
    var query = "";
    if (
        typeof req.query.id === "undefined" &&
        typeof req.query.market_id === "undefined"
    ) {
        query = `SELECT * FROM banknotelog_tb`;
    } else if (
        typeof req.query.id !== "undefined" &&
        typeof req.query.market_id === "undefined"
    ) {
        query = `SELECT * FROM bank WHERE id = '${req.query.id}';`;
    } else if (
        typeof req.query.id === "undefined" &&
        typeof req.query.market_id !== "undefined"
    ) {
        query = `SELECT * FROM bank WHERE market_id = '${req.query.market_id}';`;
    }
    // console.log(query);
    // await db.query("SELECT * FROM banknotelog_tb",
    // function (err, result, fields) {
    await db.query(query, function (error, results, fields) {
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
