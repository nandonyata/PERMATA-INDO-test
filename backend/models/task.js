const { ObjectId } = require('mongodb');
const { getDB } = require('../config/mongodb');

class Task {
  static model() {
    return getDB().collection('tasks');
  }

  static async findAll(id) {
    return await this.model().find({ UserId: id }).toArray();
  }

  static async findAllQuery(id, categoryName) {
    return await this.model().find({ UserId: id, categoryName }).toArray();
  }

  static async addTask({ name, UserId, CategoryId, categoryName }) {
    await this.model().insertOne({ name, UserId, CategoryId, categoryName, isDone: false });
    return;
  }

  static async updateTask(id) {
    return await this.model().updateOne({ _id: new ObjectId(id) }, { $set: { isDone: true } });
  }

  static async deleteById(id) {
    return await this.model().deleteOne({ _id: new ObjectId(id) });
  }
}

module.exports = Task;
