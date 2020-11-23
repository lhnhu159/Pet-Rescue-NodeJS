const express = require('express');
const router = express.Router();

const BaidangController = require('./baidang.controller');
const upload = require('../Hinhanh/upload');
router.get('/baidang', BaidangController.getlist);
router.get('/baidang/:id', BaidangController.baidangbyId);
router.post('/baidang', upload.single('url'), BaidangController.create);
router.put('/baidang/:id', upload.single('url'), BaidangController.edit);
router.delete('/baidang/:id', BaidangController.remove);
router.post('/baidang/baidangbyChude', BaidangController.bdbyChude);
router.post('/baidang/baidangUser', BaidangController.baidangbyUser);
router.post('/baidang/Chude-user', BaidangController.baidangUserCd);
router.post('/baidang/find', upload.single('url'), BaidangController.findBaidang)
module.exports = router;