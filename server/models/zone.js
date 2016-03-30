import sequelize , {Sequelize, DataTypes} from 'sequelize';

    const Zone = sequelize.define('Zone', {
        name: DataTypes.STRING
    }, {
        associate: (models) => {
            Zone.hasMany(models.Tile,{as:'tiles'});
        }
    });

    export default Zone;
