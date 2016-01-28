// DesktopRouter.js
// ----------------
import Backbone, {Router} from 'backbone';

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
        new View();

    }

}