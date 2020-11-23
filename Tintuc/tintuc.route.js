const express = require('express');
const router = express.Router();

const TintucController = require('./tintuc.controller');
const upload = require('../Hinhanh/upload')
router.get('/tintuc', TintucController.getlist);
router.get('/tintuc/:id', TintucController.findTintuc);
router.post('/tintuc', upload.single('hinhanh'), TintucController.create);
router.put('/tintuc/:id', upload.single('hinhanh'), TintucController.edit);
router.delete('/tintuc/:id', TintucController.remove);

module.exports = router;