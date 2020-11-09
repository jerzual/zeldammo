
var restify = require('restify');
var epilogue = require('epilogue');
var Sequelize = require('sequelize');
//var app = require( 'koa' )();
//var router = require( 'koa-router' )();
// Sequelize models :
//var models = require( './models/' ).initialize();

// Define your models
var database = new Sequelize(':memory:', 'zeldammo', null,{dialect:'sqlite'});

var User = database.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

// Initialize server
var server, app;


app = server = restify.createServer()
//app.use(restify.queryParser());
//app.use(restify.bodyParser());


// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: database
});

// Create REST resource
var userResource = epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id']
});

// Create database and listen
database
  .sync({ force: true })
  .then(function() {
    server.listen(function() {
      var host = server.address().address,
          port = server.address().port;

      console.log('listening at http://%s:%s', host, port);
    });
  });

  module.exports = app;
