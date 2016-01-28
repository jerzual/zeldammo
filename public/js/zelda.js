import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Handlebars from 'handlebars';
import Phaser from 'phaser';
import GameRouter from './zelda/routers/GameRouter';
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