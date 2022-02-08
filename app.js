// Header
const express = require('express');
const cors = require("cors");
const config = require('./util/config');
const app = express();
const port = config.PORT;

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(express.json());

const usersRoute = require('./routes/users/users');
app.use('/users', usersRoute);

const usersRoute2 = require('./routes/users/users');
app.use('/users4', usersRoute2);

const espdeviceRoute = require('./routes/espdevice/espdevice');
app.use('/espdevice', espdeviceRoute);

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

const deviceRoute = require('./routes/device/device');
app.use('/device', deviceRoute);

const tranfersRoute = require('./routes/tranfers/tranfers');
app.use('/tranfers', tranfersRoute);

const appsRoute = require('./routes/apps/apps');
app.use('/apps', appsRoute);


app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);