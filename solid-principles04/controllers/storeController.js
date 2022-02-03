const express = require('express');

const { Store } = require('../models');

const router = express.Router();

router.get('/store', async (req, res) => {
  try {
    const stores = await Store.findAll();

    return res.status(200).json(stores);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ mesasge: 'There is something wrong '});
  }
});

module.exports = router;