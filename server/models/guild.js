import sequelize , {Sequelize, DataTypes} from 'sequelize';
/*
 * Guilds associate users together, it can also be used as a way to send invitations for the private beta.
 *
 *
 */

const Guild = sequelize.define(
    'guild',
    {
        title: DataTypes.STRING
    },
    {
        associate: function(models) {
            Guild.belongsTo(models.Player,{as:'founder'});
            Guild.hasMany(models.Players,{as:'members'})
        }
    }
);

export default Guild;