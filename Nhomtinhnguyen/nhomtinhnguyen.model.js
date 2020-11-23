const mongoose = require('mongoose');
const schema = mongoose.Schema;

let NhomtinhnguyenSchema = new schema({
    tennhom: { type: String },
});

module.exports = mongoose.model('Nhomtinhnguyen', NhomtinhnguyenSchema);