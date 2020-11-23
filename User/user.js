const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { use } = require('../Mau/mau.route');

let UserSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: { type: String },
    email: { type: String },
    diachi: { type: String },
    phone: { type: String },
    hinhanh: { type: String },
    gioitinh: { type: String },
    ngaysinh: { type: Date }

})
UserSchema.methods.deleteToken = function(token, cb) {
    var user = this;
    user.update({ $unset: { token: null } }, function(err, user) {
        if (err) return cb(err);
        cb(null, user)
    })
}
const User = mongoose.model('User', UserSchema);
module.exports = User;