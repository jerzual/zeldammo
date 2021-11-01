// GameView.js
// -------
// GameView.js
// -------
import $ from 'jquery';
import {bindAll} from 'lodash';
import Backbone from 'backbone';
import _ from 'lodash';
import PlayerModel from '../models/PlayerModel';
import TilesCollections from '../collections/TilesCollection';

export default class GameView extends Backbone.View{

    constructor(options){
        super(options);
        // The DOM Element associated with this view
        this.el = "#zeldammo";
    }

    // View constructor
    initialize(){
      _.bindAll(this, 'onKeypress');
      $(document).bind('keypress', this.onKeypress);
        // Calls the view's render method
        this.render();

    }

    // View Event Handlers
    events() {

    }

    // Renders the view's template to the UI
    render() {
        // Maintains chainability
        return `<canvas id="game"></canvas>`;

    }
    onKeypress(){

    }
}


