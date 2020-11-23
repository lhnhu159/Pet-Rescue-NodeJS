const mongoose = require('mongoose');
const schema = mongoose.Schema;

let GiongSchema = new schema({
    giong_ten: { type: String, required: true }
});

module.exports = mongoose.model('Giong', GiongSchema);