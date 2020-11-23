const express = require('express');
const router = express.Router();

const TnvController = require('./tinhnguyenvien.controller');
const upload = require('../Hinhanh/upload');
router.get('/tinhnguyenvien', TnvController.getlist);
router.get('/tinhnguyenvien/:id', TnvController.find);
router.post('/tinhnguyenvien', upload.single('hinhanh'), TnvController.create);
router.put('/tinhnguyenvien/:id', upload.single('hinhanh'), TnvController.edit);
router.delete('/tinhnguyenvien/:id', TnvController.remove);

module.exports = router;