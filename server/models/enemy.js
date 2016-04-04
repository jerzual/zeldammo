/*

 CREATE TABLE users (
 id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 uid BIGINT UNSIGNED, # Should this be VARCHAR(255) on 32 bit systems?
 name VARCHAR(255),
 oauth_token VARCHAR(255),
 created_at DATETIME,
 updated_at DATETIME
 );

 */
const Enemy = sequelize.define(
  //model name
   'enemy',
   //fields
    {
        uuid:{
            type:Sequelize.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
        },
        name: DataTypes.STRING
    },
     {
        associate: function(models) {
            Enemy.belongsTo(models.Tile);
        }
      }
    );

    export default (sequelize, DataTypes) => Enemy;
