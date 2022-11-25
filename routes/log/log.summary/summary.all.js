const express = require('express');
const db = require('../../../util/db.config');
const route = express.Router();

// summary user
route.get('/', async (req, res, next) => {
    if (
        Object.keys(req.query).length === 0
    ) {
        var query1 = `SELECT sum(onlinelog_tb.amount) as online_amount FROM onlinelog_tb`;
        var query2 = `SELECT sum(banknotelog_tb.amount) as banknote_amount FROM banknotelog_tb`;
        var query3 = `SELECT sum(coinlog_tb.amount) as coin_amount FROM coinlog_tb`;
        var querycountdevice = `SELECT count(device_id) as countDevice FROM device_tb`; // จำนวนอุปกรณ์ทั้งหมด
    } else {
        const json = {
            err: true, status: false, message: "Not Require {}"
        };
        res.send(json);
        return;
    }

    var online_amount = 0;
    var banknote_amount = 0;
    var countdevice = 0;
    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = parseFloat((result[0].online_amount + 0.0).toFixed(2))
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = parseFloat((result[0].banknote_amount + 0.0).toFixed(2))
        }
    });
    await db.query(querycountdevice, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            countdevice = parseInt((result[0].countDevice | 0))
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    countdevice: countdevice,
                    online_amount: online_amount,
                    banknote_amount: banknote_amount,
                    coin_amount: parseFloat((result[0].coin_amount + 0.0).toFixed(2))
                }
            };
            res.send(json);
        }
    });
});

// summary user
route.get('/user', async (req, res, next) => {
    if (
        typeof req.query.user_username === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require {user_username}"
        };
        res.send(json);
        return;
    }
    var query1 = `SELECT sum(onlinelog_tb.amount) as online_amount FROM onlinelog_tb WHERE onlinelog_tb.user_username = "${req.query.user_username}"`;
    var query2 = `SELECT sum(banknotelog_tb.amount) as banknote_amount FROM banknotelog_tb WHERE banknotelog_tb.user_username = "${req.query.user_username}"`;
    var query3 = `SELECT sum(coinlog_tb.amount) as coin_amount FROM coinlog_tb WHERE coinlog_tb.user_username = "${req.query.user_username}"`;
    var querycountdevice = `SELECT count(device_id) as countDevice FROM device_tb WHERE user_username = "${req.query.user_username}"`; // จำนวนอุปกรณ์ทั้งหมด

    var online_amount = 0;
    var banknote_amount = 0;
    var countdevice = 0;
    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = parseFloat((result[0].online_amount + 0.0).toFixed(2))
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = parseFloat((result[0].banknote_amount + 0.0).toFixed(2))
        }
    });
    await db.query(querycountdevice, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            countdevice = parseInt((result[0].countDevice | 0))
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    user: req.query.user_username,
                    countdevice: countdevice,
                    online_amount: online_amount,
                    banknote_amount: banknote_amount,
                    coin_amount: parseFloat((result[0].coin_amount + 0.0).toFixed(2))
                }
            };
            res.send(json);
        }
    });
});

// summary device
route.get('/device', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require {deviceid}"
        };
        res.send(json);
        return;
    }
    var query1 = `SELECT sum(onlinelog_tb.amount) as online_amount FROM onlinelog_tb WHERE onlinelog_tb.deviceid = "${req.query.deviceid}"`;
    var query2 = `SELECT sum(banknotelog_tb.amount) as banknote_amount FROM banknotelog_tb WHERE banknotelog_tb.deviceid = "${req.query.deviceid}"`;
    var query3 = `SELECT sum(coinlog_tb.amount) as coin_amount FROM coinlog_tb WHERE coinlog_tb.deviceid = "${req.query.deviceid}"`;
    var online_amount = 0;
    var banknote_amount = 0;

    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = parseFloat((result[0].online_amount).toFixed(2))
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = parseFloat((result[0].banknote_amount).toFixed(2))
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    deviceid: parseInt(req.query.deviceid),
                    online_amount: online_amount,
                    banknote_amount: banknote_amount,
                    coin_amount: parseFloat((result[0].coin_amount).toFixed(2))
                }
            };
            res.send(json);
        }
    });
});

route.get('/day/online', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {deviceid}"
        };
        res.send(json);
        return;
    }
    if (
        typeof req.body.date === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require Body {date}"
        };
        res.send(json);
        return;
    }

    var query = `SELECT * FROM onlinelog_tb WHERE deviceid = ${req.query.deviceid} and DATE(createAt) = DATE("${req.body.date}") ORDER BY createAt ASC`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: result
            };
            res.send(json);
        }
    });
});

route.get('/day/coin', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {deviceid}"
        };
        res.send(json);
        return;
    }
    if (
        typeof req.body.date === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require Body {date}"
        };
        res.send(json);
        return;
    }

    var query = `SELECT * FROM coinlog_tb WHERE deviceid = ${req.query.deviceid} and DATE(createAt) = DATE("${req.body.date}") ORDER BY createAt ASC`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: result
            };
            res.send(json);
        }
    });
});

route.get('/day/banknote', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {deviceid}"
        };
        res.send(json);
        return;
    }
    if (
        typeof req.body.date === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require Body {date}"
        };
        res.send(json);
        return;
    }

    var query = `SELECT * FROM banknotelog_tb WHERE deviceid = ${req.query.deviceid} and DATE(createAt) = DATE("${req.body.date}") ORDER BY createAt ASC`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: result
            };
            res.send(json);
        }
    });
});

route.get('/month/online', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {deviceid}"
        };
        res.send(json);
        return;
    }
    if (
        typeof req.body.year === "undefined" || typeof req.body.month === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require Body {year, month}"
        };
        res.send(json);
        return;
    }

    var query = `SELECT * FROM onlinelog_tb WHERE deviceid = ${req.query.deviceid} and YEAR(createAt) = ${req.body.year} and MONTH(createAt) = ${req.body.month} ORDER BY createAt ASC`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: result
            };
            res.send(json);
        }
    });
});

route.get('/month/coin', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {deviceid}"
        };
        res.send(json);
        return;
    }
    if (
        typeof req.body.year === "undefined" || typeof req.body.month === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require Body {year, month}"
        };
        res.send(json);
        return;
    }

    var query = `SELECT * FROM coinlog_tb WHERE deviceid = ${req.query.deviceid} and YEAR(createAt) = ${req.body.year} and MONTH(createAt) = ${req.body.month} ORDER BY createAt ASC`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: result
            };
            res.send(json);
        }
    });
});

route.get('/month/banknote', async (req, res, next) => {
    if (
        typeof req.query.deviceid === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {deviceid}"
        };
        res.send(json);
        return;
    }
    if (
        typeof req.body.year === "undefined" || typeof req.body.month === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require Body {year, month}"
        };
        res.send(json);
        return;
    }

    var query = `SELECT * FROM banknotelog_tb WHERE deviceid = ${req.query.deviceid} and YEAR(createAt) = ${req.body.year} and MONTH(createAt) = ${req.body.month} ORDER BY createAt ASC`;

    await db.query(query, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: result
            };
            res.send(json);
        }
    });
});

route.get('/allsummarymonth', async (req, res, next) => {
    var query1 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as online_amount FROM onlinelog_tb GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;
    var query2 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as banknote_amount FROM banknotelog_tb GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;
    var query3 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as coin_amount FROM coinlog_tb GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;

    var online_amount = 0;
    var banknote_amount = 0;
    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = result
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = result
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    online: online_amount,
                    banknote: banknote_amount,
                    coin: result
                }
            };
            res.send(json);
        }
    });
});



route.get('/allsummarymonth/user', async (req, res, next) => {
    if (
        typeof req.query.uname === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {uname}"
        };
        res.send(json);
        return;
    }
    var query1 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as online_amount FROM onlinelog_tb WHERE user_username='${req.query.uname}' GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;
    var query2 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as banknote_amount FROM banknotelog_tb WHERE user_username='${req.query.uname}' GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;
    var query3 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as coin_amount FROM coinlog_tb WHERE user_username='${req.query.uname}' GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;

    var online_amount = 0;
    var banknote_amount = 0;
    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = result
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = result
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    online: online_amount,
                    banknote: banknote_amount,
                    coin: result
                }
            };
            res.send(json);
        }
    });
});


route.get('/allsummarymonth/device', async (req, res, next) => {
    if (
        typeof req.query.did === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {did}"
        };
        res.send(json);
        return;
    }
    var query1 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as online_amount FROM onlinelog_tb WHERE deviceid='${req.query.did}' GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;
    var query2 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as banknote_amount FROM banknotelog_tb WHERE deviceid='${req.query.did}' GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;
    var query3 = `SELECT date_format(createAt, '%Y-%m') as datemonth, SUM(amount) as coin_amount FROM coinlog_tb WHERE deviceid='${req.query.did}' GROUP BY date_format(createAt, '%Y-%m') ORDER BY createAt ASC`;

    var online_amount = 0;
    var banknote_amount = 0;
    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = result
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = result
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    online: online_amount,
                    banknote: banknote_amount,
                    coin: result
                }
            };
            res.send(json);
        }
    });
});


route.get('/allsummaryday/user', async (req, res, next) => {
    if (
        typeof req.query.uname === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {uname}"
        };
        res.send(json);
        return;
    }
    var query1 = `SELECT date_format(createAt, '%Y-%m-%d') as datemonth, SUM(amount) as online_amount FROM onlinelog_tb WHERE user_username='${req.query.uname}' GROUP BY date_format(createAt, '%Y-%m-%d') ORDER BY createAt ASC`;
    var query2 = `SELECT date_format(createAt, '%Y-%m-%d') as datemonth, SUM(amount) as banknote_amount FROM banknotelog_tb WHERE user_username='${req.query.uname}' GROUP BY date_format(createAt, '%Y-%m-%d') ORDER BY createAt ASC`;
    var query3 = `SELECT date_format(createAt, '%Y-%m-%d') as datemonth, SUM(amount) as coin_amount FROM coinlog_tb WHERE user_username='${req.query.uname}' GROUP BY date_format(createAt, '%Y-%m-%d') ORDER BY createAt ASC`;

    var online_amount = 0;
    var banknote_amount = 0;
    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = result
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = result
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    online: online_amount,
                    banknote: banknote_amount,
                    coin: result
                }
            };
            res.send(json);
        }
    });
});

route.get('/allsummaryday/device', async (req, res, next) => {
    if (
        typeof req.query.did === "undefined"
    ) {
        const json = {
            err: true, status: false, message: "Require param {did}"
        };
        res.send(json);
        return;
    }
    var query1 = `SELECT date_format(createAt, '%Y-%m-%d') as datemonth, SUM(amount) as online_amount FROM onlinelog_tb WHERE deviceid='${req.query.did}' GROUP BY date_format(createAt, '%Y-%m-%d') ORDER BY createAt ASC`;
    var query2 = `SELECT date_format(createAt, '%Y-%m-%d') as datemonth, SUM(amount) as banknote_amount FROM banknotelog_tb WHERE deviceid='${req.query.did}' GROUP BY date_format(createAt, '%Y-%m-%d') ORDER BY createAt ASC`;
    var query3 = `SELECT date_format(createAt, '%Y-%m-%d') as datemonth, SUM(amount) as coin_amount FROM coinlog_tb WHERE deviceid='${req.query.did}' GROUP BY date_format(createAt, '%Y-%m-%d') ORDER BY createAt ASC`;

    var online_amount = 0;
    var banknote_amount = 0;
    await db.query(query1, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            online_amount = result
        }
    });
    await db.query(query2, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            banknote_amount = result
        }
    });
    await db.query(query3, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, status: false, message: err });
        } else {
            const json = {
                err: false, status: true, message: {
                    online: online_amount,
                    banknote: banknote_amount,
                    coin: result
                }
            };
            res.send(json);
        }
    });
});
module.exports = route;
