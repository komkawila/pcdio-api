const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/user', async (req, res, next) => {
    await db.query("SELECT user_id, user_username FROM user_tb",
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

route.get('/device', async (req, res, next) => {
    if (
        typeof req.query.user_username === "undefined"
    ) {
        const json = {
            err: false, status: true, message: "Require { user_username }"
        };
        res.send(json);
        return;
    }
    await db.query(`SELECT device_id, device_name FROM device_tb WHERE user_username = "${req.query.user_username}"`,
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

route.get('/date', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: false, status: true, message: "Require { deviceid }"
        };
        res.send(json);
        return;
    }
    await db.query(`SELECT deviceid, createAt FROM coinlog_tb where deviceid = ${req.query.deviceid} group by DATE(createAt)`,
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

route.get('/month/coin', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: false, status: true, message: "Require { deviceid }"
        };
        res.send(json);
        return;
    }
    await db.query(`select date_format(createAt, '%Y-%m') as month from coinlog_tb where deviceid=${req.query.deviceid} group by date_format(createAt, '%M')`,
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

route.get('/month/banknote', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: false, status: true, message: "Require { deviceid }"
        };
        res.send(json);
        return;
    }
    await db.query(`select date_format(createAt, '%Y-%m') as month from banknotelog_tb where deviceid=${req.query.deviceid} group by date_format(createAt, '%M')`,
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

route.get('/month/online', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: false, status: true, message: "Require { deviceid }"
        };
        res.send(json);
        return;
    }
    await db.query(`select date_format(createAt, '%Y-%m') as month from onlinelog_tb where deviceid=${req.query.deviceid} group by date_format(createAt, '%M')`,
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

/*
SELECT deviceid, createAt FROM coinlog_tb where deviceid = 75 group by DATE(createAt)
SELECT * FROM coinlog_tb where deviceid = 75 and createAt = DATE("24-11-2022")
SELECT * FROM coinlog_tb where deviceid = 75 and createAt = DATE("2022-11-24")
select date_format(`createAt`, '%Y-%m') from coinlog_tb group by date_format(`createAt`, '%M')
*/
module.exports = route;
