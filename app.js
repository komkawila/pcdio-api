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

const espdeviceRoute = require('./routes/espdevice/espdevice');
app.use('/espdevice', espdeviceRoute);

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

const deviceRoute = require('./routes/device/device');
app.use('/device', deviceRoute);


app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);