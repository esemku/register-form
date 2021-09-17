// Validations Helpers
const { check } = require('express-validator');

// Register
exports.validSign = [
  check('firstName', 'First name is required')
    .notEmpty()
    .isLength({
      min: 3,
      max: 32,
    })
    .withMessage('login must be between 3 to 32 characters'),
  check('password', 'password is required').notEmpty(),
  check('password')
    .isLength({
      min: 6,
    })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('password must contain a number'),
];

// Login
exports.validLogin = [
  check('firstName', 'First name is required').notEmpty(),
  check('password', 'password is required').notEmpty(),
  check('password')
    .isLength({
      min: 6,
    })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('password must contain a number'),
];
