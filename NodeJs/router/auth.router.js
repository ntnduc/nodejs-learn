const express = require('express')
const router = express.Router()

var controller = require('../controller/auth.controller');

router.get('/login', controller.login);
router.post('/login', controller.postLogin);
router.get('/lockout', controller.postLockout);

module.exports = router;