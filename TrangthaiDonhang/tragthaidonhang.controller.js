const { response } = require('express');
const Trangthaidh = require('./trangthaidonhang.model');
//GET LIST TRANG THAI DON HANG
exports.getlist = async(request, response) => {
    try {
        var ttdh = await Trangthaidh.find().exec();
        response.send(ttdh);
    } catch (error) {
        response.send(error);
    }
};

//GET TRANG THAI DON HANG BY ID
exports.ttdhbyId = async(request, response) => {
    try {
        var ttdh = await Trangthaidh.findById(request.params.id).exec();
        response.send(ttdh);
    } catch (error) {
        response.send(error);
    }
};


//CREATE TRANG THAI DON HANG
exports.create = async(request, response) => {
    try {
        var ttdh = new Trangthaidh(request.body);
        var result = await ttdh.save();
        response.json({
            success: true,
            message: 'Create Trang thai don hang successfully',
            ttdh: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE TRANG THAI DON HANG
exports.edit = async(request, response) => {
    try {
        var result = await Trangthaidh.update({ _id: request.params.id }, { $set: request.body }).exec();
        var ttdh = await Trangthaidh.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Trang thai don hang successfully',
            ttdh: ttdh
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE TRANG THAI DON HANG
exports.remove = async(request, response) => {
    try {
        var result = await Trangthaidh.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Trang thai don hang is removed"
        });
    } catch (error) {
        response.send(error);
    }
};