const express = require('express');
const router = express.Router();

const LoaiController = require('./loai.controller');

router.get('/loai', LoaiController.getlist);
router.get('/loai/:id', LoaiController.loaibyId);
router.post('/loai', LoaiController.create);
router.post('/giongbyloai', LoaiController.giongbyLoai);
router.put('/loai/:id', LoaiController.edit);
router.delete('/loai/:id', LoaiController.remove);

module.exports = router;