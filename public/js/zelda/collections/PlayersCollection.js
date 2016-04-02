// PlayerCollection.js
// -------------
import {Collection} from 'backbone';
import PlayerModel from '../models/PlayerModel';

// Creates a new Backbone Collection class object
export default class PlayerCollection extends Collection{
    constructor(){
        // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
        this.model = PlayerModel;
    }

    // Model Constructor
    initialize() {

    }

}
