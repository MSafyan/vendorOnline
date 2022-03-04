const express = require('express');
const authController = require('../controllers/auth.controller');
const AuthValidations = require('../validations/auth.validations');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidations.login()),
  authController.login
);
router.post(
  '/register',
  validateRequest(AuthValidations.register()),
  authController.register
);

module.exports = router;
