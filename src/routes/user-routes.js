const router = require('express').Router()
const UserController = require('../controllers/user-controller')

router.get('/', UserController.findAllUsers)
router.get('/:id', UserController.findUserById)
router.get('/email/:email', UserController.findUserByEmail)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router