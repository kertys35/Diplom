const Router = require('express')
const router = new Router()
const currencyController = require('../controllers/currencyController.js')

router.post('/',currencyController.create)
router.get('/', currencyController.getAll)
router.get('/:currencyId', currencyController.getOne)
router.post('/:currencyId',currencyController.update)
router.delete('/:currencyId', currencyController.delete)


module.exports = router