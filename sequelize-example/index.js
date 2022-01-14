const express = require('express');
const bodyParser = require('body-parser');
const { getAll, findById, create } = require('./src/services/Store');
const PORT = process.env.PORT || 3000;

require('dotenv').config();
const app = express();
app.use(bodyParser.json());



app.use(express.json());

app.get('/', getAll);

app.get('/:id', findById);

app.post('/', create);

app.get('/ping', (_req, res) => {
    return res.status(200).json({ message: 'pong!' });
});


app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));