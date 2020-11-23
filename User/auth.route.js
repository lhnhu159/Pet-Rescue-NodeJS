const express = require('express');
const router = express.Router();

const AuthController = require('./auth.controller');
const auth = require('./auth');
const upload = require('../Hinhanh/upload');
const verify = auth.validate;
router.put('/edit-user/:id', verify, upload.single('hinhanh'), AuthController.edit);
router.post('/register', AuthController.register);
router.post('/verify', auth.validate);
router.post('/logout', verify, AuthController.logout);
router.get('/get-user/:id', verify, AuthController.getUser);
router.get('/list-user', AuthController.getlistUser);
module.exports = router;