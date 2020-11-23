const express = require('express');
const router = express.Router();

const TrangthaidonhangController = require('./tragthaidonhang.controller');

router.get('/trangthaidonhang', TrangthaidonhangController.getlist);
router.get('/trangthaidonhang/:id', TrangthaidonhangController.ttdhbyId);
router.post('/trangthaidonhang', TrangthaidonhangController.create);
router.put('/trangthaidonhang/:id', TrangthaidonhangController.edit);
router.delete('/trangthaidonhang/:id', TrangthaidonhangController.remove);


module.exports = router;