/*
 * Friends associate two user together, it can also be used as a way to send invitations for the private beta.
 *
 *
 */
module.exports = function(sequelize, DataTypes) {
    var Guild = sequelize.define('Guild', {
        title: DataTypes.STRING
    }, {
        associate: function(models) {
            Guild.belongsTo(models.User);
        }
    });

    return Post;
}