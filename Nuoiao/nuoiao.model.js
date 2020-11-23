const mongoose = require('mongoose');
const schema = mongoose.Schema;

let NuoiaoSchema = new schema({
    nna_ngaynhan: { type: String, required: true },
    dv_id: { type: String, required: true },
    tk_id: { type: String, required: true },
    ttna_id: { type: String, required: true }
});

module.exports = mongoose.model('Nuoiao', NuoiaoSchema);