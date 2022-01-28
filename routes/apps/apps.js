const express = require('express');
const route = express.Router();

const updateRoute = require('./apps.update');
route.use('/update', updateRoute);

module.exports = route;