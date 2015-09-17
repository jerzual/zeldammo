// GameModel.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone GameModel class object
        var GameModel = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the GameModel attributes
            defaults: {

            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the GameModel class
        return GameModel;

    }

);