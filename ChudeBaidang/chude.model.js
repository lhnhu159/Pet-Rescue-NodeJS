const mongoose = require('mongoose');
const schema = mongoose.Schema;

let ChudeSchema = new schema({
    cdbd_ten: { type: String, required: true }
});

module.exports = mongoose.model('Chude', ChudeSchema);