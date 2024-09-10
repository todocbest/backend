const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// 필사 문장 스키마 정의
const SentenceSchema = new mongoose.Schema({
    number: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    sentence: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

// number 필드를 자동으로 증가시키도록 설정
SentenceSchema.plugin(AutoIncrement, { inc_field: 'number' });

module.exports = mongoose.model('Sentence', SentenceSchema);
