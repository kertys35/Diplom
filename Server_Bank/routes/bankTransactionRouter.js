const Router = require('express')
const router = new Router()
const paymentTransactionController = require('../controllers/paymentTransactionController.js')

router.post('/', paymentTransactionController.create)          //Провести транзакцию


module.exports = router