const express = require('express');
const router = express.Router();
const Sentence = require('../models/Sentence'); // Sentence 모델 불러오기

// 문장 저장 라우트
router.post('/sentence', async (req, res) => {
    const { title, author, sentence, category } = req.body;

    try {
        let existingSentence = await Sentence.findOne({ sentence });
        if (existingSentence) {
            return res.status(400).json({ msg: 'Number already exists' });
        }

        const newSentence = new Sentence({
            title,
            author,
            sentence,
            category
        });

        await newSentence.save();
        res.json(newSentence);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// 모든 문장 불러오기
router.get('/sentences', async (req, res) => {
    try {
        const sentences = await Sentence.find();
        res.json(sentences);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// 특정 문장 불러오기
router.get('/sentence/:number', async (req, res) => {
    try {
        const sentence = await Sentence.findOne({ number: req.params.number });
        if (!sentence) {
            return res.status(404).json({ msg: 'Sentence not found' });
        }
        res.json(sentence);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
