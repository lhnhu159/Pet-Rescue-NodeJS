const express = require('express');
const router = express.Router();

const NhannuoiController = require('./nhannuoi.controller');
const upload = require('../Hinhanh/upload');
router.get('/nhannuoi', NhannuoiController.getlist);
router.get('/nhannuoi/:id', NhannuoiController.nhannuoibyId);
router.post('/nhannuoi/byUser', NhannuoiController.nhannuoibyuser);
router.post('/nhannuoi', upload.single('url'), NhannuoiController.create);
router.put('/nhannuoi/:id', upload.single('url'), NhannuoiController.edit);
router.delete('/nhannuoi/:id', NhannuoiController.remove);


module.exports = router;