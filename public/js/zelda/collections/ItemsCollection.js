// Collection.js
// -------------
import {Collection} from 'backbone';
import ItemModel from '../models/ItemModel';

// Creates a new Backbone Model class object
export default class ItemCollection extends Collection{
    constructor(){
        // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
        this.model = ItemModel
    }

    // Model Constructor
    initialize() {

    }

};
