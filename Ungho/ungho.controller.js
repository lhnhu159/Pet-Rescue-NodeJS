const { response } = require('express');
const Ungho = require('./ungho.model');
//GET LIST UNG HO
exports.getlist = async(request, response) => {
    try {
        var uh = await Ungho.find().exec();
        response.send(uh);
    } catch (error) {
        response.send(error);
    }
};

//GET UNG HO BY ID
exports.unghobyId = async(request, response) => {
    try {
        var uh = await Ungho.findById(request.params.id).exec();
        response.send(uh);
    } catch (error) {
        response.send(error);
    }
};


//CREATE UNG HO
exports.create = async(request, response) => {
    try {
        var uh = new Ungho(request.body);
        if (uh.ngay == null) {
            uh.ngay = Date.now();
        }
        var result = await uh.save();
        response.json({
            success: true,
            message: 'Create Ung ho successfully',
            ungho: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE UNG HO
exports.edit = async(request, response) => {
    try {
        var result = await Ungho.update({ _id: request.params.id }, { $set: request.body }).exec();
        var uh = await Ungho.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Edit Ung ho successfully',
            ungho: uh
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE UNG HO
exports.remove = async(request, response) => {
    try {
        var result = await Ungho.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Ung ho is removed"
        });
    } catch (error) {
        response.send(error);
    }
};