class PassengerService {
    constructor(model) {
        this.model = model;
    }
    get() {
        return this.model.findAll({ include: ['Schedules']})
            .catch(new Error("Problemas en el servidor"));
    }
    getById(id) {
        return this.model.findOne({ where: { id: id }, include: ['Schedules'] })
            .catch(new Error("Problemas en el servidor"));
    }
    add(obj) {
        return this.model.findOrCreate({ where: { phone: obj.phone }, defaults: obj, include: ['Schedules'] })
            .catch(new Error("Problemas en el servidor"));
    }
    update(id, obj) {
        this.model.update(obj, { where: { id: id } })
            .catch(err => { err.message })
    }
    remove() {
        this.model.destroy({ where: { id: id } })
            .catch(err => { err.message })
    }
}

module.exports = PassengerService;