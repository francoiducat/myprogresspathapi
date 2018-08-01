const Mission = require('../models').missions;
const missionServices = require('../services/services.js')

const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgres://postgres:postgres@127.0.0.1:5432/missions-dev",
    ssl: false
});

module.exports = {
    create (req, res) {
        return Mission
            .create({
                title: req.body.title,
                owner: req.body.owner
            })
            .then(mission => {
                res.status(201).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });
    },

    list (req, res) {
        return Mission
            .all()
            .then(mission => {
                res.status(201).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });
    },

    retrieve (req, res) {
        return Mission
            .findById(req.params.id)
            .then(mission => {
                res.status(201).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });
    },

    findMissionById (req, res) {
        return missionServices.findMissionById(req.params.id,pool)
            .then(mission => {
                res.status(201).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });

    }
}