const express = require('express')
const router = express.Router()
const controller = require('../controller/usercontroller')
const authenticate = require('../middelware/authentication')

router.post('/register', controller.registercontroller)
router.post('/login', controller.loginController)
router.get('/alluser',controller.get_all_user_data)
router.get('/:id',controller.get_user_data_by_id)
router.put('/:id',controller.get_data_by_id_and_update)
router.delete('/:id',controller.delete_user_data)


module.exports = router