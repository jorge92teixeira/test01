const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    jwt.sign(
      {  },
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (error, token) => {
        if (error) throw error;
        return res.json({ token });
      },
    );
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;