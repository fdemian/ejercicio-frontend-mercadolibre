var express = require('express');
var cors = require('cors');
var request = require('request');

// Routes
var itemDetail = require('./itemDetail');
var getItemsFromAPI = require('./items');
var categoryDetail = require('./categoryDetail');

const app = express();
app.use(cors())

const port = 8000;
const mercadoAPIBaseURL = "https://api.mercadolibre.com";
const itemsLimit = 4;

app.listen(port, function () {
  console.log('Mercado Libre app listening on port: ' + port);
});

// Items controller.
app.get('/api/items', getItemsFromAPI);
app.get('/api/items/:id', itemDetail);
app.get('/api/categories/:id', categoryDetail)
