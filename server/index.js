const staticCache = require('koa-static-cache');
const koa = require('koa');
const IO = require('koa-socket');
const Jade = require('koa-jade');
const routes = require('koa-route');
const responseTime = require('koa-response-time');
const logger = require('koa-logger');
const compress = require('koa-compress');
const mount = require('koa-mount');
const favicon = require('koa-favicon');
const passport = require('koa-passport')

const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const db = require('./models');
const auth = require('./routes/auth');

const app = koa();

const io = new IO();

const port = process.env.PORT || 3000;

// Jade templates.
const jade = new Jade({
    viewPath: __dirname + '/views',
    pretty: false,
    debug: process.env.NODE_ENV === 'development'
});
app.use(jade.middleware);

// Favicon
app.use(favicon(__dirname + '/../public/favicon.ico'));

// Routing
app.use(staticCache(path.join(__dirname, '/../public')));
app.use(passport.initialize())
app.use(passport.session())

// Index page.
app.use(routes.get('/',function* indexRenderer(next){
  yield next;
  //if(this.path !== '/') return;
  this.render('index',{title:'ZeldaMMO'}, true);
}));

app.listen(port, function appListenerCallback() {
    console.log('Server listening at port %d', port);
});

module.exports = app;
