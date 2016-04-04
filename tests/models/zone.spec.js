import initialize from '../db/initTestDB';
import Sequelize from 'sequelize';
import {assert} from 'chai';
import Zone from '../../server/models/zone';

describe('Zone',()=>{
  let zone;
  const db = initialize();
  beforeEach(()=>{
    console.log(db);
    zone = new Zone(db.sequelize, Sequelize);
  })
  it('is instanciable',()=>{
    assert.isOk(zone);
  })
})
