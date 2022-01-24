const { Router } = require('express')
const db = require('../db/models')
const router = Router()
const PassengerService = require('../services/PassengerService')
const service = new PassengerService(db.Passengers)

router.get('/', get)
router.get('/filter/', dayFilter)
router.get('/:id', getById)
router.post('/new', add)

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

function dayFilter(req, res, next) {
    const params = req.body
    service.dayFilter(params)
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

function add(req, res, next) {
    const newPassenger = req.body;
    service.add(newPassenger)
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

module.exports = router;