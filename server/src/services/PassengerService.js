const { Op } = require("sequelize/dist");
const db = require("../db/models");

class PassengerService {
    constructor(model) {
        this.model = model;
    }
    get() {
        return this.model.findAll({ include: ['Schedules', 'Payments'] })
            .catch(new Error("Problemas en el servidor"));
    }
    getById(id) {
        return this.model.findOne({ where: { id: id }, include: ['Schedules', 'Payments'] })
            .catch(new Error("Problemas en el servidor"));
    }
    dayFilter(filter) {
        const [day,ida,regreso] = filter
        return db.Schedules.findAll({ where: { dia: day, [Op.and]: [{ ida: ida }, { regreso: regreso }], }, include: ['Passengers'] })
            .catch(new Error("Problemas en el servidor"));
    }
    add(obj) {
        return this.model.findOrCreate({ where: { phone: obj.phone }, defaults: obj, include: ['Schedules'] })
            .catch(new Error("Problemas en el servidor"));
    }
}

module.exports = PassengerService;