
function findAllMissions(pool) {
    return pool.query('SELECT * FROM missions')
}

function findMissionById(id,pool) {
    return pool.query('SELECT * FROM missions WHERE id = ' + id)
        .then( resMissionId => resMissionId.rows[0])
        .catch( e => console.log(e))

}

function postMission(data,pool) {
    return pool.query('INSERT INTO missions (title, owner, complete, created_date) ' +
        'VALUES ($1::text,$2::text,false,$3::timestamptz) RETURNING id',
        [data.title, data.owner, "2018-06-13 18:22:01+02"])
        .then( resMissionId => resMissionId.rows[0])
        .catch(e => console.log(e));
}


module.exports = {
    findAllMissions:findAllMissions,
    postMission:postMission,
    findMissionById:findMissionById
}