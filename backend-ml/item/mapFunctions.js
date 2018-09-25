const utils = require('../utils');

const splitPrice = utils.splitPrice;

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
  const categorias = categoryFilters[0].values;

  return categorias;
}

function mapItem(item){
  const splittedPrice = splitPrice(item.price);
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: splittedPrice.integerPart,
      decimals: splittedPrice.decimalPart
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

module.exports = {
  getCategories: getCategories,
  mapItem: mapItem,
  getItems: getItems
}
