// MonstersCollection.js
// -------------
import {Collection} from 'backbone';
import CharacterModel from '../models/CharacterModel';

// Creates a new Backbone Collection class object
export default class MonsterCollection extends Collection{
    constructor(){
        // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
        this.model = CharacterModel
    }

    // Model Constructor
    initialize() {

    }

};
