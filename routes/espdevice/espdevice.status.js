const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

// #======================================= GET STATUS DEVICEs ========================================#
route.get('/', async (req, res, next) => {
    await db.query("SELECT * FROM device_tb", function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send(result);
        } else {
            res.send(result);
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
                res.send(result);
            } else {
                res.send(result);
            }
        });
});

route.get('/:user_username/:device_name', async (req, res, next) => {
    console.log('32')
    const user_username = req.params.user_username;
    const device_name = req.params.device_name;
    await db.query("SELECT * FROM device_tb WHERE user_username = ? AND device_name = ?",
        [user_username, device_name],
        function (err, result, fields) {
            if (err) {
                console.log(err);
                res.send(result);
            } else {
                res.send(result[0] == null ? '{}' : result[0]);
            }
        });
});

// route.get('/update-status/:user_username/:device_name/:device_status', async (req, res, next) => {
//     const user_username = req.params.user_username;
//     const device_name = req.params.device_name;
//     const device_status = req.params.device_status;
//     await db.query("UPDATE device_tb SET device_status = ? WHERE user_username = ? AND device_name = ?",
//         [device_status, user_username, device_name],
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.send(result);
//             } else {
//                 res.send(result);
//             }
//         });
// });

// route.get('/update-pulse/:device_id/:pulse/:state_pulse', async (req, res, next) => {
//     const device_id = req.params.device_id;
//     const pulse = req.params.pulse;
//     const state_pulse = req.params.state_pulse;
//     await db.query("UPDATE device_tb SET pulse = ?,state_pulse=? WHERE device_id = ?",
//         [pulse, state_pulse, device_id],
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.send(result);
//             } else {
//                 res.send(result);
//             }
//         });
// });

// route.get('/update-pulse-state/:device_id/:state_pulse', async (req, res, next) => {
//     const device_id = req.params.device_id;
//     const state_pulse = req.params.state_pulse;
//     await db.query("UPDATE device_tb SET state_pulse=? WHERE device_id = ?",
//         [state_pulse, device_id],
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.send(result);
//             } else {
//                 res.send(result);
//             }
//         });
// });

// route.get('/update-relay-state/:device_id/:device_relay', async (req, res, next) => {
//     const device_id = req.params.device_id;
//     const device_relay = req.params.device_relay;
//     await db.query("UPDATE device_tb SET device_relay=? WHERE device_id = ?",
//         [device_relay, device_id],
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.send(result);
//             } else {
//                 res.send(result);
//             }
//         });
// });

// route.get('/update-count/:device_id/:count', async (req, res, next) => {
//     console.log('update-count')
//     const device_id = req.params.device_id;
//     const count = req.params.count;
//     await db.query("UPDATE device_tb SET count=? WHERE device_id = ?",
//         [count, device_id],
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.send(result);
//             } else {
//                 res.send(result);
//             }
//         });
// });

// route.get('/countdown/:device_id', async (req, res, next) => {
//     console.log('device_id')
//     const device_id = req.params.device_id;
//     await db.query("UPDATE device_tb SET count= count - 1 WHERE device_id = ?",
//         [device_id],
//         function (err, result, fields) {
//             if (err) {
//                 console.log(err);
//                 res.send(result);
//             } else {
//                 res.send(result);
//             }
//         });
// });


module.exports = route;