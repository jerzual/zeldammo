import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Handlebars from 'handlebars';
import PIXI from 'pixi.js';
import GameRouter from './zelda/routers/GameRouter';
Backbone.$ = $;


(function( $, PIXI, Backbone, GameRouter) {
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
})($,  PIXI, Backbone, GameRouter);