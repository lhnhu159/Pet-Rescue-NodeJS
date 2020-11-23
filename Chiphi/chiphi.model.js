const mongoose = require('mongoose');
const schema = mongoose.Schema;

let chiphiSchema = new schema({
    dvcp_sotien: { type: Number, required: true },
    dvcp_mota: { type: String, required: true },
    dvcp_ngay: { type: Date, required: true },
    dv_id: { type: String, require: true }
});

module.exports = mongoose.model('Chiphi', chiphiSchema);