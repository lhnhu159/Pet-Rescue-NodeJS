const mongoose = require('mongoose');
const schema = mongoose.Schema;

let HoatdongSchema = new schema({
    ten: { type: String },
    noidung: { type: String },
    ngaybatdau: { type: Date },
    ngayketthuc: { type: Date },
    diadiem: { type: String },
    hinhanh: { type: String },
});

module.exports = mongoose.model('Hoatdong', HoatdongSchema);