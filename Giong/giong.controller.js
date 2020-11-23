const { response } = require('express');
const Giong = require('./giong.model');

//GET LIST GIONG
exports.getlist = async(request, response) => {
    try {
        var giong = await Giong.find().exec();
        response.send(giong);
    } catch (error) {
        response.send(error);
    }
};

//GET GIONG BY ID
exports.giongbyId = async(request, response) => {
    try {
        var giong = await Giong.findById(request.params.id).exec();
        response.send(giong);
    } catch (error) {
        response.send(error);
    }
};

//CREATE GIONG
exports.create = async(request, response) => {
    try {
        var giong = new Giong(request.body);
        var result = await giong.save();
        response.json({
            success: true,
            message: 'Create Giong successfully',
            Giong: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE GIONG
exports.edit = async(request, response) => {
    try {
        var result = await Giong.update({ _id: request.params.id }, { $set: request.body }).exec()
        var giong = await Giong.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Giong successfully',
            Giong: giong
        });
    } catch (error) {
        response.send(error);
    }
}

//REMOVE GIONG
exports.remove = async(request, response) => {
    try {
        var result = await Giong.deleteOne({ _id: request.params.id }).exec();
        response.json({
            success: true,
            message: "Giong is removed"
        });
    } catch (error) {
        response.send(error);
    }
};