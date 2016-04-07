/**
 * A table to record game events
 */
export default (sequelize, DataTypes) => sequelize.define(
    'event',
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        type: {
            type: DataTypes.ENUM,
            values: [
                'item-drop',
                'item-pickup',
                'entity-hit',
                'death',
                'zone-join',
                'zone-quit',
                'instance-create',
                'message-sent',
                'message-read',
                'guild-joined'
            ]
        },
        payload:{
            type:DataTypes.STRING
        }
    },
    {
        associate: (models)=> {
            //models.Event.hasOne(models.Entity, {as: source});
            models.Event.hasOne(models.Instance, {as: instance});
        }
    }
);
