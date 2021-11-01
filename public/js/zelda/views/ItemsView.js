// ItemsView.js
// -------
import $ from 'jquery';

import Backbone from 'backbone';
import _ from 'lodash';
import Item from '../models/ItemModel';
import ItemCollection from '../collections/ItemCollection';

export default class ItemsView extends Backbone.View{
    constructor(options){
        super(options);
        // The DOM Element associated with this view
        this.el = ".example";
        this.template = itemsTemplate();
    }

    // View constructor
    initialize() {

        this.collection = new ItemCollection();
        // Calls the view's render method
        this.render();

    }

    // View Event Handlers
    events() {
      return {
        'click .item':'itemSelect',
        'click .close':'viewClose'
      };
    }

    // Renders the view's template to the UI
    render() {

        // Maintains chainability
        return `<div id="items">
    <ul id="usables"></ul>
    <ul id="eternal"></ul>
</div>`;

    }

}
