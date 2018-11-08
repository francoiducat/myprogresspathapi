const db = require('../models/index');
const missionServices = require('../services/services.js')

const { Pool } = require("pg")

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false
});

module.exports = {

    list (req, res){
      return missionServices.findAllMissions(pool)
          .then(missions => res.status(200).send(missions))
          .catch(e => res.status(400).send(e))
    },

    retrieve (req, res) {
        return missionServices.findMissionById(req.params.id,pool)
            .then(mission => res.status(200).send(mission))
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
        return db.missions
            .create({
                title: req.body.title,
                owner: req.body.owner
            })
            .then(mission => res.status(201).send(mission))
            .catch(e => res.status(400).send(e))
    },

    listSEQUELIZE (req, res) {
        return db.missions
            .all()
            .then(mission => {
                res.status(200).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });
    },

    retrieveSEQUELIZE (req, res) {
        return db.missions
            .findById(req.params.id)
            .then(mission => {
                res.status(200).send(mission)
            })
            .catch(error => {
                res.status(400).send(error)
            });
    },
}