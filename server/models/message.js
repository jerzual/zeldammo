export default (sequelize, DataTypes) => sequelize.define(
    //table name
    'Message',
    //fields
    {
        uuid:{
            type:   DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            validate:{
                notNull:true,
                isUUID:4
            }
        },
        states: {
            type:   DataTypes.ENUM,
            values: ['unread', 'read', 'deleted']
        },
        content:{
            type:DataTypes.STRING
        }
    },
    //options
    {
        associate : (models)=>{

            models.Message.hasOne(models.Instance,{as:'instance'});
            models.Message.hasOne(models.Player,{as:'sender'});
            models.Message.hasMany(models.Player,{as:'receiver'});
        }
    }
);