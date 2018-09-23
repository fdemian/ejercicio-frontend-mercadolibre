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
  var searchValue = req.query.q;
  var getItemsURL = mercadoAPIBaseURL + "/sites/MLA/search?q=" + searchValue;
  console.log('/api/items');
  console.log(getItemsURL);

  request.get(getItemsURL, function(error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
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
  var id = req.params.id;
  var getItemURL = mercadoAPIBaseURL + "/items/​" + id;
  var getItemDescriptionURL = getItemURL + "/description";

  console.log("GET ITEM: " + getItemURL);
  console.log("GET ITEM DESCRIPTION: " + getItemDescriptionURL);

  // For now, this controller echoes back the parameters sent.
  res.json({val: id});
});
