const express = require('express');
const router = express.Router();

const NtnController = require('./nhomtinhnguyen.controller');
const upload = require('../Hinhanh/upload');
router.get('/nhomtinhnguyen', NtnController.getlist);
router.post('/nhomtinhnguyen', upload.single('url'), NtnController.create);
router.put('/nhomtinhnguyen/:id', upload.single('url'), NtnController.edit);
router.delete('/nhomtinhnguyen/:id', NtnController.remove);

module.exports = router;