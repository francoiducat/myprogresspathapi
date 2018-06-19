module.exports = (sequelize, DataTypes) => {
    const Mission = sequelize.define('missions', {
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
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        }

    });

    Mission.associate = (models) => {
        Mission.hasMany(models.MissionItem, {
            foreignKey: 'mission_id',
            as: 'mission_items',
        });
    };

    return Mission;
};