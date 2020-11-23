const express = require('express');
const router = express.Router();

const UnghoController = require('./ungho.controller');
const upload = require('../Hinhanh/upload')
router.get('/ungho', UnghoController.getlist);
router.get('/ungho/:id', UnghoController.unghobyId);
router.post('/ungho', upload.single('hinhanh'), UnghoController.create);
router.put('/ungho/:id', upload.single('hinhanh'), UnghoController.edit);
router.delete('/ungho/:id', UnghoController.remove);

module.exports = router;