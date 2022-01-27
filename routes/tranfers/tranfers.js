const express = require('express');
const route = express.Router();

const dayRoute = require('./tranfers.day');
route.use('/day', dayRoute);

const updateRoute = require('./tranfers.update');
route.use('/update', updateRoute);

// const brandRoute = require('./air.brand');
// route.use('/brands', brandRoute);

module.exports = route;