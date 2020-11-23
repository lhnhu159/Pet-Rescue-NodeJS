const { response } = require('express');
const Loai = require('./loai.model');

//GET LIST LOAI
exports.getlist = async(request, response) => {
    try {
        var loai = await Loai.find().exec();
        response.send(loai);
    } catch (error) {
        response.send(error);
    }
};

//GET LOAI BY ID
exports.loaibyId = async(request, response) => {
    try {
        var loai = await Loai.findById(request.params.id).exec();
        response.send(loai);
    } catch (error) {
        response.send(error);
    }
};

//GET GIONG BY LOAI
exports.giongbyLoai = async(request, response) => {
    try {
        var giong = await Loai.find({ giong_id: request.body.giong_id }).exec();
        response.send(giong);
    } catch (error) {
        response.send(error);
    }
}

//CREATE LOAI
exports.create = async(request, response) => {
    try {
        var loai = new Loai(request.body);
        var result = await loai.save();
        response.json({
            success: true,
            message: 'Create loai successfully',
            loai: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE LOAI
exports.edit = async(request, response) => {
    try {
        var result = await Loai.update({ _id: request.params.id }, { $set: request.body }).exec();
        var loai = await Loai.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit loai successfully',
            loai: loai
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE LOAI
exports.remove = async(request, response) => {
    try {
        var result = await Loai.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Loai is removed"
        });
    } catch (error) {
        response.send(error);
    }
};