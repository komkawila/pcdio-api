const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// GET Devices All
route.get('/', async (req, res, next) => {
    await db.query("SELECT * FROM device_tb",
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

// GET ID Devices
route.patch('/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    await db.query("SELECT * FROM device_tb WHERE device_id = ?",
        [device_id], function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send({ err: true, status: false, message: err });
            } else {
                const json = { err: false, status: (result.length == 0 ? false : true), message: result };
                res.send(json);
            }
        });
});

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

// POST Devices
route.post('/', async (req, res, next) => {
    const device_name = req.body.device_name;
    const user_username = req.body.user_username;
    await db.query("INSERT INTO device_tb (device_name, user_username) VALUES (?,?))",
        [device_name, user_username],
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

// PUT Devices
route.put('/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const device_name = req.body.device_name;
    const device_status = req.body.device_status;
    const device_onoff = req.body.device_onoff;
    const device_bath = req.body.device_bath;
    const user_username = req.body.user_username;
    const device_relay = req.body.device_relay;
    const pulse = req.body.pulse;
    const state_pulse = req.body.state_pulse;
    const count_set = req.body.count_set;
    const count = req.body.count;
    const count_last = req.body.count_last;
    const count2_set = req.body.count2_set;
    const count2 = req.body.count2;
    const count2_last = req.body.count2_last;
    const setsensor = req.body.setsensor;
    const setsensor2 = req.body.setsensor2;
    const readstatus = req.body.readstatus;
    const expire = req.body.expire;
    const expire_price = req.body.expire_price;
    const settime_relayC = req.body.settime_relayC;
    const setbath = req.body.setbath;
    const setbath2 = req.body.setbath2;


    await db.query("UPDATE device_tb SET device_name=?,device_status=?,device_onoff=?,device_bath=?,user_username=?,device_relay=?,pulse=?,state_pulse=?,count_set=?,\
    count=?,count_last=?,count2_set=?,count2=?,count2_last=?,setsensor=?,setsensor2=?,readstatus=?,expire=?,expire_price=,settime_relayC=?,setbath=?,setbath2=? WHERE device_id=?",
        [device_name, device_status, device_onoff, device_bath, user_username, device_relay, pulse, state_pulse, count_set, count, count_last,
            count2_set, count2, count2_last, setsensor, setsensor2, readstatus, expire, expire_price, settime_relayC, setbath, setbath2, device_id],
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


// DELETE Devices
route.delete('/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    await db.query("DELETE FROM device_tb WHERE device_id = ?",
        [device_id],
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