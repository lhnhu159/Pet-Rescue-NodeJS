const express = require('express');
const router = express.Router();
const upload = require('./upload');
const HinhanhController = require('./hinhanh.controller');

router.post('/hinhanh', upload.single('url'), HinhanhController.UploadHinh);
router.get('/hinhanh', HinhanhController.getlist);
router.get('/hinhanh/:id', HinhanhController.hinhbyId);
router.delete('/hinhanh/:id', HinhanhController.removehinh);
router.post('/hinhanh/byDongvat', HinhanhController.hinhbyDV);
router.post('/upload', upload.single('url'), HinhanhController.Upload);
module.exports = router;