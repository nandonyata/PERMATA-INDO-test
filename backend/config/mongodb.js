const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    await client.connect();
    console.log('mongodb connected');
    db = client.db('todo-app');
    // const user = db.collection('user');

    // const data = await user.find().toArray();

    // console.log(data);
  } catch (error) {
    await client.close();
  }
}

function getDB() {
  return db;
}

// userCollection().catch(console.dir);

module.exports = {
  connect,
  getDB,
};
