export default (sequelize, DataTypes) => sequelize.define(
    //table name
    'Tile',
    //fields
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        texture: DataTypes.STRING,
        type: {
            type: DataTypes.ENUM,
            values: [
                'destructible',
                'movable',
                'chest',
                'door',
                'hard',
                'trap'
            ]
        },
        isWalkable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isPortal: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isGenerator: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        life: {type: DataTypes.DOUBLE},
        normalMap: {
            type: DataTypes.BLOB
        }
    },
    //options
    {
        associate: (models) => {
            models.Tile.hasOne(models.Tile, {as: 'destination'})
            models.Zone.hasMany(models.Tile, {as: 'tiles'});
        }
    }
  );
