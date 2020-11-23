const mongoose = require('mongoose');
const schema = mongoose.Schema;

let TinhtrangnaSchema = new schema({
    ttna_ten: { type: String, required: true },
});

module.exports = mongoose.model('Tinhtrangnuoiao', TinhtrangnaSchema);