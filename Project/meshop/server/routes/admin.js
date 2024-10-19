const express = require('express');
const router = express.Router();
const handleLogin = require('../controllers/admin')

router.post('/admin',handleLogin)

module.exports = router;