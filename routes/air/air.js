const express = require('express');
const route = express.Router();

const typeRoute = require('./air.type');
route.use('/types', typeRoute);

const brandRoute = require('./air.brand');
route.use('/brands', brandRoute);

module.exports = route;