//

export default (sequelize, DataTypes) => sequelize.define(
    //model name
    'Zone',
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: DataTypes.STRING
    },
    {
        associate: (models) => {
            models.Zone.hasMany(models.User);
            models.Zone.hasMany(models.Tile, {as: 'tiles'});
        }
    }
);
