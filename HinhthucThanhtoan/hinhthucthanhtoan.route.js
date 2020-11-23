const express = require('express');
const router = express.Router();

const htttController = require('./hinhthucthanhtoan.controller');

router.get('/hinhthucthanhtoan', htttController.getlist);
router.get('/hinhthucthanhtoan/:id', htttController.htttbyId);
router.post('/hinhthucthanhtoan', htttController.create);
router.put('/hinhthucthanhtoan/:id', htttController.edit);
router.delete('/hinhthucthanhtoan/:id', htttController.remove);


module.exports = router;