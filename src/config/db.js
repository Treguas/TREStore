const { Pool } = require("pg")

module.exports = new Pool({
    user: 'Treguas',
    password: "",
    host: "localhost",
    port: 5432,
    database: "trestoredb"
})