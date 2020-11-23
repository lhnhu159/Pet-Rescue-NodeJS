const { response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../User/user');
const bcrypt = require('bcryptjs');

//REGISTER
exports.register = async(request, response) => {
    try {
        const user = new User(request.body);
        const result = await user.save();
        response.json({
            success: true,
            message: "Create user successfully",
            user: result
        })
    } catch (error) {
        response.send(error);
    }
}

//LOGIN
exports.login = async(request, response) => {
    try {
        const user = await User.findOne({ email: request.body.email }).exec();
        if (!user) {
            return response.send('Email is wrong');
        }
        const password = request.body.password;
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return response.send('Password is wrong');
        }
        const token = jwt.sign({ user: user }, 'secretkey', { expiresIn: '1d' });
        await User.update({ _id: user._id }, { $set: { token: token } }).exec();
        response.json({
            token: token
        });
    } catch (error) {
        response.send(error);
    }
}

//GET USER
exports.getUser = async(request, response) => {
        try {
            var user = await User.findById(request.params.id).exec();
            response.send(user);
        } catch (error) {
            response.send(error);
        }
    }
    //-----------------GET LIST USER--------------------------//
exports.getlistUser = async(request, response) => {
    try {
        var user = await User.find().exec();
        response.send(user);
    } catch (error) {
        response.send(error);
    }
}

//-----EDIT---------//
exports.edit = async(request, response) => {
    try {
        if (!request.file) {
            await User.update({ _id: request.params.id }, { $set: request.body }).exec();
            const user = await User.findById(request.params.id).exec();
            return response.json({
                user: user,
            });
        }
        var url = `http://127.0.0.1:5959/uploads/${request.file.filename}`;
        await User.update({ _id: request.params.id }, { $set: request.body, hinhanh: url }).exec();
        const user = await User.findById(request.params.id).exec();
        return response.json({
            user: user,
        });
    } catch (error) {
        response.json(error);
    }
}

//LOGOUT
exports.logout = async(request, response) => {
    try {
        const user = request.user;
        //jwt.destroy(user.token);
        await User.update({ _id: user._id }, { $unset: { token: 1 } }).exec();
        response.json({
            success: true,
            message: 'User is logged out'
        })

    } catch (error) {
        response.send(error);
    }
}