const { response } = require('express');
const Nhomtinhnguyen = require('./nhomtinhnguyen.model');

//GET LIST NHOM TINH NGUYEN
exports.getlist = async(request, response) => {
    try {
        var ntn = await Nhomtinhnguyen.find().exec();
        response.send(ntn);
    } catch (error) {
        response.send(error);
    }
};

//CREATE NHOM TINH NGUYEN
exports.create = async(request, response) => {
    try {
        var ntn = new Nhomtinhnguyen(request.body);
        var result = await ntn.save();
        response.json({
            success: true,
            message: 'Create nhom tinh nguyen successfully',
            ntn: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE NHOM TINH NGUYEN
exports.edit = async(request, response) => {
    try {
        var result = await Nhomtinhnguyen.update({ _id: request.params.id }, { $set: request.body }).exec();
        var ntn = await Nhomtinhnguyen.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit nhom tinh nguyen successfully',
            ntn: ntn
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE NHOM TINH NGUYEN
exports.remove = async(request, response) => {
    try {
        var result = await Nhomtinhnguyen.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Nhom tinh nguyen is removed"
        });
    } catch (error) {
        response.send(error);
    }
};