import {assert} from 'chai';
import db from '../../server/models/';

describe('db index',()=> {

    it('expose a db global variable',()=>{
        assert.isOk(db);
    })
});