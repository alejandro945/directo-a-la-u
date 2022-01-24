const { Router } = require('express')
const db = require('../db/models')
const router = Router()
const PaymentService = require('../services/PaymentService')
const SMSService = require('../services/SMSService')
const service = new PaymentService(db.Payments)
const sms = new SMSService()

router.get('/', get)
router.get('/:id', getById)
router.post('/new', add)
router.put('/:id', update)
router.post('/message', sendMessage)

function get(_, res, next) {
    service.get()
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

function getById(req, res, next) {
    const { id } = req.params;
    service.getById(id)
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

function add(req, res, next) {
    const newData = req.body;
    console.log(newData);
    service.add(newData)
        .then(results => (res.status(200).json(results)))
        .catch(err => next(err))
}

function update(req, res, next) {
    const { id } = req.params;
    service.update(id, req.body)
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

function sendMessage(req, res, next) {
    const data = req.body;
    if (data.assist) {
        sms.sendConfirmation(data.number).catch(err => next(err))
    }
    if (data.hasPaid) {
        sms.sendPayment(data.number).catch(err => next(err))
    }
}


module.exports = router;