module.exports = (sequelize, DataTypes) => {
    const missions = sequelize.define('missions', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        underscored:true
    });

    missions.associate = (models) => {
        missions.hasMany(models.mission_items);
    };

    return missions;
};