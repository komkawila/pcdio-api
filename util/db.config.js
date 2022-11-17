const mysql = require("mysql");
const db = mysql.createConnection({
    host: "dns.pcdservice.info",
    user: "admin",
    password: "gP7Trtg9JukdQwsT",
    database: "pcdserviceio_db",
});

module.exports = db;