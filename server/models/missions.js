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
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    }, {
        underscored:true
    });

    Mission.associate = (models) => {
        Mission.hasMany(models.mission_items, {
            foreignKey: 'missions_id',
            as: 'mission_items',
        });
    };

    return Mission;
};