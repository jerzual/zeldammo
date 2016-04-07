/**
 * Instance is a collection of zones, where players are active.
 *
 */
export default (sequelize, DataTypes) => sequelize.define(
    //name
    'Instance',
    //fields
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
        },
        states: {
            type: DataTypes.ENUM,
            values: ['active', 'empty', 'deleted']
        }
    },
    //options
    {
      associate(models){
        
      }
    }
);
