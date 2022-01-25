const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const html = `<h1>IT WORKS!</h1>`;


app.get('/', (_req, res) => {
  res.send(html);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));