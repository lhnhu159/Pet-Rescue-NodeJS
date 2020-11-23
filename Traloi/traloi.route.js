const express = require('express');
const router = express.Router();

const TraloiController = require('./traloi.controller');
const upload = require('../Hinhanh/upload');
router.get('/traloi', TraloiController.getlist);
router.get('/traloi/:id', TraloiController.traloibyId);
router.post('/traloi', upload.single('url'), TraloiController.create);
router.put('/traloi/:id', upload.single('url'), TraloiController.edit);
router.delete('/traloi/:id', TraloiController.remove);
router.post('/traloi/byBaidang', TraloiController.traloibybaidang);

module.exports = router;