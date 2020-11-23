const express = require('express');
const router = express.Router();

const SuckhoeController = require('./suckhoe.controller');

router.get('/suckhoe', SuckhoeController.getlist);
router.get('/suckhoe/:id', SuckhoeController.skbyId);
router.post('/suckhoe', SuckhoeController.create);
router.put('/suckhoe/:id', SuckhoeController.edit);
router.delete('/suckhoe/:id', SuckhoeController.remove);

module.exports = router;