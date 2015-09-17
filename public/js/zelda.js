// Sets the require.js configuration for your application.
require.config({
    baseUrl:'/js',
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
    paths: {

        // Core Libraries
        "modernizr":      "libs/modernizr",
        "html5shiv":      "libs/html5shiv",
        "jquery":         "libs/zepto",
        "underscore":         "libs/lodash",
        "backbone":         "libs/backbone",

        "hammer":         "libs/hammer",
        "less":      "libs/less",

        //plugins require
        "async": "libs/require/async",
        "font": "libs/require/font",
        "image": "libs/require/image",
        "depend": "libs/require/font",
        "goog": "libs/require/image",
        "propertyParser": "libs/require/propertyParser",
        "domReady":       "libs/require/domReady",
        "text": "libs/require/text",


        "pixi": "libs/pixi"

    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {

        "pixi": {
            "exports": "PIXI"
        },

        "underscore": {
            "exports": "_"  //attaches "_" to the window object
        },

        "backbone": {
            "deps": ["underscore", "jquery"],
            "exports" : "Backbone"  //attaches "Backbone" to the window object
        }

    } // end Shim Configuration

});

// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(
    [
        "jquery",
        "pixi",
        "pixi-example",
        "underscore",
        "backbone",
        "modernizr",
        "zelda/routes/GameRouter"
    ],
    function( $, PIXI, Backbone, _ , GameRouter) {
        "use strict";
        var Zelda = {
            Models:[],
            Views:[],
            Collections:[]
        };
        // Instantiates a new Router
        this.router = new GameRouter();
        window.Zelda = Zelda;
        return Zelda;
    });