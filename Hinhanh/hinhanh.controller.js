const { response } = require('express');
const Hinhanh = require('./hinhanh.model');

//CREATE HINH ANH
exports.UploadHinh = async(request, response) => {
    try {
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        var hinhanh = new Hinhanh();
        hinhanh.url = url;
        hinhanh.dv_id = request.body.dv_id;
        var result = await hinhanh.save();
        response.json({
            success: true,
            message: "Upload successfully",
            Hinhanh: result
        });
    } catch (error) {
        response.send(error);
    }

};
exports.Upload = async(request, response) => {
        try {
            var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
            response.send(url);
        } catch (error) {
            response.send(error);
        }
    }
    //GET LIST HINH ANH
exports.getlist = async(request, response) => {
    try {
        var hinhanh = await Hinhanh.find().exec();
        response.send(hinhanh);
    } catch (error) {
        response.send(error);
    }
}

//GET HINH ANH BY ID
exports.hinhbyId = async(request, response) => {
    try {
        var hinhanh = await Hinhanh.findById(request.params.id).exec();
        response.send(hinhanh);
    } catch (error) {
        response.send(error);
    }
}

//DELETE HINH ANH
exports.removehinh = async(request, response) => {
    try {
        await Hinhanh.deleteOne({ _id: request.params.id }).exec();
        response.json({
            success: true,
            message: "Hinh anh is removed"
        });
    } catch (error) {
        response.send(error);
    }
}

//GET HINH ANH BY DONG VAT ID
exports.hinhbyDV = async(request, response) => {
    try {
        hinhanh = await Hinhanh.find({ dv_id: request.body.dv_id }).exec();
        response.send(hinhanh);
    } catch (error) {
        response.send(error);
    }
}