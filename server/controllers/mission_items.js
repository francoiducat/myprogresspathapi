const MissionItem = require('../models').mission_items;

module.exports = {
    create (req, res) {
        return MissionItem
            .create({
                content: req.body.content,
                missions_id:req.params.id,
                duration:req.body.duration,
                start_Date:req.body.start_date,
                end_date:req.body.end_date
            })
            .then(missionItem => res.status(201).send(missionItem))
            .catch(error => res.send(error))
    }
}