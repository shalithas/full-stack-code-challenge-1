const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express()
const port = 8080

const flightFilePath = path.join(__dirname, '..', 'flights.json');
console.log(flightFilePath);
const rwFlights = fs.readFileSync(flightFilePath);
let flights = {};

try {
  flights = JSON.parse(rwFlights);
} catch (e) {
  console.error("Failed to parse flights json!");
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/itineraries', (req, res) => {
  res.send(flights.itineraries || []);
})

app.get('/itineraries/:id', (req, res) => {
  const itinerary = flights.itineraries.find(itinerary => itinerary.id === req.params.id);
  if (!itinerary) res.status(404).send("Itineraries with given ID is not found!");

  res.send(itinerary);
})

app.get('/legs', (req, res) => {
  res.send(flights.legs || []);
})

app.get('/legs/:id', (req, res) => {
  const leg = flights.legs.find(leg => leg.id === req.params.id);
  if (!leg) res.status(404).send("Leg with given ID is not found!");

  res.send(leg);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
