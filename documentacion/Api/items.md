# Items

Consultar un item en particular se hace sobre el siguiente endpoint:

    /api/items?q=​:query

| Parámetro | Valor |
|------------|-------------|
| `query` | El valor de busqueda de un item dado |

Respuesta:

    {
      "mainCategory": String,
      "author": {
        "name": String
        "lastname": String
      },
      categories: [String, String, String, ...],
      items: [{
        "id": String,
        "title": String,
        "price": {
           "currency": String,
           "amount": Number,
           "decimals": Number
        },
        "picture": String,
        "condition": String,
        "free_shipping": Boolean
      },
      {...},
      {...},
      {...}
      ]
    }

La API consultada internamente para este endpoint corresponde a la API de search de mercadolibre y dicha búsqueda se traduce en la siguiente URL:

    https://api.mercadolibre.com/sites/MLA/search?q=​:query
