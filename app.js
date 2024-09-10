// app.js
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// MongoDB 연결
connectDB();

// Express 미들웨어 설정
app.use(express.json({ extended: false }));

// 라우트 설정
app.use('/api/auth', require('./routes/auth'));

// 새로운 문장 라우트 연결
app.use('/api', require('./routes/sentence'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
