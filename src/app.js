const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
const main = require('./routes/main');
app.use('/', main);

app.listen(port, () => console.log('listening on 3000'));