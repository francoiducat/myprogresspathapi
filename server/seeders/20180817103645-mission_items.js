'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "mission_items",
            [
                {
                    id: 1,
                    content: "mission-item-1",
                    duration: 1.0,
                    complete: true,
                    start_date: "NOW()",
                    end_date: "NOW()",
                    created_at: "NOW()",
                    updated_at: "NOW()",
                    mission_id: 1
                },
                {
                    id: 2,
                    content: "mission-item-2",
                    duration: 2.5,
                    complete: true,
                    start_date: "NOW()",
                    end_date: "NOW()",
                    created_at: "NOW()",
                    updated_at: "NOW()",
                    mission_id: 1
                },
                {
                    id: 3,
                    content: "mission-item-3",
                    duration: 0.5,
                    complete: false,
                    start_date: "NOW()",
                    end_date: "NOW()",
                    created_at: "NOW()",
                    updated_at: "NOW()",
                    mission_id: 1
                }
            ]
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("mission_items", null, {})
    }
}