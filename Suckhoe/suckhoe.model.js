const mongoose = require('mongoose');
const schema = mongoose.Schema;

let SuckhoeSchema = new schema({
    ttsk_tentinhtrang: { type: String, required: true }
});

module.exports = mongoose.model('Suckhoe', SuckhoeSchema);