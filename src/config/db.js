const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: "treguas550",
    host: "localhost",
    port: 5432,
    database: "trestoredb"
})