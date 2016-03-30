var serve = require('koa-static');
var koa = require('koa.io');
var routes = require('koa-route');
var responseTime = require('koa-response-time');
var logger = require('koa-logger');
var compress = require('koa-compress');
var mount = require('koa-mount');
var favicon = require('koa-favicon');
var views = require('koa-views');
var path = require('path');
var fs = require('fs');

var app = koa();

var port = process.env.PORT || 3000;
// Routing
app.use(serve(path.join(__dirname, '/../public')));

app.use(favicon());
app.use(logger());
app.use(responseTime());
app.use(compress());

app.use(views(__dirname + '/views', {extension: 'jade'}));

function *index() {
    yield this.render('index');
};
app.use(mount('/',index));

app.listen(port, function () {
    console.log('Server listening at port %d', port);
});

// Chatroom

// usernames which are currently connected to the chat
var usernames = {};
var numUsers = 0;

// middleware for connect and disconnect
app.io.use(function* userLeft(next) {
    // on connect
    console.log('somebody connected');
    console.log(this.headers)
    yield* next;
    // on disconnect
    if (this.addedUser) {
        delete usernames[this.username];
        --numUsers;

        // echo globally that this client has left
        this.broadcast.emit('user left', {
            username: this.username,
            numUsers: numUsers
        });
    }
});


/**
 * router for socket event
 */

app.io.route('add user', function* (next, username) {
    // we store the username in the socket session for this client
    this.username = username;
    // add the client's username to the global list
    usernames[username] = username;
    ++numUsers;
    this.addedUser = true;
    this.emit('login', {
        numUsers: numUsers
    });

    // echo globally (all clients) that a person has connected
    this.broadcast.emit('user joined', {
        username: this.username,
        numUsers: numUsers
    });
});

// when the client emits 'new message', this listens and executes
app.io.route('new message', function* (next, message) {
    // we tell the client to execute 'new message'
    this.broadcast.emit('new message', {
        username: this.username,
        message: message
    });
});

// when the client emits 'typing', we broadcast it to others
app.io.route('typing', function* () {
    console.log('%s is typing', this.username);
    this.broadcast.emit('typing', {
        username: this.username
    });
});

// when the client emits 'stop typing', we broadcast it to others
app.io.route('stop typing', function* () {
    console.log('%s is stop typing', this.username);
    this.broadcast.emit('stop typing', {
        username: this.username
    });
});