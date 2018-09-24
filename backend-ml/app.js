var express = require('express');
var cors = require('cors')
var request = require('request');

var app = express();
app.use(cors())

var port = 8000;
var mercadoAPIBaseURL = "https://api.mercadolibre.com";

app.listen(port, function () {
  console.log('Mercado Libre app listening on port: ' + port);
});

// Items controller.
app.get('/api/items', function (req, res) {
  var searchValue = encodeURIComponent(req.query.q);
  var endpoint =  `/sites/MLA/search?q=${searchValue}`;
  var getItemsURL = mercadoAPIBaseURL + endpoint;

  // Console logging.
  console.log('/api/items');

  request.get(getItemsURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        // Ok.
        res.json(body);
      }
      else {
        // Error
       res.send(body);
      }
  })

});

app.get('/api/items/:id', function (req, res) {
  var id = encodeURIComponent(req.params.id);
  var getItemURL = mercadoAPIBaseURL + "/items/​" + "MLA650523389"; // Replace for actual id.
  var getItemDescriptionURL = getItemURL + "/description";

  console.log('/api/items/' + 1);

  request.get(getItemURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(body);
      }
      else {
       console.log(body);
       res.send(body);
      }
  })

});
