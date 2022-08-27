const express = require('express');
const route = express.Router();

const statusRoute = require('./espdevice.status');
route.use('/status', statusRoute);

const updateRoute = require('./espdevice.update');
route.use('/update', updateRoute);

const logRoute = require('./espdevice.log');
route.use('/log', logRoute);

const lineRoute = require('./espdevice.line');
route.use('/line', lineRoute);

// const brandRoute = require('./air.brand');
// route.use('/brands', brandRoute);

module.exports = route;