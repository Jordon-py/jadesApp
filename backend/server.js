const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));
	
app.get('/', (req, res) => {
	console.log('GET request received at /');
	console.log('Request Headers:', req.headers);
	console.log('Request Body:', req.body);
	console.log('Request Query:', req.query);
	res.send('Hello World!');
});

// Handle unmatched routes by serving the frontend index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});