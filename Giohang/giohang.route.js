const express = require('express');
const router = express.Router();

const GiohangController = require('./giohang.controller');
const upload = require('../Hinhanh/upload');
router.get('/giohang', GiohangController.getlist);
router.get('/giohang/:id', GiohangController.giohangbyId);
router.post('/giohang', upload.single('url'), GiohangController.create);
router.put('/giohang/:id', upload.single('url'), GiohangController.edit);
router.delete('/giohang/:id', GiohangController.remove);
router.post('/giohang/donhang-details', GiohangController.donhangdetails);
router.post('/giohang/byUser', GiohangController.giohangbyuser);
router.post('giohang/byUser-donhang', GiohangController.mygiohang);

module.exports = router;