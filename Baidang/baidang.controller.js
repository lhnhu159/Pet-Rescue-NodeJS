const { response } = require('express');
const Baidang = require('./baidang.model');
const Chude = require('../ChudeBaidang/chude.model');
//GET LIST MAU
exports.getlist = async(request, response) => {
    try {
        var bd = await Baidang.find().exec();
        response.send(bd);
    } catch (error) {
        response.send(error);
    }
};

//GET MAU BY ID
exports.baidangbyId = async(request, response) => {
    try {
        var baidang = await Baidang.findById(request.params.id).exec();
        response.send(baidang);
    } catch (error) {
        response.send(error);
    }
};

//GET BAI DANG BY CHU DE
exports.bdbyChude = async(request, response) => {
    try {
        var baidang = await Baidang.find({ cdbd_id: request.body.cdbd_id }).exec();
        response.send(baidang);
    } catch (error) {
        response.send(error);
    }
}

//GET BAI DANG BY USER
exports.baidangbyUser = async(request, response) => {
    try {
        var baidang = await Baidang.find({ user_id: request.body.user_id }).exec();
        response.send(baidang);
    } catch (error) {
        response.send(error);
    }
}

//GET BAI DANG BY USER AND CHU DE
exports.baidangUserCd = async(request, response) => {
        try {
            var baidang = await Baidang.find({ user_id: request.body.user_id, cdbd_id: request.body.cdbd_id }).exec();
            response.send(baidang);
        } catch (error) {
            response.send(error);
        }
    }
    //-------------FIND BAI DANG-----------------//
exports.findBaidang = async(request, response) => {
        try {
            var bd = await Baidang.find(request.body).exec();
            response.send(bd);
        } catch (error) {
            console.log(error);
        }
    }
    //CREATE MAU
exports.create = async(request, response) => {
    try {
        var baidang = new Baidang(request.body);
        baidang.bd_ngay = Date.now();
        var result = await baidang.save();
        response.json({
            success: true,
            message: 'Create Bai dang successfully',
            baidang: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE MAU
exports.edit = async(request, response) => {
    try {
        var result = await Baidang.update({ _id: request.params.id }, { $set: request.body }).exec();
        var bd = await Baidang.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit bai dang successfully',
            baidang: bd
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE MAU
exports.remove = async(request, response) => {
    try {
        var result = await Baidang.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Bai dang is removed"
        });
    } catch (error) {
        response.send(error);
    }
};