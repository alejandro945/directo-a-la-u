const { Router } = require('express')
const router = Router()

router.get('/', get)
router.get('/:id', getById)
router.post('/new', add)
router.put('/:id', update)
router.delete('/:id', remove)

const db = require('../../db/models');
const BasicService = require('../../services/BasicService');
const service = new BasicService(db.Employee);

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
    const newEmployee = req.body;
    service.add(newEmployee)
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

function update(req, res, next) {
    const { id } = req.params;
    service.update(id, req.body)
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

function remove(req, res) {
    const { id } = req.params;
    service.remove(id)
        .then(results => res.status(200).json(results))
        .catch(err => next(err))
}

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}

module.exports = router;