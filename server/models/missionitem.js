module.exports = (sequelize, DataTypes) => {
    const MissionItem = sequelize.define('MissionItem', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        start_date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        end_date: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    MissionItem.associate = (models) => {
        MissionItem.belongsTo(models.Mission, {
            foreignKey: 'missionId',
            onDelete: 'CASCADE',
        });
    };

    return MissionItem;
};