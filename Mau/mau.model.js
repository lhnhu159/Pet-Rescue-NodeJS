const mongoose = require('mongoose');
const schema = mongoose.Schema;

let MauSchema = new schema({
    mau_ten: { type: String },
});

module.exports = mongoose.model('Mau', MauSchema);