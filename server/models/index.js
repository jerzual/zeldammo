const Sequelize = require('sequelize');
const config = require('../config');

let initSequelize = (options)=> {
    return new Sequelize(':memory:','',null,{dialect:'sqlite'});
};
if (!global.hasOwnProperty('db')) {
    const sequelize = initSequelize(config.database);
    global.db = {
        Sequelize
        , sequelize
        , User:     sequelize.import(__dirname + '/user')
        , Message:  sequelize.import(__dirname + '/message')
        , Event:    sequelize.import(__dirname + '/event')
        , Guild:    sequelize.import(__dirname + '/guild')
        , Instance: sequelize.import(__dirname + '/instance')
        , Player:   sequelize.import(__dirname + '/player')
        , Tile:     sequelize.import(__dirname + '/tile')
        , Zone:     sequelize.import(__dirname + '/zone')
    };
}

module.exports = global.db;