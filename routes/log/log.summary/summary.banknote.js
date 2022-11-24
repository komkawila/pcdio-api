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
    var query = `SELECT sum(banknotelog_tb.amount) as banknote_amount FROM banknotelog_tb WHERE banknotelog_tb.user_username = "${req.query.user_username}"`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    banknote_amount: result[0].banknote_amount ? result[0].banknote_amount : 0
                }
            };
            res.send(json);
        }
    });
});

module.exports = route;
