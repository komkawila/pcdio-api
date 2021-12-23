const express = require('express');
const cors = require("cors");
const app = express();
const port = 3123;

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

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);