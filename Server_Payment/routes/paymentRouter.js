const Router = require('express')
const router = new Router()
const paymentController = require('../controllers/paymentController.js')

router.post('/', paymentController.create)          //Создать транзакцию
router.get('/', paymentController.getAll)          //Получить список всех транзакций
router.get('/:transactionId', paymentController.getOne)       //Получить транзакцию по id
router.get('/user/:basketId', paymentController.getAllOfUser)       //Получить все транзакции одного пользователя по корзине
router.delete('/:transactionId', paymentController.delete)    //Удалить транзакцию по id

module.exports = router