//
export default (sequelize, DataTypes) => {
    const Zone = sequelize.define(
        //model name
        'Zone',
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name: DataTypes.STRING
        },
        {
            associate: (models) => {
                Zone.hasMany(models.User);
            }
        }
    );

    export default Zone;
