export default (sequelize, DataTypes) => sequelize.define(
    //name
    'player',
    //fields
    {
        name:{
            type:DataTypes.STRING

        },
        uuid:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false
        },
        token:{

            type:DataTypes.STRING
        },
        login:{

            type:DataTypes.STRING
        }
    },
//options
    {
        associate: function(models) {
            models.Player.belongsTo(models.Guild);
            models.Player.hasMany(models.Item);
            models.Player.belongsTo(models.Instance);
        }
    }
);
