// Missions  //
function findAllMissions(pool) {
    return pool.query('SELECT * FROM missions')
}

function findMissionById(id,pool) {
    return pool.query('SELECT * FROM missions WHERE id = ' + id)
        .then( resMissionId => resMissionId.rows[0])
        .catch( e => console.log(e))

}

function createMission(mission,pool) {
    return pool.query('INSERT INTO missions (title, owner, complete, created_at) ' +
        'VALUES ($1::text,$2::text,false,$3::timestamptz) RETURNING id',
        [mission.title, mission.owner, mission.created_at])
        .then( resMissionId => resMissionId.rows[0])
        .catch(e => console.log(e))
}
// End Of Missions  //


// Mission Items //
function createMissionItem(missionItem,pool) {
    return pool.query('INSERT INTO mission_items (content,duration,complete,start_date,end_date,created_at,mission_id)' +
        'VALUES ($1::text,$2::integer,false,$3::timestamptz,$4::timestamptz,$5::timestamptz,$6::integer) RETURNING id',
        [missionItem.content,missionItem.duration,missionItem.start_date,missionItem.end_date,missionItem.created_at,missionItem.mission_id])
        .then(resMissionItemId => resMissionItemId.rows[0].id)
        .catch(e => console.log(e))
}


function findAllMissionItemsByMissionId(id, pool) {
    return pool.query('SELECT * FROM mission_items WHERE mission_id = ' + id)
        .then(resMissionItems => resMissionItems.rows)
        .catch(e => console.log(e))
}

function retrieveMissionItemById(id, pool) {
    return pool.query('SELECT * FROM mission_items where id = ' + id)
        .then(resMissionItems => resMissionItems.rows[0])
        .catch(e => console.log(e))
}
// End Of Missions Items //

module.exports = {
    findAllMissions,
    createMission,
    findMissionById,
    createMissionItem,
    findAllMissionItemsByMissionId,
    retrieveMissionItemById
}