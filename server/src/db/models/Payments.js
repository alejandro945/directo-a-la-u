'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Payments extends Model {
        static associate(models) {
            Payments.belongsTo(models.Passengers, {
                as: 'Passengers',
                foreignKey: {
                    name: "passenger_id",
                    allowNull: false
                }
            })
        }
    }

    Payments.init({
        passenger_id: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        assist: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        hasPaid: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull: false
        },
        remark: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Payments',
        tableName: 'payments'
    });

    return Payments;
}

