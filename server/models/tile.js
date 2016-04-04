module.exports =  (sequelize, DataTypes) => Tile = sequelize.define(
  //table name
    'tile',
    //fields
    {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        texture: DataTypes.STRING,
        type: {
            type: DataTypes.ENUM,
            states: [
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
            Tile.hasOne(models.Tile, {as: 'destination'})
            Zone.hasMany(models.Tile, {as: 'tiles'});
        }
    }
  );
