const { ObjectId } = require('mongodb');
const { getDB } = require('../config/mongodb');

class Category {
  static model() {
    return getDB().collection('categories');
  }

  static async findAll(id) {
    return await this.model().find({ UserId: id }).toArray();
  }

  static async addCategory({ name, UserId }) {
    await this.model().insertOne({
      name,
      UserId,
    });
    return;
  }

  static async findById(id) {
    return await this.model().findOne({ _id: new ObjectId(id) });
  }
}

module.exports = Category;
