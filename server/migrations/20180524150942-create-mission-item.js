module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('MissionItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            content: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            duration: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            complete: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            start_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            end_date: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            missionId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Missions',
                    key: 'id',
                    as: 'missionId',
                },
            },
        }),
    down: (queryInterface /* , Sequelize */) =>
        queryInterface.dropTable('MissionItems'),
};