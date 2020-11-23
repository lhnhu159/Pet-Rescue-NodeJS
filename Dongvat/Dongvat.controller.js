const { response, request } = require('express');
const sanphamModel = require('../Sanpham/sanpham.model');
const Dongvat = require('./Dongvat.model');

//Get list DONG VAT
exports.getlist = async(request, response) => {
    try {
        var dongvat = await Dongvat.find().exec();
        response.send(dongvat);
    } catch (error) {
        response.send(error);
    }
};

//GET DONG VAT DETAILS
exports.dongvat_details = async(request, response) => {
    try {
        var dongvat = await Dongvat.findById(request.params.id).exec();
        response.send(dongvat);
    } catch (error) {
        response.status(500).send(error);
    }
}

//GET BE NGOAN
exports.bengoan = async(request, response) => {
        try {
            var dongvat = await Dongvat.find({ dv_bengoan: true }).exec();
            response.send(dongvat);
        } catch (error) {
            response.send(error);
        }
    }
    //FIND DONG VAT
exports.findDongvat = async(request, response) => {
        try {
            var dongvat = await Dongvat.find(request.body).exec();
            response.send(dongvat);
        } catch (error) {
            response.send(error);
        }
    }
    //CREATE DONG VAT
exports.create = async(request, response) => {
    try {
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`
        var dongvat = new Dongvat(request.body);
        dongvat.dv_hinhanh = url;
        var result = await dongvat.save();
        response.json({
            success: true,
            message: 'Create Dong vat successfully',
            Dongvat: result
        });
    } catch (error) {
        response.send(error);

    }
};

//UPDATE DONG VAT
exports.edit = async(request, response) => {
    try {
        if (!request.file) {
            var result = await Dongvat.update({ _id: request.params.id }, { $set: request.body }).exec();
            var dongvat = await Dongvat.findById(request.params.id).exec();
            return response.json({
                id: request.params.id,
                success: true,
                message: 'Edit Dong vat successfully',
                Dongvat: dongvat
            });
        }
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        await Dongvat.update({ _id: request.params.id }, { $set: request.body, dv_hinhanh: url }).exec();
        var dongvat = await Dongvat.findById(request.params.id).exec();
        return response.json({
            id: request.params.id,
            success: true,
            message: 'Edit Dong vat successfully',
            Dongvat: dongvat
        });
    } catch (error) {
        response.send(error);
    }
};

//REMOVE DONG VAT
exports.remove = async(request, response) => {
    try {
        var result = await Dongvat.deleteOne({ _id: request.params.id }).exec();
        response.json({
            success: true,
            message: "Dong vat is removed"
        });
    } catch (error) {
        response.send(error);
    }
};