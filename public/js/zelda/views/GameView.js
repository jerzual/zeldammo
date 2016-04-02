// GameView.js
// -------
// GameView.js
// -------
import $ from 'jquery';
import {bindAll} from 'lodash';
import Backbone from 'backbone';
import _ from 'lodash';
import PlayerModel from '../models/PlayerModel';
import GameCollections from '../collections/GameCollection';
import gameTemplate from '../templates/game.hbs';

export default class GameView extends Backbone.View{

    constructor(options){
        super(options);
        // The DOM Element associated with this view
        this.el = "#zeldammo";
        this.template = gameTemplate;
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

        // Setting the view's template property using the Underscore template method
        //this.template = _.template(template, {});

        // Dynamically updates the UI with the view's template
        this.$el.html(gameTemplate());

        // Maintains chainability
        return this;

    }
    onKeypress(){

    }
}


export default GameView;
