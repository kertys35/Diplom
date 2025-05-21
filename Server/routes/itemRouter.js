const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController.js')

router.post('/',itemController.create)
router.get('/', itemController.getAll)
router.get('/:itemId', itemController.getOne)
router.delete('/:itemId', itemController.delete)


module.exports = router