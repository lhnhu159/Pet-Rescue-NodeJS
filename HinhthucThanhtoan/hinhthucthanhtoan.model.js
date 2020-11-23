const mongoose = require('mongoose');
const schema = mongoose.Schema;

let HinhthucttSchema = new schema({
    httt_ten: { type: String, required: true },
});

module.exports = mongoose.model('Hinhthucthanhtoan', HinhthucttSchema);