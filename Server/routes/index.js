const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter.js')
const userRouter = require('./userRouter.js')
const bankRouter = require('./bankRouter.js')
const transactionRouter = require('./transactionRouter.js')
const basketRouter = require('./basketRouter.js')

router.use('/user', userRouter) //Пользователи
router.use('/item', itemRouter) //Товары
router.use('/basket', basketRouter) //Корзина
router.use('/bank', bankRouter) //Банки
router.use('/transaction', transactionRouter) //Транзакции

module.exports = router