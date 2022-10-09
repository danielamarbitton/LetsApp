const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/uploadPic', userController.uploadPic)

module.exports = router 