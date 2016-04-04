import Sequelize from 'sequelize';
import Table from '../engine/table';
class Biome extends Table{
  //table name
   constructor(){
     super({name:'Biome'});
   }
  //fields
  get fields(){
    return  {
    name: DataTypes.STRING
  };
}
//options
get options(){
    associate: (models) => {
        models.Biome.hasMany(models.Zone,{as:'zones'});
    }
};
}

export default Biome;
