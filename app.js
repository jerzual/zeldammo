var express = require('express')
    , models = require('./src/models')
    , log4js = require('log4js')
    , http = require('http')
    , fs = require('fs')
    , path = require('path');

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
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
//less to css automatic compilatin
app.use(require('less-middleware')({ src:__dirname + '/public' }));
//static resources
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
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
 * Partials loaded via requests
 */
app.get('/partial/:name',
//partials for angular
    function(req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    }
);
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'))
});