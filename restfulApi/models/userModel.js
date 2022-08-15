const mongoose = require('mongoose');
const router = require('../router/userRouter');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    isim: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 50
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    sifre: {
        type: String,
        required: true,
        trim: true
    }
}, {collection: 'kullanicilar', timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;