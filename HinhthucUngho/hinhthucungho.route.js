const express = require('express');
const router = express.Router();
const auth = require('../User/auth');
const HinhthucController = require('./hinhthucungho.controller');

router.get('/hinhthucungho', HinhthucController.getlist);
router.get('/hinhthucungho/:id', HinhthucController.hinhthucbyId);
router.post('/hinhthucungho', auth.validate, HinhthucController.create);
router.put('/hinhthucungho/:id', HinhthucController.edit);
router.delete('/hinhthucungho/:id', HinhthucController.remove);


module.exports = router;