const { response } = require('express');
const Traloi = require('./traloi.model');
//GET LIST TRA LOI
exports.getlist = async(request, response) => {
    try {
        var tl = await Traloi.find().exec();
        response.send(tl);
    } catch (error) {
        response.send(error);
    }
};

//GET TRA LOI BY ID
exports.traloibyId = async(request, response) => {
    try {
        var tl = await Traloi.findById(request.params.id).exec();
        response.send(tl);
    } catch (error) {
        response.send(error);
    }
};

//GET TRA LOI BY BAI DANG
exports.traloibybaidang = async(request, response) => {
    try {
        var tl = await Traloi.find({ bd_id: request.body.bd_id }).exec();
        response.send(tl);
    } catch (error) {
        response.send(error);
    }
}

//CREATE TRA LOI
exports.create = async(request, response) => {
    try {
        var tl = new Traloi(request.body);
        tl.tl_ngay = Date.now();
        var result = await tl.save();
        response.json({
            success: true,
            message: 'Create Tra loi successfully',
            traloi: tl
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE TRA LOI
exports.edit = async(request, response) => {
    try {
        var result = await Traloi.update({ _id: request.params.id }, { $set: request.body }).exec();
        var tl = await Traloi.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Tra loi successfully',
            traloi: tl
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE TRA LOI
exports.remove = async(request, response) => {
    try {
        var result = await Traloi.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Tra loi is removed"
        });
    } catch (error) {
        response.send(error);
    }
};