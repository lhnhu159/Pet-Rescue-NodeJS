const { response } = require('express');
const DanhmucTintuc = require('./dmtintuc.model');
//------------GET LIST DANH MUC TIN TUC------------------//
exports.getlist = async(request, response) => {
    try {
        var dm = await DanhmucTintuc.find().exec();
        response.send(dm);
    } catch (error) {
        response.send(error);
    }
};
//--------------------FIND DANH MUC TIN TUC-----------------------//
exports.findDanhmucTintuc = async(request, response) => {
    try {
        var dm = await DanhmucTintuc.find(request.body).exec();
        response.send(dm);
    } catch (error) {
        response.send(error);
    }
};
//CREATE DANH MUC TIN TUC
exports.create = async(request, response) => {
    try {
        var dm = new DanhmucTintuc(request.body);
        var result = await dm.save();
        response.json({
            success: true,
            message: 'Create Danh muc tin tuc successfully',
            Danhmuctintuc: result
        });
    } catch (error) {
        response.send(error);
    }
};
//UPDATE DANH MUC TIN TUC
exports.edit = async(request, response) => {
    try {
        var result = await DanhmucTintuc.update({ _id: request.params.id }, { $set: request.body }).exec();
        var dm = await DanhmucTintuc.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Tin tuc successfully',
            DanhmucTin: dm
        });
    } catch (error) {
        response.send(error);
    }
}

//REMOVE DANH MUC TIN TUC
exports.remove = async(request, response) => {
    try {
        var result = await DanhmucTintuc.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Danh muc Tin tuc is removed"
        });
    } catch (error) {
        response.send(error);
    }
};