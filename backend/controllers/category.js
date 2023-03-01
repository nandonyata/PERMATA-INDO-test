const { ObjectId } = require('mongodb');
const Category = require('../models/category');

class Controllers {
  static async findAll(req, res) {
    try {
      const data = await Category.findAll(req.user._id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  }

  static async addCategory(req, res) {
    try {
      const { name } = req.body;

      await Category.addCategory({ name, UserId: req.user._id });

      res.status(201).json({ message: 'Success add new category' });
    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  }
}

module.exports = Controllers;
