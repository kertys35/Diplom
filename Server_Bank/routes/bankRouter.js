const Router = require('express')
const router = new Router()
const bankController = require('../controllers/bankController.js')

router.post('/', bankController.create)          //Создать банк
router.get('/', bankController.getAll)          //Получить список всех банков
router.get('/:bankId', bankController.getOne)       //Получить банк по id
router.delete('/:bankId', bankController.delete)    //Удалить банк по id


module.exports = router