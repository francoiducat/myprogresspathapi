const missionsController = require('../controllers').missions
const missionItemsController = require('../controllers').mission_items


module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            message: 'Welcome to the Missions API!',
        })
    });

    // MISSIONS
    app.get('/api/missions', missionsController.list);
    app.get('/api/mission/:id', missionsController.retrieve);
    app.post('/api/missions', missionsController.create);

    // MISSION ITEMS
    app.post('/api/missions/:id/items', missionItemsController.create);


}