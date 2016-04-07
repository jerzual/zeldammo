/*
 * Guilds associate users together, it can also be used as a way to send invitations for the private beta.
 *
 *
 */
export default (sequelize, DataTypes) => sequelize.define(
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
        comment: 'a guild is a team of players with a creator and a capital of money',

        associate: function (models) {
            models.Guild.belongsTo(models.Player, {as: 'founder'});
            models.Guild.hasMany(models.Player, {as: 'members'});
        }
    }
);
