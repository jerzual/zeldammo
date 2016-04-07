const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const Sequelize = require('sequelize');

export default function initTestDB(){
  const sequelize = new Sequelize(':memory:','',null,{dialect:'sqlite'});
  return {
    db,
    sequelize
  };
}
