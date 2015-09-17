
/*

CREATE TABLE friends (
  id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  uid BIGINT UNSIGNED, # Should this be VARCHAR(255) on 32 bit systems?
  created_at DATETIME,
  updated_at DATETIME,
  user_id INTEGER UNSIGNED 
);

*/

exports.friend = function Friend(sequelize, DataTypes) {

};