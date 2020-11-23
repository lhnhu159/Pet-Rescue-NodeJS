const { response } = require('express');
const Donhang = require('./donhang.model');
//GET LIST DON HANG
exports.getlist = async(request, response) => {
    try {
        var dh = await Donhang.find().exec();
        response.send(dh);
    } catch (error) {
        response.send(error);
    }
};

//GET DON HANG BY ID
exports.donhangbyId = async(request, response) => {
    try {
        var dh = await Donhang.findById(request.params.id).exec();
        response.send(dh);
    } catch (error) {
        response.send(error);
    }
};

//GET DON HANG BY USER
exports.donhangbyUser = async(request, response) => {
    try {
        var dh = await Donhang.find({ tk_id: request.body.tk_id }).exec();
        response.send(dh);
    } catch (error) {
        response.send(error);
    }
}
exports.findOrder = async(request, response) => {
    try {
        var dh = await Donhang.find(request.body).exec();
        response.send(dh);
    } catch (error) {
        response.send(error);
    }
}

//CREATE DON HANG
exports.create = async(request, response) => {
    try {
        var donhang = new Donhang(request.body);
        donhang.dh_ngaytaodon = Date.now();
        donhang.ttdh_id = '';
        donhang.huydon = false;
        var result = await donhang.save();
        response.json({
            success: true,
            message: 'Create Don hang successfully',
            donhang: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE DON HANG
exports.edit = async(request, response) => {
    try {
        var result = await Donhang.update({ _id: request.params.id }, { $set: request.body }).exec();
        var dh = await Donhang.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Don hang successfully',
            donhang: dh
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE DON HANG
exports.remove = async(request, response) => {
    try {
        var result = await Donhang.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Don hang is removed"
        });
    } catch (error) {
        response.send(error);
    }
};