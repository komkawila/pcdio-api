const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// GET User All
route.get('/', async (req, res, next) => {
    await db.query("SELECT * FROM user_tb",
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

// POST User
route.post('/', async (req, res, next) => {
    const user_username = req.body.user_username;
    const user_password = req.body.user_password;
    await db.query("INSERT INTO user_tb (user_username, user_password) VALUES (?,?)",
        [user_username, user_password],
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

// PUT User
route.put('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id;
    const user_username = req.body.user_username;
    const user_password = req.body.user_password;
    
    await db.query("UPDATE user_tb SET user_username=?,user_password=? WHERE user_id=?",
        [user_username,user_password,user_id],
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

// DELETE User
route.delete('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id;
    await db.query("DELETE FROM user_tb WHERE user_id = ?",
        [user_id],
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