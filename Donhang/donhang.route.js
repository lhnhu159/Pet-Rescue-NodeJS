const express = require('express');
const router = express.Router();

const DonhangController = require('./donhang.controller');
const upload = require('../Hinhanh/upload');
router.get('/donhang', DonhangController.getlist);
router.get('/donhang/:id', DonhangController.donhangbyId);
router.post('/donhang', upload.single('url'), DonhangController.create);
router.put('/donhang/:id', upload.single('url'), DonhangController.edit);
router.delete('/donhang/:id', DonhangController.remove);
router.post('/donhang/byUser', upload.single('url'), DonhangController.donhangbyUser);
router.post('/donhang/find', upload.single('url'), DonhangController.findOrder);


module.exports = router;