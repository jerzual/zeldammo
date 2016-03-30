// ItemsView.js
// -------
import $ from 'jquery';

import Backbone from 'backbone';
import Item from '../models/ItemModel';
import itemsTemplate from '../templates/items.hbs';

export default class ItemsView extends Backbone.View{
    constructor(){
        super(options);
        // The DOM Element associated with this view
        this.el = ".example";
        this.template = itemsTemplate();
    }

    // View constructor
    initialize() {

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

};

