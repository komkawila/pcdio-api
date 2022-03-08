const express = require('express');
const route = express.Router();

const loginRoute = require('./web.login');
route.use('/login', loginRoute);

const deviceRoute = require('./web.device');
route.use('/device', deviceRoute);

module.exports = route;