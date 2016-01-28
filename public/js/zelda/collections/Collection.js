// Collection.js
// -------------
import {Collection} from 'backbone';
import Model from '../models/Model';

// Creates a new Backbone Model class object
export default class ZeldaCollection extends Collection{
    constructor(){
        // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
        this.model = Model
    }

    // Model Constructor
    initialize() {

    }

};
