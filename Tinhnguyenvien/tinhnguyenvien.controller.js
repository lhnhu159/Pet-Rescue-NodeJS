const { response } = require('express');
const Tnv = require('./tinhnguyenvien.model');
//------------GET LIST TINH NGUYEN VIEN------------------//
exports.getlist = async(request, response) => {
    try {
        var tnv = await Tnv.find().exec();
        response.send(tnv);
    } catch (error) {
        response.send(error);
    }
};
//--------------------FIND TINH NGUYEN VIEN-----------------------//
exports.find = async(request, response) => {
    try {
        var tnv = await Tnv.find(request.body).exec();
        response.send(tnv);
    } catch (error) {
        response.send(error);
    }
};
//CREATE TINH NGUYEN VIEN
exports.create = async(request, response) => {
    try {
        var tnv = new Tnv(request.body);
        tnv.duyet = false;
        var result = await tnv.save();
        response.json({
            success: true,
            message: 'Create tinh nguyen vien successfully',
            tnv: result
        });
    } catch (error) {
        response.send(error);
    }
};
//UPDATE TINH NGUYEN VIEN
exports.edit = async(request, response) => {
    try {
        var result = await Tnv.update({ _id: request.params.id }, { $set: request.body }).exec();
        var tnv = await Tnv.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Tinh nguyen vien successfully',
            tnv: tnv
        });
    } catch (error) {
        response.send(error);
    }
}

//REMOVE TINH NGUYEN VIEN
exports.remove = async(request, response) => {
    try {
        var result = await Tnv.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Tinh nguyen vien is removed"
        });
    } catch (error) {
        response.send(error);
    }
};