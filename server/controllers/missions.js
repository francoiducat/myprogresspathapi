const Mission = require('../models').Mission;

module.exports = {
    create(req, res) {
        return Mission
            .create({
                title: req.body.title,
            })
            .then(mission => {
                console.log("req.body.title : ", req.body.title)
                res.status(201).send(mission)
            })
            .catch(error => {
                console.log("req.body.title : ", req.body.title)
                res.status(400).send(error)
            });
    },
};