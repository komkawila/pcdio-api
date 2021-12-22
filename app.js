
const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(express.json());

app.use(function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
  })
  
// app.use(express.urlencoded({ extended: false }));
const airRoute = require('./routes/air');
app.use('/air', airRoute);

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));