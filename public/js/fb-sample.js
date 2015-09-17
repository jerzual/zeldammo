// Sets the require.js configuration for your application.
require.config({
  
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
  paths: {

      "facebook" : "http://connect.facebook.net/fr_FR/all.js",
      // Core Libraries
      "jquery":         "libs/zepto",
      "underscore":         "libs/lodash",
      "application":      "fb-sample/application",
      "note":      "fb-sample/note",
      "tdfriendsselector":     "fb-sample/tdfriendsselector",

      //plugins require
      "async": "libs/require/async",
      "font": "libs/require/font",
      "image": "libs/require/image",
      "depend": "libs/require/font",
      "goog": "libs/require/image",
      "propertyParser": "libs/require/propertyParser",
      "domReady":       "libs/require/domReady",
      "text": "libs/require/text",


      //plugins
          "jquery.hammer":  "libs/plugins/jquery.hammer",
          "jquery.lionbars" :"libs/plugins/jquery.lionbars.0.3"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // jQuery plugins
      "jquery-collapse": ["jquery"],
      "bootstrap-dropdown": ["jquery"],
      "bootstrap-tooltip": ["jquery"],

      "underscore": {
          "exports": "_"  //attaches "_" to the window object
      },

      "jquery.hammer" : {
          "deps" : ["jquery", "hammer"]
      },
      "plugins" : ["jquery.hammer"],
      "backbone": {
          "deps": ["underscore", "jquery"],
          "exports" : "Backbone"  //attaches "Backbone" to the window object
      },

      // les plugins backbone dépendent de Backbone.
      "backbone.validateAll": ["backbone"],

      "backbone.layoutManager":{
          "deps": ["backbone","underscore"],
          "exports": "Backbone"  //attaches "Backbone" to the window object
      }

  } // end Shim Configuration
  
});

// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(
    [
        "jquery",
        "application",
        "note",
        "tdfriendselector"
    ],
    function( $ ) {
    "use strict";

    // Instantiates a new Router
    //this.router = new Mobile();
});