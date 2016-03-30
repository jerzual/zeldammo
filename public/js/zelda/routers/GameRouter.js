// DesktopRouter.js
// ----------------
import Backbone, {Router} from 'backbone';
import GameModel from '../models/GameModel';
import GameView from '../views/GameView';
import MenuView from '../views/MenuView';

export default class GameRouter extends Router{

    initialize() {

        // Tells Backbone to start watching for hashchange events
        Backbone.history.start();

    }

    // All of your Backbone Routes (add more)
    routes(){

        // When there is no hash on the url, the home method is called
        return {"": "index"};
    }

    index() {

        // Instantiates a new view which will render the header text to the page
        new GameView();
        new MenuView();

    }

}