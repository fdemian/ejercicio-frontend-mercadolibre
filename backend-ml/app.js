var express = require('express');
var cors = require('cors');
var request = require('request');
var config = require('./config');

var categories = require('./category/categories');
var items = require('./item/items');

const app = express();
app.use(cors())

app.listen(config.port, function () {
  console.log('Mercado Libre app listening on port: ' + config.port);
});

// Application routes.
app.use('/api/items', items);
app.use('/api/categories', categories)
