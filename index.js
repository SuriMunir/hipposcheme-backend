const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const memberRoute = require('./routes/member');
let cors = require('cors');

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to hipposcheme backend.');
});

app.use('/api/members', memberRoute);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
