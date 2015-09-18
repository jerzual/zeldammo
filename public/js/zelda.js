var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var Handlebars = require('handlebars');
var Phaser = require('phaser');
var GameRouter = require('./zelda/routers/GameRouter');
Backbone.$ = $;


(function( $, Phaser, Backbone, GameRouter) {
        "use strict";
        var Zelda = {
            Models:[],
            Views:[],
            Collections:[]
        };
        // Instantiates a new Router
        this.router = new GameRouter();
        Backbone.history.start();
        window.Zelda = Zelda;
        return Zelda;
})($,  Phaser, Backbone, GameRouter);