const Task = require('../models/task');

class Controllers {
  static async findAll(req, res) {
    try {
      const data = await Task.findAll(req.user._id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }

  static async addTask(req, res) {
    try {
      const { name, CategoryId } = req.body;

      await Task.addTask({ name, CategoryId, UserId: req.user._id });

      res.status(201).json({ message: 'Success create new task' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }

  static async updateTask(req, res) {
    try {
      const { id } = req.params;

      await Task.updateTask(id);

      res.status(200).json({ message: 'Succes update task' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await Task.deleteById(id);

      res.status(200).json({ message: 'Success delete task' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }
}

module.exports = Controllers;
