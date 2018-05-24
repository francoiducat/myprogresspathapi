module.exports = (sequelize, DataTypes) => {
    const MissionItem = sequelize.define('MissionItem', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
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