const { response } = require('express');
const Chiphi = require('./chiphi.model');

//GET LIST MAU
exports.getlist = async(request, response) => {
    try {
        var chiphi = await Chiphi.find().exec();
        response.send(chiphi);
    } catch (error) {
        response.send(error);
    }
};

//GET MAU BY ID
exports.chiphiDetails = async(request, response) => {
    try {
        var chiphi = await Chiphi.findById(request.params.id).exec();
        response.send(chiphi);
    } catch (error) {
        response.send(error);
    }
};

//CREATE MAU
exports.create = async(request, response) => {
    try {
        var chiphi = new Chiphi(request.body);
        var result = await chiphi.save();
        response.json({
            success: true,
            message: 'Create Chi phi successfully',
            chiphi: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE MAU
exports.edit = async(request, response) => {
    try {
        var result = await Chiphi.update({ _id: request.params.id }, { $set: request.body }).exec();
        var chiphi = await Chiphi.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Chi phi successfully',
            chiphi: chiphi
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE MAU
exports.remove = async(request, response) => {
    try {
        var result = await Chiphi.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Chi phi is removed"
        });
    } catch (error) {
        response.send(error);
    }
};