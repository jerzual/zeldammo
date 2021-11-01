import Player from '../models/PlayerModel';
import Game from '../models/GameModel';
import MenuView from '../views/MenuView';

export class SelectLayout {
    render() {
        return `<div id="select" class="screen">
    {{pauseMessage}}
</div>`;
    }
}