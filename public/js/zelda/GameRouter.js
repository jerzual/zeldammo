// GameRouter.js
// ----------------
define(["jquery", "backbone", "models/GameModel", "views/GameView", "collections/GameCollections"],

    function($, Backbone, GameModel, GameView, Collection) {

        var GameRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index"

            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                new View();

            }

        });

        // Returns the GameRouter class
        return GameRouter;

    }

);