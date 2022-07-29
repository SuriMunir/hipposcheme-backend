const express = require('express');
const app = express();
const PORT = 6000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const memberRoute = require('./routes/member');

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

app.use('/api/members', memberRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
