const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Import the User model

// GET: Fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching users' });
  }
});

// POST: Create a new user
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: 'Error creating user: ' + err.message });
  }
});

// GET: Fetch a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error while fetching user' });
  }
});

// PUT: Update a user by ID
router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (name != null) user.name = name;
    if (email != null) user.email = email;
    if (password != null) {
      user.password = password; // This will trigger the pre-save hook to hash the password
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: 'Error updating user: ' + err.message });
  }
});

// DELETE: Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.remove();
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error while deleting user' });
  }
});

module.exports = router;

