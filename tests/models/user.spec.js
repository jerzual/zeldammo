import initialize from '../db/initTestDB';
import Sequelize from 'sequelize';
import {assert} from 'chai';
import {User} from '../../server/models/';

describe('User', ()=> {
    const db = initialize();
    let user;

    beforeEach(()=> {
        user = User.create();
    });
    it('is instanciable', ()=> {

        assert.isOk(user);
    })
});
