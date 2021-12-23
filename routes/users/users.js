const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// Get USER Type All
route.get('/', async (req, res, next) => {
    console.log("GET USER")
    await db.query("SELECT * FROM user_tb", function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(json);
        }
    });
});

// Get USER Type All
route.get('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id;
    console.log("GET USER ID " + user_id)
    await db.query("SELECT * FROM user_tb WHERE user_id = ?", [user_id], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(json);
        }
    });
});

// POST USER Type All
route.post('/', async (req, res, next) => {
    const user_username = req.body.user_username;
    const user_password = req.body.user_password;
    const user_detail = req.body.user_detail;
    const user_localtion = req.body.user_localtion;
    const user_type = req.body.user_type;
    const user_purchaseorder = req.body.user_purchaseorder;
    const user_tel = req.body.user_tel;
    const air_brand = req.body.air_brand;
    const air_btu = req.body.air_btu;
    const air_type = req.body.air_type;
    const air_lifetime = req.body.air_lifetime;

    console.log("GET USER")
    await db.query("INSERT INTO user_tb (\
        user_username, user_password, user_detail, user_localtion, user_type, user_purchaseorder, user_tel, air_brand, air_btu, air_type, air_lifetime) \
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [user_username, user_password, user_detail, user_localtion, user_type, user_purchaseorder, user_tel, air_brand, air_btu, air_type, air_lifetime], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(json);
        }
    });
});


// PUT USER Type All
route.put('/', async (req, res, next) => {
    const user_id = req.body.user_id;
    const user_username = req.body.user_username;
    const user_password = req.body.user_password;
    const user_detail = req.body.user_detail;
    const user_localtion = req.body.user_localtion;
    const user_type = req.body.user_type;
    const user_purchaseorder = req.body.user_purchaseorder;
    const user_tel = req.body.user_tel;
    const air_brand = req.body.air_brand;
    const air_btu = req.body.air_btu;
    const air_type = req.body.air_type;
    const air_lifetime = req.body.air_lifetime;

    console.log("PUT USER")
    await db.query("UPDATE user_tb SET user_username =?, user_password =?, user_detail =?, user_localtion =?, \
        user_type =?, user_purchaseorder =?, user_tel =?, air_brand =?, air_btu =?, air_type =?, air_lifetime =? \
        WHERE user_id =?",
        [user_username, user_password, user_detail, user_localtion, user_type, user_purchaseorder, user_tel, air_brand, air_btu, air_type, air_lifetime,user_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send({ err: true, message: err });
            } else {
                const json = { err: false, message: result };
                res.send(json);
            }
        });
});
// DELETE USER Type All
route.delete('/:user_id', async (req, res, next) => {
    const user_id = req.params.user_id;
    console.log("GET USER ID " + user_id)
    await db.query("DELETE FROM user_tb WHERE user_id = ?", [user_id], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(json);
        }
    });
});

module.exports = route;