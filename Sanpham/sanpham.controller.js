const { response } = require('express');
const Sanpham = require('./sanpham.model');

//GET LIST SAN PHAM
exports.getlist = async(request, response) => {
    try {
        var sp = await Sanpham.find().exec();
        response.send(sp);
    } catch (error) {
        response.send(error);
    }
};

//GET SAN PHAM BY ID
exports.sanphambyId = async(request, response) => {
    try {
        var sp = await Sanpham.findById(request.params.id).exec();
        response.send(sp);
    } catch (error) {
        response.send(error);
    }
};

//GET SAN PHAM BY DANH MUC
exports.sanphambyDanhmuc = async(request, response) => {
        try {
            var sp = await Sanpham.find({ dm_id: request.body.dm_id }).exec();
            response.send(sp);
        } catch (error) {
            response.send(error);
        }
    }
    //-----------------FIND SAN PHAM------------------
exports.findSanpham = async(request, response) => {
    try {
        var sp = await Sanpham.find(request.body).exec();
        response.send(sp);
    } catch (error) {
        response.send(error);
    }
}

//CREATE SAN PHAM
exports.create = async(request, response) => {
    try {
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        var sp = new Sanpham(request.body);
        sp.sp_hinhanh = url;
        sp.sp_ngaytao = Date.now();
        var result = await sp.save();
        response.json({
            success: true,
            message: 'Create sanpham successfully',
            sanpham: result
        });
    } catch (error) {
        response.send(error);
    }
};

//UPDATE SAN PHAM
exports.edit = async(request, response) => {
    try {
        if (!request.file) {
            var result = await Sanpham.update({ _id: request.params.id }, { $set: request.body }).exec();
            var sp = await Sanpham.findById(request.params.id).exec();
            return response.json({
                success: true,
                message: 'Edit san pham successfully',
                sanpham: sp
            });
        }
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        var result = await Sanpham.update({ _id: request.params.id }, { $set: request.body, sp_hinhanh: url }).exec();
        var sp = await Sanpham.findById(request.params.id).exec();
        return response.json({
            success: true,
            message: 'Edit san pham successfully',
            sanpham: sp
        });
    } catch (error) {
        response.send(error);
    }
}

//DELETE SANPHAM
exports.remove = async(request, response) => {
    try {
        var result = await Sanpham.deleteOne({ _id: request.params.id });
        response.json({
            success: true,
            message: "San pham is removed"
        });
    } catch (error) {
        response.send(error);
    }
};