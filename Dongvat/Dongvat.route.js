const express = require('express');
const router = express.Router();
const upload = require('../Hinhanh/upload');

const DongvatController = require('./Dongvat.controller');

router.get('/dongvat', DongvatController.getlist);
router.get('/dongvat/:id', DongvatController.dongvat_details);
router.post('/dongvat', upload.single('dv_hinhanh'), DongvatController.create);
router.put('/dongvat/:id', upload.single('dv_hinhanh'), DongvatController.edit);
router.delete('/dongvat/:id', DongvatController.remove);
router.get('/bengoan', DongvatController.bengoan);
router.post('/dongvat/find', DongvatController.findDongvat);


module.exports = router;