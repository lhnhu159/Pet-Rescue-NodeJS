const express = require('express');
const router = express.Router();

const ChiphiController = require('./chiphi.controller');
const upload = require('../Hinhanh/upload');
router.get('/chiphi', ChiphiController.getlist);
router.get('/chiphi/:id', ChiphiController.chiphiDetails);
router.post('/chiphi', upload.single('url'), ChiphiController.create);
router.put('/chiphi/:id', upload.single('url'), ChiphiController.edit);
router.delete('/chiphi/:id', ChiphiController.remove);

module.exports = router;