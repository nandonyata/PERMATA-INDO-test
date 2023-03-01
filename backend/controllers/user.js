const { ObjectId } = require('mongodb');
const { getDB, connect } = require('../config/mongodb');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
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

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: 'empty' };

      const data = await User.login({ email, password });
      if (!data) throw { name: 'invalid' };

      const valid = comparePassword(password, data.password);
      if (!valid) throw { name: 'invalid' };

      const access_token = signToken({ _id: data._id });

      res.status(200).json({ access_token });
    } catch (error) {
      if (error.name == 'invalid') {
        res.status(401).json({ message: 'Invalid email/password' });
        return;
      }

      if (error.name == 'empty') {
        res.status(400).json({ message: 'Email/password cannot be empty' });
        return;
      }

      res.status(500).json({ message: 'Internal server error', error });
    }
  }
}

module.exports = Controllers;
