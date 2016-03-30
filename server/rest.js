var Restifier = require( 'koa-sequelize-restifier' );
var app = require( 'koa' )();
var router = require( 'koa-router' )();
// Sequelize models :
var Player = require( './models/Player' );
var Message = require( './models/Message' ) ;
var restifier = new Restifier();

restifier.restify( router, Player );
// Maps the following urls
//   GET    /jobs
//   POST   /jobs
//   GET    /jobs/:id
//   PATCH  /jobs/:id
//   DELETE /jobs/:id
restifier.restify( router, Message );

app.use( router.routes() )

app.listen( 8888, function(){
    console.log( 'App is listening' )
});