const { response } = require('express');
const Tinhtrangna = require('./tinhtrangnuoiao.model');
//GET LIST TINH TRANG NUOI AO
exports.getlist = async(request, response) => {
    try {
        var ttna = await Tinhtrangna.find().exec();
        response.send(ttna);
    } catch (error) {
        response.send(error);
    }
};

//GET TINH TRANG NUOI AO BY ID
exports.tinhtrangnabyId = async(request, response) => {
    try {
        var ttna = await Tinhtrangna.findById(request.params.id).exec();
        response.send(ttna);
    } catch (error) {
        response.send(error);
    }
};


//CREATE TINH TRANG NUOI AO
exports.create = async(request, response) => {
    try {
        var ttna = new Tinhtrangna(request.body);
        var result = await ttna.save();
        response.json({
            success: true,
            message: 'Create Tinh trang nuoi ao successfully',
            ttna: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE TINH TRANG NUOI AO
exports.edit = async(request, response) => {
    try {
        var result = await Tinhtrangna.update({ _id: request.params.id }, { $set: request.body }).exec();
        var ttna = await Tinhtrangna.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Tinh trang nuoi ao successfully',
            ttna: ttna
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE DANH MUC
exports.remove = async(request, response) => {
    try {
        var result = await Tinhtrangna.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Tinh trang nuoi ao is removed"
        });
    } catch (error) {
        response.send(error);
    }
};