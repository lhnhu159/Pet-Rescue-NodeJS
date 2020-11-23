const { response } = require('express');
const Giohang = require('./giohang.model');
//GET LIST GIO HANG
exports.getlist = async(request, response) => {
    try {
        var gh = await Giohang.find().exec();
        response.send(gh);
    } catch (error) {
        response.send(error);
    }
};

//GET GIO HANG BY ID
exports.giohangbyId = async(request, response) => {
    try {
        var gh = await Giohang.findById(request.params.id).exec();
        response.send(gh);
    } catch (error) {
        response.send(error);
    }
};

// GET DON HANG DETAILS
exports.donhangdetails = async(request, response) => {
    try {
        var ct = await Giohang.find({ dh_id: request.body.dh_id }).exec();
        response.send(ct);
    } catch (error) {
        response.send(error);
    }
}

//GET GIO HANG BY USERS
exports.giohangbyuser = async(request, response) => {
    try {
        var gh = await Giohang.find({ tk_id: request.body.tk_id }).exec();
        response.send(gh);
    } catch (error) {
        response.send(error);
    }
}

//GET MY GIO HANG By DON HANG
exports.mygiohang = async(request, response) => {
    try {
        var gh = await Giohang.find({ tk_id: request.body.tk_id, dh_id: request.body.dh_id }).exec();
        response.send(gh);
    } catch (error) {
        response.json(error);
    }
}

//CREATE GIO HANG
exports.create = async(request, response) => {
    try {
        var gh = new Giohang(request.body);
        var result = await gh.save();
        response.json({
            success: true,
            message: 'Add product to cart successfully',
            giohang: gh
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE GIO HANG
exports.edit = async(request, response) => {
    try {
        var result = await Giohang.update({ _id: request.params.id }, { $set: request.body }).exec();
        var gh = await Giohang.findById(request.params.id).exec();
        response.json({
            success: true,
            message: 'Update product to cart successfully',
            giohang: gh,
            result: result
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE GIO HANG
exports.remove = async(request, response) => {
    try {
        var result = await Giohang.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "Gio hang is removed"
        });
    } catch (error) {
        response.send(error);
    }
};