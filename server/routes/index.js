const missionsController = require('../controllers').missions;
const services = require('../../services')
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://postgres:postgres@127.0.0.1:5432/missions-dev",
    ssl: false
});

module.exports = (app) => {

    app.get('/api', (req, res) => {
        console.log(req.body)
        res.status(200).send({
            message: 'Welcome to the Missions API!',
        })
    });

    app.get('/api/missions', (req, res) => {
        services.findAllMissions(pool)
            .then(resultQuery => res.send(resultQuery.rows[0]))
            .catch(e => console.log(e));

    });

    app.post('/api/missions', missionsController.create);
};