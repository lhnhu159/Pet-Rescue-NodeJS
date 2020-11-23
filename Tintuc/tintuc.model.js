const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let TintucSchema = new Schema({
    tieude: { type: String, required: true },
    noidung: { type: String },
    ngaytao: { type: Date },
    dv_id: { type: String },
    hinhanh: { type: String },
    mota: { type: String },
    noibat: { type: Boolean },
    danhmuc: { type: String },
});
module.exports = mongoose.model('Tintuc', TintucSchema);