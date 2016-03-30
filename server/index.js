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
const path = require('path');
const fs = require('fs');

const app = koa();

const io = new IO();

const port = process.env.PORT || 3000;

// Jade templates.
const jade = new Jade({
    viewPath: './server/views',
    pretty: false,
    debug: process.env.NODE_ENV === 'development'
});
app.use(jade.middleware);

// Favicon
app.use(favicon(__dirname + '../public/favicon.ico'));

// Routing
app.use(staticCache(path.join(__dirname, '../public')));

// Index page.
app.use(function* indexRenderer(){
    this.render('index',{title:'ZeldaMMO'}, true);
});

app.listen(port, function appListenerCallback() {
    console.log('Server listening at port %d', port);
});
