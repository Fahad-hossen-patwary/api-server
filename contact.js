const express = require('express')
const Contact = require('../models/contactmodel')
const controller = require('../controller/contactcontraol')
const router = express.Router()

router.get('/', controller.contact_controller_for_get_mathod)
router.post('/post', controller.contact_controller_for_post_mathod)
router.get('/:id', controller.contact_controller_for_find_data_by_id)
router.put('/put/:id', controller.contact_controller_for_put_mathod)
router.delete('/delete/:id', controller.contact_controller_for_delete_mathod)


module.exports = router