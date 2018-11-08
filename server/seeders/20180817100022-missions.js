'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "missions",
            [
                {
                    id: 1,
                    title: "mission-1",
                    owner: "Francois",
                    complete: true,
                    created_at: "NOW()",
                    updated_at: "NOW()"
                },
                {
                    id: 2,
                    title: "mission-2",
                    owner: "John",
                    complete:true,
                    created_at: "NOW()",
                    updated_at: "NOW()"
                },
                {
                    id: 3,
                    title: "mission-3",
                    owner: "Roger",
                    complete:false,
                    created_at: "NOW()",
                    updated_at: "NOW()"
                }
            ]
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("missions", null, {})
    }
};
