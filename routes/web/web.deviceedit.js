const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();


// 
route.patch('/devicename/:device_id', async (req, res, next) => {
    const device_id = req.params.device_id;
    const values = req.body.values;
    await db.query("UPDATE device_tb SET device_name=? WHERE device_id=?",
        [values, device_id],
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