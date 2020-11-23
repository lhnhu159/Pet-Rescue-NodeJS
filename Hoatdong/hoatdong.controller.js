const { response } = require('express');
const { head } = require('request');
const Hoatdong = require('./hoatdong.model');
//GET LIST HOAT DONG
exports.getlist = async(request, response) => {
    try {
        var hd = await Hoatdong.find().exec();
        response.send(hd);
    } catch (error) {
        response.send(error);
    }
};


//CREATE HOAT DONG
exports.create = async(request, response) => {
    try {
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        var hd = new Hoatdong(request.body);
        hd.hinhanh = url;
        var result = await hd.save();
        response.json({
            success: true,
            message: 'Create Hoat dong successfully',
            hd: result,
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE HOAT DONG
exports.edit = async(request, response) => {
    try {
        if (!request.file) {
            var result = await Hoatdong.update({ _id: request.params.id }, { $set: request.body }).exec();
            var hd = await Hoatdong.findById(request.params.id).exec();
            return response.json({
                success: true,
                message: 'Edit Hoat dong successfully',
                hd: hd
            });
        }
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        var result = await Hoatdong.update({ _id: request.params.id }, { $set: request.body, hinhanh: url }).exec();
        var hd = await Hoatdong.findById(request.params.id).exec();
        return response.json({
            success: true,
            message: 'Edit Hoat dong successfully',
            hd: hd
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE HOAT DONG
exports.remove = async(request, response) => {
    try {
        var result = await Hoatdong.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Hoat dong is removed"
        });
    } catch (error) {
        response.send(error);
    }
};