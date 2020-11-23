const { response } = require('express');
const Hinhthucuh = require('./hinhthucungho.model');
//GET LIST HINH THUC UNG HO
exports.getlist = async(request, response) => {
    try {
        var htuh = await Hinhthucuh.find().exec();
        response.send(htuh);
    } catch (error) {
        response.send(error);
    }
};

//GET HINH THUC UNG HO BY ID
exports.hinhthucbyId = async(request, response) => {
    try {
        var htuh = await Hinhthucuh.findById(request.params.id).exec();
        response.send(htuh);
    } catch (error) {
        response.send(error);
    }
};


//CREATE HINH THUC UNG HO
exports.create = async(request, response) => {
    try {
        var htuh = new Hinhthucuh(request.body);
        var result = await htuh.save();
        response.json({
            success: true,
            message: 'Create Hinh thuc ung ho successfully',
            htuh: result,
            request: request.payload
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE HINH THUC UNG HO
exports.edit = async(request, response) => {
    try {
        var result = await Hinhthucuh.update({ _id: request.params.id }, { $set: request.body }).exec();
        var htuh = await Hinhthucuh.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Hinh thuc ung ho successfully',
            htuh: htuh
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE HINH THUC UNG HO
exports.remove = async(request, response) => {
    try {
        var result = await Hinhthucuh.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Hinh thuc ung ho is removed"
        });
    } catch (error) {
        response.send(error);
    }
};