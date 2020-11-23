const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let DanhmucTintucSchema = new Schema({
    tendanhmuc: { type: String },
    mota: { type: String },
});
module.exports = mongoose.model('DanhmucTintuc', DanhmucTintucSchema);