const express = require('express');
const db = require('../../../util/db.config');
const route = express.Router();

route.get('/user', async (req, res, next) => {
    if (
        typeof req.query.user_username === "undefined"
    ) {
        const json = {
            err: false, status: true, message: "Require {user_username}"
        };
        res.send(json);
        return;
    }
    var query = `SELECT sum(onlinelog_tb.amount) as online_amount FROM onlinelog_tb WHERE onlinelog_tb.user_username = "${req.query.user_username}"`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    online_amount: result[0].online_amount ? result[0].online_amount : 0
                }
            };
            res.send(json);
        }
    });
});

module.exports = route;
