var Seed = require('seed');
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

exports.user = Seed.Model.extend('user', {
    schema: new Seed.Schema({
        'name': String
    })
});
{/*
    return{
    hasMany:function(){
    //init relationships

        return array("shares", "messages", "friends")
    );

    public function profileUrl() 
    {
        return "http://www.facebook.com/profile.php?id=" . $this->uid; 
    }

    public function imageUrl()
    {
        return "https://graph.facebook.com/" . $this->uid . "/picture?type=square";  
    }*/
}