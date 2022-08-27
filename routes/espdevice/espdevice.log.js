const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/addlog/:device_id/:user_username/:headers/:value', async (req, res, next) => {
    console.log('32')
    const device_id = req.params.device_id;
    const user_username = req.params.user_username;
    const headers = req.params.headers;
    const value = req.params.value;
    await db.query(`INSERT INTO logs_tb(device_id, user_username, headers, value) VALUES ("${device_id}", "${user_username}", "${headers}", "${value}")`,
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result[0] == null ? '{}' : result[0]);
            }
        });
});

module.exports = route;