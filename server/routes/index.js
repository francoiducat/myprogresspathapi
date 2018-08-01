const missionsController = require('../controllers').missions
const missionItemsController = require('../controllers').mission_items


module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            message: 'Welcome to the Missions API!',
        })
    });

    app.get('/api/missions', missionsController.list);
    app.get('/api/missions/:id', missionsController.retrieve);
    app.get('/api/missionbyid/:id', missionsController.findMissionById);

    app.post('/api/missions', missionsController.create);
    app.post('/api/missions/:id/items', missionItemsController.create);


    /*
    app.get('/api/missions', (req, res) => {

        services.findAllMissions(pool)
            .then(resultQuery => res.send(resultQuery.rows))
            .catch(e => console.log(e));
    })

    app.post('/api/missions', (req, res) => {
        services.postMission(req.body, pool)
            .then(resultQuery => res.send(resultQuery))
            .catch(e => console.log(e));
    })
    */

}