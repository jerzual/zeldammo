import Backbone from 'backbone';
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
        return `<div class="screen menu">
    <h1>ZeldaMMO</h1>
    <ul>
        <li>
            <a href="/game/new"></a>
        </li>
    </ul>
</div>`
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
