const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const html = `<h2>IT WORKS!</h2>`;

app.get('', (_req, res) => {
  res.status(200).send(html);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));