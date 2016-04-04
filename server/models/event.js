/**
 * A table to record game events
 */

export default (sequelize, DataTypes) => Event = sequelize.define(
    'event',
    {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        type: {
            states: [
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
            Event.hasOne(models.Entity, {as: source});
            Event.hasOne(models.Instance, {as: instance});
        }
    }
);
