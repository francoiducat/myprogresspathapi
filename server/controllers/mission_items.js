const db = require('../models/index');
const missionServices = require('../services/services.js')
const { Pool } = require("pg")

const pool = new Pool({
    connectionString: "postgres://postgres:postgres@127.0.0.1:5432/missions-dev",
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
    }
}