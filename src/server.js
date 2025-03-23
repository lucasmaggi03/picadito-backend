const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const locationRoutes = require('./routes/location-routes');
const complexRoutes = require('./routes/ftb-complex-routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

const port = 5000;

//Routes
app.use('/', locationRoutes)
app.use('/', complexRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});