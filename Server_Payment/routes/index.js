const Router = require('express')
const router = new Router()
const transactionRouter = require('./paymentRouter.js')
const banksRouter = require('./banksRouter.js')


router.use('/payment', transactionRouter) //Транзакции
router.use('/bank', banksRouter) //Банки

module.exports = router