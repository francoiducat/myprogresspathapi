const Mission = require('../models').missions;
const missionServices = require('../services/services.js')

const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgres://postgres:postgres@127.0.0.1:5432/missions-dev",
    ssl: false
});

module.exports = {

    list (req, res){
      return missionServices.findAllMissions(pool)
          .then(mission => res.status(201).send(mission))
          .catch(e => res.status(400).send(e))
    },

    retrieve (req, res) {
        return missionServices.findMissionById(req.params.id,pool)
            .then(mission => res.status(201).send(mission))
            .catch(e => res.status(400).send(e))
    },

    create (req, res) {
        const mission = {
            title: req.body.title,
            owner: req.body.owner,
            created_at: req.body.created_at
        }
        return missionServices.createMission(mission,pool)
            .then(missionId => res.status(201).send(missionId))
            .catch(e => res.status(400).send(e))
    },

    createSEQUELIZE (req, res) {
        return Mission
            .create({
                title: req.body.title,
                owner: req.body.owner
            })
            .then(mission => res.status(201).send(mission))
            .catch(e => res.status(400).send(e))
    },

    listSEQUELIZE (req, res) {
        return Mission
            .all()
            .then(mission => {
                res.status(201).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });
    },

    retrieveSEQUELIZE (req, res) {
        return Mission
            .findById(req.params.id)
            .then(mission => {
                res.status(201).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });
    },
}