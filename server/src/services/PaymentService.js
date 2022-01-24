class PaymentService {
    constructor(model) {
        this.model = model;
    }
    get() {
        return this.model.findAll()
            .catch(new Error("Problemas en el servidor"));
    }
    getById(id) {
        return this.model.findOne({ where: { id: id } })
            .catch(new Error("Problemas en el servidor"));
    }
    add(obj) {
        return this.model.create(obj)
        .catch(new Error("Problemas en el servidor"));
    }
    update(id, obj) {
        return this.model.update(obj, { where: { id: id } })
            .catch(err => { err.message })
    }
}

module.exports = PaymentService;