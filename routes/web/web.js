const express = require('express');
const route = express.Router();

const loginRoute = require('./web.login');
route.use('/login', dayRoute);

module.exports = route;