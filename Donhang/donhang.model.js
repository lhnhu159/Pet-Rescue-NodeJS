const mongoose = require('mongoose');
const schema = mongoose.Schema;

let DonhangSchema = new schema({
    dh_total: { type: Number, required: true },
    dh_ngaytaodon: { type: Date, required: true },
    ttdh_id: { type: String },
    httt_id: { type: String, require: true },
    dh_nuoiao: { type: Boolean },
    ungho_mota: { type: String },
    tk_id: { type: String },
    dh_note: { type: String },
    ten: { type: String },
    diachi: { type: String },
    sodienthoai: { type: String },
    ungho: { type: String },
    token: { type: String },
    tienhang: { type: String },
    huydon: { type: Boolean },
});

module.exports = mongoose.model('Donhang', DonhangSchema);