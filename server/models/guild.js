import sequelize , {Sequelize, DataTypes} from 'sequelize';
/*
 * Guilds associate users together, it can also be used as a way to send invitations for the private beta.
 *
 *
 */

const Guild = sequelize.define(
    'guild',
        //fiels and data types
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            title: DataTypes.STRING
        },
        //associations and config
        {
            comment:'a guild is a team of players with a creator and a capital of money',

        associate: function(models) {
            Guild.belongsTo(models.Player,{as:'founder'});
            Guild.hasMany(models.Players,{as:'members'});
        }
    }
);

export default Guild;
