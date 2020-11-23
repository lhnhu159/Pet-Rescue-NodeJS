const express = require('express');
const router = express.Router();
const StripeController = require('./stripe.controller');
const upload = require('../Hinhanh/upload');
const auth = require('../User/auth');
const verify = auth.validate;
router.post('/stripe', upload.single('url'), StripeController.stripeCreate);
module.exports = router;