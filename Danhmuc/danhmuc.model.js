const mongoose = require('mongoose');
const schema = mongoose.Schema;

let danhmucSchema = new schema({
    dm_ten: { type: String, required: true },
});

module.exports = mongoose.model('Danhmuc', danhmucSchema);