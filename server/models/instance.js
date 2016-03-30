import sequelize , {Sequelize, DataTypes} from 'sequelize';
/**
 * Instance is a collection of zones, where players are active.
 *
 */
const Instance = sequelize.describe(
    'instance',
    {
        uuid: {
            type: DataTypes.UUID,
            primaryKey:true
        },
        states: {
            type: Sequelize.ENUM,
            values: ['active', 'empty', 'deleted']
        },
        players:[],
        zone:{}
    }
    , {

    }
);