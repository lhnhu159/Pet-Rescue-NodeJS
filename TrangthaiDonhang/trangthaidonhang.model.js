const mongoose = require('mongoose');
const schema = mongoose.Schema;

let TrangthaidonhangSchema = new schema({
    ttdh_ten: { type: String, required: true },
});

module.exports = mongoose.model('Trangthaidonhang', TrangthaidonhangSchema);