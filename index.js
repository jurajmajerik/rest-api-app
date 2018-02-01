const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function() {
  console.log("Listening...");
});
