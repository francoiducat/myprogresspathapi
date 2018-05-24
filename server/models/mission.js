module.exports = (sequelize, DataTypes) => {
    const Mission = sequelize.define('Mission', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Mission.associate = (models) => {
        Mission.hasMany(models.TodoItem, {
            foreignKey: 'missionId',
            as: 'missionItems',
        });
    };

    return Mission;
};