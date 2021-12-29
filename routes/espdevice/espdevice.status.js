const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// #======================================= GET STATUS DEVICEs ========================================#
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
    await db.query("SELECT * FROM device_tb WHERE user_username = ?",
        [user_username],
        function (err, result, fields) {
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

route.get('/:user_username/:device_name', async (req, res, next) => {
    const user_username = req.params.user_username;
    const device_name = req.params.device_name;
    await db.query("SELECT * FROM device_tb WHERE user_username = ? AND device_name = ?",
        [user_username,device_name],
        function (err, result, fields) {
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