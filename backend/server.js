const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'sup!' });
});

app.listen(MONGO_PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${MONGO_PORT}`);
});
