const express = require('express');
const router = express.Router();

const GiongController = require('./giong.controller');

router.get('/giong', GiongController.getlist);
router.get('/giong/:id', GiongController.giongbyId);
router.post('/giong', GiongController.create);
router.put('/giong/:id', GiongController.edit);
router.delete('/giong/:id', GiongController.remove);

module.exports = router;