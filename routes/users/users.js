const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/', async (req, res, next) => {
    await db.query("SELECT * FROM user_tb", function (err, result, fields) {
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

route.get('/id/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id;
    await db.query("SELECT * FROM user_tb where user_id = ?",
        [user_id],
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


route.patch('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id;
    const user_password = req.body.user_password;
    await db.query("UPDATE user_tb SET user_password=? WHERE user_id=?",
        [user_password, user_id],
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
route.get('/auth/:user_username/:user_password', async (req, res, next) => {
    const user_username = req.params.user_username;
    const user_password = req.params.user_password;
    await db.query("SELECT * FROM user_tb where user_username = ? and user_password = ?",
        [user_username, user_password],
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