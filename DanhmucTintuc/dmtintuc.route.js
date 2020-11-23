const express = require('express');
const router = express.Router();

const DanhmucTintucController = require('./dmtintin.controller');
const upload = require('../Hinhanh/upload');
router.get('/danhmuctintuc', DanhmucTintucController.getlist);
router.get('/danhmuctintuc/:id', DanhmucTintucController.findDanhmucTintuc);
router.post('/danhmuctintuc', upload.single('hinhanh'), DanhmucTintucController.create);
router.put('/danhmuctintuc/:id', upload.single('hinhanh'), DanhmucTintucController.edit);
router.delete('/danhmuctintuc/:id', DanhmucTintucController.remove);

module.exports = router;