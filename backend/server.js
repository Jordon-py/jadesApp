const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 6900;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Jades Brow Beauty API Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
