const Router = require('express')
const router = new Router()
const transactionController = require('../controllers/transactionController.js')
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.post('/', transactionController.create)          //Создать транзакцию
router.get('/', transactionController.getAll)          //Получить список всех транзакций
router.get('/:transactionId', transactionController.getOne)       //Получить транзакцию по id
router.get('/user/:basketId', transactionController.getAllOfUser)       //Получить все транзакции одного пользователя по корзине
router.delete('/:transactionId', transactionController.delete)    //Удалить транзакцию по id

module.exports = router