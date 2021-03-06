// GameCollection.js
// -------------
import {Collection} from 'backbone';
import GameModel from '../models/GameModel';
import TileModel from '../models/TileModel';

// Creates a new Backbone Model class object
export default class TilesCollection extends Collection{
    constructor(...args){
        super(...args);
        // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
        this.model = GameModel;
    }

    // Model Constructor
    initialize() {

    }

}
