const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter.js')
const userRouter = require('./userRouter.js')
const bankRouter = require('./bankRouter.js')
const currencyRouter = require('./currencyRouter.js')
const creditCardRouter = require('./creditCardRouter.js')
const transactionRouter = require('./transactionRouter.js')

router.use('/user', userRouter) //Пользователи
router.use('/item', itemRouter) //Товары
router.use('/bank', bankRouter) //Банки
router.use('/currency', currencyRouter) //Валюта
router.use('/creditCard', creditCardRouter) //Кредитная карта
router.use('/transaction', transactionRouter) //Транзакции

module.exports = router