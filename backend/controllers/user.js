const { ObjectId } = require('mongodb');
const { getDB, connect } = require('../config/mongodb');
const { hashPassword } = require('../helpers/bcrypt');
const User = require('../models/user');

class Controllers {
  static async findAll(req, res) {
    try {
      const data = await User.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }

  static async register(req, res) {
    try {
      const { username, email, password, phoneNumber, name } = req.body;
      const newPassword = hashPassword(password);

      await User.register({ username, email, password: newPassword, phoneNumber, name });

      res.status(201).json({ message: 'Success create new user' });
    } catch (error) {
      //   console.log(error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  }
}

module.exports = Controllers;
