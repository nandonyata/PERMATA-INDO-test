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
}

module.exports = Users;
