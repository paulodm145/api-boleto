const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.status(200).send({
        title: "API de Leitura de Boleto",
        version: "0.0.1",
		author: "Paulo Roberto Bolsanello"
    });
});

module.exports = router;
