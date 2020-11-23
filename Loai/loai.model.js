const mongoose = require('mongoose');
const schema = mongoose.Schema;

let LoaiSchema = new schema({
    loai_ten: { type: String },
    giong_id: { type: String }
});

module.exports = mongoose.model('Loai', LoaiSchema);