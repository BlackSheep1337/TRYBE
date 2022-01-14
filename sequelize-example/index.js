const express = require('express');

const { getAll, findById, create } = require('./src/services/Store');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', getAll);

app.get('/:id', findById);

app.post('/', create);

app.get('/ping', (_req, res) => {
    return res.status(200).json({ message: 'pong!' });
});

app.use(express.json());

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));