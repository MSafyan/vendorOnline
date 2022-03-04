const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');

router.get('/health-check', (req, res) => {
  res.send('OK');
});
router.use('/auth', authRoutes);

module.exports = router;
