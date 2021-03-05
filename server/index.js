const express = require('express');
const app = express();
const cors=require('cors');
const fs = require('fs');
const itineraries = require('./itineraries/index');
app.use(cors());
app.use(express.static(__dirname));


app.use(express.urlencoded({ extended: false }))
  .use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/itineraries',cors(),itineraries.getItineraries);
app.get('/itineraries',(req, res) => {
  let rawdata = fs.readFileSync('flights.json');
  let data = JSON.parse(rawdata);
  console.log(data.itineraries);
  res.send({"status": "success", "data": data.itineraries})
});

app.listen(process.env.PORT || 4000, function(){
  console.log('Your node js server is running');
});
