const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', async (req, res) => {
  const { fullName, admissionNumber, password } = req.body;
  const user = new User({ fullName, admissionNumber, password });
  await user.save();
  res.send('User saved!');
});

app.listen(3000, () => console.log('Server running'));
