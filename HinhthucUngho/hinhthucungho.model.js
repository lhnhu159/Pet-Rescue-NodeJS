const mongoose = require('mongoose');
const schema = mongoose.Schema;

let HinhthucuhSchema = new schema({
    htuh_ten: { type: String, required: true },
});

module.exports = mongoose.model('Hinhthucungho', HinhthucuhSchema);