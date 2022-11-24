const express = require('express');
const route = express.Router();

const banknoteRoute = require('./log.banknote');
route.use('/banknote', banknoteRoute);

const onlineRoute = require('./log.online');
route.use('/online', onlineRoute);

const coinRoute = require('./log.coin');
route.use('/coin', coinRoute);

const selectRoute = require('./log.select');
route.use('/select', selectRoute);

const summaryRoute = require('./log.summary/summary');
route.use('/summary', summaryRoute);

module.exports = route;