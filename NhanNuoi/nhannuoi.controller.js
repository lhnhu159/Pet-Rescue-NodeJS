const { response } = require('express');
const Nhannuoi = require('./nhannuoi.model');
//GET LIST NHAN NUOI
exports.getlist = async(request, response) => {
    try {
        var nn = await Nhannuoi.find().exec();
        response.send(nn);
    } catch (error) {
        response.send(error);
    }
};

//GET NHAN NUOI BY ID
exports.nhannuoibyId = async(request, response) => {
    try {
        var nn = await Nhannuoi.findById(request.params.id).exec();
        response.send(nn);
    } catch (error) {
        response.send(error);
    }
};

//GET NHAN NUOI BY USER ID
exports.nhannuoibyuser = async(request, response) => {
    try {
        var nn = await Nhannuoi.find({ tk_id: request.body.tk_id });
        response.send(nn);
    } catch (error) {
        response.send(error);
    }
}

//CREATE NHAN NUOI
exports.create = async(request, response) => {
    try {
        var nn = new Nhannuoi(request.body);
        nn.nn_ngaynhan = Date.now();
        nn.nn_duyet = false;
        nn.success = false;
        var result = await nn.save();
        response.json({
            success: true,
            message: 'Create Nhan nuoi successfully',
            nhannuoi: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE NHANNUOI
exports.edit = async(request, response) => {
    try {
        var result = await Nhannuoi.update({ _id: request.params.id }, { $set: request.body }).exec();
        var nn = await Nhannuoi.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Nhan nuoi successfully',
            nhannuoi: nn
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE DANH MUC
exports.remove = async(request, response) => {
    try {
        var result = await Nhannuoi.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Nhan nuoi is removed"
        });
    } catch (error) {
        response.send(error);
    }
};