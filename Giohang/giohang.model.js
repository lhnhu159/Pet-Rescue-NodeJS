const mongoose = require('mongoose');
const schema = mongoose.Schema;

let GiohangSchema = new schema({
    ctdh_thanhtien: { type: String, required: true },
    ctdh_soluong: { type: String, required: true },
    dh_id: { type: String },
    tk_id: { type: String },
    sp_id: { type: String, required: true }
});

module.exports = mongoose.model('Giohang', GiohangSchema);