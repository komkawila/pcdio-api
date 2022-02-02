const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/status/:device_id/:device_status', async (req, res, next) => {
    const device_id = req.params.device_id;
    const device_status = req.params.device_status;
    await db.query("UPDATE device_tb SET device_status = ? WHERE device_id = ?",
        [device_status, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

route.get('/pulse/:device_id/:state_pulse/:pulse', async (req, res, next) => {
    const device_id = req.params.device_id;
    const state_pulse = req.params.state_pulse;
    const pulse = req.params.pulse;
    await db.query("UPDATE device_tb SET state_pulse=?,pulse=? WHERE device_id = ?",
        [state_pulse, pulse, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

route.get('/pulse-state/:device_id/:state_pulse', async (req, res, next) => {
    const device_id = req.params.device_id;
    const state_pulse = req.params.state_pulse;
    await db.query("UPDATE device_tb SET state_pulse=? WHERE device_id = ?",
        [state_pulse, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

route.get('/relay-state/:device_id/:device_relay', async (req, res, next) => {
    const device_id = req.params.device_id;
    const device_relay = req.params.device_relay;
    await db.query("UPDATE device_tb SET device_relay=? WHERE device_id = ?",
        [device_relay, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

route.get('/count/:device_id/:count', async (req, res, next) => {
    console.log('update-count')
    const device_id = req.params.device_id;
    const count = req.params.count;
    await db.query("UPDATE device_tb SET count=? WHERE device_id = ?",
        [count, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

route.get('/countdown/:device_id', async (req, res, next) => {
    console.log('device_id')
    const device_id = req.params.device_id;
    await db.query("UPDATE device_tb SET count= count - 1 WHERE device_id = ?",
        [device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

// route.get('/setcount/:device_id/:count', async (req, res, next) => {
//     console.log('device_id')
//     const device_id = req.params.device_id;
//     const count = req.params.count;
//     await db.query("UPDATE device_tb SET count= count - ? WHERE device_id = ?;UPDATE device_tb SET count_last = ? WHERE device_id = ?;",
//         [count, device_id, count, device_id],
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.send(result);
//             } else {
//                 res.send(result);
//             }
//         });
// });

route.get('/setcount/:device_id/:count', async (req, res, next) => {
    console.log('device_id')
    const device_id = req.params.device_id;
    const count = req.params.count;
    await db.query("UPDATE device_tb SET count= count - ? WHERE device_id = ?",
        [count, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                // res.send(result);
                db.query("UPDATE device_tb SET count_last = ? WHERE device_id = ?",
                    [count, device_id],
                    function (err2, result2, fields2) {
                        if (err2) {
                            console.log(err2);
                            res.send(result2);
                        } else {
                            res.send(result2);
                        }
                    });
            }
        });
});

route.get('/setcount2/:device_id/:count', async (req, res, next) => {
    console.log('device_id')
    const device_id = req.params.device_id;
    const count = req.params.count;
    await db.query("UPDATE device_tb SET count2= count2 - ? WHERE device_id = ?",
        [count, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                // res.send(result);
                db.query("UPDATE device_tb SET count2_last = ? WHERE device_id = ?",
                    [count, device_id],
                    function (err2, result2, fields2) {
                        if (err2) {
                            console.log(err2);
                            res.send(result2);
                        } else {
                            res.send(result2);
                        }
                    });
            }
        });
});


route.get('/setread/:device_id/:readstatus', async (req, res, next) => {
    console.log('device_id');
    const device_id = req.params.device_id;
    const readstatus = req.params.readstatus;
    await db.query("UPDATE device_tb SET readstatus= ? WHERE device_id = ?",
        [readstatus, device_id],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

module.exports = route;