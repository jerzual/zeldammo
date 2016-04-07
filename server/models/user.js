//import Sequelize from 'sequelize';

export default (sequelize, DataTypes) =>
    sequelize.define(
        //model name
        'User',
        //fields
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            facebook_id: DataTypes.STRING,
            twitter_id: DataTypes.STRING,
            google_id: DataTypes.STRING
        },
        //associations and other config
        {
            associate: function (models) {
                models.User.hasMany(models.Post);
            }
        }
    );

