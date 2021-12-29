const express = require('express');
const route = express.Router();

const statusRoute = require('./espdevice.status');
route.use('/status', statusRoute);

// const brandRoute = require('./air.brand');
// route.use('/brands', brandRoute);

module.exports = route;