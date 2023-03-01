const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { connect, getDB } = require('./config/mongodb');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes'));

connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
