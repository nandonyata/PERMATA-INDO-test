const { ObjectId } = require('mongodb');
const { getDB } = require('../config/mongodb');

class Users {
  static model() {
    return getDB().collection('users');
  }

  static async findAll() {
    return await this.model().find().toArray();
  }

  static async register({ username, email, password, phoneNumber, name }) {
    await this.model().insertOne({
      username,
      email,
      password,
      phoneNumber,
      name,
    });
    return;
  }

  static async login({ email }) {
    return await this.model().findOne({ email });
  }

  static async findById(id) {
    return await this.model().findOne({ _id: new ObjectId(id) });
  }
}

module.exports = Users;
