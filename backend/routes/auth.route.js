const express = require('express')
const router = express.Router()

// Validation
const {
  validSign,
  validLogin
} = require('../helpers/valid')

// Load Controllers
const {
  registerController,
  signinController
} = require('../controllers/auth.controller')


router.post('/register', validSign, registerController)
router.post('/login', validLogin, signinController)


module.exports = router
