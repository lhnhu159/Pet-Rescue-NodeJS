const mongoose = require('mongoose');
const schema = mongoose.Schema;

let SanphamSchema = new schema({
    sp_ten: { type: String, required: true },
    sp_soluong: { type: Number, required: true },
    sp_dongia: { type: Number, required: true },
    sp_mota: { type: String },
    sp_hinhanh: { type: String },
    sp_thuonghieu: { type: String },
    sp_ngaytao: { type: String },
    dm_id: { type: String }
});

module.exports = mongoose.model('Sanpham', SanphamSchema);