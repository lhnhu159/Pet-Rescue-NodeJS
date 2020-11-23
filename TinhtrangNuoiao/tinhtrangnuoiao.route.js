const express = require('express');
const router = express.Router();

const TinhtrangnaController = require('./tinhtrangnuoiao.controller');

router.get('/tinhtrangnuoiao', TinhtrangnaController.getlist);
router.get('/tinhtrangnuoiao/:id', TinhtrangnaController.tinhtrangnabyId);
router.post('/tinhtrangnuoiao', TinhtrangnaController.create);
router.put('/tinhtrangnuoiao/:id', TinhtrangnaController.edit);
router.delete('/tinhtrangnuoiao/:id', TinhtrangnaController.remove);


module.exports = router;