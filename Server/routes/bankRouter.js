const Router = require('express')
const router = new Router()
const bankController = require('../controllers/bankController.js')
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.get('/', bankController.getAll)          //Получить список всех банков

module.exports = router