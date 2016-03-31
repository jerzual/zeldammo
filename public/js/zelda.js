import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'lodash';
import Handlebars from 'handlebars';
import PIXI from 'pixi.js';
import IO from 'socket.io-client';
import GameRouter from './zelda/routers/GameRouter';
Backbone.$ = $;
Backbone._ = _;


(function( $, PIXI, Backbone, GameRouter) {
        "use strict";
        const Zelda = {
            Models:[],
            Views:[],
            Collections:[]
        };
        // Instantiates a new Router
        Zelda.router = new GameRouter();
        //already done in GameRouter
        //Backbone.history.start();
        window.Zelda = Zelda;
        return Zelda;
})($,  PIXI, Backbone, GameRouter);