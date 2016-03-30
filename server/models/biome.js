import sequelize , {Sequelize, DataTypes} from 'sequelize';

const Biome = sequelize.define('Biome', {
    name: DataTypes.STRING
}, {
    associate: (models) => {
        Biome.hasMany(models.Zone,{as:'zones'});
    }
});

export default Zone;
