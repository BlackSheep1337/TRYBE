const express = require('express');
require('dotenv');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (_req, res) => {
    return res.status(200).json({ message: 'pong!' });
});

app.use(express.json());

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));