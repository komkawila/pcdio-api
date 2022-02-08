const mysql = require("mysql");
const db = mysql.createConnection({
    host: "dns.komkawila.com",
    user: "komkawila",
    password: "Kkomprwm20_1",
    database: "pcdserviceio_db",
});

module.exports = db;