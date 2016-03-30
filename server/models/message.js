import sequelize , {Sequelize, DataTypes} from 'sequelize';
/*

 CREATE TABLE messages (
 id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 created_at DATETIME,
 updated_at DATETIME,
 user_id INTEGER UNSIGNED
 );

 */
const Message = sequelize.describe('message',
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
    {
        associate : (models)=>{

            Message.hasOne(models.Instance,{as:'instance'});
            Message.hasOne(models.Player,{as:'sender'});
            Message.hasMany(models.Player,{as:'receiver'});
        }
    }
);
export default Message;