import sequelize , {Sequelize, DataTypes} from 'sequelize';
/*

CREATE TABLE shares (
  id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  post_id VARCHAR(255),
  created_at DATETIME,
  updated_at DATETIME,
  user_id INTEGER UNSIGNED 
);

*/
const Player = sequelize.define(
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
export default Player;