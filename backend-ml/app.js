var express = require('express');
var cors = require('cors');
var request = require('request');

const app = express();
app.use(cors())

//
const port = 8000;
const mercadoAPIBaseURL = "https://api.mercadolibre.com";
const itemsLimit = 4;

app.listen(port, function () {
  console.log('Mercado Libre app listening on port: ' + port);
});

function getCategories(results){
  const {filters, available_filters} = results;

  let filterValues;

  if(filters && filters.length > 0){
     filterValues = filters;
  }
  else {
     if(available_filters && available_filters.length > 0)
        filterValues = available_filters;
  }

  const categoryFilters = filterValues.filter(f => f.id === "category");
  const categorias = categoryFilters[0].values.map(c => c.name);

  return categorias;
}

function mapItem(item){
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: 1 // TBD
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  };
}

function getItems(results, limit){
  const initialItems = results.results.slice(0, limit); // Get first n elements from array.
  const mappedItems = initialItems.map(i => mapItem(i));
  return mappedItems;
}

// Items controller.
app.get('/api/items', function (req, res) {
  const searchValue = encodeURIComponent(req.query.q);
  const endpoint =  `/sites/MLA/search?q=${searchValue}`;
  const getItemsURL = mercadoAPIBaseURL + endpoint;

  // Console logging.
  console.log('/api/items');
  //console.log(getItemsURL);
  //console.log(endpoint);
  //console.log(searchValue);
  request.get(getItemsURL, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        const parsedResults = JSON.parse(body);
        const categories = getCategories(parsedResults);
        const items = getItems(parsedResults, itemsLimit);
        const author = {
          name: "Federico",
          lastname: "Caminiti"
        };

        var response = {
          author: author,
          categories: categories,
          items: items
        }

        res.json(response);
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
