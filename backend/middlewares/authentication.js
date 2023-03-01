const { verifyToken } = require('../helpers/jwt');
const User = require('../models/user');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: 'invalid_token' };

    const payload = verifyToken(access_token);
    const id = payload._id;

    const data = await User.findById(id);

    if (!data) throw { name: 'invalid_token' };

    req.user = {
      _id: data._id,
    };

    next();
  } catch (error) {
    // console.log(error);
    if (error.name == 'invalid_token' || error.name == 'JsonWebTokenError') {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    res.status(500).json({ message: 'Internal server error', error });
  }
};

module.exports = authentication;
