const express = require('express');

const { Store } = require('./models');

require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    Store.findAll().then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).json({ message: 'Data not found' });
    })
});

app.get('/ping', (_req, res) => {
    return res.status(200).json({ message: 'pong!' });
});

app.use(express.json());

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));