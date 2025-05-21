const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController.js')
const authMiddleWare = require('../middleware/authMiddleWare')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleWare, userController.auth)
router.delete('/delete', authMiddleWare, userController.delete)


module.exports = router