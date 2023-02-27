const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { connect, getDB } = require('./config/mongodb');
const userControllers = require('./controllers/user');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/users', userControllers.findAll);
app.post('/users', userControllers.register);

connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
