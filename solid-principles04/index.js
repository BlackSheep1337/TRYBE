const express = require('express');

const storeController = require('./controllers/storeController');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(storeController);


app.listen(PORT, () => console.log(`App listening on port:${PORT}`));