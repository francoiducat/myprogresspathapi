const Mission = require('../models').missions;

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
    }

}