const { createPool } = require('mysql');
const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database: "fast_food",
    connectionLimit: 10
});

exports.pool = pool;