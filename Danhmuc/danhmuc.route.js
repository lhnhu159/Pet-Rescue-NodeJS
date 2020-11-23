const express = require('express');
const router = express.Router();

const DanhmucController = require('./danhmuc.controller');
const upload = require('../Hinhanh/upload');
router.get('/danhmuc', DanhmucController.getlist);
router.get('/danhmuc/:id', DanhmucController.danhmucbyId);
router.post('/danhmuc', upload.single('url'), DanhmucController.create);
router.put('/danhmuc/:id', upload.single('url'), DanhmucController.edit);
router.delete('/danhmuc/:id', DanhmucController.remove);


module.exports = router;