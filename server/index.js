const express = require('express')
const cors = require('cors')
const { getDataFromJson, fetchFromGql } = require('./serverUtils')

const app = express()
const port = 8080
var json = getDataFromJson('flights.json');

app.use(cors())

app.get('/itineraries', (req, res) => {
  res.send(json.itineraries)
})

app.get('/legs', (req, res) => {
  res.send(json.legs)
})

app.get('/itinerary/:id', async (req, res)=> {
  var query = `query getSingleItinerary($id: String) {
    itinerary(id: $id) {
        id
        legs
        price
        agent
        agent_rating
    }
}`;
  var data = await fetchFromGql(query, {id: req.params.id})
  res.send(data.itinerary)
})

app.get('/leg/:id', async (req, res)=> {
  var query = `query getSingleLeg($id: String) {
    leg(id: $id) {
      id
      departure_airport
      arrival_airport
      departure_time
      arrival_time
      stops
      airline_name
      airline_id
      duration_mins
    }
}`;
  var data = await fetchFromGql(query, {id: req.params.id})
  res.send(data.leg)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})