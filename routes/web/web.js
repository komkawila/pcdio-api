const express = require('express');
const route = express.Router();

const loginRoute = require('./web.login');
route.use('/login', loginRoute);

const deviceRoute = require('./web.device');
route.use('/device', deviceRoute);

const deviceeditRoute = require('./web.deviceedit');
route.use('/deviceedit', deviceeditRoute);

const userRoute = require('./web.user');
route.use('/user', userRoute);

module.exports = route;