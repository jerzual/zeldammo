import initialize from '../db/initTestDB';
import Sequelize from 'sequelize';
import {assert} from 'chai';
import models from '../../server/models/';

describe('Player Model', ()=> {
    const db = initialize();
    describe('creating a new model',(done)=>{
        let player;
        beforeEach(()=> {
            player = models.Player.create();
        });
        it('has a default UUID', ()=> {
            assert.isOk(player.UUID);
        })
    });
});
