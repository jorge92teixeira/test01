const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Get token from header
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    req.token = authorization.substring(7);
  } else {
    req.token = null;
  }

  // Check if no token
  if (!req.token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(req.token, process.env.JWT_SECRET);
    req.user = decoded.user;
    return next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};
