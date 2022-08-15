const express = require('express');
require('./db/dbConnection');
const hataMiddleware = require('./middleware/hataMiddleware');

// Routes
const userRouter = require('./router/userRouter')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.status(200).json({'mesaj': 'hoşgeldiniz'});
});

app.post('/users', (req, res) => {
    res.status(200).json(req.body);
});

app.use(hataMiddleware);

app.listen(3000, () => {
    console.log("3000 portundan server ayaklandırıldı");
});