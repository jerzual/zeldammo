import Backbone from 'backbone';
import menuTemplate from '../templates/menu.hbs';

export default
class MenuView extends Backbone.View{
    constructor(options) {
        super(options);
    }

    initialize() {
        this.entries = [
          {"start": "newGame", "quit": "quitGame"}
        ];
    }

    render() {

    }

    events() {
        return {
            "click .start":"newGame",
            "click .quit":"quit",
            "click .options":"showOptions",
            "click .select":"selectMenu"
        };
    }
}
