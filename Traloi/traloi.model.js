const mongoose = require('mongoose');
const schema = mongoose.Schema;

let traloiSchema = new schema({
    tl_noidung: { type: String, required: true },
    tl_ngay: { type: Date },
    bd_id: { type: String },
    tk_id: { type: String }
});

module.exports = mongoose.model('Traloi', traloiSchema);