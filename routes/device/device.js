const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/', async (req, res, next) => {
    await db.query("SELECT * FROM device_tb", function (err, result, fields) {
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

route.get('/:user_username', async (req, res, next) => {
    const user_username = req.params.user_username;
    await db.query("SELECT * FROM device_tb where user_username = ?", [user_username], function (err, result, fields) {
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
route.get('/uname/:user_username', async (req, res, next) => {
    const user_username = req.params.user_username;
    await db.query("SELECT * FROM device_tb where user_username = ?", [user_username], function (err, result, fields) {
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
route.get('/id/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    await db.query("SELECT * FROM device_tb where device_id = ?", [device_id], function (err, result, fields) {
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

route.get('/did/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    await db.query("SELECT * FROM device_tb where device_id = ?", [device_id], function (err, result, fields) {
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

route.post('/update-bath/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const device_status = req.body.device_status;
    const device_bath = req.body.device_bath;
    console.log("UPDATE device_tb SET device_status = ? ,device_bath= ? WHERE device_id = ?", [device_status, device_bath, device_id])
    await db.query("UPDATE device_tb SET device_status = ? ,device_bath= ? WHERE device_id = ?", [device_status, device_bath, device_id], function (err, result, fields) {
        if (err) {
            console.log(err);
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        } else {
            // const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            // res.send(json);
            console.log(result);
        }
    });
    await db.query(`SELECT * FROM device_tb WHERE device_id = ${device_id}`, function (err, result, fields) {
        if (err) {
            console.log(err);
            const json = { err: false, status: (result.length == 0 ? false : true), message: result };
            res.send(json);
        } else {
            try {
                db.query(`INSERT INTO onlinelog_tb(deviceid, user_username, amount) VALUES (${device_id}, '${result[0].user_username}', '${device_bath}')`, function (err2, result2, fields2) {
                    if (err2) {
                        console.log(err2);
                        const json = { err: false, status: (result2.length == 0 ? false : true), message: result2 };
                        res.send(json);
                    } else {
                        const json = { err: false, status: (result2.affectedRows !== 0 ? true : false), message: "Success" };
                        res.send(json);
                    }
                });
            } catch {
                const json = { err: false, status: false, message: "Error" };
                res.send(json);
            }

        }
    });
});



module.exports = route;