/*
 * Guilds associate users together, it can also be used as a way to send invitations for the private beta.
 *
 *
 */
export default (sequelize, DataTypes) => Guild = sequelize.define(
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
            associate: function (models) {
                Guild.belongsTo(models.User);
                Guild.hasMany(models.User);
            }
        }
    );

    return Guild;
};
