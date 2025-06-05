const Router = require('express')
const router = new Router()
const bankRouter = require('./bankRouter.js')
const currencyRouter = require('./currencyRouter.js')
const creditCardRouter = require('./creditCardRouter.js')
const bankTransactionRouter = require('./bankTransactionRouter.js')

router.use('/bank', bankRouter) //Банки
router.use('/currency', currencyRouter) //Валюта
router.use('/creditCard', creditCardRouter) //Кредитная карта
router.use('/transaction', bankTransactionRouter) //Транзакции

module.exports = router