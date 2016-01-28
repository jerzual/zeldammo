
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

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: DataTypes.STRING
    }, {
        associate: function(models) {
            User.hasMany(models.Post);
        }
    });

    return User;
};