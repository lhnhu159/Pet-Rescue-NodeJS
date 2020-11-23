const { response } = require('express');
const Suckhoe = require('./suckhoe.model');

//GET LIST SUC KHOE
exports.getlist = async(request, response) => {
    try {
        var sk = await Suckhoe.find().exec();
        response.send(sk);
    } catch (error) {
        response.send(error);
    }
};

//GET SUC KHOE BY ID
exports.skbyId = async(request, response) => {
    try {
        var sk = await Suckhoe.findById(request.params.id).exec();
        response.send(sk);
    } catch (error) {
        response.send(error);
    }
};

//CREATE SUC KHOE
exports.create = async(request, response) => {
    try {
        var sk = new Suckhoe(request.body);
        var result = await sk.save();
        response.json({
            success: true,
            message: 'Create Suc khoe successfully',
            Giong: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE SUC KHOE
exports.edit = async(request, response) => {
    try {
        var result = await Suckhoe.update({ _id: request.params.id }, { $set: request.body }).exec();
        var sk = await Suckhoe.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Suc khoe successfully',
            Suckhoe: sk
        });
    } catch (error) {
        response.send(error);
    }
}

//REMOVE SUC KHOE
exports.remove = async(request, response) => {
    try {
        var result = await Suckhoe.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Suc khoe is removed"
        });
    } catch (error) {
        response.send(error);
    }
};