const mongoose = require('mongoose');
const schema = mongoose.Schema;

let HinhanhSchema = new schema({
    url: { type: String },
    dv_id: { type: String }
});

module.exports = mongoose.model('Hinhanh', HinhanhSchema);