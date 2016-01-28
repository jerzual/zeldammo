// BulletsCollection.js
// -------------
import {Collection} from 'backbone';
import SpriteModel from '../models/SpriteModel';

// Creates a new Backbone Collection class object
export default class BulletsCollection extends Collection{
    constructor(){
        // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
        this.model = SpriteModel
    }

    // Model Constructor
    initialize() {

    }

};
