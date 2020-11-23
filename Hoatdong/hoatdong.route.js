const express = require('express');
const router = express.Router();
const auth = require('../User/auth');
const HoatdongController = require('./hoatdong.controller');
const upload = require('../Hinhanh/upload');
router.get('/hoatdong', HoatdongController.getlist);
router.post('/hoatdong', upload.single('url'), HoatdongController.create);
router.put('/hoatdong/:id', upload.single('url'), HoatdongController.edit);
router.delete('/hoatdong/:id', HoatdongController.remove);


module.exports = router;