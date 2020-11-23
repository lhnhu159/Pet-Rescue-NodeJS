const { response } = require('express');
const Nuoiao = require('./nuoiao.model');
//GET LIST NUOI AO
exports.getlist = async(request, response) => {
    try {
        var na = await Nuoiao.find().exec();
        response.send(na);
    } catch (error) {
        response.send(error);
    }
};

//GET NUOI AO BY ID
exports.NuoiaobyId = async(request, response) => {
    try {
        var na = await Nuoiao.findById(request.params.id).exec();
        response.send(na);
    } catch (error) {
        response.send(error);
    }
};

//GET NUOI AO BY USER
exports.NuoiaobyUser = async(request, response) => {
    try {
        var na = await Nuoiao.find({ tk_id: request.body.tk_id }).exec();
        response.send(na);
    } catch (error) {
        response.send(error);
    }
}

// GET NUOI AO BY DONG VAT
exports.NuoiaobyDongvat = async(request, response) => {
    try {
        var na = await Nuoiao.find({ dv_id: request.body.dv_id }).exec();
        response.send(na);
    } catch (error) {
        response.send(error);
    }
}

// GET NUOI AO BY USER-DONGVAT
exports.NuoiaobyUserDongVat = async(request, response) => {
    try {
        var na = await Nuoiao.find({ tk_id: request.body.tk_id, dv_id: request.body.dv_id }).exec();
        response.send(na);
    } catch (error) {
        response.send(error);
    }
}

//CREATE NUOI AO
exports.create = async(request, response) => {
    try {
        var na = new Nuoiao(request.body);
        na.nna_ngaynhan = Date.now();
        var result = await na.save();
        response.json({
            success: true,
            message: 'Create Nuoi ao successfully',
            nuoiao: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE NUOI AO
exports.edit = async(request, response) => {
    try {
        var result = await Nuoiao.update({ _id: request.params.id }, { $set: request.body }).exec();
        var na = await Nuoiao.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Nuoi ao successfully',
            nuoiao: na
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE NUOI AO
exports.remove = async(request, response) => {
    try {
        var result = await Nuoiao.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Nuoi ao is removed"
        });
    } catch (error) {
        response.send(error);
    }
};