import initialize from '../db/initTestDB';
import Sequelize from 'sequelize';
import {assert} from 'chai';
import User from '../../server/models/user';

describe('User',()=>{
const db = initialize();
  let user;

  beforeEach(()=>{

    user = new User(db.sequelize, Sequelize);
  })
  it('is instanciable',()=>{
    assert.isOk(user);
  })
})
