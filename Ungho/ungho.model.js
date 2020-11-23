const mongoose = require('mongoose');
const schema = mongoose.Schema;

let UnghoSchema = new schema({
    ngay: { type: Date },
    hinhthuc: { type: String },
    hoten: { type: String },
    diachi: { type: String },
    sodienthoai: { type: String },
    user_id: { type: String },
    sotien: { type: String },
    mota: { type: String },
});

module.exports = mongoose.model('Ungho', UnghoSchema);