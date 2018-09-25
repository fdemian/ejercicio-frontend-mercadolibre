# Items

Consultar un item en particular se hace sobre el siguiente endpoint:

    /api/items/​:id

| Parámetro | Valor |
|------------|-------------|
| `id` | Id del item |

Respuesta:

  {
    "author": {
      "name": String,
      "lastname": String
    },
    "item": {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number,
      },
      "picture": String,
      "condition": String,
      "free_shipping": Boolean,
      "sold_quantity": Number,
      "description": String
    }
  }


La API consulta los siguientes endpoints para obtener un item y su descripción:

    https://api.mercadolibre.com/items/​:id
    https://api.mercadolibre.com/items/​:id​/description
