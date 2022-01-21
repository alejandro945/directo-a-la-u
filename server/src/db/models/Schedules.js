'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedules extends Model {
        static associate(models) {
            Schedules.belongsTo(models.Passengers,{
                as: 'Passengers',
                foreignKey:{
                    name:"passenger_id",
                    allowNull:false
                }
            })
        }
    }
    
    Schedules.init({
        passenger_id:{
            type: DataTypes.INTEGER 
        },
        ida: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        regreso: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Schedules',
        tableName: 'schedules'
    });

    return Schedules;
}

