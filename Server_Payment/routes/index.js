const Router = require('express')
const router = new Router()
const transactionRouter = require('./paymentRouter.js')


router.use('/payment', transactionRouter) //Транзакции

module.exports = router