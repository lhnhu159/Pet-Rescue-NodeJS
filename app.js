const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');



const dongvat = require('./Dongvat/Dongvat.route');
const giong = require('./Giong/giong.route');
const suckhoe = require('./Suckhoe/suckhoe.route');
const mau = require('./Mau/mau.route');
const hinhanh = require('./Hinhanh/hinhanh.route');
const auth = require('./User/auth.route');
const validate = require('./User/auth');
const chude = require('./ChudeBaidang/chude.route');
const baidang = require('./Baidang/baidang.route');
const chiphi = require('./Chiphi/chiphi.route');
const danhmuc = require('./Danhmuc/danhmuc.route');
const sanpham = require('./Sanpham/sanpham.route');
const nhannuoi = require('./NhanNuoi/nhannuoi.route');
const nuoiao = require('./Nuoiao/nuoiao.route');
const trangthaidonhang = require('./TrangthaiDonhang/trangthaidonhang.route');
const tinhtrangnuoiao = require('./TinhtrangNuoiao/tinhtrangnuoiao.route');
const hinhthucungho = require('./HinhthucUngho/hinhthucungho.route');
const traloi = require('./Traloi/traloi.route');
const httt = require('./HinhthucThanhtoan/hinhthucthanhtoan.route');
const giohang = require('./Giohang/giohang.route');
const donhang = require('./Donhang/donhang.route');
const loai = require('./Loai/loai.route');
const tintuc = require('./Tintuc/tintuc.route');
const danhmuctintuc = require('./DanhmucTintuc/dmtintuc.route');
const stripe = require('./Stripe/stripe.route');
const ungho = require('./Ungho/ungho.route');
const tnv = require('./Tinhnguyenvien/tinhnguyenvien.route');
const ntn = require('./Nhomtinhnguyen/nhomtinhnguyen.route');
const hoatdong = require('./Hoatdong/hoatdong.route');
let port = 5959;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Router
app.use(cors());
app.use(dongvat);
app.use(giong);
app.use(suckhoe);
app.use(mau);
app.use(hinhanh);
app.use(auth);
app.use('/uploads', express.static('img'));
app.use(chude);
app.use(baidang);
app.use(chiphi);
app.use(danhmuc);
app.use(sanpham);
app.use(nhannuoi);
app.use(nuoiao);
app.use(trangthaidonhang);
app.use(tinhtrangnuoiao);
app.use(hinhthucungho);
app.use(traloi);
app.use(httt);
app.use(giohang);
app.use(donhang);
app.use(loai);
app.use(tintuc);
app.use(danhmuctintuc);
app.use(stripe);
app.use(ungho);
app.use(tnv);
app.use(ntn);
app.use(hoatdong);
//Configuring the database
const dbConfig = 'mongodb://localhost:27017/petcare';
const mongoose = require('mongoose');

//Connecting to the database
mongoose.connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected database successfully");
    })
    .catch(err => {
        console.log('Cannot conected database', err);
        process.exit();
    });
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});