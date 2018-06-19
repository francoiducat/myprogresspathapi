module.exports = (sequelize, DataTypes) => {
    const MissionItem = sequelize.define('mission_items', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        complete: {
            type: DataTypes.BOOLEAN,
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
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    MissionItem.associate = (models) => {
        MissionItem.belongsTo(models.missions, {
            foreignKey: 'mission_id',
            onDelete: 'CASCADE',
        });
    };

    return MissionItem;
};