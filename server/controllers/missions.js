const Mission = require('../models').missions;

module.exports = {
    create(req, res) {
        return Mission
            .create({
                title: req.body.title,
                owner: req.body.owner,
                created_at: req.body.created_at
            })
            .then(mission => {
                console.log("req.body.title : ", req.body.title)
                console.log("req.body.owner : ", req.body.owner)
                res.status(201).send(mission)
            })
            .catch(error => {
                console.log("ERROR req.body.title : ", req.body.title)
                console.log("ERROR req.body.owner : ", req.body.owner)
                res.status(400).send(error)
            });
    },
};