module.exports = (sequelize, DataTypes) => {
    const mission_items = sequelize.define('mission_items', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.DECIMAL,
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

    mission_items.associate = (models) => {
        mission_items.belongsTo(models.missions)
    };

    return mission_items;
};