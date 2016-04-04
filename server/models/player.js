export default (sequelize, DataTypes) => Player = sequelize.define(
    //name
    'player',
    //fields
    {
    name:{
        type:DataTypes.STRING

    },
    key:{
        type:DataTypes.UUID,
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
            Player.belongsTo(models.Guild);
            Player.hasMany(models.Item);
            Player.belongsTo(models.Instance);
        }
    }
);
