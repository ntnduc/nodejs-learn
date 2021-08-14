const express = require('express')
const router = express.Router()

var controller = require('../controller/user.controller')
var validation = require('../validation/user.validation')

router.get('/', controller.index);

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:userId', controller.getUserId)

router.post('/create', validation.postCreate, controller.postCreate)

module.exports = router;