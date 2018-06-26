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
            defaultValue: false,
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

    MissionItem.associate = (models) => {
        MissionItem.belongsTo(models.missions, {
            foreignKey: 'missions_id',
            onDelete: 'CASCADE',
        });
    };

    return MissionItem;
};