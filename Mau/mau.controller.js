const { response } = require('express');
const Mau = require('./mau.model');

//GET LIST MAU
exports.getlist = async(request, response) => {
    try {
        var mau = await Mau.find().exec();
        response.send(mau);
    } catch (error) {
        response.send(error);
    }
};

//GET MAU BY ID
exports.maubyId = async(request, response) => {
    try {
        var mau = await Mau.findById(request.params.id).exec();
        response.send(mau);
    } catch (error) {
        response.send(error);
    }
};

//CREATE MAU
exports.create = async(request, response) => {
    try {
        var mau = new Mau(request.body);
        var result = await mau.save();
        response.json({
            success: true,
            message: 'Create mau successfully',
            mau: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE MAU
exports.edit = async(request, response) => {
    try {
        var result = await Mau.update({ _id: request.params.id }, { $set: request.body }).exec();
        var mau = await Mau.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit mau successfully',
            mau: mau
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE MAU
exports.remove = async(request, response) => {
    try {
        var result = await Mau.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Mau is removed"
        });
    } catch (error) {
        response.send(error);
    }
};