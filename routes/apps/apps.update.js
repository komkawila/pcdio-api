const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// SENSOR 1
route.patch('/countset/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET count_set= ? WHERE device_id = ?",
        [value, device_id],
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

route.patch('/count/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET count= ? WHERE device_id = ?",
        [value, device_id],
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

route.patch('/countlast/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET count_last= ? WHERE device_id = ?",
        [value, device_id],
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

// SENSOR 2
route.patch('/countset2/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET count2_set= ? WHERE device_id = ?",
        [value, device_id],
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

route.patch('/count2/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET count2 = ? WHERE device_id = ?",
        [value, device_id],
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

route.patch('/countlast2/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET count2_last= ? WHERE device_id = ?",
        [value, device_id],
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

// SETSENSOR 1 ตั้งค่าเปิดรีเลย์ตามจำนวนเซนเซอร์
route.patch('/setsensor/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET setsensor= ? WHERE device_id = ?",
        [value, device_id],
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
// SETSENSOR 2 ตั้งค่าเปิดรีเลย์ตามจำนวนเซนเซอร์
route.patch('/setsensor2/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET setsensor2= ? WHERE device_id = ?",
        [value, device_id],
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
// settime_relayC ตั้งค่าเปิดรีเลย์ตามจำนวนเซนเซอร์
route.patch('/settimerelayc/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET settime_relayC= ? WHERE device_id = ?",
        [value, device_id],
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
// setbath ตั้งค่าราคา 1
route.patch('/setbath/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET setbath= ? WHERE device_id = ?",
        [value, device_id],
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
// setbath2 ตั้งค่าราคา 2
route.patch('/setbath2/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const value = req.body.value;
    await db.query("UPDATE device_tb SET setbath2 = ? WHERE device_id = ?",
        [value, device_id],
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