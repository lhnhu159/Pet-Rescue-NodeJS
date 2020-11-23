const { response } = require('express');
const Danhmuc = require('./danhmuc.model');
//GET LIST DANH MUC
exports.getlist = async(request, response) => {
    try {
        var dm = await Danhmuc.find().exec();
        response.send(dm);
    } catch (error) {
        response.send(error);
    }
};

//GET DANH MUC BY ID
exports.danhmucbyId = async(request, response) => {
    try {
        var dm = await Danhmuc.findById(request.params.id).exec();
        response.send(dm);
    } catch (error) {
        response.send(error);
    }
};


//CREATE DANH MUC
exports.create = async(request, response) => {
    try {
        var danhmuc = new Danhmuc(request.body);
        var result = await danhmuc.save();
        response.json({
            success: true,
            message: 'Create Danh muc successfully',
            danhmuc: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE DANH MUC
exports.edit = async(request, response) => {
    try {
        var result = await Danhmuc.update({ _id: request.params.id }, { $set: request.body }).exec();
        var dm = await Danhmuc.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Danh muc successfully',
            danhmuc: dm
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE DANH MUC
exports.remove = async(request, response) => {
    try {
        var result = await Danhmuc.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Danh muc is removed"
        });
    } catch (error) {
        response.send(error);
    }
};