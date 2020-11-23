const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DongVatSchema = new Schema({
    dv_ten: { type: String, required: true },
    dv_cannang: { type: String },
    dv_dotuoi: { type: String },
    dv_mota: { type: String },
    dv_hinhanh: { type: String },
    dv_lydoden: { type: String },
    dv_thongtinthem: { type: String },
    dv_ngaytiemphong: { type: Date },
    dv_ngayden: { type: Date },
    dv_isactive: { type: Boolean },
    dv_gioitinh: { type: String },
    giong_id: { type: String },
    ttsk_id: { type: String },
    mau_id: { type: String },
    dv_tiemphong: { type: Boolean },
    nna_id: { type: String },
    ttch_id: { type: String },
    nn_id: { type: String },
    loai_id: { type: String },
    dv_bengoan: { type: Boolean },
});
module.exports = mongoose.model('DongVat', DongVatSchema);