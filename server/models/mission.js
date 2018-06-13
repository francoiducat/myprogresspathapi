module.exports = (sequelize, DataTypes) => {
    const Mission = sequelize.define('Mission', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    });

    Mission.associate = (models) => {
        Mission.hasMany(models.MissionItem, {
            foreignKey: 'missionId',
            as: 'missionItems',
        });
    };

    return Mission;
};