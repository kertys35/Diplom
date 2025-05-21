const Router = require('express')
const router = new Router()
const creditCardController = require('../controllers/creditCardController.js')
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.post('/', creditCardController.create)          //Создать кредитную карту
router.get('/', creditCardController.getAll)          //Получить список всех карт
router.get('/:creditCardId', creditCardController.getOne)          //Получить карту по id
router.post('/find', creditCardController.findCard)       //Получить карту по данным
router.post('/change', creditCardController.changeBalance)       //Изменить баланс карты
router.delete('/:creditCardId', creditCardController.delete)    //Удалить карту по id

module.exports = router