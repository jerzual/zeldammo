// zelda.js
// ----------------
import $ from 'jquery';

import Backbone from 'backbone';
import GameModel from 'models/GameModel';
import PlayerModel from 'models/PlayerModel';
import SpriteModel from 'models/SpriteModel';
import GameView from 'views/GameView';
import ItemsView from 'views/StartLayout';
import SelectView from 'views/SelectLayout';
import TilesCollection from 'collections/TilesCollection';

import GameRouter from 'routers/GameRouter';
