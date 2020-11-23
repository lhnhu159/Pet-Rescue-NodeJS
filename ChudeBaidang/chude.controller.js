const { response } = require('express');
const Chude = require('./chude.model');

//GET LIST CHU DE
exports.getlist = async(request, response) => {
    try {
        var chude = await Chude.find().exec();
        response.send(chude);
    } catch (error) {
        response.send(error);
    }
};

//GET CHU DE BY ID
exports.chudebyId = async(request, response) => {
    try {
        var chude = await Chude.findById(request.params.id).exec();
        response.send(chude);
    } catch (error) {
        response.send(error);
    }
};

//CREATE CHU DE
exports.create = async(request, response) => {
    try {
        var chude = new Chude(request.body);
        var result = await chude.save();
        response.json({
            success: true,
            message: 'Create Chu de successfully',
            chude: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE CHU DE
exports.edit = async(request, response) => {
    try {
        var result = await Chude.update({ _id: request.params.id }, { $set: request.body }).exec()
        var chude = await Chude.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Chu de successfully',
            chude: chude
        });
    } catch (error) {
        response.send(error);
    }
}

//REMOVE CHU DE
exports.remove = async(request, response) => {
    try {
        var result = await Chude.deleteOne({ _id: request.params.id }).exec();
        response.json({
            success: true,
            message: "Giong is removed"
        });
    } catch (error) {
        response.send(error);
    }
};