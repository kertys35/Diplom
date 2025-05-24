const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController.js')

router.post('/:basketId', basketController.create)          //Добавить предмет в корзину
router.get('/:basketId', basketController.getAll)          //Получить список всех предметов в корзине
router.get('/', basketController.getOne)          //Получить один товар из корзины
router.delete('/:basketId', basketController.delete)    //Удалить предмет из корзины


module.exports = router