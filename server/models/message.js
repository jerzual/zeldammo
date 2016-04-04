export default (sequelize, DataTypes) => Message = sequelize.describe(
  //table name
  'message',
  //fields
    {
        uuid:{
            type:   Sequelize.UUID,
            validate:{
                notNull:true,
                isUUID:4
            }
        },
        states: {
            type:   Sequelize.ENUM,
            values: ['unread', 'read', 'deleted']
        },
        content:{
            type:Sequelize.STRING,
            validate
        }
    },
    //options
    {
        associate : (models)=>{

            Message.hasOne(models.Instance,{as:'instance'});
            Message.hasOne(models.Player,{as:'sender'});
            Message.hasMany(models.Player,{as:'receiver'});
        }
    }
);
