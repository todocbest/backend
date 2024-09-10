const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(v);
            },
            message: props => `${props.value}는 유효한 비밀번호가 아닙니다! 비밀번호는 8글자 이상이어야 하며, 대문자, 소문자, 특수문자를 포함해야 합니다.`
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10,11}$/.test(v);
            },
            message: props => `${props.value}는 유효한 전화번호가 아닙니다!`
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
