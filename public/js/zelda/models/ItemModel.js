// ItemModel.js
// --------
import {Model} from 'backbone';

// Creates a new Backbone Model class object
export default class ItemModel extends Model{
    constructor(){
        super();
    }

    // Model Constructor
    initialize() {

    }

    // Default values for all of the Model attributes
    defaults(){

    }

    // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
    validate(attrs) {

    }

};
