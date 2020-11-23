const express = require('express');
const router = express.Router();

const MauController = require('./mau.controller');

router.get('/mau', MauController.getlist);
router.get('/mau/:id', MauController.maubyId);
router.post('/mau', MauController.create);
router.put('/mau/:id', MauController.edit);
router.delete('/mau/:id', MauController.remove);

module.exports = router;