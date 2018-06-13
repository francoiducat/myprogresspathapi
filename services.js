
function findAllMissions(pool) {
    return pool.query('SELECT * FROM "Missions"')

}

module.exports = {
    findAllMissions:findAllMissions
}