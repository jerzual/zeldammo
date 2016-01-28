// GameView.js
// -------
// GameView.js
// -------
import $ from 'jquery';

import Backbone from 'backbone';
import Model from '../models/Model';
import template from 'text!templates/heading.html';

export default class GameView extends Backbone.View{

    constructor(){

        // The DOM Element associated with this view
        this.el = ".example";
    }

    // View constructor
    initialize(){

        // Calls the view's render method
        this.render();

    }

    // View Event Handlers
    events() {

    }

    // Renders the view's template to the UI
    render() {

        // Setting the view's template property using the Underscore template method
        this.template = _.template(template, {});

        // Dynamically updates the UI with the view's template
        this.$el.html(this.template);

        // Maintains chainability
        return this;

    }

}


export default GameView;