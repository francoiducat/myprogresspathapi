const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgres://postgres:postgres@127.0.0.1:5432/missions-dev",
    ssl: false
});