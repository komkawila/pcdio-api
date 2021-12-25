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

const airRoute = require('./routes/air/air');
app.use('/air', airRoute);

const usersRoute = require('./routes/users/users');
app.use('/users', usersRoute);

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

const datalogRoute = require('./routes/datalog/datalog');
app.use('/datalog', datalogRoute);

const datalog2Route = require('./routes/datalog/datalog');
app.use('/datalog2', datalog2Route);
app.use('/datalog3', datalog2Route);
app.use('/datalog4', datalog2Route);
app.use('/datalog5', datalog2Route);
app.use('/datalog6', datalog2Route);
app.use('/datalog7', datalog2Route);
app.use('/datalog8', datalog2Route);


app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);