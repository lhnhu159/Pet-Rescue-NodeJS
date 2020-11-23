const { response } = require('express');
const Tintuc = require('./tintuc.model');
//------------GET LIST TIN TUC------------------//
exports.getlist = async(request, response) => {
    try {
        var tintuc = await Tintuc.find().exec();
        response.send(tintuc);
    } catch (error) {
        response.send(error);
    }
};
//--------------------FIND TIN TUC-----------------------//
exports.findTintuc = async(request, response) => {
    try {
        var tt = await Tintuc.find(request.body).exec();
        response.send(tt);
    } catch (error) {
        response.send(error);
    }
};
//CREATE TIN TUC
exports.create = async(request, response) => {
    try {
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        var tt = new Tintuc(request.body);
        tt.hinhanh = url;
        tt.ngaytao = Date.now();
        var result = await tt.save();
        response.json({
            success: true,
            message: 'Create tin tuc successfully',
            tintuc: result
        });
    } catch (error) {
        response.send(error);
    }
};
//UPDATE TIN TUC
exports.edit = async(request, response) => {
    try {
        var result = await Tintuc.update({ _id: request.params.id }, { $set: request.body }).exec();
        var tt = await Tintuc.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Tin tuc successfully',
            Tintuc: tt
        });
    } catch (error) {
        response.send(error);
    }
}

//REMOVE TIN TUC
exports.remove = async(request, response) => {
    try {
        var result = await Tintuc.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Tin tuc is removed"
        });
    } catch (error) {
        response.send(error);
    }
};