//Express and its middlewares
var express = require('express');
var session = require('express-session')
var errorHandler = require('errorhandler');
var favicon = require('serve-favicon');
var multer = require('multer');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var cookieParser = require('cookie-parser');

var log4js = require('log4js');
//node.js core dependencies
var http = require('http');
var fs = require('fs');
var path = require('path');
//internal dependencies
var models = require('./server/models');

var logger = log4js.getLogger();
logger.setLevel('INFO');

log4js.replaceConsole(logger);


logger.info('Initializing Express...');
var app = express();

app.use(log4js.connectLogger(logger, { level: log4js.levels.DEBUG }));
// all environments
app.set('port', process.env.PORT ||5000);
app.set('views', __dirname + '/src/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.png'));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
//app.use(cookieParser('your secret here'));
app.use(session({resave:true,saveUninitialized:true,secret:'zeldaisagirl'}));
//app.use(app.router);

//static resources
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

/**
 * Index of the site, main entry point
 */
app.get('/',
    function(req, res) {
        res.render('index',{title:'Zelda'});
    }
);
/**
 * Specific app routes.
 */
app.get('/auth',require('./server/routes/auth'));

var server = http.createServer(app).listen(app.get('port'), function(){
    logger.info('Express server listening on port ' + app.get('port'))
});