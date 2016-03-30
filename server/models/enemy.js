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

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define(
        //model name
        'User',
        //fields
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            facebook_id: DataTypes.STRING,
            twitter_id: DataTypes.STRING,
            google_id: DataTypes.STRING
        },
        //associations and other config
        {
            associate: function (models) {
                User.hasMany(models.Post);
            }
        }
    );

export default Enemy;
