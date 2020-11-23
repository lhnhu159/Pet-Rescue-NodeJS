const mongoose = require('mongoose');
const schema = mongoose.Schema;

let baidangSchema = new schema({
    bd_ten: { type: String, required: true },
    bd_noidung: { type: String, required: true },
    bd_ngay: { type: Date, required: true },
    cdbd_id: { type: String, required: true },
    user_id: { type: String, require: true }
});

module.exports = mongoose.model('Baidang', baidangSchema);