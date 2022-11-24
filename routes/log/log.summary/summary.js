const express = require('express');
const route = express.Router();

const allRoute = require('./summary.all');
route.use('/all', allRoute);

const banknoteRoute = require('./summary.banknote');
route.use('/banknote', banknoteRoute);

const onlineRoute = require('./summary.online');
route.use('/online', onlineRoute);

const coinRoute = require('./summary.coin');
route.use('/coin', coinRoute);

module.exports = route;