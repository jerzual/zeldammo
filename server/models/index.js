const Sequelize = require( 'sequelize');
const config = require('../config');

exports.initialize = (options)=>{
  const dbConf = config().database;
  const models = {
    User : sequelize.import(__dirname+'/user')
    , Message : sequelize.import(__dirname+'/message')
    , Event : sequelize.import(__dirname+'/event')
    , Guild : sequelize.import(__dirname+'/guild')
    , Instance : sequelize.import(__dirname+'/instance')
    , Player : sequelize.import(__dirname+'/player')
    , Tile : sequelize.import(__dirname+'/tile')
    , Zone : sequelize.import(__dirname+'/zone')
  };
  database = new Sequelize(process.env.DATABASE_URL);
  [User,Message,Guild,Instance].forEach((Table)=>{
    new Table().define(database);
  });
};
