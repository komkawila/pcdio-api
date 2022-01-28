const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/checkid/:user_username/:expire_price', async (req, res, next) => {
    const user_username = req.params.user_username;
    const expire_price = req.params.expire_price;
    await db.query("SELECT * FROM device_tb WHERE user_username = ? and expire_price = ? limit 1",[user_username,expire_price],function (err, result, fields) {
        if (err) {
            console.log(err);
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        } else {
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        }
    });
});

route.patch('/setexpire/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const expire_price = req.body.expire_price;
    await db.query("UPDATE device_tb SET expire_price = ? WHERE device_id = ?",[expire_price,device_id],function (err, result, fields) {
        if (err) {
            console.log(err);
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        } else {
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        }
    });
});

route.patch('/updateexpire/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const expire = req.body.expire;
    await db.query("UPDATE device_tb SET expire = ? WHERE device_id = ?",[expire,device_id],function (err, result, fields) {
        if (err) {
            console.log(err);
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        } else {
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        }
    });
});

route.get('/pluseexpire/:device_id', async (req, res, next) => { // เพิ่ม 30 วัน
    const device_id = req.params.device_id;
    await db.query("UPDATE device_tb SET expire = device_tb.expire + 30 WHERE device_id = ?",[device_id],function (err, result, fields) {
        if (err) {
            console.log(err);
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        } else {
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        }
    });
});

route.get('/minusexpire/:device_id', async (req, res, next) => { // ลบ -1
    const device_id = req.params.device_id;
    await db.query("UPDATE device_tb SET expire = device_tb.expire - 1 WHERE device_id = ?",[device_id],function (err, result, fields) {
        if (err) {
            console.log(err);
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        } else {
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        }
    });
});

module.exports = route;




