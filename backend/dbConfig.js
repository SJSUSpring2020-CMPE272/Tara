// const mysql = require('mysql');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || "localhost";

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || "root";

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || "rootroot";

// Get the Password for DB from Environment or use default
const port = process.env.DB_PORT || "3306";

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || "tara";

module.exports = { user, password, host, database };
