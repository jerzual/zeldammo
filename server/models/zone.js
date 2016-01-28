//
export default function(sequelize, DataTypes) {
    const Zone = sequelize.define('Zone', {
        name: DataTypes.STRING
    }, {
        associate: (models) => {
            Zone.hasMany(models.User);
        }
    });

    return Zone;
};