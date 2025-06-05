const Router = require('express')
const router = new Router()
const transactionController = require('../controllers/transactionController.js')
const authMiddleWare = require('../middleware/authMiddleWare')

router.post('/', authMiddleWare, transactionController.create)          //Создать транзакцию

module.exports = router