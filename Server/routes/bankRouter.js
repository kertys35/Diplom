const Router = require('express')
const router = new Router()
const bankController = require('../controllers/bankController.js')
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.post('/', checkRole('ADMIN'), bankController.create)          //Создать банк
router.get('/', bankController.getAll)          //Получить список всех банков
router.get('/:bankId', bankController.getOne)       //Получить банк по id
router.delete('/:bankId', bankController.delete)    //Удалить банк по id


module.exports = router