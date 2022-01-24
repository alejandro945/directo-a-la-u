'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Passengers extends Model {
        static associate(models) {
            Passengers.hasMany(models.Schedules, {
                as: 'Schedules',
                foreignKey: 'passenger_id'
            })
            Passengers.hasMany(models.Payments, {
                as: 'Payments',
                foreignKey: 'passenger_id'
            })
        }
    }

    Passengers.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        defaultScope: {
            where: {
                state: true
            }
        },
        sequelize,
        modelName: 'Passengers',
        tableName: 'passengers',
    });

    return Passengers;
}
