
import * as PIXI from 'pixi.js'
import IO from 'socket.io-client';


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