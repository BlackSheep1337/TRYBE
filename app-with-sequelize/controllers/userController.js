const express = require('express');
const { User } = require('../models');
const router = express.Router();


router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'There is something wrong' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'User not found'});

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'There is something wrong' });
  }
});

router.get('/search/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;

    const user = await User.findOne({ where: { id, email }});

    if (!user) return res.status(404).json({ message: 'User not found '});

    return res.status(200).json(user);
  } catch (error) {
    console.log(e.message);
    return res.status(500).json({ message: 'There is something wrong' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });
    
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(e.message);
    return res.status(500).json({ message: 'There is something wrong' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const [updatedUser] = await User.update(
      { fullName, email },
      { where: { id } },
    );

    console.log(updatedUser);
    
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ message: 'User successfully updated'});
  } catch (error) {
    console.log(e.message);
    return res.status(500).json({ message: 'There is something wrong' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.destroy({ where: { id } });

    console.log(deletedUser);

    return res.status(200).json({ message: 'user sucessfully deleted '});
  } catch (error) {
    
  }
});


module.exports = router;