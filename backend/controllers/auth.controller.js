const User = require('../models/auth.model');

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.registerController = (req, res) => {
  const { firstName, lastName, dateOfBirth, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    const field = errors.array().map((error) => error.param)[0];
    return res.status(422).json({
      errors: firstError,
      field,
    });
  } else {
    User.findOne({
      firstName,
    }).exec((err, user) => {
      // If user exists
      if (user) {
        return res.status(400).json({
          field: 'firstName',
          errors: 'This first name is taken',
        });
      }
    });

    const user = new User({
      firstName,
      lastName,
      dateOfBirth,
      password,
    });

    user.save((err, user) => {
      if (!err) {
        return res.json({
          success: true,
          message: user,
          message: 'Signup success',
        });
      }
    });
  }
};

exports.signinController = (req, res) => {
  const { firstName, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    const field = errors.array().map((error) => error.param)[0];
    return res.status(422).json({
      errors: firstError,
      field
    });
  } else {
    // check if user exist
    User.findOne({
      firstName,
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          field: 'firstName',
          errors: 'User with that first name does not exist. Please signup',
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        return res.status(400).json({
          field: 'password',
          errors: 'First name and password do not match',
        });
      }
      // generate a token and send to client
      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        },
      );

      const { _id, firstName } = user;
      return res.json({
        token,
        user: {
          _id,
          firstName,
        },
      });
    });
  }
};
