const axios = require('axios');

const express = require("express"),
  path = require("path"),
  app = express(),
  puerto = 3001;


app.get('/api/items', async (peticion, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const query = peticion.query.q;
  try {
    const result = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const items = [];
    result.data.results.slice(0, 4).forEach(item => {
      items.push({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      })
    });
    res.json({ categories: ['Electronica, Audio y Video', 'iPod', 'Reproductores', 'iPod touch', '32 GB'], items: items });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos');
  }
});

app.get('/api/items/:id', async (peticion, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = peticion.params.id;
  let data = {};
  try {
    const result = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    data = {
      id: result.data.id,
      title: result.data.title,
      price: {
        currency: result.data.currency_id,
        amount: result.data.price,
        decimals: '00'
      },
      picture: result.data.pictures[0].url,
      condition: result.data.condition,
      sold_quantity: 234,
      free_shipping: result.data.shipping.free_shipping,
    };
    const description = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    data.description = description.data.plain_text;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos');
  }
});

app.listen(puerto, err => {
  if (err) {
    console.error("Error escuchando: ", err);
    return;
  }
  console.log(`Escuchando en el puerto :${puerto}`);
});