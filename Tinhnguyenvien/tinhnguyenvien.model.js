const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let TinhnguyenvienSchema = new Schema({
    hoten: { type: String, required: true },
    diachi: { type: String },
    sodienthoai: { type: String },
    dotuoi: { type: String },
    kinhnghiem: { type: String },
    group: { type: String },
    duyet: { type: Boolean },
});
module.exports = mongoose.model('Tinhnguyenvien', TinhnguyenvienSchema);