const express = require('express');
const router = express.Router();

const ChudeController = require('./chude.controller');
const upload = require('../Hinhanh/upload');
router.get('/chude', upload.single('url'), ChudeController.getlist);
router.get('/chude/:id', ChudeController.chudebyId);
router.post('/chude', upload.single('url'), ChudeController.create);
router.put('/chude/:id', upload.single('url'), ChudeController.edit);
router.delete('/chude/:id', ChudeController.remove);

module.exports = router;