/**
 * Created with JetBrains WebStorm.
 * User: belegran
 * Date: 15/11/13
 * Time: 10:06
 * To change this template use File | Settings | File Templates.
 */
// Model.js
// --------
import {Model} from 'backbone';

// Creates a new Backbone Model class object
export default class CharacterModel extends Model{
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
