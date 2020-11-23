const mongoose = require('mongoose');
const schema = mongoose.Schema;

let NhannuoiSchema = new schema({
    nn_ngaynhan: { type: Date },
    nn_duyet: { type: Boolean },
    dv_id: { type: String },
    tk_id: { type: String },
    phone: { type: String },
    email: {
        type: String
    },
    diachi: { type: String },
    haspet: { type: Boolean },
    ngaysinh: { type: Date },
    gioitinh: { type: String },
    ten: { type: String },
    success: { type: Boolean },
});

module.exports = mongoose.model('Nhannuoi', NhannuoiSchema);