var express = require('express');
var cors = require('cors');
var request = require('request');
var config = require('./config');

// Routes
var itemDetail = require('./itemDetail');
var getItemsFromAPI = require('./items');
var categoryDetail = require('./categoryDetail');

const app = express();
app.use(cors())

app.listen(config.port, function () {
  console.log('Mercado Libre app listening on port: ' + config.port);
});

// Items controller.
app.get('/api/items', getItemsFromAPI);
app.get('/api/items/:id', itemDetail);
app.get('/api/categories/:id', categoryDetail)
