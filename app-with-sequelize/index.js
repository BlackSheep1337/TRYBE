const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const userController = require('./controllers/userController');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));