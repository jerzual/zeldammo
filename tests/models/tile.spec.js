import initTestDB from '../db/initTestDB';
import Sequelize from 'sequelize';
import {assert} from 'chai';
import models from '../../server/models/';

describe('Tile Model', ()=> {
    const db = initTestDB();
    //clean db
    before(function(done) {
        Tile.sync({force: true}) // drops table and re-creates it
            .success(function () {
                done(null);
            })
            .error(function (error) {
                done(error);
            });
    });
    describe('creating a new model',function(done){
        let tile;
        before(function(done) {
            models.Tile.create().then(function (result) {
                console.log(result);
                tile = result;
                done();
                // Transaction has been committed
                // result is whatever the result of the promise chain returned to the transaction callback
            }).catch(function (err) {
                // Transaction has been rolled back
                // err is whatever rejected the promise chain returned to the transaction callback
                assert.fail(err);
                done();
            });
        });
        it('has a default UUID', function() {
            assert.isOk(tile.UUID);
        })
    });
});
