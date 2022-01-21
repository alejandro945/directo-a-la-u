const { Router } = require('express');
const errorHandler = require('../middlewares/error-handler');
//Routes (Rest API)
const passengers = require('../api/passenger')
const payment = require('../api/payment')
//Inicializar el Router de Express
const router = Router();
//GET * Api Services
router.use('/passengers', passengers);
//router.use('/payments', payment);
//Not Found
router.get('*', (_, res) => { res.status(404).send({ error: 'Service Not Found' }) })
//General Middleware
router.use(errorHandler);

module.exports = router