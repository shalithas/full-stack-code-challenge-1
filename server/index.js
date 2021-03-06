const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const itinerary = require('./itineraries/index');
const legs = require('./legs/index');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/getitineraries', itinerary.getItineraries);
app.get('/leg', legs.getLeg);

app.listen(4000, function () {
  console.log('Your node js server is running');
});
