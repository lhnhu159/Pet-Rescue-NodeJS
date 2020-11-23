const express = require('express');
const router = express.Router();

const NuoiaoController = require('./nuoiao.controller');

router.get('/nuoiao', NuoiaoController.getlist);
router.get('/nuoiao/:id', NuoiaoController.NuoiaobyId);
router.post('/nuoiao', NuoiaoController.create);
router.put('/nuoiao/:id', NuoiaoController.edit);
router.delete('/nuoiao/:id', NuoiaoController.remove);
router.post('/nuoiao/byDongvat', NuoiaoController.NuoiaobyDongvat);
router.post('/nuoiao/byUser', NuoiaoController.NuoiaobyUser);
router.post('/nuoiao/details', NuoiaoController.NuoiaobyUserDongVat);


module.exports = router;