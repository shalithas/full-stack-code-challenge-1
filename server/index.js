const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const DB = require("../flights");

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/itineraries', (req, res) => {
  res.send(DB.itineraries)
});

app.get('/legs', (req, res) => {
  res.send(DB.legs)
});

app.get('/itineraries/:id', (req, res) => {
  const data = DB.itineraries.find(item => item.id === req.params.id);
  res.send(data)
});

app.get('/legs/:id', (req, res) => {
  const data = DB.legs.find(item => item.id === req.params.id);
  res.send(data)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
