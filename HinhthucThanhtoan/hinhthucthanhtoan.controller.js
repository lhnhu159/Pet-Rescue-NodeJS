const { response } = require('express');
const Hinhthuctt = require('./hinhthucthanhtoan.model');
//GET LIST HINH THUC THANH TOAN
exports.getlist = async(request, response) => {
    try {
        var httt = await Hinhthuctt.find().exec();
        response.send(httt);
    } catch (error) {
        response.send(error);
    }
};

//GET HINH THUC THANH TOAN BY ID
exports.htttbyId = async(request, response) => {
    try {
        var httt = await Hinhthuctt.findById(request.params.id).exec();
        response.send(httt);
    } catch (error) {
        response.send(error);
    }
};


//CREATE HINH THUC THANH TOAN
exports.create = async(request, response) => {
    try {
        var httt = new Hinhthuctt(request.body);
        var result = await httt.save();
        response.json({
            success: true,
            message: 'Create Hinh thuc thanh toan successfully',
            httt: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE HINH THUC THANH TOAN
exports.edit = async(request, response) => {
    try {
        var result = await Hinhthuctt.update({ _id: request.params.id }, { $set: request.body }).exec();
        var httt = await Hinhthuctt.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Hinh thuc thanh toan successfully',
            httt: httt
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE HINH THUC THANH TOAN
exports.remove = async(request, response) => {
    try {
        var result = await Hinhthuctt.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Hinh thuc thanh toan is removed"
        });
    } catch (error) {
        response.send(error);
    }
};