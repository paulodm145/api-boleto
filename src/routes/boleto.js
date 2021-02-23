const express = require('express');
const router = express.Router();
const controller = require('../controllers/boletoController')

router.get('/:codigo', controller.get);
module.exports = router;