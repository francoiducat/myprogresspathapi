const db = require('../models/index');
const missionServices = require('../services/services.js')
const { Pool } = require("pg")

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false
});

module.exports = {
    createSEQUELIZE (req, res) {
        return db.mission_items
            .create({
                content: req.body.content,
                duration: req.body.duration,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                created_at: req.body.created_at,
                mission_id: req.params.id
            })
            .then(missionItemId => res.status(201).send(missionItemId))
            .catch(e => res.send(e))
    },
    create (req, res) {
        const missionItem = {
            content: req.body.content,
            duration: req.body.duration,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            created_at: req.body.created_at,
            mission_id: req.params.id
        }
        return missionServices.createMissionItem(missionItem, pool)
            .then(missionItemId => res.status(201).send(missionItemId))
            .catch(e => res.send(e))
    },
    list (req, res) {
        return missionServices.findAllMissionItemsByMissionId(req.params.id, pool)
            .then(missionItems => res.status(201).send(missionItems))
            .catch(e => res.status(400).send(e))
    },
    retrieve (req, res) {
        return missionServices.retrieveMissionItemById(req.params.id, pool)
            .then(missionItem => res.status(201).send(missionItem))
            .catch(e => res.status(400).send(e))
    }

}