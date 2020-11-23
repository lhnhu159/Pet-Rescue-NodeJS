const express = require('express');
const router = express.Router();
const upload = require('../Hinhanh/upload');
const SanphamController = require('./sanpham.controller');


router.get('/sanpham', SanphamController.getlist);
router.get('/sanpham/:id', SanphamController.sanphambyId);
router.post('/sanpham/bydanhmuc', SanphamController.sanphambyDanhmuc);
router.post('/sanpham', upload.single('sp_hinhanh'), SanphamController.create);
router.put('/sanpham/:id', upload.single('sp_hinhanh'), SanphamController.edit);
router.post('/sanpham/find', upload.single('url'), SanphamController.findSanpham);
router.delete('/sanpham/:id', SanphamController.remove);

module.exports = router;